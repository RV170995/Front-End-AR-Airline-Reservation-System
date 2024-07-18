import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./style.css";

const  About = () =>
{
    return (
        <div className="Container">
            <Navigation/>
            <div className="abt-intro">
            <div className="about">
                
            </div>
            <div className="about-1">
                <h4>About US</h4>
                <p>AR is India’s largest and most preferred passenger airline and amongst the fastest growing airlines in the world.
                    We have a simple philosophy: offer fares that are affordable, 
                    flights that are on time, and provide a courteous and hassle-free travel experience across our unparalleled network. 
                    We show that low cost does not mean low quality. With our fleet of over 360 aircraft, we operate well over 2,000 daily flights, 
                    connecting over 110+ destinations (of which 33 international), welcoming 100+ million customers on board last year. 
                    We have an industry leading on-time performance and one of the highest customer NPS in the Indian market. At AR,
                    we will continue to extend our scope, by spreading our wings internationally, 
                    developing from a domestic carrier to a global aviation leader.</p>
                </div>
                <div className="about-2">
                    <h4>India by AR</h4>
                    <p>Right from AR’s start, it has been our mission to connect the vast and diverse India, 
                    supporting social cohesion, mobility and economic progress. With our unparalleled network we are giving wings to the nation,
                     enabling air travel to all large, medium, and smaller cities across India. 
                     Our many first-time flyers are a true testimony to this, just as the economy and trade that can flourish as a 
                     result of all these connections. And so, our purpose is ‘Giving wings to the nation, by connecting people and aspirations’.
                     This is also briefly captured as ‘India by AR’.</p>
                </div>

                <div className="about-3">
                    <h4>Our People and our Values</h4>
                    <p>We understand that a highly engaged and motivated workforce leads to higher levels of customer service. Our core strength lies in our highly skilled, motivated, and engaged employees, who enable us to deliver the courteous and hassle-free service to the 300,000 passengers flying with us each day. The teamwork displayed by our employees is tangible across our stations and departments. We are proud to have ifly, one of the largest aviation training academies in the world, where the AR spirit is created for over 2,000 people a day.</p>
                    <p>Over the years a strong AR culture has been build and nurtured. This is centered around our five core values - Always safe, Passionately consistent, Service from the heart, Humility with pride, and Power of We - which our staff exhibit in their daily work. With our Made in AR program, we give room to our home-grown 6E employees to flourish.</p>
                </div>

                <div className="about-4">
                    <h4>Sustainability commitment</h4>
                    <p>Being a responsible airline, we believe that Corporate Social Responsibility (CSR) is an important aspect of our growth strategy. Our CSR arm, ARReach, contributes towards the goal of sustainable development for communities. It focuses on four themes: children and education, women empowerment, environment, and heritage. With different programs being implemented across 18 Indian states we have been able to reach over 100,000 beneficiaries.</p>
                </div>

                <div className="about-5">
                    <h4>Recognitions</h4>
                    <ul>
                    <h4>As India’s most preferred airline, we were recognized by several reputed organizations from around the world:</h4>
                        <li>We were awarded with the CAPA Environmental Sustainability Awards for 2023 in the category Asia Environmental Sustainability Airline of the Year.</li>
                        <li>We were awarded with “World’s Youngest Aircraft Fleet” in the 100+ aircraft category by ch-aviation.</li>
                        <li>We were ranked as the 5th most punctual mega airline in the world by the Official Aviation Guide (‘OAG’).</li>
                        <li>We were awarded as the “Best Low-Cost Airline in India & South Asia” by SkyTrax in 2023, for the 13th time in a row.</li>  
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );

}   
export default About;