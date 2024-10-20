import React, { useEffect, useState } from 'react';
import DashboardLayout from "../../DashboardLayout";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch list of countries from the public API
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError('Failed to fetch countries');
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedCountry) {
      setMessage('Please select a country.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8416/api/countries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: selectedCountry }),
      });

      if (response.ok) {
        const result = await response.text();
        setMessage(result);
        alert(`Country ${selectedCountry} added successfully!`); // Show alert message here
      } else {
        setMessage('Failed to add country.');
      }
    } catch (error) {
      setMessage('Error occurred while adding country.');
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">Country List</h1>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleCountryChange}
        >
          <option value="" disabled selected>Select a country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Country
        </button>
        {message && <p className="mt-2 text-center">{message}</p>}
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
      </div>
    </DashboardLayout>
  );
};

export default Country;
