import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./frontend/MainLanding/MainLanding";
import ToggleLoginSignup from "./frontend/Toggle-LogIn-SignUp/Toggle-LogIn-SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/your-profile" element={<ToggleLoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
