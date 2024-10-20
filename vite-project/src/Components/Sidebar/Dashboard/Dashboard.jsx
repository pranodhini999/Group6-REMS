import React from 'react';
import DashboardLayout from '../DashboardLayout';
import { FaListAlt, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex bg-gray-100">
        {/* Main Content */}

         {/* Animated Title Section */}
   
        <main className="flex-1 p-6">


         {/* Animated Title Section */}
         <section className="mt-10 text-center">
            <h2 className="text-4xl font-bold text-gray-800 animate-fade-in">
              Real Estate
            </h2>
          </section>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
       
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-5 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <FaListAlt className="text-blue-500 text-3xl" />
                <h2 className="text-xl font-bold ml-2">Total Properties</h2>
              </div>
              <p className="text-3xl text-blue-500">150</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-5 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <FaListAlt className="text-green-500 text-3xl" />
                <h2 className="text-xl font-bold ml-2">Available Properties</h2>
              </div>
              <p className="text-3xl text-green-500">120</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-5 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <FaListAlt className="text-red-500 text-3xl" />
                <h2 className="text-xl font-bold ml-2">Sold Properties</h2>
              </div>
              <p className="text-3xl text-red-500">30</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-5 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-3">
                <FaUsers className="text-purple-500 text-3xl" />
                <h2 className="text-xl font-bold ml-2">Users</h2>
              </div>
              <p className="text-3xl text-purple-500">200</p>
            </div>
          </section>

         
        </main>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
