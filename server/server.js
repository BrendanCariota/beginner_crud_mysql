import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Cariota1.",
  database: "beginner_crud_tutorial",
});

app.post("/create", (req, res) => {
  const { name, age, country, position, wage } = req.body;

  db.query(
    `INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)`,
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(5000, () => console.log("Server Running"));
