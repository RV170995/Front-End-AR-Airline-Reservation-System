import React from "react"
import "./style.css";

const Footer = () =>
{
    return(
        <div>
            <footer className="footer">
            <div className="bottom-links">
            <div className="links">
                <span>More Info</span>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </div>
            </div>
            <div className="copy">©2024 Developer</div>
            </footer>
        </div>
    );
}


export default Footer;