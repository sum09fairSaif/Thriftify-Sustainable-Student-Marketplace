import React, { useState } from "react";
import "./Toggle-LogIn-SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ToggleLoginSignup: React.FC = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        setIsRegisterActive(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Login successful") {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="toggle-page">
      <div className={`container ${isRegisterActive ? "active" : ""}`}>
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Log In</h1>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bx bxs-envelope" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bxs-lock-alt" />
            </div>

            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <p>or login with the following social platforms</p>

            <div className="social-icons">
              <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-837817117%3A1771783300020238&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ASfE1-qPFIYaewP9VyuqP7RLGcqMmm_ziunTgbIWIR46EV1X2sq31rRxWP0FhXvQncrpU4bF3TpU&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <i className="bx bxl-google" />
              </a>
              <a href="https://www.facebook.com/login/">
                <i className="bx bxl-facebook" />
              </a>
              <a href="https://www.instagram.com/accounts/login/">
                <i className="bx bxl-instagram" />
              </a>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Sign Up</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <i className="bx bxs-user" />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bx bxs-envelope" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bx bxs-lock-alt" />
            </div>

            <button type="submit" className="btn">
              Signup
            </button>

            <p>or sign up with the following social platforms</p>

            <div className="social-icons">
              <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-837817117%3A1771783300020238&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ASfE1-qPFIYaewP9VyuqP7RLGcqMmm_ziunTgbIWIR46EV1X2sq31rRxWP0FhXvQncrpU4bF3TpU&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <i className="bx bxl-google" />
              </a>
              <a href="https://www.facebook.com/login/">
                <i className="bx bxl-facebook" />
              </a>
              <a href="https://www.instagram.com/accounts/login/">
                <i className="bx bxl-instagram" />
              </a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome to Thriftify!</h1>
            <p>Don't have an account?</p>
            <button
              type="button"
              className="btn register-btn"
              onClick={() => setIsRegisterActive(true)}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome back to thrifting with us!</h1>
            <p>Already have an account?</p>
            <button
              type="button"
              className="btn login-btn"
              onClick={() => setIsRegisterActive(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleLoginSignup;
