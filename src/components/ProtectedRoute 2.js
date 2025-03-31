import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Компонент для защищенных маршрутов (требующих авторизации)
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Здесь должна быть проверка наличия авторизации
    // В реальном приложении мы бы проверяли токен в localStorage или cookie
    // и, возможно, делали запрос к серверу для проверки его валидности
    
    // Для демонстрации используем имитацию проверки
    const checkAuth = () => {
      // Имитируем задержку запроса
      setTimeout(() => {
        // Для демонстрации считаем, что админ авторизован
        // В реальном приложении здесь была бы реальная проверка
        const isAdmin = true; // localStorage.getItem('isAdmin') === 'true';
        setIsAuthenticated(isAdmin);
        setLoading(false);
      }, 500);
    };
    
    checkAuth();
  }, []);

  // Показываем индикатор загрузки
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-t-2 border-b-2 border-green-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-white">Проверка авторизации...</p>
        </div>
      </div>
    );
  }

  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Если пользователь авторизован, показываем защищённый контент
  return children;
};

export default ProtectedRoute; 