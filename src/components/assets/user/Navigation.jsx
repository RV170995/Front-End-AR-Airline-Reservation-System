import React from "react";


const Navigation = () =>
{
    return(
        <div className="Container">
           <header className="header">
                <a href="/Home" className="logo">AR Airline</a>
                <nav className="nav-items">
                    <a href="/">Home</a>
                    <a href="/Search">Search Flight</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                    <a href="/Login">Login</a>
                    <a href="/Registration">Register</a>
                </nav>
            </header>
         </div>
    );
}

export default Navigation;