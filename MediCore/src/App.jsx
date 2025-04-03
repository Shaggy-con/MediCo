import "./App.css";
import Navbar from "./Components/Navbar";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import RoundTrips from "./Pages/RoundTrips.jsx";
import Carpooling from "./Pages/Carpooling.jsx";
import CarpoolingProfile from "./Pages/CarpoolingProfile.jsx";
import RoundTripProfile from "./Pages/RoundTripProfile.jsx";
import Profile from "./Pages/Profile.jsx";
import Logout from "./Pages/Logout.jsx";
import Doctor from "./Pages/Doctor.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar></Navbar>
          <Home></Home>,
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar></Navbar>
          <Login></Login>,
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar></Navbar>
          <Register></Register>,
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Navbar></Navbar>
          <Admin></Admin>,
        </>
      ),
    },
    {
      path: "/roundTrips",
      element: (
        <>
          <Navbar></Navbar>
          <RoundTrips />,
        </>
      ),
    },
    {
      path: "/carpooling",
      element: (
        <>
          <Navbar></Navbar>
          <Carpooling></Carpooling>,
        </>
      ),
    },
    {
      path: "/roundtrip",
      element: (
        <>
          <Navbar></Navbar>
          <RoundTrips></RoundTrips>,
        </>
      ),
    },
    {
      path: "/carpooling/:carp",
      element: (
        <>
          <Navbar></Navbar>
          <CarpoolingProfile></CarpoolingProfile>,
        </>
      ),
    },
    {
      path: "/roundtrip/:trip",
      element: (
        <>
          <Navbar></Navbar>
          <RoundTrips></RoundTrips>,
        </>
      ),
    },
    {
      path: "/patient/:patient",
      element: (
        <>
          <Navbar></Navbar>
          <Profile></Profile>,
        </>
      ),
    },
    {
      path: "/doctor/:person",
      element: (
        <>
          <Navbar></Navbar>
          <Doctor></Doctor>
        </>
      ),
    },
  ]);

  return (
    <div className="min-h-[100vh] bg-blue-300 flex flex-col align-middle self-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
