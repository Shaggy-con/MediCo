import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPatient from "./pages/LoginPatient";
import RegisterPatient from "./pages/RegisterPatient";
import LoginDoctor from "./pages/LoginDoctor";
import RegisterDoctor from "./pages/RegisterDoctor";
import PatientProfile from "./pages/PatientProfile";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorSchedule from "./pages/DoctorSchedule";
import ERPage from "./pages/ERPage";
import FinancePage from "./pages/FinancePage";
import PharmacyPage from "./pages/PharmacyPage";
import PatientDiagnosis from "./pages/PatientDiagnosis";
import PharmacyChart from "./pages/PharmacyChart";
import FinanceChart from "./pages/FinanceChart";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/patient" element={<LoginPatient />} />
        <Route path="/register/patient" element={<RegisterPatient />} />
        <Route path="/login/doctor" element={<LoginDoctor />} />
        <Route path="/register/doctor" element={<RegisterDoctor />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/schedule" element={<DoctorSchedule />} />
        <Route path="/er" element={<ERPage />} />
        <Route path="/finances" element={<FinancePage />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/diagnosis" element={<PatientDiagnosis />} />
        <Route path="/pharmacy/charts" element={<PharmacyChart />} />
        <Route path="/finances/charts" element={<FinanceChart />} />
      </Routes>
    </Router>
  );
}
