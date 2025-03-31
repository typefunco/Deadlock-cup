import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <>
      <nav 
        className="fixed w-full z-50 transition-all duration-300 bg-transparent"
        style={{
          height: scrolled ? '50px' : '60px',
          paddingTop: scrolled ? '5px' : '10px',
          background: 'transparent'
        }}
      >
        <div className="container mx-auto h-full px-4">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                DEADLOCKCUP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/tournaments" 
                className="text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Tournaments
              </Link>
              {user && user.role === 'user' && (
                <Link 
                  to="/team/create" 
                  className="text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Register Team
                </Link>
              )}
              {user && user.role === 'admin' && (
                <Link 
                  to="/admin" 
                  className="text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Admin Panel
                </Link>
              )}
            </div>

            {/* Right side: Auth + Theme */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {user ? (
                <div className="relative">
                  <button
                    className="flex items-center text-lg font-medium focus:outline-none"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:inline-block">{user.name}</span>
                    <svg
                      className="w-6 h-6 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
                      <div className="py-2">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          My Profile
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            setUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-base text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="py-1 px-3 rounded-lg text-lg font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Sign In
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                className="md:hidden flex items-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
            <div className="container mx-auto px-4 pt-3 pb-4 space-y-3">
              <Link
                to="/"
                className="block py-2 text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tournaments"
                className="block py-2 text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tournaments
              </Link>
              {user && user.role === 'user' && (
                <Link
                  to="/team/create"
                  className="block py-2 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register Team
                </Link>
              )}
              {user && user.role === 'admin' && (
                <Link
                  to="/admin"
                  className="block py-2 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Panel
                </Link>
              )}
              {user && (
                <Link
                  to="/profile"
                  className="block py-2 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
              )}
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block py-2 text-lg font-medium text-red-500"
                >
                  Logout ({user.name})
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block py-2 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer div to push content below the fixed navbar */}
      <div className={scrolled ? "h-[50px]" : "h-[75px]"}></div>
    </>
  );
};

export default Navbar; 