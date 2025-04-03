import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Button from "../Components/Button";
import { useParams } from "react-router-dom";

function RoundTripProfile() {
  const params = useParams();
  let [trip, setRoundTrip] = useState(null);

  let getRoundTrip = async () => {
    let resp = await axios.get(
      "http://localhost:8080/roundtrip/" + params.trip
    );
    setRoundTrip(resp.data);
  };

  useEffect(() => {
    getRoundTrip();
  }, [trip]);

  return (
    <div className="flex flex-col items-center">
      {trip == null ? (
        <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
          Problem
        </h1>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="logoFont text-9xl text-yellow-300 text-center mb-[2%] mt-[2%]">
            {trip.title}
          </h1>
          <br />
          <div className="bg-blue-100 min-w-[1000px] w-8/10 p-[1em] rounded-xl grid grid-cols-2 gap-2 items-center text-2xl">
            <table className="border-separate border-spacing-[1em] col-span-2 rounded-2xl">
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>: {trip.date}</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>: {trip.time}</td>
                </tr>
                <tr>
                  <td>Capacity left </td>
                  <td>: {trip.maxCapacity - trip.people.length}</td>
                </tr>
              </tbody>
            </table>
            <div className=" p-[1em] rounded-2xl m-1">
              <p>
                <u>People already in</u>
              </p>
              {trip.people.map((el) => (
                <li key={uuidv4()}>
                  {el}
                  <span className="text-lg">
                    <Button text="profile"></Button>
                  </span>
                </li>
              ))}
            </div>
            <div className=" p-[1em] rounded-2xl m-1 self-start">
              <p>
                <u>Places we will visit</u>
              </p>
              {trip.destinations.map((el) => (
                <li key={uuidv4()}>{el}</li>
              ))}
            </div>
            <div className="col-span-2 justify-self-center">
              {trip.maxCapacity - trip.people.length > 0 ? (
                <Button text="join"></Button>
              ) : (
                <p>sorry but the ride is full</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoundTripProfile;
