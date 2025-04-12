const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Create appointment
router.post("/", isAuthenticated, async (req, res) => {
  const {
    doctor_id,
    schedule_id,
    date,
    start_time,
    end_time,
    concerns,
    symptoms,
  } = req.body;
  await db.query(
    "INSERT INTO appointments (patient_id, doctor_id, schedule_id, date, start_time, end_time, status, concerns, symptoms) VALUES (?, ?, ?, ?, ?, ?, 'Scheduled', ?, ?)",
    [
      req.session.user.id,
      doctor_id,
      schedule_id,
      date,
      start_time,
      end_time,
      concerns,
      symptoms,
    ]
  );
  res.json({ message: "Appointment created" });
});

// View patient's appointments
router.get("/my", isAuthenticated, async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM appointments WHERE patient_id = ?",
    [req.session.user.id]
  );
  res.json(rows);
});

// Cancel appointment
router.delete("/:id", isAuthenticated, async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM appointments WHERE id = ? AND patient_id = ?", [
    id,
    req.session.user.id,
  ]);
  res.json({ message: "Appointment canceled" });
});

// Doctor adds diagnosis
router.post("/diagnosis", isAuthenticated, async (req, res) => {
  const { appointment_id, diagnosis, prescription } = req.body;
  const [a] = await db.query("SELECT * FROM appointments WHERE id = ?", [
    appointment_id,
  ]);
  if (!a.length || a[0].doctor_id !== req.session.user.id)
    return res.sendStatus(403);

  await db.query(
    "UPDATE appointments SET diagnosis = ?, prescription = ?, status = 'Completed' WHERE id = ?",
    [diagnosis, prescription, appointment_id]
  );
  res.json({ message: "Diagnosis added" });
});
