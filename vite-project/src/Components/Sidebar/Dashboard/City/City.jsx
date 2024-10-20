import React, { useEffect, useState } from 'react';
import DashboardLayout from "../../DashboardLayout";

const City = () => {
  const [countries, setCountries] = useState([]);
  const [indianStates, setIndianStates] = useState([
    { code: 'AP', name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Tirupati'] },
    { code: 'AR', name: 'Arunachal Pradesh', cities: ['Itanagar', 'Pasighat', 'Tezpur'] },
    { code: 'AS', name: 'Assam', cities: ['Guwahati', 'Dibrugarh', 'Silchar'] },
    { code: 'BR', name: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur'] },
    { code: 'CG', name: 'Chhattisgarh', cities: ['Raipur', 'Bilaspur', 'Durg'] },
    { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Daman', 'Diu', 'Silvassa'] },
    { code: 'GA', name: 'Goa', cities: ['Panaji', 'Margao', 'Mapusa'] },
    { code: 'GJ', name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara'] },
    { code: 'HR', name: 'Haryana', cities: ['Chandigarh', 'Faridabad', 'Gurgaon'] },
    { code: 'HP', name: 'Himachal Pradesh', cities: ['Shimla', 'Dharamshala', 'Kullu'] },
    { code: 'JK', name: 'Jammu and Kashmir', cities: ['Srinagar', 'Jammu', 'Anantnag'] },
    { code: 'JH', name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad'] },
    { code: 'KA', name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangalore'] },
    { code: 'KL', name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode'] },
    { code: 'MP', name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior'] },
    { code: 'MH', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
    { code: 'MN', name: 'Manipur', cities: ['Imphal', 'Churachandpur', 'Thoubal'] },
    { code: 'ML', name: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai'] },
    { code: 'MZ', name: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Serchhip'] },
    { code: 'NL', name: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung'] },
    { code: 'OD', name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela'] },
    { code: 'PB', name: 'Punjab', cities: ['Chandigarh', 'Ludhiana', 'Amritsar'] },
    { code: 'RJ', name: 'Rajasthan', cities: ['Jaipur', 'Udaipur', 'Jodhpur'] },
    { code: 'SK', name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Pelling'] },
    { code: 'TN', name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai'] },
    { code: 'TG', name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad'] },
    { code: 'TR', name: 'Tripura', cities: ['Agartala', 'Udaipur', 'Belonia'] },
    { code: 'UP', name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Agra'] },
    { code: 'UT', name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Nainital'] },
    { code: 'WB', name: 'West Bengal', cities: ['Kolkata', 'Darjeeling', 'Siliguri'] },
  ]);
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
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
    setSelectedState(''); // Reset state when country changes
    setSelectedCity(''); // Reset city when country changes
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(''); // Reset city when state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };


  const handleSubmit = async () => {
    if (!selectedCountry || !selectedState || !selectedCity) {
        setMessage('Please select a country, state, and city.');
        return;
    }

    const cityData = {
        name: selectedCity,
        state: selectedState,
        country: selectedCountry
    };

    try {
        const response = await fetch('http://localhost:8416/api/city', { // Make sure to use the correct port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cityData),
        });

        if (response.ok) {
            const result = await response.text();
            setMessage(result);
            alert(`City ${selectedCity} in State ${selectedState} and Country ${selectedCountry} added successfully!`); // Show alert message here
        } else {
            setMessage('Failed to add city.');
        }
    } catch (error) {
        setMessage('Error occurred while adding city.');
    }
};

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">Country, State, and City List</h1>
        
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
          <>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
              onChange={handleStateChange}
              value={selectedState}
            >
              <option value="" disabled>Select a state</option>
              {indianStates.map((state) => (
                <option key={state.code} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>

            {selectedState && (
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
                onChange={handleCityChange}
                value={selectedCity}
              >
                <option value="" disabled>Select a city</option>
                {indianStates.find(state => state.name === selectedState)?.cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            )}
          </>
        )}

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Country, State, and City
        </button>
        
        {message && <p className="mt-2 text-center">{message}</p>}
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
      </div>
    </DashboardLayout>
  );
};

export default City;
