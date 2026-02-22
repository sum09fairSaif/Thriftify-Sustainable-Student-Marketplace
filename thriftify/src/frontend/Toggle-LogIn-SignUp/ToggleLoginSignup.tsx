import React from "react";
import "./ToggleLoginSignup.css";

type ToggleProps = {
  mode: "login" | "signup";
  onToggle: () => void;
  disabled?: boolean;
};

const ToggleLoginSignup: React.FC<ToggleProps> = ({
  mode,
  onToggle,
  disabled = false,
}) => {
  const isLogin = mode === "login";

  return (
    <div className="toggle-panel">
      <h1>
        {isLogin
          ? "Hello, Welcome to Thriftify!"
          : "Welcome back to thrifting at Thriftify!"}
      </h1>

      <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>

      <button
        type="button"
        className="toggle-btn"
        onClick={onToggle}
        disabled={disabled}
      >
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default ToggleLoginSignup;
