import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import A_navigation from "../A_navigation";


const  Airlines = () =>
{

    let navigate = useNavigate();
      
    const [airline, setAirline] = useState({
      a_name:"",
      contact:"",
      region:""
  
    });
  
    const { a_name, contact,region,} = airline;
  
    const onInputChange = (e) => {
      setAirline({ ...airline, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/airlines/add", airline);
      navigate("/Dashboard/AirlineDetails");
    };


    return (
        <div className="Contain">
            <A_navigation/>
            
            <div className="row">
            <div className="abcda">
          <h2 className="text-center m-4">Add Airline</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Airline Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Name"
                name="a_name"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Contact 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="contact"
                name="contact"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Region
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Region"
                name="region"
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
export default Airlines;