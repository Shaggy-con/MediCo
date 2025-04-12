const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Add ER patient
router.post("/", async (req, res) => {
  const {
    patient_id,
    name_of_patient,
    age,
    gender,
    medicine_used,
    price_of_medicine,
  } = req.body;
  await db.query(
    "INSERT INTO er_ward (patient_id, name_of_patient, age, gender, medicine_used, price_of_medicine) VALUES (?, ?, ?, ?, ?, ?)",
    [patient_id, name_of_patient, age, gender, medicine_used, price_of_medicine]
  );
  res.json({ message: "Added to ER ward" });
});

// View ER ward
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM er_ward");
  res.json(rows);
});

// Remove ER patient
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM er_ward WHERE id = ?", [req.params.id]);
  res.json({ message: "Removed from ER ward" });
});
