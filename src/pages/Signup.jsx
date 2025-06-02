import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/authentication.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Form submitted succesfully");
    console.log(formData);
    setMessage("Form submitted successfully.");

    setTimeout(() => {
      setFormData({
        username: "",
        contact: "",
        email: "",
        newPassword: "",
        confirmPassword: "",
        userType: "",
      });

      setMessage("");
    }, 5000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
         <div className="auth-form-heading">
          <button className="back-to-home"><Link to='/'>Back</Link></button>
          <h2>Create new Account</h2>
        </div>
        <form action="" onSubmit={submitForm} className="auth-form">
          <div className="auth-inputs">
            <div className="auth-input">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="username"
                id="name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="contact-n-usertype">
              <div className="auth-input user-contact">
                <label htmlFor="">
                  Contact No. <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="auth-input user-type">
                <label htmlFor="">
                  Select User Type <span className="required">*</span>
                </label>
                <select name="userType" id="userType" onChange={handleChange}>
                  <option value="select">--select Role--</option>
                  <option value="owner">Room Owner</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>

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
                New password <span className="required">*</span>
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
            <div className="auth-input">
              <label htmlFor="">
                Confirm password <span className="required">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmpassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="message">{message}</div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="toggle-form">
          <p>
            already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
