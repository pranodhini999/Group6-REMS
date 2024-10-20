import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import Register from './Components/Register';
import Login from './Components/Login';
// import Dashboard from './Components/Dashboard';
import PropertyDetailsPage from './Components/PropertyDetailsPage';
import Agent from './Components/AgentDetails//AgentDetailsPage';
import Contact from './Components/Contact';
import DashboardLayout from './Components/Sidebar/DashboardLayout';
import DashboardSections from './Components/Sidebar/Dashboard/DashboardSections';
import Dashboard from './Components/Sidebar/Dashboard/Dashboard';
import About from './Components/About';
import Seller from './Components/Seller/Seller';
import Country from './Components/Sidebar/Dashboard/Country/Country';
import State from './Components/Sidebar/Dashboard/State/State';
import AddProperty from './Components/Sidebar/Dashboard/Property/AddProperty';
import PropertyList from './Components/Sidebar/Dashboard/Property/PropertyList';
import CountryList from './Components/Sidebar/Dashboard/Country/CountryList';
import City from './Components/Sidebar/Dashboard/City/City';
import CityList from './Components/Sidebar/Dashboard/City/CityList';
import SellerDetails from './Components/Seller/SellerDetails';
import OwnersData from './Components/OwnerData/OwenersData';
import OwnersDetail from './Components/OwnerData/OwenerDetail';
import AgentDetails from './Components/AgentDetails/AgentHome/AgentDetails';
import UserDetails from './Components/User/UserDetails';
import ListOfProperties from './Components/ListOfProperties/ListOfProperties';
import Comment from './Components/Comment/Comment';
import StateList from './Components/Sidebar/Dashboard/State/StateList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Dashboard />} /> */}
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path='/agent' element={<Agent/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/home' element={<DashboardLayout/>}/> */}

        <Route path='/section' element={<DashboardSections/>}/>
        <Route path='/home' element={<Dashboard/>}/>
        
        {/* <Route path='/state' element={<State/>}/>
         */}


        <Route path='/seller' element={<Seller/>}/>

        <Route path='/addproperty' element={<AddProperty/>}/>
        <Route path='/propertylist' element={<PropertyList/>}/>

        <Route path='/country' element={<Country/>}/>
        <Route path='/countrylist' element={<CountryList/>}/>

        <Route path='/state' element={<State/>}/>

        <Route path='/city' element={<City/>}/>
        <Route path='/citylist' element={<CityList/>}/>


          <Route path='/sellerprofile' element={<SellerDetails/>}/>

          <Route path='/ownersdata' element={<OwnersData/>}/>
          <Route path='/ownersdetail' element={<OwnersDetail/>}/>
          
          <Route path='/agentdetail' element={<AgentDetails/>}/>

          <Route path='/Userdetails' element={<UserDetails/>}/>

          
          <Route path='/listofproperty' element={<ListOfProperties/>}/>


          <Route path='/reports' element={<Comment/>}/>
          <Route path='/statelist' element={<StateList/>}/>
      </Routes> 
    </Router>
  );
};

export default App;

