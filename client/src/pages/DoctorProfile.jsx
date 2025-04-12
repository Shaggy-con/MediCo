import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorProfile() {
  const [profile, setProfile] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [diagnosisForm, setDiagnosisForm] = useState({
    diagnosis: "",
    prescription: "",
  });

  useEffect(() => {
    fetchProfile();
    fetchAppointments();
  }, []);

  const fetchProfile = async () => {
    const res = await axios.get("http://localhost:5000/api/doctors/profile", {
      withCredentials: true,
    });
    setProfile(res.data);
  };

  const fetchAppointments = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/doctors/appointments",
      { withCredentials: true }
    );
    setAppointments(res.data);
  };

  const submitDiagnosis = async () => {
    await axios.post(
      "http://localhost:5000/api/appointments/diagnosis",
      {
        appointment_id: selectedAppointment.id,
        diagnosis: diagnosisForm.diagnosis,
        prescription: diagnosisForm.prescription,
      },
      { withCredentials: true }
    );

    setDiagnosisForm({ diagnosis: "", prescription: "" });
    setSelectedAppointment(null);
    fetchAppointments();
    alert("Diagnosis added!");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Dr. {profile.name}</h2>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Gender:</strong> {profile.gender}
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Today's Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments for today.</p>
        ) : (
          <ul className="space-y-3">
            {appointments.map((app) => (
              <li
                key={app.id}
                className="border p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Patient ID:</strong> {app.patient_id}
                  </p>
                  <p>
                    <strong>Time:</strong> {app.start_time} - {app.end_time}
                  </p>
                  <p>
                    <strong>Concerns:</strong> {app.concerns}
                  </p>
                  <p>
                    <strong>Status:</strong> {app.status}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAppointment(app)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Add Diagnosis
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedAppointment && (
        <div className="border rounded p-4 mt-6 shadow">
          <h3 className="text-lg font-semibold mb-2">
            Diagnosis for Patient #{selectedAppointment.patient_id}
          </h3>
          <textarea
            className="w-full border p-2 mb-2"
            placeholder="Diagnosis"
            value={diagnosisForm.diagnosis}
            onChange={(e) =>
              setDiagnosisForm({ ...diagnosisForm, diagnosis: e.target.value })
            }
          />
          <textarea
            className="w-full border p-2 mb-2"
            placeholder="Prescriptions"
            value={diagnosisForm.prescription}
            onChange={(e) =>
              setDiagnosisForm({
                ...diagnosisForm,
                prescription: e.target.value,
              })
            }
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={submitDiagnosis}
          >
            Submit
          </button>
          <button
            className="text-red-600 ml-4 underline"
            onClick={() => setSelectedAppointment(null)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
