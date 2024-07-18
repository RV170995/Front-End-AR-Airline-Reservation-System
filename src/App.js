import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import Home from "./components/assets/user/Home";
import About from "./components/assets/user/About";
import Contact from "./components/assets/user/Contact";
import Checkout from "./components/assets/user/Checkout";
import Registration from "./components/assets/user/Registration/Registration";
import Login from "./components/assets/user/Login";
import Search from "./components/assets/user/Search";
import A_navigation from "./components/assets/admin/A_navigation";
import Dashboard from "./components/assets/admin/Dashboard";
import User from "./components/assets/admin/users/User";
import UserDetails from "./components/assets/admin/users/UserDetails";
import RegistrationDetails from "./components/assets/admin/RegistrationDetails";
import Airlines from "./components/assets/admin/airline/Airlines";
import AirlineDetails from "./components/assets/admin/airline/AirlineDetails";
import AirportDetails from "./components/assets/admin/airports/AirportDetails";
import Flight from "./components/assets/admin/flights/Flight"
import FlightDetails from "./components/assets/admin/flights/FlightDetails";
import ReservationDetails from "./components/assets/admin/ReservationDetails";
import AddAirport from "./components/assets/admin/airports/addAirport";
import EditAirport from "./components/assets/admin/airports/EditAirport";
import EditAirlines from "./components/assets/admin/airline/EditAirlines";
import EditFlights from "./components/assets/admin/flights/EditFlights";
import RouteGuard from "./components/assets/user/RouteGourd";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return(
  <div className="App">
  <Router>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce} />

    <Routes>
      <Route path="/" element={< Home />}></Route>
      <Route path="/About" element={< About />}></Route>
      <Route path="/Search" element={< Search />}></Route>
      <Route path="/Contact" element={< Contact />}></Route>
      <Route path="/Checkout" element={< Checkout />}></Route>
      <Route path="/Login" element={< Login />}></Route>
      <Route path="/Registration" element={< Registration />}></Route>



      {/* /************************Admin************************ */}
      {/* <Route path = "/Dashboard" element={< Dashboard/>}></Route> */}
      <Route path="/Dashboard" element={<RouteGuard component={Dashboard} roleRequired="ROLE_ADMIN" />}></Route>
      <Route path="Dashboard/User" element={< User />}></Route>
      <Route path="Dashboard/UserDetails" element={< UserDetails />}></Route>
      <Route path="Dashboard/Airlines" element={< Airlines />}></Route>
      <Route path="Dashboard/AirlineDetails" element={< AirlineDetails />}></Route>
      <Route path="Dashboard/RegistrationDetails" element={< RegistrationDetails />}></Route>
      <Route path="Dashboard/ReservationDetails" element={< ReservationDetails />}></Route>
      <Route path="Dashboard/AddAirport" element={< AddAirport />}></Route>
      <Route path="Dashboard/EditAirport/:airport_code" element={< EditAirport />}></Route>
      <Route path="Dashboard/EditAirlines/:a_id" element={< EditAirlines />}></Route>
      <Route path="Dashboard/EditFlights/:f_id" element={< EditFlights />}></Route>
      <Route path="Dashboard/AirportDetails" element={< AirportDetails />}></Route>
      <Route path="Dashboard/Flight" element={< Flight />}></Route>
      <Route path="Dashboard/FlightDetails" element={< FlightDetails />}></Route>


      <Route exact path="/Checkout/:f_id" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;