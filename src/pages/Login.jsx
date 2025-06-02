import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/authentication.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Form submitted succesfully");
    console.log(formData);
    setMessage("Login successful.");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-heading">
            <button className="back-to-home"><Link to='/'>Back</Link></button>
          <h2>Sign in to Your Account</h2>
        </div>
        <form action="" onSubmit={submitForm} className="auth-form">
          <div className="auth-inputs">
            <div className="auth-input">
              <label htmlFor="">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="auth-input">
              <label htmlFor="">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                name="newPassword"
                id="newpassword"
                value={formData.newPassword}
                onChange={handleChange}
              />
              <div className="toggle-password"></div>
            </div>
          </div>
          <div className="forget-password">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="message">{message}</div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="toggle-form">
          <p>
            new to Rent Now? <Link to="/signup">create account</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
