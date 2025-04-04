import React from "react";

function DoctorAppointments() {
  const doctorData = {
    name: "Dr. Sarah Thompson",
    appointments: [
      {
        patient: "John Doe",
        date: "April 5, 2025",
        status: "Confirmed",
        startTime: "09:00 AM",
        endTime: "09:30 AM",
      },
      {
        patient: "Emily Smith",
        date: "April 5, 2025",
        status: "Pending",
        startTime: "11:00 AM",
        endTime: "11:30 AM",
      },
      {
        patient: "Michael Johnson",
        date: "April 5, 2025",
        status: "Cancelled",
        startTime: "01:00 PM",
        endTime: "01:30 PM",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-900 p-8">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Doctor's Appointments
      </h1>

      {/* Doctor Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Doctor</h2>
        <p className="text-lg text-gray-600">{doctorData.name}</p>
      </div>

      {/* Appointments List */}
      {doctorData.appointments.length > 0 ? (
        doctorData.appointments.map((appointment, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-4"
          >
            <h2 className="text-xl font-bold text-gray-700">
              Appointment {index + 1}
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Patient:</strong> {appointment.patient}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> {appointment.date}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  appointment.status === "Confirmed"
                    ? "text-green-600"
                    : appointment.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                } font-semibold`}
              >
                {appointment.status}
              </span>
            </p>
            <p className="text-lg text-gray-600">
              <strong>Start Time:</strong> {appointment.startTime}
            </p>
            <p className="text-lg text-gray-600">
              <strong>End Time:</strong> {appointment.endTime}
            </p>
          </div>
        ))
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <p className="text-lg text-gray-500 text-center">
            No appointments scheduled for today.
          </p>
        </div>
      )}
    </div>
  );
}

export default DoctorAppointments;
