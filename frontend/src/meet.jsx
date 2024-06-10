import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

let teacherEmail = null;
let studentEmails = [];

function Meet() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessageInput, setShowMessageInput] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [announceMessage, setAnnounceMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://localhost:8081/meettclass/${id}`
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (classId, className) => {
    const confirmed = window.confirm(
      "Are you sure you want to create this meet?"
    );
    if (confirmed) {
      console.log(`Meet created for class ID: ${classId}`);
      try {
        const response = await axios.get(
          `http://localhost:8081/classesStudentR/${classId}`
        );
        console.log(response.data);
        setLoading(false);

        // Set global variables
        teacherEmail = response.data[0].ADMINE_EMAIL;
        studentEmails = response.data.map((student) => student.STUDENT_MAIL);

        // Update state
        setAnnounceMessage("");
        setShowMessageInput((prevState) => ({
          ...prevState,
          [classId]: false,
        }));

        axios
          .post("http://localhost:8081/create-meet", {
            classId: classId,
            className: className,
            teacherEmail: teacherEmail,
            studentEmails: studentEmails,
          })
          .then((response) => {
            console.log("Meeting created successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error creating meeting:", error);
          });
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching additional data");
        setLoading(false);
      }
    }
    console.log(teacherEmail);
    console.log(studentEmails);

    //creat meet from teacherEmail and share link with studentEmails
  };

  const handleSubmitAnn = async (classId) => {
    const confirmed = window.confirm(
      `Are you sure you want to send this announcement?\nMessage: ${announceMessage}`
    );
    if (confirmed) {
      console.log(
        `Announced for class ID: ${classId} with message: ${announceMessage}`
      );
      // Add your announcement logic here
      try {
        const response = await axios.get(
          `http://localhost:8081/classesStudentR/${classId}`
        );
        console.log(response.data);
        setLoading(false);

        // Set global variables
        teacherEmail = response.data[0].ADMINE_EMAIL;
        studentEmails = response.data.map((student) => student.STUDENT_MAIL);

        // Update state
        setAnnounceMessage("");
        setShowMessageInput((prevState) => ({
          ...prevState,
          [classId]: false,
        }));

        axios
          .post("http://localhost:8081/announce-msg", {
            classId: classId,
            announceMessage: announceMessage,
            teacherEmail: teacherEmail,
            studentEmails: studentEmails,
          })
          .then((response) => {
            console.log("Meeting created successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error creating meeting:", error);
          });
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching additional data");
        setLoading(false);
      }

      console.log(
        `Announced for class ID: ${classId} with message: ${announceMessage} `
      );
      console.log(teacherEmail);
      console.log(studentEmails);

      //code to seend announceMessage from teacherEmail to studentEmails
    }
  };

  const handleAnnounceClick = (classId) => {
    setShowMessageInput((prevState) => ({
      ...prevState,
      [classId]: true,
    }));
  };

  // Return statement
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      Hello, World!
      <section className="pt-4">
        <div className="container px-lg-4">
          <div className="row gx-lg-5">
            {data &&
              data.map((classData, index) => (
                <div key={index} className="col-lg-4 col-xxl-4 mb-5">
                  <div
                    className="card bg-body-secondary border border-secondary h-100"
                    style={{ transition: "background-color 0.3s" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.classList.add("bg-primary-subtle");
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.classList.remove("bg-primary-subtle");
                    }}
                  >
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i className="bi bi-collection"></i>
                      </div>
                      <h1 className="fs-10 text-body-emphasis">
                        {classData.CLASS_NAME}
                      </h1>
                      <h3 className="mb-0 text-primary-emphasis mt-n1">
                        Create meet for this class
                      </h3>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() =>
                          handleSubmit(classData.CLASS_ID, classData.CLASS_NAME)
                        }
                      >
                        Create Meet
                      </button>
                      <button
                        className="btn btn-secondary mt-3"
                        onClick={() => handleAnnounceClick(classData.CLASS_ID)}
                      >
                        Announce Meet
                      </button>
                      {showMessageInput[classData.CLASS_ID] && (
                        <div className="mt-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your message"
                            value={announceMessage}
                            onChange={(e) => setAnnounceMessage(e.target.value)}
                            style={{
                              marginRight: "10px",
                              padding: "5px",
                              borderRadius: "5px",
                              border: "1px solid #ccc",
                            }}
                          />
                          <button
                            className="btn btn-success mt-2"
                            onClick={() => handleSubmitAnn(classData.CLASS_ID)}
                            style={{
                              padding: "5px 10px",
                              borderRadius: "5px",
                              backgroundColor: "#007bff",
                              color: "#fff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Meet;
