import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./style.css";

const  Contact = () =>
{
    return (
        <div className="Container">
            <Navigation/>
            <div className="abt-intro">
            <div className="about">
                
            </div>
            <div className="about-1">
                <h2>Contact Us</h2>
                <ul>
                    <li>- CIN : L62100DL2004PLC129768</li>
                    <li>- Upper Ground Floor, Thapar House, Gate No. 2, Western Wing, 124 Janpath, New Delhi – 110001 India.</li>
                    <li>- Fax : +91 11-43513200</li>
                    <li>- To share your feedback/complaints/suggestions or to reach out to our Customer Experience Team, please click here.</li>
                    <li>- For comments, concerning Civil Aviation Requirement, Section -3, please contact- Air Transport, Series M, Part IV. You may write to:</li>
                    <li>- Nodal Officer, Isha Gandhi at nodalofficer@goar.in or Click Here</li>
                    <li>- Appellate Authority, Amrita Gill at appellateauthority@goAR.in</li>
                </ul>
                </div>
                <div className="about-2">
                    <h4>India by AR</h4>
                    <ul>
                        <li>- Third floor, Emaar Capital Tower 2, Mehrauli - Gurgaon Road, Gurugram, Haryana – 122002</li>
                        <li>- Tel : +91 (0)124 435 2500</li>
                        <li>- Fax : +91 (0)124 406 8536</li>
                        <li>- Click Here to share your feedback/compliments</li>
                    </ul>
                </div>

                <div className="about-3">
                    <h4>Customer Support</h4>
                    <li>- India : 0124-6173838, 0124-4973838</li>
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                </div>
            </div>
            <Footer/>
        </div>
    );

}   
export default Contact;