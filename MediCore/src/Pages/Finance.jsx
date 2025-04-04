import React, { useState } from "react";

function Finance() {
  const [list, setList] = useState([]);
  const [newEntry, setNewEntry] = useState({
    name: "",
    type: "",
    expiry: "",
    cost: "",
  });

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    if (newEntry.name && newEntry.type && newEntry.expiry && newEntry.cost) {
      setList([...list, newEntry]);
      setNewEntry({ name: "", type: "", expiry: "", cost: "" });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-900 p-8">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Finance
      </h1>

      {/* Input Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Entry</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Medicine Name"
            value={newEntry.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="type"
            placeholder="Type of Medicine"
            value={newEntry.type}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="expiry"
            value={newEntry.expiry}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="cost"
            placeholder="Cost"
            value={newEntry.cost}
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

      {/* Finance Table */}
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Medicine Name</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Expiry Date</th>
              <th className="py-3 px-4">Cost</th>
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
                  <td className="py-3 px-4 text-center">{el.type}</td>
                  <td className="py-3 px-4 text-center">{el.expiry}</td>
                  <td className="py-3 px-4 text-center">{el.cost}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
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

export default Finance;
