import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'; // Import NavLink
import DashboardLayout from '../Sidebar/DashboardLayout';

const OwnersData = () => {
    const [sellers, setSellers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Change this value for different items per page

    // Fetch sellers from the backend
    useEffect(() => {
        fetchSellers();
    }, []);

    const fetchSellers = async () => {
        try {
            const response = await axios.get('http://localhost:8416/api/seller/details');
            setSellers(response.data);
        } catch (error) {
            console.error('Error fetching sellers', error);
        }
    };

    // Calculate the index of the last seller on the current page
    const indexOfLastSeller = currentPage * itemsPerPage;
    // Calculate the index of the first seller on the current page
    const indexOfFirstSeller = indexOfLastSeller - itemsPerPage;
    // Get the current sellers for the page
    const currentSellers = sellers.slice(indexOfFirstSeller, indexOfLastSeller);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(sellers.length / itemsPerPage);

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Owners</h1>
                
                <h2 className="text-xl font-bold mb-2">List of Owners</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="w-1/4 p-4 text-left">First Name</th>
                                <th className="w-1/4 p-4 text-left">Last Name</th>
                                <th className="w-1/4 p-4 text-left">Email</th>
                                <th className="w-1/4 p-4 text-left">Phone Number</th>
                                <th className="w-1/4 p-4 text-left">Actions</th> {/* New column for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {currentSellers.map((seller, index) => (
                                <tr key={index} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300">
                                    <td className="p-4">{seller.firstName}</td>
                                    <td className="p-4">{seller.lastName}</td>
                                    <td className="p-4">{seller.email}</td>
                                    <td className="p-4">{seller.phoneNumber}</td>
                                    <td className="p-4"> {/* Button in the last column */}
                                        <NavLink 
                                            to="/ownersdetail" // Adjust the path based on your routing
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            View
                                        </NavLink>
                                    </td>
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

export default OwnersData;
