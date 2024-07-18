import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import "../a_style.css";
import A_navigation from "./A_navigation";

const ReservationDetails  = () => 
  {
    const [reservation, setReservation] = useState([]);
  
    const {reservId} = useParams();
  
   useEffect(() => {
      loadReservation();
   },[]);
  
  
   const  loadReservation = async () => {
    const result = await axios.get("http://localhost:8080/reservation");
    setReservation(result.data);
   }

   const deleteReservation = async (reg_id) => {
    await axios.delete(`http://localhost:8080/reservation/delete/${reservId}`);
    loadReservation();
  };
  return (
    <div className="Container">
    <A_navigation/>
      <div className="rev_intro">
      <h3>reservation Details</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Conatact</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Arival time</th>
              <th scope="col">Departure Time</th>
              <th scope="col">Origin</th>
              <th scope="col">Destination</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
                {reservation.map((reservation, index) => (
                  <tr>
                    <td scope="row" key={index}>
                      {index + 1}
                    </td>
                    <td>{reservation.reservId}</td>
                    <td>{reservation.name}</td>
                    <td>{reservation.age}</td>
                    <td>{reservation.address}</td>
                    <td>{reservation.email}</td>
                    <td>{reservation.contact}</td>
                    <td>{reservation.amount}</td>
                    <td>{reservation.date}</td>
                    <td>{reservation.arrivalTime}</td>
                    <td>{reservation.departureTime}</td>
                    <td>{reservation.origin}</td>
                    <td>{reservation.destination}</td>
                    <td>{reservation.paymentMode}</td>
                    <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteReservation(reservation.reservId)}
                  >
                    Delete
                  </button></td>
                 
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReservationDetails;