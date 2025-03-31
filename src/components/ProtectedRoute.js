import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, USER_ROLES } from '../contexts/AuthContext';

/**
 * Protected route component that checks if user is authenticated
 * and has the required role before allowing access to protected routes
 */
const ProtectedRoute = ({ children, allowRoles = [] }) => {
  const { isAuthenticated, getUserRole, user } = useAuth();
  const userRole = getUserRole();

  // For debugging
  console.log('Protected Route:', { 
    isAuthenticated: isAuthenticated(),
    userRole,
    allowRoles,
    user
  });

  // If user is not authenticated, redirect to login
  if (!isAuthenticated()) {
    console.log('User not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  // If allowRoles is specified, check if user has one of the allowed roles
  if (allowRoles.length > 0) {
    // Convert roles from string format to enum format
    const allowedRoleValues = allowRoles.map(role => {
      switch(role) {
        case 'admin': return USER_ROLES.ADMIN;
        case 'user': return USER_ROLES.USER;
        default: return role;
      }
    });

    console.log('Checking roles:', { userRole, allowedRoleValues });

    // If user role is not in allowed roles, redirect to home
    if (!allowedRoleValues.includes(userRole)) {
      console.log('User does not have required role, redirecting to home');
      return <Navigate to="/" replace />;
    }
  }

  // If authenticated and authorized, render the child components
  console.log('Access granted to protected route');
  return children;
};

export default ProtectedRoute; 