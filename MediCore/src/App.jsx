import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile.jsx";
import Logout from "./Pages/Logout.jsx";
import Doctor from "./Pages/Doctor.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pharmacy from "./Pages/Pharmacy.jsx";
import Finance from "./Pages/Finance.jsx";
import ER from "./Pages/ER.jsx";
import Medicalhistory from "./Pages/Medicalhistory.jsx";
import DoctorSchedule from "./Pages/DoctorSchedule.jsx";
import PatientAppointments from "./Pages/PatientAppointments.jsx";
import DoctorAppointments from "./Pages/DoctorAppointments.jsx";

function App() {
  // let router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Home></Home>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/login",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Login></Login>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/register",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Register></Register>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/admin",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Admin></Admin>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/roundTrips",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <RoundTrips />,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/carpooling",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Carpooling></Carpooling>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/roundtrip",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <RoundTrips></RoundTrips>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/carpooling/:carp",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <CarpoolingProfile></CarpoolingProfile>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/roundtrip/:trip",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <RoundTrips></RoundTrips>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/patient/:patient",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Profile></Profile>,
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/doctor/:person",
  //     element: (
  //       <>
  //         <Navbar></Navbar>
  //         <Doctor></Doctor>
  //       </>
  //     ),
  //   },
  // ]);

  return (
    <div className="min-h-[100vh] bg-blue-900 flex flex-col align-middle self-center">
      <DoctorAppointments></DoctorAppointments>
    </div>
  );
}

export default App;
