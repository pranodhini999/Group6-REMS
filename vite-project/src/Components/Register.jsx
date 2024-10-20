import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password, role };

    try {
      const response = await axios.post('http://localhost:8416/auth/register', userData);
      setMessage(response.data); // Show success message

      // Redirect based on the user's role
      if (role === 'buyer' || role === 'admin' || role === 'user') {
        navigate('/login'); // Redirect to login after registration
      }
    } catch (error) {
      console.error('There was an error registering the user!', error);
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Register User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Role</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">admin</option>
              <option value="buyer">Seller</option>
              <option value="user">User</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <NavLink to="/login" className="text-blue-600 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterUser;
