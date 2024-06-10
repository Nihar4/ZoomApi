import express from "express";
import cors from "cors";
import mysql from "mysql";
import { connectDB, db } from "./database.js";
import { AnnonceMeet, createMeetController } from "./ZoomMeetController.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Define a GET route on the root path
app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" }); // Standardize the key to lowercase
    }
    // console.log(result)
    return res.json(result);
  });
});

app.get("/studentnote/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT * FROM class natural join associatedwith natural join student WHERE class.CLASS_ID = ?";
  const values = [id]; // Array of values to replace placeholders in the SQL query

  console.log("i am here");
  console.log("Received id:", id);
  console.log("SQL Query:", sql);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.json({ message: "Error inside server" });
    }
    console.log("Query result:", result);
    return res.json(result);
  });
});

// Define routes
app.get("/classesR", (req, res) => {
  const sql = "SELECT * FROM class  ";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.get("/classesRTeacher/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM class WHERE ADMIN_ID = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.post("/classeEdit/:id", (req, res) => {
  const id = req.params.id; // Retrieve id from URL parameters
  console.log("-------------");
  console.log(id);
  console.log(req.body.CLASS_NAME);

  console.log("-------------");
  console.log(req.body);
  const sql =
    "UPDATE class SET CLASS_NAME = ?, student_suport = ?, timining = ?, taming_coure = ? WHERE CLASS_ID = ?";
  const values = [
    req.body.CLASS_NAME,
    req.body.student_suport,
    req.body.timining,
    req.body.taming_coure,
    id, // Use id from URL parameters in WHERE clause
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Student updated successfully:", result);
    return res.status(200).json({ message: "Student updated successfully" });
  });
});

app.get("/classesReadOne/:id", (req, res) => {
  const sql = "SELECT * FROM class WHERE CLASS_ID = ?";
  const id = req.params.id;
  db.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error inside server" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Class not found" });
    }

    return res.json(result[0]);
  });
});

app.get("/readStudent/:id", (req, res) => {
  const sql = "SELECT * FROM student where STUDENT_ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" }); // Standardize the key to lowercase
    }
    return res.json(result);
  });
});

app.get("/readnots/:id", (req, res) => {
  const sql =
    "SELECT * FROM associatedwith natural join class WHERE STUDENT_ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    console.log("the result is", sql);
    console.log("the result is", result);
    return res.json(result);
  });
});

app.post("/studentEdit/:id", (req, res) => {
  const id = req.params.id; // Retrieve id from URL parameters
  console.log(id);
  console.log(req.body);
  const sql =
    "UPDATE student SET STUDENT_NAME = ?, STUDENT_MAIL = ?, STUDENT_PASSWORD = ?, STUDENT_ADDRESS = ?, STUDENT_PHONE = ? WHERE STUDENT_ID = ?";
  const values = [
    req.body.STUDENT_NAME,
    req.body.STUDENT_MAIL,
    req.body.STUDENT_PASSWORD,
    req.body.STUDENT_ADDRESS,
    req.body.STUDENT_PHONE,
    id, // Use id from URL parameters
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Student updated successfully:", result);
    return res.status(200).json({ message: "Student updated successfully" });
  });
});

app.post("/student", (req, res) => {
  console.log(req.body);
  const sql =
    "INSERT INTO student (STUDENT_NAME, STUDENT_MAIL, STUDENT_PASSWORD, STUDENT_ADDRESS, STUDENT_PHONE) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.STUDENT_NAME,
    req.body.STUDENT_MAIL,
    req.body.STUDENT_PASSWORD,
    req.body.STUDENT_ADDRESS,
    req.body.STUDENT_PHONE,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Student inserted successfully:", result);
    return res.status(200).json({ message: "Student registered successfully" });
  });
});

app.delete("/deleteStudent/:id", (req, res) => {
  const id = req.params.id; // Retrieve id from URL parameters
  const sql = "DELETE FROM student WHERE STUDENT_ID = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Student deleted successfully:", result);
    return res.status(200).json({ message: "Student deleted successfully" });
  });
});

// Start the server
app.listen(8081, () => {
  console.log("Server listening on port 8081");
});

app.get("/readteacher", (req, res) => {
  const sql = "SELECT * FROM admine";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" }); // Standardize the key to lowercase
    }
    // console.log(result)
    return res.json(result);
  });
});

