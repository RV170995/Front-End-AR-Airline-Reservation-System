import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAirlines() {
  let navigate = useNavigate();
  const { a_id } = useParams(); 

  const [airline, setAirline] = useState({
    a_name:"",
    contact:"",
    region:""

  });

  const { a_name, contact,region,} = airline;

  const onInputChange = (e) => {
    setAirline({ ...airline, [e.target.name]: e.target.value });
  };


  const loadAirport = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/airlines/${a_id}`);
    setAirline(result.data);
  }, [a_id]);

  useEffect(() => {
    loadAirport();
  }, [loadAirport]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/airlines/update/${a_id}`, airline);
    navigate("/DashBoard/AirlineDetails");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Airlines</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="a_id" className="form-label">
                Airline Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter airport code"
                name="a_id"
                value={a_id}
                onChange={(e) => onInputChange(e)}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="a_name" className="form-label">
                Airline Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter airport name"
                name="a_name"
                value={a_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
              Contact
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter contact"
                name="contact"
                value={contact}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="region" className="form-label">
              Region
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter region"
                name="region"
                value={region}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/DashBoard/AirlineDetails">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}