import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./style.css";

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    emailID: "",
    pswd: "",
  });

  const { emailID, pswd } = credentials;

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", credentials, { withCredentials: true });
      const role = response.data;

      if (role === "ROLE_ADMIN") {
        navigate("/Dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="Container">
      <Navigation />
      <div className="row">
        <div className="col-md-4 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="emailID" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="emailID"
                value={emailID}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pswd" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="pswd"
                value={pswd}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <br/>
            dont have an account?
            <Link className="" to="/Registration">
              Register
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;