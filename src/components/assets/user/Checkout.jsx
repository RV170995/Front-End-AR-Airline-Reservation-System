import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navigation from "./Navigation";

const Checkout = () => {
  let navigate = useNavigate();
  const { f_id } = useParams();

  const [flights, setFlights] = useState({
    f_id: "",
    date: "",
    d_time: "",
    a_time: "",
    origin: "",
    destination: "",
  });

  const [reservation, setReservation] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    contact: "",
    amount: "",
    paymentMode: "",
    date: "",
    arrivalTime: "",
    departureTime: "",
    origin: "",
    destination: "",
  });

  const loadFlights = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/flights/${f_id}`);
    setFlights(result.data);
    setReservation((prevReservation) => ({
      ...prevReservation,
      date: result.data.date,
      arrivalTime: result.data.a_time,
      departureTime: result.data.d_time,
      origin: result.data.origin,
      destination: result.data.destination,
    }));
  }, [f_id]);

  useEffect(() => {
    loadFlights();
  }, [loadFlights]);

  const onInputChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/reservation/add", reservation);
    navigate("/");
  };

  return (
    <div className="">
      <Navigation />
      <div className="">
        <div className="col-md-5 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Checkout</h2>
          <div className="card">
            <div className="card-header">
              <div className="mb-3">Date: {flights.date}</div>
              <div className="mb-3">Arrival Time: {flights.a_time}</div>
              <div className="mb-3">Departure Time: {flights.d_time}</div>
              <div className="mb-3">Origin: {flights.origin}</div>
              <div className="mb-3">Destination: {flights.destination}</div>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={reservation.name}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Age" className="form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your age"
                    name="age"
                    value={reservation.age}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    name="address"
                    value={reservation.address}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Email Id.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={reservation.email}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Contact" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your contact no"
                    name="contact"
                    value={reservation.contact}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Amount" className="form-label">
                    Total Amount
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the total amount"
                    name="amount"
                    value={reservation.amount}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="PaymentMode" className="form-label">
                    Payment Mode
                  </label>
                  <select
                    id="paymentMode"
                    name="paymentMode"
                    value={reservation.paymentMode}
                    className="form-control"
                    onChange={onInputChange}
                    required
                  >
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="net_banking">Net Banking</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Checkout
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

























































































