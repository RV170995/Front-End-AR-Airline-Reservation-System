import React from "react";
import "./a_style.css";

const A_navigation = () =>
{
    return(
        <div className="Container">
             <header className="header-h">
                <a href="/" className="logo">AR Airline</a>
                <nav className="nav-item">
                    <a href="/">Log Out</a>
                </nav>
            </header>
            <div className="vertical-menu">
                <a href="/" className="active">Dashboards</a>
                <div className="dropdown">
                    <a className="dropbtn">Users
                    </a>
                    <div className="dropdown-content">
                        <a href="/Dashboard/User">Add</a>
                        <a href="/Dashboard/UserDetails">Show Details</a>
                    </div>
                </div> 
                <a href="/Dashboard/RegistrationDetails">Passenger Registration</a>
                <a href="/Dashboard/ReservationDetails">Reservation</a>
                <div className="dropdown">
                    <a className="dropbtn">Flights</a>
                    <div className="dropdown-content">
                        <a href="/Dashboard/Flight">Add</a>
                        <a href="/Dashboard/FlightDetails">Show Details</a>
                    </div>
                </div> 
                <div className="dropdown">
                    <a className="dropbtn">Airlines</a>
                    <div className="dropdown-content">
                        <a href="/Dashboard/Airlines">Add</a>
                        <a href="/Dashboard/AirlineDetails">Show Details</a>
                    </div>
                </div>  
                <div className="dropdown">
                    <a className="dropbtn">Airports</a>
                    <div className="dropdown-content">
                        <a href="/Dashboard/addAirport">Add</a>
                        <a href="/Dashboard/AirportDetails">Show Details</a>
                    </div>
                </div> 
        </div>
        </div>
    );
}

export default A_navigation;