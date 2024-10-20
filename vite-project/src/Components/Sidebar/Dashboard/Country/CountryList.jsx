import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../DashboardLayout';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(8); // Number of countries to display per page

    useEffect(() => {
        // Fetch countries data from API
        const fetchCountries = async () => {
            try {
                const response = await axios.get('http://localhost:8416/api/countries');
                setCountries(response.data); // Set countries data
            } catch (err) {
                setError('Failed to fetch countries.');
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchCountries();
    }, []); // Empty dependency array means this effect runs once on mount

    const handleDelete = async (countryName) => {
        try {
            await axios.delete(`http://localhost:8416/api/countries/${countryName}`);
            setCountries(countries.filter((country) => country.name !== countryName)); // Update state
        } catch (err) {
            console.error('Failed to delete country:', err);
        }
    };

    const handleEdit = async (countryName) => {
        const newCountryName = prompt("Enter new country name:", countryName);
        if (newCountryName) {
            try {
                await axios.put(`http://localhost:8416/api/countries/${countryName}`, { name: newCountryName });
                setCountries(countries.map(country => country.name === countryName ? { name: newCountryName } : country));
            } catch (err) {
                console.error('Failed to update country:', err);
            }
        }
    };

    // Calculate the countries to display for the current page
    const indexOfLastCountry = currentPage * countriesPerPage; // Index of last country on current page
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // Index of first country on current page
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry); // Get current countries

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(countries.length / countriesPerPage);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>{error}</div>; // Show error message if any
    }

    return (
        <DashboardLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">List of Countries</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border-b border-gray-300">#</th>
                            <th className="py-2 px-4 border-b border-gray-300">Country Name</th>
                            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCountries.map((country, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b border-gray-300">{index + 1 + indexOfFirstCountry}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{country.name}</td>
                                <td className="py-2 px-4 border-b border-gray-300">
                                    <button 
                                        onClick={() => handleEdit(country.name)} 
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(country.name)} 
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="mt-4">
                    <nav>
                        <ul className="flex justify-center space-x-2">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index + 1}>
                                    <button 
                                        onClick={() => paginate(index + 1)} 
                                        className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CountryList;
