import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../a_style.css";
import A_navigation from "../A_navigation";


const  FlightDetails = () =>
    {
    const [flights, setFlights] = useState([]);
  
    const {f_id } = useParams();
  
   useEffect(() => {
      loadFlights();
   },[]);
  
  
   const  loadFlights = async () => {
    const result = await axios.get("http://localhost:8080/flights");
    setFlights(result.data);
   }

   const deleteFlight = async (f_id) => {
    await axios.delete(`http://localhost:8080/flights/delete/${f_id}`);
    loadFlights();
  };

    return (
        <div className="Container">
        <A_navigation/>
          <div className="rev_intro">
          <h3>Flights Details</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Date</th>
                  <th scope="col">Departure Time</th>
                  <th scope="col">Arrival Time</th>
                  <th scope="col">Origin</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Country</th>
                  <th scope="col">Seats</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flights, index) => (
                  <tr>
                    <td scope="row" key={index}>
                      {index + 1}
                    </td>
                    <td>{flights.date}</td>
                    <td>{flights.d_time}</td>
                    <td>{flights.a_time}</td>
                    <td>{flights.origin}</td>
                    <td>{flights.destination}</td>
                    <td>{flights.country}</td>
                    <td>{flights.seats}</td>
                    <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteFlight(flights.f_id)}
                  >
                    Delete
                  </button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );

}   
export default FlightDetails;