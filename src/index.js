import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './contexts/ThemeContext';

// Определяем основную тему из localStorage или используем светлую по умолчанию
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark') return 'dark';
  if (savedTheme === 'light') return 'light';
  
  return prefersDark ? 'dark' : 'light';
};

// Применяем initial theme к документу
const applyTheme = (theme) => {
  const root = document.documentElement;
  const isDark = theme === 'dark';
  
  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(theme);
  
  // Также добавляем data-theme атрибут для CSS переменных
  root.setAttribute('data-theme', theme);
  
  // Сохраняем тему в localStorage
  localStorage.setItem('theme', theme);
};

// Применяем начальную тему
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

// Add tailwind animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider initialTheme={initialTheme} applyTheme={applyTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
