import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Импортируем объект с логотипами команд из MatchCard
import { teamLogos, getTeamLogo } from './MatchCard';

// Моковые данные для героев Deadlock с использованием фактических имен и изображений
const heroesData = {
  'Galaxy Guardians': [
    { 
      name: 'Abrams', 
      image: 'abrams.png',
      stats: { kills: 7, deaths: 2, assists: 9, souls: 42500 }
    },
    { 
      name: 'Lash', 
      image: 'lash.png',
      stats: { kills: 5, deaths: 3, assists: 12, souls: 38600 }
    },
    { 
      name: 'Dynamo', 
      image: 'dynamo.png',
      stats: { kills: 4, deaths: 4, assists: 8, souls: 31200 }
    },
    { 
      name: 'Sinclair', 
      image: 'sinclair.png',
      stats: { kills: 3, deaths: 1, assists: 14, souls: 27900 }
    },
    { 
      name: 'Pocket', 
      image: 'pocket.png',
      stats: { kills: 2, deaths: 5, assists: 11, souls: 25400 }
    },
    { 
      name: 'Holiday', 
      image: 'holiday.png',
      stats: { kills: 3, deaths: 3, assists: 10, souls: 29800 }
    }
  ],
  'Nexus Dominators': [
    { 
      name: 'Talon', 
      image: 'talon.png',
      stats: { kills: 4, deaths: 5, assists: 6, souls: 32400 }
    },
    { 
      name: 'Warden', 
      image: 'warden.png',
      stats: { kills: 6, deaths: 4, assists: 8, souls: 36700 }
    },
    { 
      name: 'Seven', 
      image: 'seven.png',
      stats: { kills: 3, deaths: 6, assists: 7, souls: 29100 }
    },
    { 
      name: 'Infernus', 
      image: 'infernus.png',
      stats: { kills: 2, deaths: 3, assists: 11, souls: 28400 }
    },
    { 
      name: 'Bebop', 
      image: 'bebop.png',
      stats: { kills: 1, deaths: 4, assists: 13, souls: 25900 }
    },
    { 
      name: 'Vyper', 
      image: 'vyper.png',
      stats: { kills: 2, deaths: 2, assists: 9, souls: 27500 }
    }
  ],
  'Shadow Assassins': [
    { 
      name: 'Kelvin', 
      image: 'kelvin.png',
      stats: { kills: 8, deaths: 3, assists: 5, souls: 45200 }
    },
    { 
      name: 'Wraith', 
      image: 'wraith.png',
      stats: { kills: 6, deaths: 2, assists: 9, souls: 41700 }
    },
    { 
      name: 'Ivy', 
      image: 'ivy.png',
      stats: { kills: 7, deaths: 4, assists: 11, souls: 43800 }
    },
    { 
      name: 'Haze', 
      image: 'haze.png',
      stats: { kills: 5, deaths: 3, assists: 8, souls: 36900 }
    },
    { 
      name: 'Shiv', 
      image: 'shiv.png',
      stats: { kills: 3, deaths: 5, assists: 12, souls: 32400 }
    },
    { 
      name: 'Mirage', 
      image: 'mirage.png',
      stats: { kills: 2, deaths: 1, assists: 14, souls: 30100 }
    }
  ],
  'Arcane Mages': [
    { 
      name: 'Geist', 
      image: 'geist.png',
      stats: { kills: 3, deaths: 5, assists: 7, souls: 28600 }
    },
    { 
      name: 'Mirage', 
      image: 'mirage.png',
      stats: { kills: 4, deaths: 6, assists: 9, souls: 29400 }
    },
    { 
      name: 'Holiday', 
      image: 'holiday.png',
      stats: { kills: 2, deaths: 4, assists: 11, souls: 26300 }
    },
    { 
      name: 'Yamato', 
      image: 'yamato.png',
      stats: { kills: 3, deaths: 7, assists: 8, souls: 27500 }
    },
    { 
      name: 'Calico', 
      image: 'calico.png',
      stats: { kills: 1, deaths: 4, assists: 6, souls: 25100 }
    },
    { 
      name: 'Paradox', 
      image: 'paradox.png',
      stats: { kills: 2, deaths: 3, assists: 10, souls: 26800 }
    }
  ],
  'Cyber Dragons': [
    { 
      name: 'Vyper', 
      image: 'vyper.png',
      stats: { kills: 5, deaths: 4, assists: 12, souls: 37800 }
    },
    { 
      name: 'Paradox', 
      image: 'paradox.png',
      stats: { kills: 6, deaths: 3, assists: 8, souls: 39200 }
    },
    { 
      name: 'Krill', 
      image: 'krill.png',
      stats: { kills: 4, deaths: 5, assists: 10, souls: 33900 }
    },
    { 
      name: 'Viscous', 
      image: 'viscous.png',
      stats: { kills: 3, deaths: 2, assists: 13, souls: 32100 }
    },
    { 
      name: 'McGinnis', 
      image: 'mcginnis.png',
      stats: { kills: 2, deaths: 4, assists: 11, souls: 28400 }
    },
    { 
      name: 'Bebop', 
      image: 'bebop.png',
      stats: { kills: 2, deaths: 3, assists: 9, souls: 29500 }
    }
  ],
  'Void Warriors': [
    { 
      name: 'Vindicta', 
      image: 'vindicta.png',
      stats: { kills: 7, deaths: 3, assists: 11, souls: 43600 }
    },
    { 
      name: 'Talon', 
      image: 'talon.png',
      stats: { kills: 6, deaths: 4, assists: 9, souls: 39400 }
    },
    { 
      name: 'Abrams', 
      image: 'abrams.png',
      stats: { kills: 5, deaths: 2, assists: 13, souls: 38200 }
    },
    { 
      name: 'Wraith', 
      image: 'wraith.png',
      stats: { kills: 4, deaths: 5, assists: 10, souls: 36700 }
    },
    { 
      name: 'Lash', 
      image: 'lash.png',
      stats: { kills: 3, deaths: 1, assists: 15, souls: 32100 }
    },
    { 
      name: 'Krill', 
      image: 'krill.png',
      stats: { kills: 3, deaths: 3, assists: 8, souls: 30500 }
    }
  ],
  'Phoenix Force': [
    { 
      name: 'Dynamo', 
      image: 'dynamo.png',
      stats: { kills: 6, deaths: 4, assists: 9, souls: 41300 }
    },
    { 
      name: 'Ivy', 
      image: 'ivy.png',
      stats: { kills: 5, deaths: 3, assists: 12, souls: 38900 }
    },
    { 
      name: 'Geist', 
      image: 'geist.png',
      stats: { kills: 7, deaths: 2, assists: 8, souls: 44500 }
    },
    { 
      name: 'Kelvin', 
      image: 'kelvin.png',
      stats: { kills: 4, deaths: 5, assists: 10, souls: 35600 }
    },
    { 
      name: 'Holiday', 
      image: 'holiday.png',
      stats: { kills: 3, deaths: 4, assists: 14, souls: 32700 }
    },
    { 
      name: 'Calico', 
      image: 'calico.png',
      stats: { kills: 2, deaths: 3, assists: 11, souls: 28900 }
    }
  ],
  'Dark Knights': [
    { 
      name: 'Seven', 
      image: 'seven.png',
      stats: { kills: 5, deaths: 3, assists: 10, souls: 39800 }
    },
    { 
      name: 'Vyper', 
      image: 'vyper.png',
      stats: { kills: 6, deaths: 4, assists: 9, souls: 41200 }
    },
    { 
      name: 'Sinclair', 
      image: 'sinclair.png',
      stats: { kills: 4, deaths: 6, assists: 11, souls: 36400 }
    },
    { 
      name: 'Krill', 
      image: 'krill.png',
      stats: { kills: 3, deaths: 2, assists: 13, souls: 34700 }
    },
    { 
      name: 'Yamato', 
      image: 'yamato.png',
      stats: { kills: 2, deaths: 5, assists: 8, souls: 27900 }
    },
    { 
      name: 'Viscous', 
      image: 'viscous.png',
      stats: { kills: 1, deaths: 3, assists: 12, souls: 25400 }
    }
  ]
};

