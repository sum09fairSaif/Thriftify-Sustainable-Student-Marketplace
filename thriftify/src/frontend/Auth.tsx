import React, { useState } from "react";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import ToggleLoginSignup from "./Toggle-LogIn-SignUp/ToggleLoginSignup";
import "./Auth.css";

const Auth: React.FC = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [overlayMode, setOverlayMode] = useState<"login" | "signup">("login");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCovering, setIsCovering] = useState(false);

  const handleToggle = () => {
    if (isTransitioning) return;

    const nextMode = mode === "login" ? "signup" : "login";
    setIsTransitioning(true);
    setIsCovering(true);

    window.setTimeout(() => {
      setMode(nextMode);
      setOverlayMode(nextMode);
    }, 520);

    window.setTimeout(() => {
      setIsCovering(false);
    }, 1520);

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 2300);
  };

  return (
    <div className={`auth-shell ${mode === "signup" ? "signup-active" : ""}`}>
      <div className="auth-card">
        <div className="auth-forms">
          <div
            className={`auth-pane auth-pane-login ${mode === "login" ? "is-active" : "is-hidden"}`}
          >
            <LogIn />
          </div>

          <div
            className={`auth-pane auth-pane-signup ${mode === "signup" ? "is-active" : "is-hidden"}`}
          >
            <SignUp />
          </div>
        </div>

        <div
          className={`auth-overlay ${isTransitioning ? "is-switching" : ""} ${isCovering ? "is-covering" : ""}`}
        >
          <ToggleLoginSignup
            mode={overlayMode}
            onToggle={handleToggle}
            disabled={isTransitioning}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
