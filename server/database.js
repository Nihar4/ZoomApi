import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "nihar",
  password: "mysql123",
  database: "zoom",
});

export const connectDB = async () => {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database: " + err.stack);
      return;
    }
    console.log("Connected to the database as ID " + db.threadId);
  });
};
