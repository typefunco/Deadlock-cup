import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // Mock users for testing
  const mockUsers = [
    { email: 'user@example.com', password: 'user123', name: 'John Doe', role: 'user' },
    { email: 'admin@example.com', password: 'admin123', name: 'Admin User', role: 'admin' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Find user in mock data
    const user = mockUsers.find(user => user.email === email && user.password === password);

    if (user) {
      // Login successful
      login({
        id: Date.now(), // Generate unique ID
        email: user.email,
        name: user.name,
        role: user.role
      });

      // Set admin token if user is admin
      if (user.role === 'admin') {
        localStorage.setItem('deadlock_admin_token', 'admin123');
      }

      // Redirect to home page
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

        {error && (
          <div className="bg-red-900/50 border border-red-800 text-red-300 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-700 text-white w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="bg-gray-700 text-white w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Test accounts:</p>
          <p>User: user@example.com / user123</p>
          <p>Admin: admin@example.com / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 