app.post("/Admine", (req, res) => {
  console.log("--------------------");
  console.log(req.body.JOB);
  console.log("--------------------");
  const sql =
    "INSERT INTO admine (ADMINE_NAME, ADMINE_EMAIL, ADMINE_PASSWORD, JOB, ADMINE_PHONE) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.ADMINE_NAME,
    req.body.ADMINE_MAIL,
    req.body.ADMINE_PASSWORD,
    req.body.JOB,
    req.body.ADMINE_PHONE,
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting student:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Student inserted successfully:", result);
    return res.status(200).json({ message: "Student registered successfully" });
  });
});

app.delete("/deleteAdmine/:id", (req, res) => {
  const id = req.params.id; // Retrieve id from URL parameters
  const sql = "DELETE FROM admine WHERE ADMIN_ID = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("Error deleting admin:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Admin deleted successfully:", result);
    return res.status(200).json({ message: "Admin deleted successfully" });
  });
});

//---------------------------QCM----------------------------------------------------------
app.get("/seggection/:id", (req, res) => {
  const id = req.params.id; // Retrieve the id parameter from the request
  const sql = "SELECT * FROM seggection WHERE ID_QCM_QUESTION = ?";
  //
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error inside server" }); // Standardize the key to lowercase, and send a proper error response
    }
    // If there's no error, send the result
    return res.json(result);
  });
});

app.get("/qcm_question/:id", (req, res) => {
  const id = req.params.id; // Retrieve the id parameter from the request
  const sql = "SELECT * FROM question WHERE ID_QCM = ?";
  //                                               ^^^^ Corrected SQL query to use ID_QCM
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error inside server" }); // Standardize the key to lowercase, and send a proper error response
    }
    // If there's no error, send the result
    return res.json(result);
  });
});

app.get("/insert_user_qcm/:id_user/:id_seggection/:qcm", (req, res) => {
  const { id_user, id_seggection, qcm } = req.params;
  // Insert operation
  const insertSql =
    "INSERT INTO chose_qcm (ID_SEGGECTION, STUDENT_ID) VALUES (?, ?)";
  db.query(insertSql, [id_seggection, id_user], (insertErr, insertResult) => {
    if (insertErr) {
      console.error("Error inserting data:", insertErr);
      return res.status(500).json({ message: "Error inside server" });
    }

    console.log("Data inserted successfully:", insertResult);
    // Return a success response after insertion
    return res.sendStatus(200);
  });
});

app.delete("/deleteQCMuser/:id_insert/:id_user", (req, res) => {
  const id_insert = req.params.id_insert;
  const id_user = req.params.id_user;
  const sql =
    "DELETE FROM chose_qcm WHERE ID_SEGGECTION = ? AND STUDENT_ID = ?";
  db.query(sql, [id_insert, id_user], (err, result) => {
    if (err) {
      console.error("Error deleting admin:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Admin deleted successfully:", result);
    return res.status(200).json({ message: "Admin deleted successfully" });
  });
});

app.get("/getDataToDelete", (req, res) => {
  const sql = `SELECT ID_SEGGECTION
                 FROM qcm
                 NATURAL JOIN seggection
                 NATURAL JOIN chose_qcm
                 WHERE qcm.ID_QCM = 1`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching data to delete:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Data fetched successfully for deletion:", result);
    // Extracting ID_SEGGECTION values from the result
    const dataToDelete = result.map((row) => row.ID_SEGGECTION);
    console.log("Data to delete:", dataToDelete);
    return res.status(200).json({ data: dataToDelete });
  });
});

