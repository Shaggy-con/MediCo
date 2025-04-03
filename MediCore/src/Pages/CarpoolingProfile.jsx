import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Button from "../Components/Button";
import { useParams } from "react-router-dom";

function CarpoolingProfile() {
  const params = useParams();

  let [carpooling, SetCarpooling] = useState(null);

  let getCarpooling = async () => {
    let resp = await axios.get(
      "http://localhost:8080/carpooling/" + params.carp
    );
    SetCarpooling(resp.data);
  };

  useEffect(() => {
    getCarpooling();
  }, [carpooling]);

  return (
    <div className="flex flex-col items-center">
      {carpooling == null ? (
        <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
          Problem
        </h1>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
            {carpooling.destination}
          </h1>
          <div className="bg-blue-100 min-w-[700px] w-8/10 rounded-xl flex flex-col items-center text-2xl p-[1em]">
            <table className="border-separate border-spacing-[1em]">
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>: {carpooling.date}</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>: {carpooling.time}</td>
                </tr>
                <tr>
                  <td>Capacity left </td>
                  <td>: {carpooling.maxCapacity - carpooling.people.length}</td>
                </tr>
              </tbody>
            </table>
            <p>
              <u>People already in</u>
            </p>
            {carpooling.people.map((el) => (
              <li key={uuidv4()}>
                {el}
                <span className="text-lg">
                  <Button text="profile"></Button>
                </span>
              </li>
            ))}
            <br />
            {carpooling.maxCapacity - carpooling.people.length > 0 ? (
              <Button text="join"></Button>
            ) : (
              <p>sorry but the ride is full</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarpoolingProfile;
