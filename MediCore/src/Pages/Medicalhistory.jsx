import React, { useState } from "react";

function Medicalhistory() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [newEntry, setNewEntry] = useState({
    surgery: "",
    medication: "",
    condition: "",
    date: "",
    history: "",
  });

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const addRecord = () => {
    if (
      newEntry.surgery ||
      newEntry.medication ||
      newEntry.condition ||
      newEntry.date ||
      newEntry.history
    ) {
      setMedicalHistory([...medicalHistory, newEntry]);
      setNewEntry({
        surgery: "",
        medication: "",
        condition: "",
        date: "",
        history: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-900 p-8">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Medical History
      </h1>

      {/* Patient Info */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Patient Information
        </h2>
        <p className="text-lg text-gray-600">
          <strong>Name:</strong> John Doe
        </p>
        <p className="text-lg text-gray-600">
          <strong>Age:</strong> 35
        </p>
        <p className="text-lg text-gray-600">
          <strong>Gender:</strong> Male
        </p>
      </div>

      {/* Add Medical History Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Add Medical History
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="surgery"
            placeholder="Surgeries"
            value={newEntry.surgery}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="medication"
            placeholder="Medications"
            value={newEntry.medication}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="condition"
            placeholder="Conditions"
            value={newEntry.condition}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="datetime-local"
            name="date"
            value={newEntry.date}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <textarea
            name="history"
            placeholder="Medical History Details"
            value={newEntry.history}
            onChange={handleChange}
            className="border p-2 rounded w-full col-span-2"
          />
        </div>
        <button
          onClick={addRecord}
          className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          Add Entry
        </button>
      </div>

      {/* Medical History Table */}
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Surgeries</th>
              <th className="py-3 px-4">Medications</th>
              <th className="py-3 px-4">Conditions</th>
              <th className="py-3 px-4">Date & Time</th>
              <th className="py-3 px-4">Medical History</th>
            </tr>
          </thead>
          <tbody>
            {medicalHistory.length > 0 ? (
              medicalHistory.map((record, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 text-center">
                    {record.surgery || "N/A"}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {record.medication || "N/A"}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {record.condition || "N/A"}
                  </td>
                  <td className="py-3 px-4 text-center">{record.date}</td>
                  <td className="py-3 px-4 text-center">
                    {record.history || "No additional info"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No medical history added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Medicalhistory;