app.get("/classesavelebal/:id_admine", (req, res) => {
  const id_admine = req.params.id_admine; // Get id_admine from request parameters
  const sql = `SELECT CLASS_ID, CLASS_NAME, student_suport, YEAROFPASS, SEMESTER
                 FROM class
                 WHERE ADMIN_ID = ? AND living = 1`; // Include other fields you need
  db.query(sql, [id_admine], (err, result) => {
    // Pass id_admine dynamically
    if (err) {
      console.error("Error fetching data to delete:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Data fetched successfully for deletion:", result);
    return res.status(200).json({ data: result }); // Return the result as it is
  });
});

app.get("/classesRTAvelebal/:id_admine", (req, res) => {
  const id_admine = req.params.id_admine;
  const sql = "SELECT * FROM class NATURAL JOIN qcm where class.ADMIN_ID = ?";
  db.query(sql, [id_admine], (err, result) => {
    // Add a comma between sql and [id_admine]
    if (err) {
      return res.json({ message: "Error inside server" }); // Standardize the key to lowercase
    }
    // console.log(result)

    return res.json(result);
  });
});

app.get("/classesRTAvelebalAdmine", (req, res) => {
  const sql = "SELECT * FROM class NATURAL JOIN qcm";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.get("/classesRTAvelebalsea/:id_admine", (req, res) => {
  const id_admine = req.params.id_admine;
  const sql = "SELECT * FROM class where class.ADMIN_ID = ?";
  db.query(sql, [id_admine], (err, result) => {
    // Add a comma between sql and [id_admine]
    if (err) {
      return res.json({ message: "Error inside server" }); // Standardize the key to lowercase
    }
    // console.log(result)

    return res.json(result);
  });
});

app.get("/classesRTAvelebalAdmineSE/:class", (req, res) => {
  const classS = req.params.class;
  const sql = `SELECT * FROM class NATURAL JOIN qcm WHERE class.CLASS_NAME LIKE '%${classS}%'`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.post("/QCMcreat/:selectedResult/:qcmTitle", (req, res) => {
  const { selectedResult, qcmTitle } = req.params;

  // Assuming you have some logic to create a QCM
  try {
    console.log("CLASS_ID", selectedResult);
    console.log("TITLE_QCM", qcmTitle);

    // Perform your QCM creation logic here

    // Insert the new QCM into the database
    const query = "INSERT INTO qcm (CLASS_ID, TITLE_QCM) VALUES (?, ?)";
    db.query(query, [selectedResult, qcmTitle], (error, results) => {
      if (error) {
        console.error("Error creating QCM:", error);
        return res
          .status(500)
          .send({ error: "An error occurred while creating QCM" });
      }

      // If creation is successful, send a success response
      res
        .status(200)
        .send({ message: "QCM created successfully", qcmId: results.insertId });
    });
  } catch (error) {
    console.error("Error creating QCM:", error);
    res.status(500).send({ error: "An error occurred while creating QCM" });
  }
});
app.post(
  "/QCMcreatQestion/:submittedQuestion/:submittedNSegection/:classId/",
  (req, res) => {
    const { submittedQuestion, submittedNSegection, classId } = req.params;

    const query =
      "INSERT INTO question (ID_QCM, QCM_QUESTION, choseNumber) VALUES (?, ?, ?)";
    const values = [classId, submittedQuestion, submittedNSegection];

    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Server error");
        return;
      }

      console.log("New question inserted with ID:", results.insertId);
      res.status(200).send({ ID_QCM_QUESTION: results.insertId });
    });
  }
);

app.post("/QCMcreatSeggection/:questionId/:seggection/:note", (req, res) => {
  const { questionId, seggection, note } = req.params;

  // Prepare the SQL query to insert a new segment
  const query =
    "INSERT INTO seggection (ID_QCM_QUESTION, SEGGECTION, SEGGECTION_TYPE) VALUES (?, ?, ?)";
  const values = [questionId, seggection, note];

  // Execute the SQL query
  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Server error");
      return;
    }

    console.log("New segment inserted with ID:", result.insertId);
    res.status(200).send({ ID_SEGGECTION: result.insertId });
  });
});

app.post("/login/:email/:password", (req, res) => {
  const { email, password } = req.params;
  const sql =
    "SELECT ADMIN_ID FROM admine WHERE ADMINE_EMAIL = ? AND ADMINE_PASSWORD = ? AND JOB = 'admine'";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length > 0) {
      return res.json({ adminId: result[0].ADMIN_ID });
    } else {
      return res.json({ adminId: -1 });
    }
  });
});
app.post("/loginteacher/:email/:password", (req, res) => {
  const { email, password } = req.params;
  const sql =
    "SELECT ADMIN_ID FROM admine WHERE ADMINE_EMAIL = ? AND ADMINE_PASSWORD = ? AND JOB = 'teacher'";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length > 0) {
      return res.json({ adminId: result[0].ADMIN_ID });
    } else {
      return res.json({ adminId: -1 });
    }
  });
});

// Define routes
app.get("/meettclass/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM class  where living = 1 AND 	ADMIN_ID = ?  ";
  db.query(sql, id, (err, result) => {
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    return res.json(result);
  });
});

app.get("/classesStudentR/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT * FROM class NATURAL JOIN student NATURAL JOIN associatedwith NATURAL JOIN admine WHERE class.CLASS_ID = ?";
  db.query(sql, id, (err, result) => {
    // Pass id as parameter to the query
    if (err) {
      return res.json({ message: "Error inside server" });
    }
    return res.json(result);
  });
});



app.post("/create-meet", createMeetController);
app.post("/announce-msg", AnnonceMeet);

