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
            <a
              href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-99415363%3A1771754183950655&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ASfE1-rSGIGsff9leBqHxrLOj5SJFjxUzCohQgMYscGeUzjdMXecWIFvp4Ep3VOio9OYOt4FRuY8&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              aria-label="Google"
            >
              <i className="bx bxl-google"></i>
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
