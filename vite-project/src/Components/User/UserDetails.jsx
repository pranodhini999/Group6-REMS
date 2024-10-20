import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../Sidebar/DashboardLayout';

const PAGE_SIZE = 8; // Number of users to display per page

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8416/auth/users'); // Your backend URL
                setUsers(response.data);
            } catch (err) {
                setError('Error fetching users');
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    const totalPages = Math.ceil(users.length / PAGE_SIZE);
    const currentUsers = users.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const paginate = (page) => {
        if (page < 1 || page > totalPages) return; // Prevent navigating out of bounds
        setCurrentPage(page);
    };

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">User List</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="w-1/2 p-4 text-left">Name</th>
                                <th className="w-1/2 p-4 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.length > 0 ? (
                                currentUsers.map((user, index) => (
                                    <tr key={index} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300">
                                        <td className="p-4">{user.name}</td>
                                        <td className="p-4">{user.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="p-4" colSpan="2">No users found</td>
                                </tr>
                            )}
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

export default UserDetails;
