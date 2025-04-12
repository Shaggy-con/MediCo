import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [form, setForm] = useState({
    day: "",
    start_time: "",
    end_time: "",
    breaks: "",
  });

  const fetchSchedules = async () => {
    const res = await axios.get("http://localhost:5000/api/schedule", {
      withCredentials: true,
    });
    setSchedules(res.data);
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const addSchedule = async () => {
    if (!form.day || !form.start_time || !form.end_time) {
      alert("Please fill all fields.");
      return;
    }

    await axios.post(
      "http://localhost:5000/api/schedule",
      {
        ...form,
        breaks: form.breaks.split(",").map((b) => b.trim()),
      },
      { withCredentials: true }
    );

    setForm({ day: "", start_time: "", end_time: "", breaks: "" });
    fetchSchedules();
  };

  const deleteSchedule = async (id) => {
    await axios.delete(`http://localhost:5000/api/schedule/${id}`, {
      withCredentials: true,
    });
    fetchSchedules();
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">My Schedule</h2>

      <div className="border p-4 rounded shadow mb-6 space-y-3">
        <h3 className="text-xl font-semibold">Add Schedule</h3>
        <input
          className="border p-2 w-full"
          placeholder="Day (e.g. Monday)"
          value={form.day}
          onChange={(e) => setForm({ ...form, day: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="time"
          placeholder="Start Time"
          value={form.start_time}
          onChange={(e) => setForm({ ...form, start_time: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="time"
          placeholder="End Time"
          value={form.end_time}
          onChange={(e) => setForm({ ...form, end_time: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Breaks (comma separated: 13:00-14:00)"
          value={form.breaks}
          onChange={(e) => setForm({ ...form, breaks: e.target.value })}
        />
        <button
          onClick={addSchedule}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-2">Current Schedule</h3>
        {schedules.map((sch) => (
          <div
            key={sch.id}
            className="border p-4 rounded flex justify-between items-center shadow"
          >
            <div>
              <p>
                <strong>Day:</strong> {sch.day}
              </p>
              <p>
                <strong>Time:</strong> {sch.start_time} - {sch.end_time}
              </p>
              <p>
                <strong>Breaks:</strong> {JSON.parse(sch.breaks).join(", ")}
              </p>
            </div>
            <button
              onClick={() => deleteSchedule(sch.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
