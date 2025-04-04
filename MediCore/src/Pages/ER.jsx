import React, { useState } from "react";

function ER() {
  const [list, setList] = useState([]);
  const [newEntry, setNewEntry] = useState({
    name: "",
    age: "",
    gender: "",
    medicine: "",
    price: "",
  });

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    if (
      newEntry.name &&
      newEntry.age &&
      newEntry.gender &&
      newEntry.medicine &&
      newEntry.price
    ) {
      setList([...list, newEntry]);
      setNewEntry({ name: "", age: "", gender: "", medicine: "", price: "" });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-900 p-8">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        ER Ward Entries
      </h1>

      {/* Input Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Add Patient Entry
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={newEntry.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newEntry.age}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <select
            name="gender"
            value={newEntry.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="medicine"
            placeholder="Medicine Used"
            value={newEntry.medicine}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Price of Medication"
            value={newEntry.price}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={addRow}
          className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          Add Entry
        </button>
      </div>

      {/* ER Ward Table */}
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Patient Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Gender</th>
              <th className="py-3 px-4">Medicine Used</th>
              <th className="py-3 px-4">Price of Medication</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((el, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 text-center">{el.name}</td>
                  <td className="py-3 px-4 text-center">{el.age}</td>
                  <td className="py-3 px-4 text-center">{el.gender}</td>
                  <td className="py-3 px-4 text-center">{el.medicine}</td>
                  <td className="py-3 px-4 text-center">{el.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No entries added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ER;
