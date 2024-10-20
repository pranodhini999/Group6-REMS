
import React, { useEffect, useState } from 'react';
import DashboardLayout from "../../DashboardLayout";

const State = () => {
  const [countries, setCountries] = useState([]);
  const [indianStates, setIndianStates] = useState([
    { code: 'AP', name: 'Andhra Pradesh' },
    { code: 'AR', name: 'Arunachal Pradesh' },
    { code: 'AS', name: 'Assam' },
    { code: 'BR', name: 'Bihar' },
    { code: 'CG', name: 'Chhattisgarh' },
    { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { code: 'GA', name: 'Goa' },
    { code: 'GJ', name: 'Gujarat' },
    { code: 'HR', name: 'Haryana' },
    { code: 'HP', name: 'Himachal Pradesh' },
    { code: 'JK', name: 'Jammu and Kashmir' },
    { code: 'JH', name: 'Jharkhand' },
    { code: 'KA', name: 'Karnataka' },
    { code: 'KL', name: 'Kerala' },
    { code: 'MP', name: 'Madhya Pradesh' },
    { code: 'MH', name: 'Maharashtra' },
    { code: 'MN', name: 'Manipur' },
    { code: 'ML', name: 'Meghalaya' },
    { code: 'MZ', name: 'Mizoram' },
    { code: 'NL', name: 'Nagaland' },
    { code: 'OD', name: 'Odisha' },
    { code: 'PB', name: 'Punjab' },
    { code: 'RJ', name: 'Rajasthan' },
    { code: 'SK', name: 'Sikkim' },
    { code: 'TN', name: 'Tamil Nadu' },
    { code: 'TG', name: 'Telangana' },
    { code: 'TR', name: 'Tripura' },
    { code: 'UP', name: 'Uttar Pradesh' },
    { code: 'UT', name: 'Uttarakhand' },
    { code: 'WB', name: 'West Bengal' },
  ]);
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
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
    setSelectedState(''); // Reset state when country changes
  };

  const handleStateChange = (event) => {
    const state = indianStates.find(s => s.name === event.target.value);
    if (state) {
      setSelectedState(state); // Store the entire state object
    }
  };

  const handleSubmit = async () => {
    if (!selectedCountry || !selectedState) {
      setMessage('Please select both a country and a state.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8416/api/state', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: selectedState.name, // Pass the selected state name
          code: selectedState.code   // Pass the selected state code
        }),
      });

      if (response.ok) {
        const result = await response.text();
        setMessage(result);
        alert(`Country ${selectedCountry} and State ${selectedState.name} added successfully!`);
      } else {
        setMessage('Failed to add country and state.');
      }
    } catch (error) {
      setMessage('Error occurred while adding country and state.');
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">Country and State List</h1>
        
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleCountryChange}
          value={selectedCountry}
        >
          <option value="" disabled>Select a country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>

        {selectedCountry === 'India' && (
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
            onChange={handleStateChange}
            value={selectedState.name || ''}
          >
            <option value="" disabled>Select a state</option>
            {indianStates.map((state) => (
              <option key={state.code} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        )}

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Country and State
        </button>
        
        {message && <p className="mt-2 text-center">{message}</p>}
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
      </div>
    </DashboardLayout>
  );
};

export default State;
