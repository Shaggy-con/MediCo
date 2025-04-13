import { useEffect, useState } from "react";
import axios from "axios";

export default function FinancePage() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    medicine_name: "",
    cost_of_medicine: "",
    expiry_date: "",
    type_of_medicine: "",
  });

  const fetchRecords = async () => {
    const res = await axios.get("http://localhost:8080/api/finance");
    setRecords(res.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const addRecord = async () => {
    await axios.post("http://localhost:8080/api/finance", form);
    setForm({
      medicine_name: "",
      cost_of_medicine: "",
      expiry_date: "",
      type_of_medicine: "",
    });
    fetchRecords();
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Finance Department</h2>

      <div className="border p-4 rounded shadow space-y-3">
        <h3 className="text-xl font-semibold">Add Financial Entry</h3>
        <input
          className="border p-2 w-full"
          placeholder="Medicine Name"
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
          type="date"
          value={form.expiry_date}
          onChange={(e) => setForm({ ...form, expiry_date: e.target.value })}
        />
        <select
          className="border p-2 w-full"
          value={form.type_of_medicine}
          onChange={(e) =>
            setForm({ ...form, type_of_medicine: e.target.value })
          }
        >
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={addRecord}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">All Records</h3>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Medicine</th>
              <th className="p-2">Cost</th>
              <th className="p-2">Expiry</th>
              <th className="p-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-t">
                <td className="p-2">{record.medicine_name}</td>
                <td className="p-2">₹{record.cost_of_medicine}</td>
                <td className="p-2">{record.expiry_date}</td>
                <td className="p-2 capitalize">{record.type_of_medicine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
