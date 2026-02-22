import React from "react";
import "./ToggleLoginSignup.css";

type ToggleProps = {
  mode: "login" | "signup";
  onToggle: () => void;
};

const ToggleLoginSignup: React.FC<ToggleProps> = ({ mode, onToggle }) => {
  const isLogin = mode === "login";

  return (
    <div className={`toggle-panel ${isLogin ? "toggle-right" : "toggle-left"}`}>
      <h1>
        {isLogin
          ? "Welcome back to thrifting at Thriftify!"
          : "New here? Start thrifting with Thriftify!"}
      </h1>

      <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>

      <button type="button" className="toggle-btn" onClick={onToggle}>
        {isLogin ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
};

export default ToggleLoginSignup;
