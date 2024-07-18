import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import "../a_style.css";
import A_navigation from "./A_navigation";

const RegistrationDetails  = () => 
  {
    const [registration, setRegistration] = useState([]);
  
    const {u_id } = useParams();
  
   useEffect(() => {
      loadRegistration();
   },[]);
  
  
   const  loadRegistration = async () => {
    const result = await axios.get("http://localhost:8080/registration");
    setRegistration(result.data);
   }

   const deleteRegistration = async (reg_id) => {
    await axios.delete(`http://localhost:8080/registration/delete/${reg_id}`);
    loadRegistration();
  };
  return (
    <div className="Container">
    <A_navigation/>
      <div className="rev_intro">
      <h3>registration Details</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Mobile no</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
                {registration.map((registration, index) => (
                  <tr>
                    <td scope="row" key={index}>
                      {index + 1}
                    </td>
                    <td>{registration.f_name}</td>
                    <td>{registration.l_name}</td>
                    <td>{registration.mob_no}</td>
                    <td>{registration.address}</td>
                    <td>{registration.emailID}</td>
                    <td>{registration.pswd}</td>
                    <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteRegistration(registration.reg_id)}
                  >
                    Delete
                  </button></td>
                 
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegistrationDetails;