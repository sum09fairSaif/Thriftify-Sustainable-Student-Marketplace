import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="auth-form-content">
        <form className="auth-form" action="#">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <p>or login with social platforms</p>

          <div className="social-icons">
            <a href="#" aria-label="Google">
              <i className="bx bxl-google"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
