import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// TODO : make into Patient.jsx
function Profile() {
  const params = useParams();
  let [person, setPerson] = useState(null);

  let getDoctor = async () => {
    let resp = await axios.get("http://localhost:8080/doctor/" + params.person);
    setPerson(resp.data);
  };

  useEffect(() => {
    getDoctor();
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
          <div className="bg-blue-100 min-w-[1000px] w-8/10 p-[1em] rounded-xl flex flex-cols items-center text-2xl">
            <table className="flex">
              <tbody>
                <tr>
                  <td>Roll.no</td>
                  <td>: {person.roll_no}</td>
                </tr>
                <tr>
                  <td>trips gone on</td>
                  <td>: {person.tripsGone}</td>
                </tr>
                <tr>
                  <td>destinations gone to</td>
                  <td>: {person.destGone}</td>
                </tr>
                <tr>
                  <td>Phone number</td>
                  <td>: {person.phone}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {person.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
