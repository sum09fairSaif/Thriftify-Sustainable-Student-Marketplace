import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./frontend/MainLanding/MainLanding";
import Auth from "./frontend/Auth";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/your-profile" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
