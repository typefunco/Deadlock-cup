import React from 'react';
import { Link } from 'react-router-dom';
import TournamentBracket from '../components/TournamentBracket';

const HomePage = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Заблюренные декоративные элементы */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      
      {/* Навигация */}
      <nav className="relative z-10 bg-gray-900/50 border-b border-red-900/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">
            DEADLOCK CUP
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="px-4 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition">
              Турнирная сетка
            </Link>
            <Link to="/create-team" className="px-4 py-2 text-gray-300 hover:text-white transition">
              Создать команду
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Заголовок */}
      <div className="relative pt-8 pb-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-white">Турнирная сетка </span>
          <span className="text-red-600 uppercase font-black">DEADLOCK CUP</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mt-3"></div>
      </div>
      
      <main className="container mx-auto py-4 px-4 relative z-10">
        <TournamentBracket />
      </main>
      <footer className="border-t border-red-900/30 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; 2025 Deadlock. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 