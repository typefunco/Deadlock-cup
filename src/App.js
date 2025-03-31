import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TournamentPage from './pages/TournamentPage';
import TournamentsListPage from './pages/TournamentsListPage';
import CreateTeam from './pages/CreateTeam';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={theme}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tournaments" element={<TournamentsListPage />} />
            <Route path="/cups/:cupId" element={<TournamentPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={
              <ProtectedRoute allowRoles={['user', 'admin']}>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/create-team" element={
              <ProtectedRoute allowRoles={['user', 'admin']}>
                <CreateTeam />
              </ProtectedRoute>
            } />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute allowRoles={['admin']}>
                <AdminPage />
              </ProtectedRoute>
            } />
          </Routes>
          <ThemeToggle />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
