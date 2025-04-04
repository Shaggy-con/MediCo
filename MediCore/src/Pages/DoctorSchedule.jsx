import React from "react";

function DoctorSchedule() {
  const doctorSchedule = {
    doctorName: "Dr. Sarah Thompson",
    day: "Monday",
    startTime: "08:00 AM",
    endTime: "05:00 PM",
    breaks: ["12:00 PM - 12:30 PM", "03:00 PM - 03:15 PM"],
    appointments: ["APPT-1001", "APPT-1002", "APPT-1003", "APPT-1004"],
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-900 p-8">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Doctor Schedule
      </h1>

      {/* Doctor Information */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Doctor Details
        </h2>
        <p className="text-lg text-gray-600">
          <strong>Name:</strong> {doctorSchedule.doctorName}
        </p>
        <p className="text-lg text-gray-600">
          <strong>Day:</strong> {doctorSchedule.day}
        </p>
      </div>

      {/* Work Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Work Schedule</h2>
        <p className="text-lg text-gray-600">
          <strong>Start Time:</strong> {doctorSchedule.startTime}
        </p>
        <p className="text-lg text-gray-600">
          <strong>End Time:</strong> {doctorSchedule.endTime}
        </p>
      </div>

      {/* Breaks */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Breaks</h2>
        {doctorSchedule.breaks.map((breakTime, index) => (
          <p key={index} className="text-lg text-gray-600">
            • {breakTime}
          </p>
        ))}
      </div>

      {/* Appointments for the Day */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Appointments</h2>
        {doctorSchedule.appointments.length > 0 ? (
          doctorSchedule.appointments.map((appt, index) => (
            <p key={index} className="text-lg text-gray-600">
              • {appt}
            </p>
          ))
        ) : (
          <p className="text-lg text-gray-500">No appointments for today.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorSchedule;
