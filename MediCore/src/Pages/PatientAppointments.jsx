import React from "react";

function PatientAppointments() {
  const patientData = {
    name: "John Doe",
    appointments: [
      {
        doctor: "Dr. Sarah Thompson",
        date: "April 5, 2025",
        status: "Confirmed",
        startTime: "10:30 AM",
        endTime: "11:00 AM",
      },
      {
        doctor: "Dr. James Wilson",
        date: "April 5, 2025",
        status: "Pending",
        startTime: "02:00 PM",
        endTime: "02:30 PM",
      },
      {
        doctor: "Dr. Emily Carter",
        date: "April 5, 2025",
        status: "Cancelled",
        startTime: "04:00 PM",
        endTime: "04:30 PM",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-900 p-8">
      <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
        Patient Appointments
      </h1>

      {/* Patient Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Patient Name</h2>
        <p className="text-lg text-gray-600">{patientData.name}</p>
      </div>

      {/* Appointments List */}
      {patientData.appointments.length > 0 ? (
        patientData.appointments.map((appointment, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-4"
          >
            <h2 className="text-xl font-bold text-gray-700">
              Appointment {index + 1}
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Doctor:</strong> {appointment.doctor}
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

export default PatientAppointments;
