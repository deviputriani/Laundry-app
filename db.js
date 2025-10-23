const mysql = require("mysql2");

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: "host.docker.internet",
  user: "root",        // user default XAMPP
  password: "",        // password default XAMPP kosong
  database: "laundry_db"
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

module.exports = db;
