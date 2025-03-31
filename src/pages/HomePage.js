import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("/images/deadlock-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)'
          }}
        ></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">DEADLOCK</span>
              <span className="text-red-500">CUP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              Welcome to the first official Deadlock esports tournament!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/tournaments" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
              >
                View Tournaments
              </Link>
              
              {isAuthenticated() ? (
                <Link 
                  to="/create-team" 
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
                >
                  Register Team
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About the Tournament</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-red-400">Tournament Format</h3>
                <p className="text-gray-300 mb-4">
                  The Deadlock Cup features 8 top teams competing in a single elimination bracket.
                </p>
                <p className="text-gray-300">
                  Quarterfinals and semifinals are best-of-1, while the grand final is a best-of-5 series.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-red-400">Prize Pool</h3>
                <p className="text-gray-300 mb-4">
                  A total prize pool of $10,000 awaits the competitors:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>1st Place: $5,000</li>
                  <li>2nd Place: $2,500</li>
                  <li>3rd-4th Place: $1,250 each</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-400">Tournament Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <div>
                    <h4 className="font-bold">Quarterfinals</h4>
                    <p className="text-sm text-gray-400">Best-of-1</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">April 10-11, 2023</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <div>
                    <h4 className="font-bold">Semifinals</h4>
                    <p className="text-sm text-gray-400">Best-of-1</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">April 15, 2023</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">Grand Final</h4>
                    <p className="text-sm text-gray-400">Best-of-5</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300">April 20, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Tournament?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Register your team now and compete for glory and prizes in the inaugural Deadlock Cup!
          </p>
          {isAuthenticated() ? (
            <Link 
              to="/create-team" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Register Your Team
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Sign In to Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 