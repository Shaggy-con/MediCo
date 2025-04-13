import { useEffect, useState } from "react";
import axios from "axios";

export default function ERPage() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    patient_id: "",
    name_of_patient: "",
    age: "",
    gender: "",
    medicine_used: "",
    price_of_medicine: "",
  });

  const fetchERPatients = async () => {
    const res = await axios.get("http://localhost:8080/api/er");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchERPatients();
  }, []);

  const addPatient = async () => {
    await axios.post("http://localhost:8080/api/er", form);
    setForm({
      patient_id: "",
      name_of_patient: "",
      age: "",
      gender: "",
      medicine_used: "",
      price_of_medicine: "",
    });
    fetchERPatients();
  };

  const removePatient = async (id) => {
    await axios.delete(`http://localhost:8080/api/er/${id}`);
    fetchERPatients();
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">ER Ward Management</h2>

      <div className="border p-4 rounded shadow space-y-3">
        <h3 className="text-xl font-semibold">Admit New Patient</h3>
        <input
          className="border p-2 w-full"
          placeholder="Patient ID"
          value={form.patient_id}
          onChange={(e) => setForm({ ...form, patient_id: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Patient Name"
          value={form.name_of_patient}
          onChange={(e) =>
            setForm({ ...form, name_of_patient: e.target.value })
          }
        />
        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Gender"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Medicine Used"
          value={form.medicine_used}
          onChange={(e) => setForm({ ...form, medicine_used: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Price"
          value={form.price_of_medicine}
          onChange={(e) =>
            setForm({ ...form, price_of_medicine: e.target.value })
          }
        />
        <button
          onClick={addPatient}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Admit
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Current ER Patients</h3>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Patient ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Age</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Medicine</th>
              <th className="p-2">Price</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.patient_id}</td>
                <td className="p-2">{p.name_of_patient}</td>
                <td className="p-2">{p.age}</td>
                <td className="p-2">{p.gender}</td>
                <td className="p-2">{p.medicine_used}</td>
                <td className="p-2">₹{p.price_of_medicine}</td>
                <td className="p-2">
                  <button
                    onClick={() => removePatient(p.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Discharge
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
