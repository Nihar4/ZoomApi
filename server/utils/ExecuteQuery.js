import { db } from "../database.js";

export const ExecuteQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) {
                console.log("error here", err.message)
                reject(err.message);
            }
            else {
                resolve(JSON.parse(JSON.stringify(result)));
            }
        });
    });
}
