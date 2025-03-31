import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the auth context
const AuthContext = createContext();

// User roles
export const USER_ROLES = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin'
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('deadlock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('deadlock_user', JSON.stringify(userData));
    return true;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('deadlock_user');
    localStorage.removeItem('deadlock_admin_token');
  };

  // Get current user role
  const getUserRole = () => {
    if (!user) return USER_ROLES.GUEST;
    
    // Check both admin token and user role from user object
    const isAdmin = user.role === 'admin' && localStorage.getItem('deadlock_admin_token') === 'admin123';
    if (isAdmin) return USER_ROLES.ADMIN;
    
    return USER_ROLES.USER;
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Check if user is admin
  const isAdmin = () => {
    return getUserRole() === USER_ROLES.ADMIN;
  };

  // The context value
  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    getUserRole,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext; 