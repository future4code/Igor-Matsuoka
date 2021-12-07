import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ListTrips from './Pages/ListTripsPage';
import Login from './Pages/LoginPage';
import Home from './Pages/HomePage';
import ApplicationForm from "./Pages/ApplicationFormPage";
import AdminHome from "./Pages/AdminHomePage";
import TripDetails from "./Pages/TripDetailsPage";
import CreateTrip from "./Pages/CreateTripPage";

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trips" element={<ListTrips/>}/>
        <Route path="/admin" element={<Login/>}/>
        <Route path="/form" element={<ApplicationForm/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/tripdetail" element={<TripDetails/>}/>
        <Route path="/createtrip" element={<CreateTrip/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
