const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Register patient
router.post("/register", async (req, res) => {
  const { name, address, email, password, gender } = req.body;
  try {
    await db.query(
      "INSERT INTO patients (name, address, email, password, gender) VALUES (?, ?, ?, ?, ?)",
      [name, address, email, password, gender]
    );
    res.json({ message: "Patient registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get profile
router.get("/profile", isAuthenticated, async (req, res) => {
  const [rows] = await db.query("SELECT * FROM patients WHERE id = ?", [
    req.session.user.id,
  ]);
  res.json(rows[0]);
});

// Update medical history
router.post("/medical-history", isAuthenticated, async (req, res) => {
  const { conditions, medication, surgeries } = req.body;
  await db.query(
    "INSERT INTO medical_history (patient_id, conditions, medication, surgeries, datetime) VALUES (?, ?, ?, ?, NOW())",
    [req.session.user.id, conditions, medication, surgeries]
  );
  res.json({ message: "Medical history updated" });
});

// View medical history
router.get("/medical-history", isAuthenticated, async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM medical_history WHERE patient_id = ?",
    [req.session.user.id]
  );
  res.json(rows);
});

module.exports = router;
