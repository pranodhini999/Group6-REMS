import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../DashboardLayout';

const CityList = () => {
    const [cities, setCities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [citiesPerPage] = useState(6);
    const [editingCity, setEditingCity] = useState(null);

    // Fetch all cities from the API
    const fetchCities = async () => {
        try {
            const response = await fetch('http://localhost:8416/api/cities');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (Array.isArray(data)) {
                setCities(data);
            } else {
                console.error('Expected an array but received:', data);
                alert('Unexpected data format received from the server.');
            }
        } catch (error) {
            console.error('Error fetching cities:', error);
            alert('Failed to fetch cities. Please try again later.');
        }
    };

    // Delete a city
    const deleteCity = async (id) => {
        if (window.confirm('Are you sure you want to delete this city?')) {
            try {
                const response = await fetch(`http://localhost:8416/api/city/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    fetchCities(); // Refresh the city list
                    alert('City deleted successfully!');
                } else {
                    alert('Delete failed.');
                }
            } catch (error) {
                console.error('Error deleting city:', error);
            }
        }
    };

    // Start editing a city
    const startEditingCity = (city) => {
        setEditingCity(city);
    };

    // Handle the submission of the edited city
    const handleEditCity = async (city) => {
        try {
            const response = await fetch(`http://localhost:8416/api/city/${city.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(city),
            });

            if (response.ok) {
                fetchCities(); // Refresh the city list after editing
                setEditingCity(null); // Clear the editing state
                alert('City updated successfully!');
            } else {
                alert('Update failed.');
            }
        } catch (error) {
            console.error('Error updating city:', error);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    // Pagination logic
    const indexOfLastCity = currentPage * citiesPerPage;
    const indexOfFirstCity = indexOfLastCity - citiesPerPage;
    const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">City Available</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="w-1/12 p-4 text-left">#</th>
                                <th className="w-1/4 p-4 text-left">City</th>
                                <th className="w-1/4 p-4 text-left">State</th>
                                <th className="w-1/4 p-4 text-left">Country</th>
                                <th className="w-1/4 p-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCities.map((city, index) => (
                                <tr key={city.id} className="bg-gray-100 even:bg-gray-200 hover:bg-gray-300">
                                    <td className="p-4">{indexOfFirstCity + index + 1}</td>
                                    <td className="p-4">
                                        {editingCity?.id === city.id ? (
                                            <input
                                                type="text"
                                                value={editingCity.name}
                                                onChange={(e) => setEditingCity({ ...editingCity, name: e.target.value })}
                                                className="border p-2"
                                            />
                                        ) : (
                                            city.name
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {editingCity?.id === city.id ? (
                                            <input
                                                type="text"
                                                value={editingCity.state}
                                                onChange={(e) => setEditingCity({ ...editingCity, state: e.target.value })}
                                                className="border p-2"
                                            />
                                        ) : (
                                            city.state
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {editingCity?.id === city.id ? (
                                            <input
                                                type="text"
                                                value={editingCity.country}
                                                onChange={(e) => setEditingCity({ ...editingCity, country: e.target.value })}
                                                className="border p-2"
                                            />
                                        ) : (
                                            city.country
                                        )}
                                    </td>
                                    <td className="p-4 flex space-x-2">
                                        {editingCity?.id === city.id ? (
                                            <button
                                                onClick={() => handleEditCity(editingCity)}
                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                            >
                                                Save
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => startEditingCity(city)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        <button
                                            onClick={() => deleteCity(city.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    {[...Array(Math.ceil(cities.length / citiesPerPage))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CityList;
