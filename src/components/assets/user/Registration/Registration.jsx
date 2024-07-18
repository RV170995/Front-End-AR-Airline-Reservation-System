
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";

import "../style.css";

const  Registration = () =>
{

    let navigate = useNavigate();

  const [registration, setRegistration] = useState({
    f_name: "",
    l_name: "",
    mob_no: "",
    address: "",
    emailID:"",
    password:""

  });

  const { f_name,l_name,mob_no,address,emailID ,pswd} = registration;

  const onInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/registration/add", registration);
    navigate("/");
  };
    return (
        <div className="Container">
        <Navigation/>
        <div className="row">
          <div className="col-md-4 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Registration</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  First Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your first name"
                  name="f_name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Last Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your last name"
                  name="l_name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobno" className="form-label">
                  Mobile no
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your mobile no"
                  name="mob_no"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Address
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your address"
                  name="address"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  EmailId
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your email"
                  name="emailID"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Password
                </label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Enter your password"
                  name="pswd"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <br/>
            have a account?
            <Link className="" to="/login">
              Login
            </Link>
          </form>
        </div>
      </div><Footer/>
      </div>
    );

}   
export default Registration;