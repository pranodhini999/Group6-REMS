import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [status, setStatus] = useState('');

  const handleSearch = () => {
    console.log('Selected City:', city);
    console.log('Selected Property Type:', propertyType);
    console.log('Selected Status:', status);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center -ml-20">
        <img
          src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg" // Update this to your image path
          alt="Logo" // Provide an appropriate alt text
          className="h-20 w-20 mr-2" // Adjust the height, width, and margin as needed
        />
        <h1 className="text-2xl font-bold text-blue-700">Real Estate Management</h1>
      </div>
      <div className="flex flex-1 justify-center ml-80">
        <ul className="flex space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold transition duration-300 ease-in-out'
                  : 'text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold transition duration-300 ease-in-out'
                  : 'text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agent"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold transition duration-300 ease-in-out'
                  : 'text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'
              }
            >
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold transition duration-300 ease-in-out'
                  : 'text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-6 -mr-20">
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold transition duration-300 ease-in-out'
                  : 'text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold transition duration-300 ease-in-out'
                  : 'text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

      <div className="mt-20">
        <header className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">Find Your Dream Property</h1>
            <p className="text-lg text-white mt-4">Explore the best properties available at the most affordable prices.</p>

         
            <div className="mt-8 max-w-3xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
              
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full md:w-1/4 p-3 rounded-md text-gray-700"
              >
                <option value="">Select City</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>

              
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-50 p-3 rounded-md text-gray-700"
              >
                <option value="">Select Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </select>

              
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full md:w-1/4 p-3 rounded-md text-gray-700"
              >
                <option value="">Select Status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
                <option value="sold">Sold</option>
              </select>

            
              <button
                onClick={handleSearch}
                className="w-full md:w-1/4 bg-white text-blue-600 py-3 rounded-md hover:bg-blue-500 hover:text-white"
              >
                Search
              </button>
            </div>
          </div>
        </header>

               <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg"
                  alt="Property 1"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Luxury Apartment</h3>
                  <p className="text-gray-600 mt-2">$1,200,000 • 3 Beds • 2 Baths</p>
                  <NavLink to="/property/1">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$850,000 • 4 Beds • 3 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$700,000 • 5 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://static.vecteezy.com/system/resources/thumbnails/022/138/099/small/home-for-sale-real-estate-sign-in-front-of-house-generative-ai-photo.jpg"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$800,000 • 3 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_640.jpg"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$90,000 • 6 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://t4.ftcdn.net/jpg/04/73/72/11/360_F_473721132_I9LNMCvx7Du6EdJNH91EywcNHzgtEclz.jpg"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$80,000 • 6 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://png.pngtree.com/thumb_back/fw800/background/20240530/pngtree-3d-modern-luxury-real-estate-house-image_15842734.jpg"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$80,000 • 6 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://www.keyrealestateresources.com/wp-content/uploads/2020/05/Feature-104-how-to-become-a-luxury-real-estate-agent.jpg"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$75,000 • 6 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://static.tnn.in/thumb/msid-108791585,thumbsize-1113857,width-448,height-252,resizemode-75/108791585.jpg?quality=100"
                  alt="Property 2"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Modern House</h3>
                  <p className="text-gray-600 mt-2">$75,000 • 6 Beds • 2 Baths</p>
                  <NavLink to="/property/2">
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
           

            </div>
          </div>
        </section>
       

       <div className="h-60 w-full flex items-center justify-center bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
    {/* Company Name */}
    <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>

    {/* Social Media Links */}
    <div className="flex space-x-6 items-center justify-center">
      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/yourcompany"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <i className="fab fa-facebook fa-3x">Facebook</i>
      </a>

      {/* WhatsApp Link */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-800 transition-colors duration-300"
      >
        <i className="fab fa-whatsapp fa-3x">WhatsApp</i>
      </a>

      {/* Twitter Link */}
      <a
        href="https://twitter.com/yourcompany"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
      >
        <i className="fab fa-twitter fa-3x">Twitter</i>
      </a>
    </div>
  </div>
</div>

        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 RealEstateHub. All rights reserved.</p>
        </div>
      </footer>

      </div>
    </div>
  );
};

export default HomePage;
