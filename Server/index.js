import express from "express";
import cors from "cors";
const app = express();
const port = 8080;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

const carpooling = {
  destination: "A",
  time: "Not given yet",
  date: "19/05/16",
  maxCapacity: 5,
  people: ["A", "Z"],
};

const roundTrip = {
  title: "Trip of the day",
  destinations: ["Place 1", "Place 2", "Place 3"],
  time: "9:00PM",
  date: "19/04/2025",
  people: ["A", "B", "C"],
  maxCapacity: 3,
};

const appointmentsArr = [
  {
    date: "19-10-2024",
    status: "Done",
    EndTime: "19:10",
    StartTime: "18:10",
    doctorID: 123,
  },
  {
    date: "19-11-2024",
    status: "Pending",
    EndTime: "19:10",
    StartTime: "18:10",
    doctorID: 125,
  },
];

const people = {
  name: "Rick Ashley",
  roll_no: "231IT000",
  tripsGone: 0,
  destGone: 0,
  phone: "100010101000",
  email: "never@gonna.give.you.up",
  gender: "Male",
  appointments: appointmentsArr,
};

app.listen(port, () => {
  console.log(`Hello Bois`);
});

app.get("/carpooling/:carp", (req, res) => {
  res.json(carpooling);
});

app.get("/roundtrip/:trip", (req, res) => {
  res.json(roundTrip);
});

app.get("/patient/:patient", (req, res) => {
  res.json(people);
});

app.get("/doctor/:person", (req, res) => {
  res.json(person);
});
