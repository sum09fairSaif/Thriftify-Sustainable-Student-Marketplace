import React, { useState } from "react";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import ToggleLoginSignup from "./Toggle-LogIn-SignUp/ToggleLoginSignup";
import "./Auth.css";

const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleToggle = () => {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <div className={`auth-shell ${mode === "signup" ? "signup-active" : ""}`}>
      <div className="auth-card">
        <div className="auth-left">
          <ToggleLoginSignup mode={mode} onToggle={handleToggle} />
        </div>

        <div className="auth-right">
          {mode === "login" ? <LogIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
