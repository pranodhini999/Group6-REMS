

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import DashboardLayout from '../Sidebar/DashboardLayout';

const ListOfProperties = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change as needed

  // Fetch all details in one go
  const fetchData = async () => {
    try {
      const [sellersResponse, propertiesResponse, addressesResponse] = await Promise.all([
        axios.get('http://localhost:8416/api/seller/details'),
        axios.get('http://localhost:8416/api/seller/property'),
        axios.get('http://localhost:8416/api/seller/address'),
      ]);

      // Merging data (assumes matching indices for sellers, properties, and addresses)
      const mergedData = sellersResponse.data.map((seller, index) => ({
        ...seller,
        ...propertiesResponse.data[index],
        ...addressesResponse.data[index],
      }));

      setData(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
  
    <DashboardLayout>
          <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">List Of Properties</h2>
{/* 
        <h3 className="text-xl font-bold mb-2">List of Sellers</h3> */}
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="w-1/4 p-4 text-left">First Name</th>
                <th className="w-1/4 p-4 text-left">Last Name</th>
                <th className="w-1/4 p-4 text-left">Email</th>
                <th className="w-1/4 p-4 text-left">Phone Number</th>
                <th className="w-1/4 p-4 text-left">Property Type</th>
                <th className="w-1/4 p-4 text-left">Square Feet</th>
                <th className="w-1/4 p-4 text-left">Amount</th>
                <th className="w-1/4 p-4 text-left">Street</th>
                <th className="w-1/4 p-4 text-left">City</th>
                <th className="w-1/4 p-4 text-left">State</th>
                <th className="w-1/4 p-4 text-left">Zip Code</th>
                <th className="w-1/4 p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300">
                  <td className="p-4">{item.firstName}</td>
                  <td className="p-4">{item.lastName}</td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">{item.phoneNumber}</td>
                  <td className="p-4">{item.type}</td>
                  <td className="p-4">{item.squareFeet}</td>
                  <td className="p-4">{item.amount}</td>
                  <td className="p-4">{item.street}</td>
                  <td className="p-4">{item.city}</td>
                  <td className="p-4">{item.state}</td>
                  <td className="p-4">{item.zipCode}</td>
                  <td className="p-4">image</td>
                  {/* <td className="p-4">
                    <NavLink 
                      to="/ownersdetail" // Adjust the path based on your routing
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      View
                    </NavLink>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1} 
            className={`p-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`p-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            className={`p-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </DashboardLayout>
  
  );
};

export default ListOfProperties;
