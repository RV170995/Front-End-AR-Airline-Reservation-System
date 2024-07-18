import axios from "axios";
import React, { useEffect,  useState } from "react";
import { Link, useParams } from "react-router-dom";

const  ViewAirport = () => {
  const [airport, setAirport] = useState({
    airport_code: "",
    airport_name: "",
    location: "",
  });

  const { airport_code } = useParams();

  useEffect(() => {
    loadAirport();
  }, []);

  const loadAirport = async () => {
    const result = await axios.get(`http://localhost:8080/airports/${airport_code}`);
    setAirport(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">airports Details</h2>

          <div className="card">
            <div className="card-header">
              Details of airports airport_code : {airport.airport_code}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {airport.airport_code}
                </li>
                <li className="list-group-item">
                  <b>airportName:</b>
                  {airport.airport_name}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {airport.location}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewAirport;