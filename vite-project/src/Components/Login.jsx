import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:8416/auth/login', user);
      
      if (response.data.role) {
        // Store role in local storage or context
        localStorage.setItem('userRole', response.data.role);
        
        setMessage(response.data.message);

        // Redirect user based on role
        switch (response.data.role) {
          case 'buyer':
            navigate('/seller');  // Redirect to buyer dashboard
            break;
          case 'seller':
            navigate('/seller');  // Redirect to seller dashboard
            break;
          case 'user':
            navigate('/home');  // Redirect to user dashboard
            break;
          default:
            navigate('/');  // Redirect to home or error page if no role matches
        }
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <NavLink to="/register" className="text-blue-600 hover:underline"> Register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
