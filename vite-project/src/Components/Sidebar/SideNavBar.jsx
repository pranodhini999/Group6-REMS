import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideNavBar = () => {
  const [isPropertyMenuOpen, setIsPropertyMenuOpen] = useState(false);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [isStateMenuOpen, setIsStateMenuOpen] = useState(false);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);

  // Toggle submenu visibility for each section
  const toggleProperty = () => setIsPropertyMenuOpen(!isPropertyMenuOpen);
  const toggleCountryMenu = () => setIsCountryMenuOpen(!isCountryMenuOpen);
  const toggleStateMenu = () => setIsStateMenuOpen(!isStateMenuOpen);
  const toggleCityMenu = () => setIsCityMenuOpen(!isCityMenuOpen);

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen fixed pt-20 overflow-y-auto max-h-screen">
      <ul className="space-y-4">
        {/* Dashboard link */}
        <li>
          <NavLink 
            to="/Home" 
            className="block px-4 py-2 hover:bg-gray-700" 
            activeClassName="bg-gray-700"
          >
            Dashboard
          </NavLink>
        </li>

        {/* Property section */}
        <li>
          <div className="px-4 py-2">
            <button
              onClick={toggleProperty}
              className="w-full flex items-center justify-between text-left hover:bg-gray-700"
            >
              Property
              <span className={`transform transition-transform ${isPropertyMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </button>
            <ul className={`pl-6 space-y-2 ${isPropertyMenuOpen ? 'block' : 'hidden'}`}>
              <li>
                <NavLink 
                  to="/addproperty" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Add Property
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/propertylist" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Manage Property
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Country section */}
        <li>
          <div className="px-4 py-2">
            <button
              onClick={toggleCountryMenu}
              className="w-full flex items-center justify-between text-left hover:bg-gray-700"
            >
              Country
              <span className={`transform transition-transform ${isCountryMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </button>
            <ul className={`pl-6 space-y-2 ${isCountryMenuOpen ? 'block' : 'hidden'}`}>
              <li>
                <NavLink 
                  to="/country" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Add Country
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/countrylist" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Manage Country
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* State section */}
        <li>
          <div className="px-4 py-2">
            <button
              onClick={toggleStateMenu}
              className="w-full flex items-center justify-between text-left hover:bg-gray-700"
            >
              State
              <span className={`transform transition-transform ${isStateMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </button>
            <ul className={`pl-6 space-y-2 ${isStateMenuOpen ? 'block' : 'hidden'}`}>
              <li>
                <NavLink 
                  to="/state" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Add State
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statelist" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Manage State
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* City section */}
        <li>
          <div className="px-4 py-2">
            <button
              onClick={toggleCityMenu}
              className="w-full flex items-center justify-between text-left hover:bg-gray-700"
            >
              City
              <span className={`transform transition-transform ${isCityMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </button>
            <ul className={`pl-6 space-y-2 ${isCityMenuOpen ? 'block' : 'hidden'}`}>
              <li>
                <NavLink 
                  to="/city" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Add City
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/citylist" 
                  className="block px-4 py-2 hover:bg-gray-700" 
                  activeClassName="bg-gray-700"
                >
                  Manage City
                </NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Other links */}
        <li>
          <NavLink 
            to="/ownersdata" 
            className="block px-4 py-2 hover:bg-gray-700" 
            activeClassName="bg-gray-700"
          >
            Owner
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/agentdetail" 
            className="block px-4 py-2 hover:bg-gray-700" 
            activeClassName="bg-gray-700"
          >
            Agent
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Userdetails" 
            className="block px-4 py-2 hover:bg-gray-700" 
            activeClassName="bg-gray-700"
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/listofproperty" 
            className="block px-4 py-2 hover:bg-gray-700" 
            activeClassName="bg-gray-700"
          >
            List Of Properties
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/reports" 
            className="block px-4 py-2 hover:bg-gray-700" 
            activeClassName="bg-gray-700"
          >
            Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
