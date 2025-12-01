const express = require('express');
const mysql = require('mysql');
const server = express();

server.listen(3455, () => {
  console.log("Server running on port 3455");
});

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Database connection
const database = { host: 'localhost', user: 'root', database: 'nasa' };
const connection = mysql.createConnection(database);
connection.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

// GET all entries
const nasa = 'SELECT * FROM data';
server.get('/nasa', (req, res) => {
  connection.query(nasa, (err, data) => {
    if (err) {
      console.log("Fetch error:", err);
      res.status(500).json({ error: "Failed to fetch data" });
    } else {
      res.json({ results: data });
    }
  });
});

// POST save entry
server.post('/saveURL', (req, res) => {
  const savequery = "INSERT INTO data SET ?";
  const dataToSave = {
    username: req.body.username,
    email: req.body.email,
    url: req.body.url
  };

  server.post("/deleteData", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: "Missing username or email" });
  }

  const sql = "DELETE FROM data WHERE username = ? AND email = ?";
  connection.query(sql, [username, email], (err, result) => {
    if (err) {
      console.error("Delete error:", err);
      return res.status(500).json({ error: "Failed to delete data" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No matching data found" });
    }

    console.log(`Deleted data for ${username} (${email})`);
    res.json({ message: "Deleted successfully" });
  });
});


  connection.query(savequery, dataToSave, (err, result) => {
    if (err) {
      console.log("Insert error:", err);
      res.status(500).json({ error: "Failed to save data" });
    } else {
      console.log("Data saved:", result);
      res.status(200).json({ message: "Data saved", result });
    }
  });
});

