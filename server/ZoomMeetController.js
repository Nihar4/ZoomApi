import { ExecuteQuery } from "./utils/ExecuteQuery.js";
import axios from 'axios';
import dotenv from 'dotenv';
import { sendEmail } from "./utils/sendEmail.js";
import { generateZoomMeetingDetailsHTML } from "./utils/templet.js";

dotenv.config();


const GetCredentials = async () => {
    const sql = "SELECT * FROM zoom_key where code = ?";
    try {
        const result = await ExecuteQuery(sql, 'laI2qKSancmjqUc0BUeRvKTTmJFE_F0Lw');
        return result[0];
    } catch (err) {
        console.error("Error inside server:", err.message);
        throw new Error("Error inside server");
    }
}

async function resetCredentials(code, reset_token) {
    const url = 'https://zoom.us/oauth/token';

    const headers = {
        Authorization: 'Basic ' + btoa(process.env.CLIENTID + ':' + process.env.CLIENTSECRET),
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const body = {
        refresh_token: reset_token,
        grant_type: "refresh_token",
    };

    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error('Error reset:', error.response ? error.response.data : error.message);
    }
}

async function createZoomMeeting(token, agenda) {
    const url = 'https://api.zoom.us/v2/users/me/meetings';

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    const body = {
        agenda: agenda,
        password: "1234"
    };

    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error('Error creating Zoom meeting:', error.response ? error.response.data : error.message);
        throw new Error('Failed to create Zoom meeting');
    }
}

export const createMeetController = async (req, res, next) => {
    try {
        const { classId, className, teacherEmail, studentEmails } = req.body;
        console.log(classId, className, teacherEmail, studentEmails);

        const { code, token, reset_token } = await GetCredentials();
        const { access_token } = await resetCredentials(code, reset_token);

        const data = await createZoomMeeting(access_token, "className")
        console.log(data);

        sendEmail(teacherEmail, "Teachers Meet Details", "", generateZoomMeetingDetailsHTML(data.id, data.password, data.topic, new Date(data.start_time), data.start_url))
        sendEmail(studentEmails, "Student Meet Details", "", generateZoomMeetingDetailsHTML(data.id, data.password, data.topic, new Date(data.start_time), data.join_url))

        return res.json({ error: false, message: `Data successfully retrieved`, data: data });
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
}

export const AnnonceMeet = async (req, res, next) => {
    try {
        const { classId, announceMessage, teacherEmail, studentEmails } = req.body;
        console.log(classId, announceMessage, teacherEmail, studentEmails);

        sendEmail(teacherEmail, "Teachers Annonce Message", announceMessage)
        sendEmail(studentEmails, "Student Annonce Message", announceMessage)

        return res.json({ error: false, message: `Data successfully retrieved` });
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
}