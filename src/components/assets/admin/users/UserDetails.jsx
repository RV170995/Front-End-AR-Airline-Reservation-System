import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
  import "../a_style.css";
import A_navigation from "../A_navigation";

const UserDetails  = () => 
  {
    const [user, setUser] = useState([]);
  
    const {u_id } = useParams();
  
   useEffect(() => {
      loadUser();
   },[]);
  
  
   const  loadUser = async () => {
    const result = await axios.get("http://localhost:8080/user");
    setUser(result.data);
   }
   const deleteUsers = async (u_id) => {
    await axios.delete(`http://localhost:8080/users/delete/${u_id}`);
    loadUser();
  };



  return (
    <div className="Container">
    <A_navigation/>
      <div className="rev_intro">
      <h3>User Details</h3>
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
                {user.map((user, index) => (
                  <tr>
                    <td scope="row" key={index}>
                      {index + 1}
                    </td>
                    <td>{user.f_name}</td>
                    <td>{user.l_name}</td>
                    <td>{user.mob_no}</td>
                    <td>{user.address}</td>
                    <td>{user.emailId}</td>
                    <td>{user.pswd}</td>
                    <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUsers(user.u_id)}
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

export default UserDetails;