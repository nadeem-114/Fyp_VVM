const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "fyp_vvm",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM user_reg";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});*/

app.listen(3001, () => {
  console.log("App is running on port 3001");
});

app.post("/api/insert", (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userPass = req.body.userPass;

  const query = `Select * from reg_user where user_email = '${userEmail}' `;
  var r1 = [];
  db.query(query, (err, result) => {
    if (result.length < 1) {
      console.log("ok go ahead");
      const sqlInsert =
        "INSERT INTO reg_user (user_name, user_email, user_password) VALUES (?, ?, ?)";
      db.query(sqlInsert, [userName, userEmail, userPass], (err, result) => {
        return res.send({ message: "User Registered!" });
      });
    } else {
      console.log("Use different email");
      return res.send({
        message: "Email is already in use, Please Use a different one",
      });
    }
  });
});

app.post("/api/insertphone", (req, res) => {
  const userName = req.body.userName;
  const userPhone = req.body.userPhone;
  const userPass = req.body.userPass;

  const PhoneQuery = `Select * from reg_user_phone where user_phone = '${userPhone}' `;
  var r1 = [];
  db.query(PhoneQuery, (err, result) => {
    if (result.length < 1) {
      console.log("ok go ahead");
      const sqlInsert =
        "INSERT INTO reg_user_phone (user_pname, user_phone, user_phpass) VALUES (?, ?, ?)";
      db.query(sqlInsert, [userName, userPhone, userPass], (err, result) => {
        return res.send({ message: "User Registered!" });
      });
    } else {
      console.log("Use different Phone Number");
      return res.send({
        message: "Phone Number is already in use, Please Use a different one",
      });
    }
  });
});

app.post("/api/confirm", (req, res) => {
  const userEmail = req.body.userEmail;
  const password = req.body.userPass;
  const query = `Select * from reg_user where user_email = '${userEmail}' and user_password = '${password}'`;
  db.query(query, (err, result) => {
    res.send(result);
  });
});

app.post("/api/confirmphone", (req, res) => {
  const userPhone = req.body.userPhone;
  const password = req.body.userPass;
  const query = `Select * from reg_user_phone where user_phone = '${userPhone}' and user_phpass = '${password}'`;
  db.query(query, (err, result) => {
    res.send(result);
  });
});
