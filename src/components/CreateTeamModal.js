import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const CreateTeamModal = ({ isOpen, closeModal, onCreateTeam }) => {
  const [step, setStep] = useState(1);
  const [teamData, setTeamData] = useState({
    name: '',
    shortName: '',
    logo: null,
    players: ['', '', '', '', '', ''] // минимум 6 игроков
  });
  const [errors, setErrors] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);

  // Сброс формы при закрытии
  const handleClose = () => {
    setStep(1);
    setTeamData({
      name: '',
      shortName: '',
      logo: null,
      players: ['', '', '', '', '', '']
    });
    setErrors({});
    setLogoPreview(null);
    closeModal();
  };

  // Обработка изменения текстовых полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData({
      ...teamData,
      [name]: value
    });
    
    // Очищаем ошибку при изменении
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Обработка изменения игрока
  const handlePlayerChange = (index, value) => {
    const newPlayers = [...teamData.players];
    newPlayers[index] = value;
    setTeamData({
      ...teamData,
      players: newPlayers
    });
    
    // Очищаем ошибку при изменении
    if (errors[`player-${index}`]) {
      setErrors({
        ...errors,
        [`player-${index}`]: ''
      });
    }
  };

  // Обработка загрузки логотипа
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrors({
          ...errors,
          logo: 'Размер файла не должен превышать 2MB'
        });
        return;
      }
      
      const fileType = file.type;
      if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
        setErrors({
          ...errors,
          logo: 'Файл должен быть в формате JPEG или PNG'
        });
        return;
      }
      
      setTeamData({
        ...teamData,
        logo: file
      });
      
      // Создаем превью
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      // Очищаем ошибку
      if (errors.logo) {
        setErrors({
          ...errors,
          logo: ''
        });
      }
    }
  };

  // Валидация данных шага 1
  const validateStep1 = () => {
    const newErrors = {};
    
    if (!teamData.name) {
      newErrors.name = 'Укажите название команды';
    } else if (teamData.name.length < 3 || teamData.name.length > 20) {
      newErrors.name = 'Название должно содержать от 3 до 20 символов';
    }
    
    if (!teamData.shortName) {
      newErrors.shortName = 'Укажите короткое название команды';
    } else if (teamData.shortName.length !== 3) {
      newErrors.shortName = 'Короткое название должно состоять из 3 букв';
    }
    
    if (!teamData.logo) {
      newErrors.logo = 'Добавьте логотип команды';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Валидация данных шага 2
  const validateStep2 = () => {
    const newErrors = {};
    
    teamData.players.forEach((player, index) => {
      if (!player) {
        newErrors[`player-${index}`] = 'Укажите ссылку на Steam профиль';
      } else if (!player.includes('steamcommunity.com/')) {
        newErrors[`player-${index}`] = 'Некорректная ссылка на Steam профиль';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Переход к следующему шагу
  const goToNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      onCreateTeam(teamData);
      handleClose();
    }
  };

  // Добавление дополнительного игрока
  const addPlayer = () => {
    setTeamData({
      ...teamData,
      players: [...teamData.players, '']
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className="w-full max-w-3xl transform overflow-hidden rounded-xl bg-gray-900 p-8 text-left align-middle shadow-xl transition-all border border-red-800/30"
              >
                <div className="text-center mb-8">
                  <Dialog.Title className="text-2xl font-bold text-white">
                    {step === 1 ? 
                      'Создание новой команды' : 
                      'Добавление игроков'
                    }
                  </Dialog.Title>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mt-2"></div>
                  <p className="text-gray-300 mt-3">
                    {step === 1 ? 
                      'Мы рады, что вы хотите создать команду! Для начала, заполните основную информацию.' : 
                      'Укажите Steam профили всех участников вашей команды (минимум 6 игроков).'
                    }
                  </p>
                </div>
                
                {step === 1 ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Название команды *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={teamData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="Введите название команды"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Короткое название (3 буквы) *
                      </label>
                      <input
                        type="text"
                        name="shortName"
                        value={teamData.shortName}
                        onChange={handleChange}
                        maxLength={3}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent uppercase"
                        placeholder="XXX"
                      />
                      {errors.shortName && (
                        <p className="text-red-500 text-sm mt-1">{errors.shortName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Логотип команды *
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <label className="flex items-center justify-center w-full h-24 bg-gray-800 border border-gray-700 border-dashed rounded-md cursor-pointer hover:bg-gray-750 transition">
                            <div className="flex flex-col items-center">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                              </svg>
                              <span className="mt-2 text-sm text-gray-400">Выберите изображение (PNG, JPEG до 2MB)</span>
                            </div>
                            <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/png, image/jpeg" />
                          </label>
                        </div>
                        
                        {logoPreview && (
                          <div className="w-24 h-24 bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
                            <img 
                              src={logoPreview} 
                              alt="Предпросмотр логотипа" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                      {errors.logo && (
                        <p className="text-red-500 text-sm mt-1">{errors.logo}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-400">
                      Вставьте ссылки на Steam профили всех участников вашей команды.
                      Формат: https://steamcommunity.com/id/username
                    </p>
                    {teamData.players.map((player, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Игрок {index + 1} {index < 6 ? '*' : ''}
                        </label>
                        <input
                          type="text"
                          value={player}
                          onChange={(e) => handlePlayerChange(index, e.target.value)}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="https://steamcommunity.com/id/username"
                        />
                        {errors[`player-${index}`] && (
                          <p className="text-red-500 text-sm mt-1">{errors[`player-${index}`]}</p>
                        )}
                      </div>
                    ))}
                    
                    <div className="text-center">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-750 focus:outline-none focus:ring-2 focus:ring-red-600"
                        onClick={addPlayer}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Добавить еще одного игрока
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-750 focus:outline-none focus:ring-2 focus:ring-red-600"
                    onClick={handleClose}
                  >
                    Отмена
                  </button>
                  
                  <div className="flex space-x-3">
                    {step === 2 && (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-750 focus:outline-none focus:ring-2 focus:ring-red-600"
                        onClick={() => setStep(1)}
                      >
                        Назад
                      </button>
                    )}
                    
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                      onClick={goToNextStep}
                    >
                      {step === 1 ? 'Продолжить' : 'Создать команду'}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateTeamModal; 