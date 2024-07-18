import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../a_style.css";
import A_navigation from "../A_navigation";
import { useNavigate } from "react-router-dom";

const AirportDetails = () => {
  const [airports, setAirport] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    loadAirports();
  }, []);

  const loadAirports = async () => {
    const result = await axios.get("http://localhost:8080/airports");
    setAirport(result.data);
  };
  const updateAirport = async (airport_code) => {
    navigate(`/Dashboard/EditAirport/${airport_code}`); // Navigate to edit page with code
  };

  const deleteAirport = async (airport_code) => {
    await axios.delete(`http://localhost:8080/airports/delete/${airport_code}`);
    loadAirports();
  };

  return (
    <div className="Container">
      <A_navigation />
      <div className="airp_intro">
        <h3>Airport Details</h3>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Code</th>
              <th scope="col">Airport Name</th>
              <th scope="col">Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{airport.airport_code}</td>
                <td>{airport.airport_name}</td>
                <td>{airport.location}</td>
                <td>
                <button
                  
                  className="btn btn-success mx-2"
                  // className="btn btn-secondary mx-2"
                  onClick={() => updateAirport(airport.airport_code)}
                >
                  Update
                </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteAirport(airport.airport_code)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AirportDetails;



























































































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import "../a_style.css";
// import A_navigation from "../A_navigation";

// const AirportDetails  = () => {
//   const [airports, setAirport] = useState([]);

//   const { airport_code } = useParams();

//  useEffect(() => {
//     loadAirports();
//  },[]);


//  const  loadAirports = async () => {
//   const result = await axios.get('http://localhost:8080/airports');
//   setAirport(result.data);
//  }

//  const deleteAirport = async (airport_code) => {
//   await axios.delete(`http://localhost:8080/airports/delete/{airport_code}`);
//   loadAirports()
// };




//   return (
//     <div className="Container">
//     <A_navigation/>
//       <div className="airp_intro">
//       <h3>Airport Details</h3>
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">S.N</th>
//               <th scope="col">Code</th>
//               <th scope="col">Airport Name</th>
//               <th scope="col">Loacation</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {airports.map((airport, index) => (
//               <tr>
//                 <td scope="row" key={index}>
//                   {index + 1}
//                 </td>
//                 <td>{airport.airport_code}</td>
//                 <td>{airport.airport_name}</td>
//                 <td>{airport.location}</td>
//                 <td>
                
//                   {/* <Link
//                     className="btn btn-primary mx-2"
//                     to={`/viewAirport/${airport.airport_code}`}
//                   >
//                     View
//                   </Link> */}
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteAirport(airport_code)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AirportDetails;