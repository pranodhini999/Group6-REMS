import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SellerDetails = () => {
  // State for each section
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [propertyDetails, setPropertyDetails] = useState({
    type: '',
    squareFeet: '',
    amount: ''
  });

  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });
  
  const [image, setImage] = useState(null);
  
  // State for active section
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['Personal Details', 'Property Details', 'Image Upload', 'Address'];

  // Handler for image upload
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  // Submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // Add Seller Details
        await axios.post('http://localhost:8416/api/seller/details', {
            firstName: personalDetails.firstName,
            lastName: personalDetails.lastName,
            email: personalDetails.email,
            phoneNumber: personalDetails.phoneNumber
        });

        // Add Property Details
        await axios.post('http://localhost:8416/api/seller/property', {
            type: propertyDetails.type,
            squareFeet: propertyDetails.squareFeet,
            amount: propertyDetails.amount
        });

        // Add Address Details
        await axios.post('http://localhost:8416/api/seller/address', {
            street: address.street,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode
        });

        // Log the uploaded image
        console.log('Uploaded Image:', image);
        alert('Details submitted successfully!');
    } catch (error) {
        console.error('Error submitting details:', error);
        alert('Failed to submit details.');
    }
  };

  const nextSection = () => {
    setActiveSection((prevSection) => prevSection + 1);
  };

  const prevSection = () => {
    setActiveSection((prevSection) => prevSection - 1);
  };

  return (
    
  
    <div className="flex h-screen min-h-60 bg-gradient-to-r from-blue-100 to-blue-300 p-6">



      {/* Left side with sections */}
      <div className="w-1/3 p-4 border-r bg-white shadow-md rounded-lg">


<nav className="">
  <ul className="flex space-x-4">
    <li>
      <NavLink 
        to="/seller" 
        className={({ isActive }) => 
          `px-4  py-2 rounded ${isActive ? 'bg-blue-700 text-white font-semibold' : 'bg-blue-500 text-white hover:bg-blue-600'}`
        }
      >
        Back
      </NavLink>
    </li>
   
  </ul>
</nav>
        <h2 className="text-lg font-bold mb-4 mt-5">Sections</h2>
        <ul>
          {sections.map((section, index) => (
            <li
              key={index}
              onClick={() => setActiveSection(index)}
              className={`cursor-pointer hover:text-blue-500 ${activeSection === index ? 'text-blue-700 font-semibold' : ''}`}
            >
              {index + 1}. {section}
            </li>
          ))}
        </ul>
      </div>

      {/* Form Section */}
      <div className="w-2/3 p-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          {/* Conditional Rendering Based on Active Section */}
          {activeSection === 0 && (
            <div>
              <h3 className="text-xl font-semibold bg-blue-200 p-2 rounded">Personal Details</h3>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">First Name</label>
                <input
                  type="text"
                  value={personalDetails.firstName}
                  onChange={(e) => setPersonalDetails({ ...personalDetails, firstName: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">Last Name</label>
                <input
                  type="text"
                  value={personalDetails.lastName}
                  onChange={(e) => setPersonalDetails({ ...personalDetails, lastName: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">Email</label>
                <input
                  type="email"
                  value={personalDetails.email}
                  onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">Phone Number</label>
                <input
                  type="tel"
                  value={personalDetails.phoneNumber}
                  onChange={(e) => setPersonalDetails({ ...personalDetails, phoneNumber: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
            </div>
          )}

          {activeSection === 1 && (
            <div>
              <h3 className="text-xl font-semibold bg-green-200 p-2 rounded">Property Details</h3>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">Type (Home/Land)</label>
                <input
                  type="text"
                  value={propertyDetails.type}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, type: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">Square Feet</label>
                <input
                  type="number"
                  value={propertyDetails.squareFeet}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, squareFeet: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block">Amount</label>
                <input
                  type="number"
                  value={propertyDetails.amount}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, amount: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
            </div>
          )}

          {activeSection === 2 && (
            <div>
              <h3 className="text-xl font-semibold bg-yellow-200 p-2 rounded">Image Upload</h3>
              <div className="mb-4 bg-white p-4 rounded shadow">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
            </div>
          )}

          {activeSection === 3 && (
            <div>
              <h3 className="text-xl font-semibold bg-purple-200 p-2 rounded">Address</h3>
              <div className="mb-4">
                <label className="block">Street</label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block">City</label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block">State</label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block">Zip Code</label>
                <input
                  type="text"
                  value={address.zipCode}
                  onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            {activeSection > 0 && (
              <button
                type="button"
                onClick={prevSection}
                className="bg-gray-400 text-white rounded p-2 hover:bg-gray-500 transition duration-300"
              >
                Previous
              </button>
            )}

            {activeSection < sections.length - 1 && (
              <button
                type="button"
                onClick={nextSection}
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-300"
              >
                Next
              </button>
            )}

            {activeSection === sections.length - 1 && (
              <button
                type="submit"
                className="bg-green-500 text-white rounded p-2 hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default SellerDetails;

