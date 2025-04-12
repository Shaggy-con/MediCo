const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Add medicine
router.post("/", async (req, res) => {
  const {
    medicine_name,
    cost_of_medicine,
    expiry_date,
    type_of_medicine,
    stock_bought_date,
    units_sold,
  } = req.body;
  await db.query(
    "INSERT INTO pharmacy (medicine_name, cost_of_medicine, expiry_date, type_of_medicine, stock_bought_date, units_sold) VALUES (?, ?, ?, ?, ?, ?)",
    [
      medicine_name,
      cost_of_medicine,
      expiry_date,
      type_of_medicine,
      stock_bought_date,
      units_sold,
    ]
  );
  res.json({ message: "Medicine added" });
});

// View inventory
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM pharmacy");
  res.json(rows);
});

// Update stock
router.put("/:id", async (req, res) => {
  const { units_sold } = req.body;
  await db.query("UPDATE pharmacy SET units_sold = ? WHERE id = ?", [
    units_sold,
    req.params.id,
  ]);
  res.json({ message: "Updated" });
});

// Delete item
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM pharmacy WHERE id = ?", [req.params.id]);
  res.json({ message: "Deleted" });
});
