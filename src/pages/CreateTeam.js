import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateTeamModal from '../components/CreateTeamModal';

const CreateTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateTeam = (teamData) => {
    // Здесь будет логика сохранения данных команды
    console.log('Команда создана:', teamData);
    
    // Сохраняем команду в localStorage для демонстрации
    const existingTeams = JSON.parse(localStorage.getItem('teams')) || [];
    const newTeam = {
      id: Date.now(),
      name: teamData.name,
      shortName: teamData.shortName,
      logo: teamData.logo,
      players: teamData.players
    };
    
    localStorage.setItem('teams', JSON.stringify([...existingTeams, newTeam]));
    
    // Закрываем модальное окно
    closeModal();
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Декоративные элементы */}
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
            <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white transition">
              Турнирная сетка
            </Link>
            <Link to="/create-team" className="px-4 py-2 text-white bg-red-800 hover:bg-red-700 rounded-md transition">
              Создать команду
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Основной контент */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            <span className="text-white">Создание команды </span>
            <span className="text-red-600 uppercase font-black">DEADLOCK CUP</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Создайте свою команду для участия в турнире Deadlock Cup. 
            Вам необходимо указать название команды, короткое название (3 буквы), 
            логотип и добавить минимум 6 игроков с их Steam профилями.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center"
            onClick={openModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Создать команду
          </button>
        </div>
        
        {/* Дополнительная информация */}
        <div className="max-w-4xl mx-auto mt-16 bg-gray-800/50 p-8 rounded-xl border border-red-900/30">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Требования к команде</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Название команды должно содержать от 3 до 20 символов</li>
            <li>Короткое название команды должно состоять ровно из 3 букв</li>
            <li>Логотип команды должен быть в формате PNG или JPEG, размером до 2MB</li>
            <li>Необходимо добавить минимум 6 игроков с действительными Steam профилями</li>
            <li>Один игрок не может быть участником нескольких команд одновременно</li>
            <li>После создания команды вы сможете редактировать ее состав до начала турнира</li>
          </ul>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 bg-gray-800/50 p-8 rounded-xl border border-red-900/30">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Процесс регистрации</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3">
            <li>Нажмите кнопку "Создать команду" выше</li>
            <li>Заполните все поля в появившейся форме</li>
            <li>Добавьте всех участников команды (минимум 6)</li>
            <li>Подтвердите создание команды</li>
            <li>После проверки администраторами ваша команда будет добавлена в список участников</li>
          </ol>
        </div>
      </div>
      
      {/* Модальное окно создания команды */}
      <CreateTeamModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        onCreateTeam={handleCreateTeam} 
      />
      
      {/* Футер */}
      <footer className="border-t border-red-900/30 py-4 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; 2025 Deadlock. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default CreateTeam; 