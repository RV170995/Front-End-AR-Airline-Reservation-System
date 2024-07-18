import React from "react";


const PassengerDashboard = () =>
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
                <a href="/SearchF">Search Flights</a>
                <a href="/PassengerDashboard/ProfileEdit">Profile Edit</a>
            </div>
        </div>
    );
}

export default PassengerDashboard;