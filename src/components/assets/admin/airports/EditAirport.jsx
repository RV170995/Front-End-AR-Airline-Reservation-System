import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAirport = () => {
  let navigate = useNavigate();
  const { airport_code } = useParams(); // Get the airport_code from the URL

  const [airport, setAirport] = useState({
    airport_code: "",
    airport_name: "",
    location: "",
  });

  const { airport_name, location } = airport;

  const onInputChange = (e) => {
    setAirport({ ...airport, [e.target.name]: e.target.value });
  };

  const loadAirport = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/airports/${airport_code}`);
    setAirport(result.data);
  }, [airport_code]);

  useEffect(() => {
    loadAirport();
  }, [loadAirport]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/airports/update/${airport_code}`, airport);
    navigate("/Dashboard/AirportDetails");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Airport</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="airport_code" className="form-label">
                Airport Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter airport code"
                name="airport_code"
                value={airport_code}
                onChange={(e) => onInputChange(e)}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="airport_name" className="form-label">
                Airport Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter airport name"
                name="airport_name"
                value={airport_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Dashboard/AirportDetails">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAirport;