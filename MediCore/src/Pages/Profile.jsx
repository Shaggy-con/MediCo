import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../Components/Button.jsx";

// TODO : make into Patient.jsx
function Profile() {
  const params = useParams();
  let [person, setPerson] = useState(null);

  let getPerson = async () => {
    let resp = await axios.get(
      "http://localhost:8080/patient/" + params.person,
    );
    setPerson(resp.data);
  };

  useEffect(() => {
    getPerson();
  }, [person]);

  return (
    <div className="flex flex-col items-center">
      {person == null ? (
        <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
          Problem
        </h1>
      ) : (
        <div>
          <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
            {person.name}
          </h1>
          <div className="bg-blue-100 min-w-[1000px] w-8/10 p-[1em] rounded-xl flex flex-col items-center text-2xl">
            <table className="flex">
              <tbody>
                <tr>
                  <td>Phone number</td>
                  <td>: {person.phone}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {person.email}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>: {person.gender}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <h1>Appointments</h1>
            <table className=" text-xl flex border-separate border-spacing-5 border border-black text-center">
              <tbody>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Doctor Name</th>
                </tr>
                {person.appointments.map((el) => (
                  <tr>
                    <td>{el.date}</td>
                    <td>{el.status}</td>
                    <td>{el.StartTime}</td>
                    <td>{el.doctorID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center text-xl">
              <Button text="Add Appointment"></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
