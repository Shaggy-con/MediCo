import { useEffect, useState } from "react";
import axios from "axios";

export default function PatientDiagnosis() {
  const [diagnoses, setDiagnoses] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/diagnosis/patient/me",
        {
          withCredentials: true,
        }
      );
      setDiagnoses(res.data);
    };
    fetch();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        My Diagnoses & Prescriptions
      </h2>

      {diagnoses.length === 0 ? (
        <p className="text-gray-600">No diagnosis records found.</p>
      ) : (
        <ul className="space-y-4">
          {diagnoses.map((d) => (
            <li key={d.id} className="border p-4 rounded shadow">
              <p>
                <strong>Appointment ID:</strong> {d.appointment_id}
              </p>
              <p>
                <strong>Doctor ID:</strong> {d.doctor_id}
              </p>
              <p>
                <strong>Date:</strong> {new Date(d.date_given).toLocaleString()}
              </p>
              <p>
                <strong>Diagnosis:</strong> {d.diagnosis_text}
              </p>
              <p>
                <strong>Prescriptions:</strong> {d.prescriptions}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
