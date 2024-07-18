import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./search.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Search = () => {
  const [flights, setFlights] = useState([]);
  const [cities, setCities] = useState([]);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [origin, setOrigin] = useState('');
  const [loading, setLoading] = useState(false);

  const loadFlights = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:8080/flights");
    setFlights(result.data);
    setLoading(false);
  };

  const loadCities = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:8080/flights/cities");
    setCities(result.data);
    setLoading(false);
  };

  useEffect(() => {
    loadFlights();
    loadCities();
  }, []);

  const searchFlights = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:8080/flights/search", {
      params: {
        origin,
        destination,
        // date
      }
    });
    setFlights(result.data);
    setLoading(false);
  };

  return (
    <div className="search">
      <Navigation />
      <header>
      <div className="search-bar">
        <div className="input-group">
          <label htmlFor="origin">From</label>
          <select id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="destination">To</label>
          <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={date} onChange={(e) =>{ setDate(e.target.value);
          console.log(e)}} />
        </div>
        <button className="btn btn-primary mx-2" onClick={searchFlights}>Search</button>
      </div>
      </header>
      <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Departure Time</th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Origin</th>
              <th scope="col">Destination</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.date}</td>
                <td>{flight.d_time}</td>
                <td>{flight.a_time}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/Checkout/${flight.f_id}`}>
                    Book
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </main>
      <Footer />
    </div>
  );
};

export default Search;



































































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import "./search.css";
// import Navigation from "./Navigation";
// import Footer from "./Footer";


// const  Search = () =>
//     {
//     const [flights, setFlights] = useState([]);
//     const [destination, setDestination] = useState('');
//     const [date, setDate] = useState('');
//     const [origin, setOrigin] = useState('');
  
//     const {f_id } = useParams();

//    useEffect(() => {
//       loadFlights();
//    },[]);
  
  
//    const  loadFlights = async () => {
//     const result = await axios.get("http://localhost:8080/flights");
//     setFlights(result.data);
//    }
//    const filteredFlights = flights.filter(flight => 
//     flight.origin == origin && flight.destination == destination && flight.date == date
//   );

//   const cities = ['Hyderabad', 'Chennai', 'Delhi', 'Mumbai', 'Bangalore','Pune'];


//     return (
//       <div className="search">
//       <Navigation/>
      
//       <div className="search-bar">
//           <div className="input-group">
//             <label htmlFor="origin">From</label>
//             <select id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
//               <option value="">Select City</option>
//               {cities.map((origin, index) => (
//                 <option key={index} value={origin}>{origin}</option>
//               ))}
//             </select>
//           </div>
//           <div className="input-group">
//             <label htmlFor="destination">To</label>
//             <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
//               <option value="">Select City</option>
//               {cities.map((origin, index) => (
//                 <option key={index} value={origin}>{origin}</option>
//               ))}
//             </select>
//           </div>
//           <div className="input-group">
//             <label htmlFor="date">Date</label>
//             <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
//           </div>
//           <button>Search</button>
//         </div>

//         <table>
//         <tr>
//         <th scope="col">Date</th>
//         <th scope="col">departureure Time</th>
//         <th scope="col">Arrival Time</th>
//         <th scope="col">Origin</th>
//         <th scope="col">Destination</th>
//         <th scope="col">Action</th>
//         </tr>
//         {flights.map((flights, index) => (
//           <tr key={index}>
         
//             <td>{flights.date}</td>
//             <td>{flights.d_time}</td>
//             <td>{flights.a_time}</td>
//             <td>{flights.origin}</td>
//             <td>{flights.destination}</td>
//             <td><Link
//                     className="btn btn-primary mx-2"
//                     destination={`/Checkout/${flights.f_id}`}
//                   >
//                     Book
//                   </Link></td>
//             <td></td>
//           </tr>
//         ))}
//         </table>
//         <Footer/>
//       </div>
//     );
// }   
// export default Search;