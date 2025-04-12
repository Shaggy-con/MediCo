const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Register doctor
router.post("/register", async (req, res) => {
  const { name, email, password, gender } = req.body;
  await db.query(
    "INSERT INTO doctors (name, email, password, gender) VALUES (?, ?, ?, ?)",
    [name, email, password, gender]
  );
  res.json({ message: "Doctor registered" });
});

// View profile
router.get("/profile", isAuthenticated, async (req, res) => {
  const [rows] = await db.query("SELECT * FROM doctors WHERE id = ?", [
    req.session.user.id,
  ]);
  res.json(rows[0]);
});

// View schedule
router.get("/schedule", isAuthenticated, async (req, res) => {
  const [rows] = await db.query("SELECT * FROM schedule WHERE doctor_id = ?", [
    req.session.user.id,
  ]);
  res.json(rows);
});

// View appointments
router.get("/appointments", isAuthenticated, async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM appointments WHERE doctor_id = ?",
    [req.session.user.id]
  );
  res.json(rows);
});

module.exports = router;
