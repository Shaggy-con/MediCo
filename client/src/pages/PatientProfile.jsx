import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PatientProfile() {
  const [profile, setProfile] = useState({});
  const [history, setHistory] = useState({
    conditions: "",
    medication: "",
    surgeries: "",
  });
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    doctor_id: "",
    schedule_id: "",
    date: "",
    start_time: "",
    end_time: "",
    concerns: "",
    symptoms: "",
  });

  useEffect(() => {
    fetchProfile();
    fetchAppointments();
  }, []);

  const fetchProfile = async () => {
    const res = await axios.get("http://localhost:8080/api/patients/profile", {
      withCredentials: true,
    });
    setProfile(res.data);
  };

  const fetchAppointments = async () => {
    const res = await axios.get("http://localhost:8080/api/appointments/my", {
      withCredentials: true,
    });
    setAppointments(res.data);
  };

  const updateHistory = async () => {
    await axios.post(
      "http://localhost:8080/api/patients/medical-history",
      history,
      { withCredentials: true }
    );
    alert("Medical history updated");
  };

  const bookAppointment = async () => {
    await axios.post("http://localhost:8080/api/appointments", form, {
      withCredentials: true,
    });
    fetchAppointments();
    setForm({
      doctor_id: "",
      schedule_id: "",
      date: "",
      start_time: "",
      end_time: "",
      concerns: "",
      symptoms: "",
    });
  };

  const cancelAppointment = async (id) => {
    await axios.delete(`http://localhost:8080/api/appointments/${id}`, {
      withCredentials: true,
    });
    fetchAppointments();
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">
        Welcome, {profile.name}
      </h2>

      <div className="border rounded p-4 shadow space-y-2">
        <h3 className="text-xl font-semibold">Medical History</h3>
        <textarea
          className="w-full border p-2"
          rows="2"
          placeholder="Conditions"
          value={history.conditions}
          onChange={(e) =>
            setHistory({ ...history, conditions: e.target.value })
          }
        />
        <textarea
          className="w-full border p-2"
          rows="2"
          placeholder="Medication"
          value={history.medication}
          onChange={(e) =>
            setHistory({ ...history, medication: e.target.value })
          }
        />
        <textarea
          className="w-full border p-2"
          rows="2"
          placeholder="Surgeries"
          value={history.surgeries}
          onChange={(e) =>
            setHistory({ ...history, surgeries: e.target.value })
          }
        />
        <button
          onClick={updateHistory}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>

      <div className="border rounded p-4 shadow space-y-2">
        <h3 className="text-xl font-semibold">Book Appointment</h3>
        <input
          className="border p-2 w-full"
          placeholder="Doctor ID"
          value={form.doctor_id}
          onChange={(e) => setForm({ ...form, doctor_id: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Schedule ID"
          value={form.schedule_id}
          onChange={(e) => setForm({ ...form, schedule_id: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="time"
          value={form.start_time}
          onChange={(e) => setForm({ ...form, start_time: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="time"
          value={form.end_time}
          onChange={(e) => setForm({ ...form, end_time: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Concerns"
          value={form.concerns}
          onChange={(e) => setForm({ ...form, concerns: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Symptoms"
          value={form.symptoms}
          onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
        />
        <button
          onClick={bookAppointment}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Book
        </button>
      </div>

      <div className="border rounded p-4 shadow">
        <h3 className="text-xl font-semibold mb-2">My Appointments</h3>
        <ul className="space-y-2">
          {appointments.map((app) => (
            <li
              key={app.id}
              className="flex justify-between border p-2 rounded"
            >
              <div>
                <p>
                  <strong>Doctor ID:</strong> {app.doctor_id}
                </p>
                <p>
                  <strong>Date:</strong> {app.date}
                </p>
                <p>
                  <strong>Time:</strong> {app.start_time} - {app.end_time}
                </p>
                <p>
                  <strong>Status:</strong> {app.status}
                </p>
              </div>
              <button
                onClick={() => cancelAppointment(app.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
