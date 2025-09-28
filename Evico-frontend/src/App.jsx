import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ActivationPage from "@/pages/auth/Activation";
import Dashboard from "@/pages/Dashboard";
import PublicLayout from "./layouts/PublicLayout";
// import './App.css';
function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activation" element={<ActivationPage />} />
    
        <Route
          element={<PublicLayout />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>


      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
