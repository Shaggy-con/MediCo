import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PharmacyPage() {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({
    medicine_name: "",
    cost_of_medicine: "",
    expiry_date: "",
    type_of_medicine: "",
    stock_bought_date: "",
    units_sold: 0,
  });

  const fetchMedicines = async () => {
    const res = await axios.get("http://localhost:8080/api/pharmacy");
    setMedicines(res.data);
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const addMedicine = async () => {
    await axios.post("http://localhost:8080/api/pharmacy", form);
    setForm({
      medicine_name: "",
      cost_of_medicine: "",
      expiry_date: "",
      type_of_medicine: "",
      stock_bought_date: "",
      units_sold: 0,
    });
    fetchMedicines();
  };

  const updateUnits = async (id, newUnits) => {
    await axios.put(`http://localhost:8080/api/pharmacy/${id}`, {
      units_sold: newUnits,
    });
    fetchMedicines();
  };

  const deleteMedicine = async (id) => {
    await axios.delete(`http://localhost:8080/api/pharmacy/${id}`);
    fetchMedicines();
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Pharmacy Inventory</h2>

      <div className="border p-4 rounded shadow space-y-3">
        <h3 className="text-xl font-semibold">Add New Medicine</h3>
        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={form.medicine_name}
          onChange={(e) => setForm({ ...form, medicine_name: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Cost"
          type="number"
          value={form.cost_of_medicine}
          onChange={(e) =>
            setForm({ ...form, cost_of_medicine: e.target.value })
          }
        />
        <input
          className="border p-2 w-full"
          placeholder="Type"
          value={form.type_of_medicine}
          onChange={(e) =>
            setForm({ ...form, type_of_medicine: e.target.value })
          }
        />
        <input
          className="border p-2 w-full"
          type="date"
          placeholder="Expiry Date"
          value={form.expiry_date}
          onChange={(e) => setForm({ ...form, expiry_date: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="date"
          placeholder="Stock Date"
          value={form.stock_bought_date}
          onChange={(e) =>
            setForm({ ...form, stock_bought_date: e.target.value })
          }
        />
        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Units Sold"
          value={form.units_sold}
          onChange={(e) => setForm({ ...form, units_sold: e.target.value })}
        />
        <button
          onClick={addMedicine}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Inventory</h3>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Type</th>
              <th className="p-2">Cost</th>
              <th className="p-2">Expiry</th>
              <th className="p-2">Stock Date</th>
              <th className="p-2">Units Sold</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med) => (
              <tr key={med.id} className="border-t">
                <td className="p-2">{med.medicine_name}</td>
                <td className="p-2">{med.type_of_medicine}</td>
                <td className="p-2">₹{med.cost_of_medicine}</td>
                <td className="p-2">{med.expiry_date}</td>
                <td className="p-2">{med.stock_bought_date}</td>
                <td className="p-2">
                  <input
                    type="number"
                    value={med.units_sold}
                    onChange={(e) => updateUnits(med.id, e.target.value)}
                    className="w-16 border p-1"
                  />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => deleteMedicine(med.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