// Моковые данные статистики для игры Deadlock
const gameStatsData = {
  'Galaxy Guardians': { kills: 24, souls: 156, damage: 48250 },
  'Nexus Dominators': { kills: 18, souls: 132, damage: 42800 },
  'Shadow Assassins': { kills: 31, souls: 203, damage: 56700 },
  'Arcane Mages': { kills: 15, souls: 98, damage: 32400 },
  'Cyber Dragons': { kills: 22, souls: 145, damage: 44300 },
  'Void Warriors': { kills: 28, souls: 176, damage: 51600 },
  'Phoenix Force': { kills: 27, souls: 187, damage: 52700 },
  'Dark Knights': { kills: 21, souls: 142, damage: 43500 }
};

const MatchModal = ({ isOpen, closeModal, match }) => {
  if (!match) return null;

  // Определяем победителя на основе счета
  let winner = null;
  let scores = [0, 0];
  if (match.score) {
    scores = match.score.split(':').map(Number);
    winner = scores[0] > scores[1] ? match.team1 : match.team2;
  }

  const team1Heroes = heroesData[match.team1] || [];
  const team2Heroes = heroesData[match.team2] || [];
  
  const team1Stats = gameStatsData[match.team1] || { kills: 0, souls: 0, damage: 0 };
  const team2Stats = gameStatsData[match.team2] || { kills: 0, souls: 0, damage: 0 };

  // Определяем стадию турнира на основе ID матча
  const isQuarterFinal = match.id >= 1 && match.id <= 4;
  const isSemiFinal = match.id >= 5 && match.id <= 6;
  const isFinal = match.id === 7;

  // Определяем статусы команд (победитель/проигравший)
  const team1IsWinner = winner === match.team1;
  const team2IsWinner = winner === match.team2;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                className="w-full max-w-4xl transform overflow-hidden rounded-xl glass-effect text-left align-middle shadow-xl transition-all"
                style={{
                  background: 'rgba(24, 24, 24, 0.9)',
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div className="px-6 py-4 border-b border-green-800/40"
                  style={{
                    background: 'linear-gradient(90deg, rgba(22, 163, 74, 0.7) 0%, rgba(21, 128, 61, 0.7) 100%)'
                  }}
                >
                  <Dialog.Title className="text-lg font-medium text-white flex items-center">
                    <span className="mr-2">Матч #{match.id}</span>
                    {match.date && <span className="text-sm text-gray-300 ml-auto">{match.date}</span>}
                  </Dialog.Title>
                </div>

                <div className="p-8">
                  {/* Команды и счет */}
                  <div className="flex justify-between items-center mb-10 border-b border-green-900/20 pb-8">
                    <div className="flex items-center">
                      <span className="team-logo mr-4" style={{ fontSize: '2.5rem' }}>
                        {getTeamLogo(match.team1)}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{match.team1}</h2>
                        {team1IsWinner && <span className="text-green-500 text-sm font-medium">Победитель</span>}
                      </div>
                    </div>

                    {match.score && (
                      <div className="flex items-center space-x-3">
                        <div 
                          className={`w-16 h-16 flex items-center justify-center rounded-md shadow-lg ${
                            team1IsWinner ? 'bg-green-600' : 'bg-red-800'
                          }`}
                        >
                          <span className="text-3xl font-bold text-white">{scores[0]}</span>
                        </div>
                        <span className="text-xl font-bold text-gray-400">:</span>
                        <div 
                          className={`w-16 h-16 flex items-center justify-center rounded-md shadow-lg ${
                            team2IsWinner ? 'bg-green-600' : 'bg-red-800'
                          }`}
                        >
                          <span className="text-3xl font-bold text-white">{scores[1]}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center">
                      <div className="text-right">
                        <h2 className="text-2xl font-bold text-white">{match.team2}</h2>
                        {team2IsWinner && <span className="text-green-500 text-sm font-medium">Победитель</span>}
                      </div>
                      <span className="team-logo ml-4" style={{ fontSize: '2.5rem' }}>
                        {getTeamLogo(match.team2)}
                      </span>
                    </div>
                  </div>

                  {/* Информация о матче */}
                  <div className="grid grid-cols-2 gap-8 mt-8">
                    <div className="bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                      <h4 className="text-sm font-medium text-indigo-400 mb-2">Дата</h4>
                      <p className="font-medium text-white text-lg">{match.date}</p>
                    </div>
                    <div className="bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                      <h4 className="text-sm font-medium text-indigo-400 mb-2">Продолжительность</h4>
                      <p className="font-medium text-white text-lg">{match.duration}</p>
                    </div>
                  </div>

                  {/* Стадия турнира */}
                  <div className="bg-gray-800/70 p-5 rounded-lg border border-indigo-900 mt-8">
                    <h4 className="text-sm font-medium text-indigo-400 mb-2">Стадия турнира</h4>
                    <p className="font-medium text-white text-lg">
                      {isQuarterFinal && "Четвертьфинал"}
                      {isSemiFinal && "Полуфинал"}
                      {isFinal && "Финал"}
                    </p>
                  </div>

                  {/* Статистика матча */}
                  <div className="mt-10">
                    <h4 className="text-xl font-medium mb-6 text-indigo-300 border-b border-indigo-800 pb-2">Статистика матча</h4>
                    
                    <div className="grid grid-cols-3 gap-8">
                      {/* Убийства */}
                      <div className="bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-indigo-400 font-medium">Убийства</span>
                          <div className="flex space-x-4">
                            <span className="text-indigo-300 font-bold">{team1Stats.kills}</span>
                            <span className="text-gray-500">vs</span>
                            <span className="text-indigo-300 font-bold">{team2Stats.kills}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-600" 
                            style={{ 
                              width: `${(team1Stats.kills / (team1Stats.kills + team2Stats.kills)) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Души */}
                      <div className="bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-indigo-400 font-medium">Души</span>
                          <div className="flex space-x-4">
                            <span className="text-indigo-300 font-bold">{team1Stats.souls}</span>
                            <span className="text-gray-500">vs</span>
                            <span className="text-indigo-300 font-bold">{team2Stats.souls}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-600" 
                            style={{ 
                              width: `${(team1Stats.souls / (team1Stats.souls + team2Stats.souls)) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Урон */}
                      <div className="bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-indigo-400 font-medium">Урон</span>
                          <div className="flex space-x-4">
                            <span className="text-indigo-300 font-bold">{team1Stats.damage.toLocaleString()}</span>
                            <span className="text-gray-500">vs</span>
                            <span className="text-indigo-300 font-bold">{team2Stats.damage.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600" 
                            style={{ 
                              width: `${(team1Stats.damage / (team1Stats.damage + team2Stats.damage)) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Составы команд */}
                  <div className="mt-10 grid grid-cols-2 gap-10">
                    {/* Команда 1 */}
                    <div>
                      <h4 className="text-xl font-medium mb-6 text-white border-b border-indigo-800 pb-2">
                        {match.team1}
                      </h4>
                      <div className="space-y-4">
                        {team1Heroes.map((hero, idx) => (
                          <div key={idx} className="flex items-start bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                            {/* Левая часть - изображение и имя героя */}
                            <div className="flex flex-col items-center w-20">
                              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
                                <img 
                                  src={`/images/heroes/${hero.image}`} 
                                  alt={hero.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/56?text=Hero';
                                  }} 
                                />
                              </div>
                              <div className="text-center">
                                <div className="font-medium text-white">{hero.name}</div>
                              </div>
                            </div>
                            
                            {/* Правая часть - детальная статистика героя */}
                            <div className="flex-1 ml-5">
                              <div className="grid grid-cols-3 gap-3 mb-3">
                                <div className="bg-gray-900/80 p-2 rounded text-center">
                                  <div className="text-lg font-bold text-red-400">{hero.stats?.kills || 0}</div>
                                  <div className="text-xs text-gray-400">убийств</div>
                                </div>
                                <div className="bg-gray-900/80 p-2 rounded text-center">
                                  <div className="text-lg font-bold text-gray-300">{hero.stats?.deaths || 0}</div>
                                  <div className="text-xs text-gray-400">смертей</div>
                                </div>
                                <div className="bg-gray-900/80 p-2 rounded text-center">
                                  <div className="text-lg font-bold text-yellow-400">{hero.stats?.assists || 0}</div>
                                  <div className="text-xs text-gray-400">ассистов</div>
                                </div>
                              </div>
                              <div className="bg-indigo-900/30 p-3 rounded text-center">
                                <div className="text-xs text-indigo-300 mb-1">Собрано душ</div>
                                <div className="text-lg font-bold text-indigo-400">
                                  {hero.stats?.souls?.toLocaleString() || 0}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Команда 2 */}
                    <div>
                      <h4 className="text-xl font-medium mb-6 text-white border-b border-indigo-800 pb-2">
                        {match.team2}
                      </h4>
                      <div className="space-y-4">
                        {team2Heroes.map((hero, idx) => (
                          <div key={idx} className="flex items-start bg-gray-800/70 p-5 rounded-lg border border-indigo-900">
                            {/* Левая часть - изображение и имя героя */}
                            <div className="flex flex-col items-center w-20">
                              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-700">
                                <img 
                                  src={`/images/heroes/${hero.image}`} 
                                  alt={hero.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/56?text=Hero';
                                  }} 
                                />
                              </div>
                              <div className="text-center">
                                <div className="font-medium text-white">{hero.name}</div>
                              </div>
                            </div>
                            
                            {/* Правая часть - детальная статистика героя */}
                            <div className="flex-1 ml-5">
                              <div className="grid grid-cols-3 gap-3 mb-3">
                                <div className="bg-gray-900/80 p-2 rounded text-center">
                                  <div className="text-lg font-bold text-red-400">{hero.stats?.kills || 0}</div>
                                  <div className="text-xs text-gray-400">убийств</div>
                                </div>
                                <div className="bg-gray-900/80 p-2 rounded text-center">
                                  <div className="text-lg font-bold text-gray-300">{hero.stats?.deaths || 0}</div>
                                  <div className="text-xs text-gray-400">смертей</div>
                                </div>
                                <div className="bg-gray-900/80 p-2 rounded text-center">
                                  <div className="text-lg font-bold text-yellow-400">{hero.stats?.assists || 0}</div>
                                  <div className="text-xs text-gray-400">ассистов</div>
                                </div>
                              </div>
                              <div className="bg-indigo-900/30 p-3 rounded text-center">
                                <div className="text-xs text-indigo-300 mb-1">Собрано душ</div>
                                <div className="text-lg font-bold text-indigo-400">
                                  {hero.stats?.souls?.toLocaleString() || 0}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-green-900/20 px-6 py-4 flex justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex justify-center rounded-md border border-green-700 bg-green-900 bg-opacity-30 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Закрыть
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MatchModal; 