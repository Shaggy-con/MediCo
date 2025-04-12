const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Add schedule
router.post("/", isAuthenticated, async (req, res) => {
  const { day, start_time, end_time, breaks } = req.body;
  await db.query(
    "INSERT INTO schedules (doctor_id, day, start_time, end_time, breaks) VALUES (?, ?, ?, ?, ?)",
    [req.session.user.id, day, start_time, end_time, JSON.stringify(breaks)]
  );
  res.json({ message: "Schedule added" });
});

// View schedule
router.get("/", isAuthenticated, async (req, res) => {
  const [rows] = await db.query("SELECT * FROM schedules WHERE doctor_id = ?", [
    req.session.user.id,
  ]);
  res.json(rows);
});

// Delete schedule
router.delete("/:id", isAuthenticated, async (req, res) => {
  await db.query("DELETE FROM schedules WHERE id = ? AND doctor_id = ?", [
    req.params.id,
    req.session.user.id,
  ]);
  res.json({ message: "Schedule deleted" });
});
