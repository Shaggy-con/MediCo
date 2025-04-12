const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Patient Login
router.post("/login/patient", async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.query(
    "SELECT * FROM patients WHERE email = ? AND password = ?",
    [email, password]
  );
  if (rows.length) {
    req.session.user = { id: rows[0].id, role: "patient" };
    res.json({ message: "Logged in", user: rows[0] });
  } else res.status(401).json({ message: "Invalid credentials" });
});

// Doctor Login
router.post("/login/doctor", async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.query(
    "SELECT * FROM doctors WHERE email = ? AND password = ?",
    [email, password]
  );
  if (rows.length) {
    req.session.user = { id: rows[0].id, role: "doctor" };
    res.json({ message: "Logged in", user: rows[0] });
  } else res.status(401).json({ message: "Invalid credentials" });
});

// Logout
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
});

module.exports = router;
