import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Ensure you have 'react-router-dom' installed

const TopNavBar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', email: '' });

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu); // Toggle profile menu visibility
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user session or token (simulate logout)
    // Redirect to login or home page (implement as needed)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value }); // Update user details
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(userDetails)); // Save user details to local storage
    setShowModal(false); // Close the modal after saving
  };

  return (
    <div className="bg-blue-600 text-white px-4 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative">
          {/* Profile Icon with Custom SVG Logo */}
          <div
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500"
            onClick={handleProfileClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{ enableBackground: 'new 0 0 32 32' }}
              xmlSpace="preserve"
              className="w-6 h-6 text-gray-800"
            >
              <path d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z" />
              <circle cx="16" cy="15.133" r="4.267" />
              <path d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z" />
            </svg>
          </div>

          {/* Dropdown menu for profile */}
          {showProfileMenu && (
            <div className="absolute right-0 h-auto w-36 bg-white text-black shadow-lg rounded-md">
              <div className="px-4 py-2 h-10 w-36">
                <button
                  onClick={() => setShowModal(true)} // Open modal on button click
                  className="w-full text-left hover:bg-gray-200"
                >
                  Profile
                </button>
              </div>
              <div className="border-t border-gray-200"></div>
              <div className="mt-2 w-36">
                <NavLink
                  to="/" // Change this to your desired route for logout
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={handleLogout} // Call logout function
                >
                  Logout
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for entering user details */}
      {showModal && (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-80 p-6 rounded-md shadow-lg">
            <h2 className="text-lg w-full font-bold mb-4">Enter Your Details</h2>
            <div className="mb-4">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="flex justify-between">
              <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
              <button onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
