
import React, { useState } from 'react';
import DashboardLayout from '../../Sidebar/DashboardLayout';

const agentsData = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "+1-234-567-8901"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "+1-234-567-8902"
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        phoneNumber: "+1-234-567-8903"
    },
    {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        phoneNumber: "+1-234-567-8904"
    },
    {
        id: 5,
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        phoneNumber: "+1-234-567-8905"
    },
    {
        id: 6,
        firstName: "Emily",
        lastName: "Garcia",
        email: "emily.garcia@example.com",
        phoneNumber: "+1-234-567-8906"
    },
    {
        id: 7,
        firstName: "Michael",
        lastName: "Martinez",
        email: "michael.martinez@example.com",
        phoneNumber: "+1-234-567-8907"
    },
    {
        id: 8,
        firstName: "Sarah",
        lastName: "Rodriguez",
        email: "sarah.rodriguez@example.com",
        phoneNumber: "+1-234-567-8908"
    },
    {
        id: 9,
        firstName: "David",
        lastName: "Lopez",
        email: "david.lopez@example.com",
        phoneNumber: "+1-234-567-8909"
    },
    {
        id: 10,
        firstName: "Sophia",
        lastName: "Hernandez",
        email: "sophia.hernandez@example.com",
        phoneNumber: "+1-234-567-8910"
    }
];

const PAGE_SIZE = 6; // Number of agents to display per page

const AgentDetails = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(agentsData.length / PAGE_SIZE);

    // Get the current sellers based on the current page
    const currentSellers = agentsData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const paginate = (page) => {
        if (page < 1 || page > totalPages) return; // Prevent navigating out of bounds
        setCurrentPage(page);
    };

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Agents</h1>
                <h2 className="text-xl font-bold mb-2">List of Agents</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="w-1/4 p-4 text-left">First Name</th>
                                <th className="w-1/4 p-4 text-left">Last Name</th>
                                <th className="w-1/4 p-4 text-left">Email</th>
                                <th className="w-1/4 p-4 text-left">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentSellers.map((seller) => (
                                <tr key={seller.id} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300">
                                    <td className="p-4">{seller.firstName}</td>
                                    <td className="p-4">{seller.lastName}</td>
                                    <td className="p-4">{seller.email}</td>
                                    <td className="p-4">{seller.phoneNumber}</td>
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

export default AgentDetails;
