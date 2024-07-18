import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import A_navigation from "../A_navigation";


// import "../a_style.css";

const  Flight = () =>
{    
          let navigate = useNavigate();
      
        const [flights, setflights] = useState({
          date: "",
          d_time: "",
          a_time: "",
          origin: "",
          destination:"",
          country:"",
          seats:""
      
        });
      
        const { date,d_time,a_time,origin,destination,country,seats} = flights;
      
        const onInputChange = (e) => {
          setflights({ ...flights, [e.target.name]: e.target.value });
        };
      
        const onSubmit = async (e) => {
          e.preventDefault();
          await axios.post("http://localhost:8080/flights/add", flights);
          navigate("/Dashboard/FlightDetails");
        };


    return (
        <div className="Contain">
            <A_navigation/>
            
            <div className="row">
            <div className="demo">
          <h2 className="text-center m-4">Add Flight</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Date"
                name="date"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Arival Time
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter arival time"
                name="a_time"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Departure Time
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter departure time"
                name="d_time"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Origin
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter origin"
                name="origin"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Destination
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter destination"
                name="destination"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Country
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter country"
                name="country"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Seats
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter seats"
                name="seats"
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
export default Flight;