import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./style.css";

const Home = () =>
    {
        return(
            <div className="Container">
            <Navigation/>
                <main>
                    <div className="intro">
                    <h1>AR Airline Reservation System</h1>
                    <p>Reach with us to reach your destination.</p>
                    <button><a className="a" href="/SearchFlightPage">Search Flights</a></button>
                    </div>
                    <div className="achievements">
                    <div className="work">
                        <i className="fas fa-atom"></i>
                        <p className="work-heading">Why choose AR Airlines</p>
                        <p className="work-text">
                        &nbsp;&nbsp; &nbsp; &nbsp;When you book flight with AR, you fly on-time, every time, daily, and non-stop. 
                        Get the lowest booking and cancellation fee, exclusive offers,
                         add-ons and in-flight services that make your journey hassle-free.
                          Now, you can download the app and travel on the go, with AR.
                        </p>
                    </div>
                    <div className="work">
                        <i className="fas fa-skiing"></i>
                        <p className="work-heading">India and Abroad </p>
                        <p className="work-text">
                        &nbsp;&nbsp; &nbsp; &nbsp;Choose from over 80+ domestic, and 30+ international destinations when you book with AR. 
                        Enjoy the 6E experience when you fly across the world with our 7 codeshare partners -
                         from France to Australia, and beyond.Book your preferred flight on our website and let us fly you across India and the world.</p>

                    </div>
                    <div className="work">
                        <i className="fas fa-ethernet"></i>
                        <p className="work-heading">The complete 6E experience</p>
                        <p className="work-text">&nbsp;&nbsp; &nbsp; &nbsp;With AR, you fly hassle-free, from beginning to end, when you pre-book our 6E Services.
                         From priority check-in and anytime boarding, to complimentary snacks and doorstep baggage delivery 
                         – you can personalise your journey, every step of the way, when you say ‘Let’s Air’..</p>
                    </div>
                    </div>
                    <div className="about-me">
                    <div className="about-me-text">
                        <h2>About Me</h2>
                        <p> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; AR is India’s largest and most preferred passenger airline and amongst the fastest growing airlines in the world.
                            We have a simple philosophy: offer fares that are affordable, flights that are on time, 
                            and provide a courteous and hassle-free travel experience across our unparalleled network. 
                            We show that low cost does not mean low quality. With our fleet of over 360 aircraft,
                            we operate well over 2,000 daily flights, connecting over 110+ destinations (of which 33 international), 
                            welcoming 100+ million customers on board last year. We have an industry leading on-time performance
                            and one of the highest customer NPS in the Indian market. At IndiGo, we will continue to extend our scope, 
                            by spreading our wings internationally,
                            developing from a domestic carrier to a global aviation leader.. <a href = "/About">more</a></p>
                    </div>
                    <img src=""></img>   </div>
                </main>
                <Footer/>
            </div>

        )
    };
export default Home;