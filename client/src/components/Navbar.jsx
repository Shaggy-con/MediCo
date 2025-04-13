import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post(
      "http://localhost:8080/api/auth/logout",
      {},
      { withCredentials: true }
    );
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">MediCore</Link>
      </div>
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/login/patient" className="hover:underline">
          Patient Login
        </Link>
        <Link to="/register/patient" className="hover:underline">
          Patient Register
        </Link>
        <Link to="/login/doctor" className="hover:underline">
          Doctor Login
        </Link>
        <Link to="/register/doctor" className="hover:underline">
          Doctor Register
        </Link>
        <Link to="/patient/profile" className="hover:underline">
          My Profile
        </Link>
        <Link to="/doctor/profile" className="hover:underline">
          Doctor Dashboard
        </Link>
        <Link to="/doctor/schedule" className="hover:underline">
          Schedule
        </Link>
        <Link to="/pharmacy" className="hover:underline">
          Pharmacy
        </Link>
        <Link to="/finances" className="hover:underline">
          Finances
        </Link>
        <Link to="/er" className="hover:underline">
          ER
        </Link>
        <Link to="/diagnosis" className="hover:underline">
          My Diagnosis
        </Link>
        <Link to="/pharmacy/charts" className="hover:underline">
          Pharmacy Chart
        </Link>
        <Link to="/finances/charts" className="hover:underline">
          Finance Chart
        </Link>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded ml-4"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
