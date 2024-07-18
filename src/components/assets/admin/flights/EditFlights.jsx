import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditFlights() {
  let navigate = useNavigate();
  const { f_id } = useParams(); 

  const [flight, setFlights] = useState({
    f_id:"",
    date:"",
    d_time:"",
    a_time:"",
    origin:"",
    country:"",
    seats:"",
    destination:""

  });

  const { date, d_time,a_time,origin,destination,country,seats} = flight;

  const onInputChange = (e) => {
    setFlights({ ...flight, [e.target.name]: e.target.value });
  };


  const loadFlights = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/flights/${f_id}`);
    setFlights(result.data);
  }, [f_id]);

  useEffect(() => {
    loadFlights();
  }, [loadFlights]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/flights/update/${f_id}`, flight);
    navigate("/DashBoard/FlightDetails");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Flights</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="f_id" className="form-label">
              Flight Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter airport code"
                name="f_id"
                value={f_id}
                onChange={(e) => onInputChange(e)}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Arival Time
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="a_time"
                value={a_time}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Departure Time
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="d_time"
                value={d_time}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Origin
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="origin"
                value={origin}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Destination
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="destination"
                value={destination}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="country"
                value={country}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Seats
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="seats"
                value={seats}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/DashBoard/FlightDetails">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}