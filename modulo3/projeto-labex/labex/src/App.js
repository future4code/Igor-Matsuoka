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
        <Route path="/trips/list" element={<ListTrips/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/trips/application" element={<ApplicationForm/>}/>
        <Route path="/admin/trips/list" element={<AdminHome/>}/>
        <Route path="/admin/trips/:id" element={<TripDetails/>}/>
        <Route path="/admin/trips/create" element={<CreateTrip/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
