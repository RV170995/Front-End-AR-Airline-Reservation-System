
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import A_navigation from "../A_navigation";

export default function AddAirport() {
  let navigate = useNavigate();

  const [airport, setAirport] = useState({
    airport_code: "",
    airport_name: "",
    location: "",
  });

  const { airport_code, airport_name, location } = airport;

  const onInputChange = (e) => {
    setAirport({ ...airport, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/airports/add", airport);
    navigate("/Dashboard/AirportDetails");
  };

  return (
    <div className="Contain">
    <A_navigation/>
    
    <div className="row">
        <div className="demo">
          {/* <h2 className="text-center m-4">Register User</h2> */}
          <h2 className="text-center m-4">Add Airport</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Airport Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="enter code"
                name="airport_code"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Airport Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="airport_name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your location"
                name="location"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Dashboard">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}