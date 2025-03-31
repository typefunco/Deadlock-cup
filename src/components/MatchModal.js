import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Import team logos object from MatchCard
import { teamLogos, getTeamLogo } from './MatchCard';

// Mock data for Deadlock heroes with actual names and images
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

// Mock data for game statistics
const gameStats = {
  duration: '38:24',
  totalKills: 48,
  totalDeaths: 48,
  totalAssists: 98,
  totalSouls: 423500
};

// Generate match statistics based on team names in the match
const generateMatchStats = (match) => {
  const team1 = match.team1;
  const team2 = match.team2;
  
  // Get heroes for both teams
  const team1Heroes = heroesData[team1] || [];
  const team2Heroes = heroesData[team2] || [];
  
  // Calculate team stats
  const team1Stats = {
    kills: team1Heroes.reduce((sum, hero) => sum + hero.stats.kills, 0),
    deaths: team1Heroes.reduce((sum, hero) => sum + hero.stats.deaths, 0),
    assists: team1Heroes.reduce((sum, hero) => sum + hero.stats.assists, 0),
    souls: team1Heroes.reduce((sum, hero) => sum + hero.stats.souls, 0)
  };
  
  const team2Stats = {
    kills: team2Heroes.reduce((sum, hero) => sum + hero.stats.kills, 0),
    deaths: team2Heroes.reduce((sum, hero) => sum + hero.stats.deaths, 0),
    assists: team2Heroes.reduce((sum, hero) => sum + hero.stats.assists, 0),
    souls: team2Heroes.reduce((sum, hero) => sum + hero.stats.souls, 0)
  };
  
  // Determine winner
  let winner;
  if (match.score) {
    const scores = match.score.split(':').map(Number);
    winner = scores[0] > scores[1] ? team1 : team2;
  } else {
    winner = team1Stats.kills > team2Stats.kills ? team1 : team2;
  }
  
  return {
    team1Stats,
    team2Stats,
    winner
  };
};

const MatchModal = ({ isOpen, closeModal, match }) => {
  if (!match) return null;
  
  const { team1, team2 } = match;
  const { team1Stats, team2Stats, winner } = generateMatchStats(match);
  
  const team1Heroes = heroesData[team1] || [];
  const team2Heroes = heroesData[team2] || [];
  
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
                className="w-full max-w-5xl transform overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all"
              >
                {/* Match header with team logos */}
                <div className="relative">
                  <div 
                    className="w-full h-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between px-6 border-b border-green-900/20"
                  >
                    <div className="flex items-center space-x-4">
                      <span 
                        className="text-5xl w-16 h-16 flex items-center justify-center"
                      >
                        {getTeamLogo(team1)}
                      </span>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-white">{team1}</h3>
                        <p className={`text-sm ${winner === team1 ? 'text-green-400' : 'text-gray-400'}`}>
                          {winner === team1 ? 'Winner' : ''}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="text-white text-3xl font-bold">{match.score}</div>
                      <div className="text-gray-400 text-sm">{match.date}</div>
                      <div className="text-gray-400 text-xs">{match.duration}</div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <h3 className="text-xl font-bold text-white">{team2}</h3>
                        <p className={`text-sm ${winner === team2 ? 'text-green-400' : 'text-gray-400'}`}>
                          {winner === team2 ? 'Winner' : ''}
                        </p>
                      </div>
                      <span 
                        className="text-5xl w-16 h-16 flex items-center justify-center"
                      >
                        {getTeamLogo(team2)}
                      </span>
                    </div>
                    
                    <button 
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Match statistics */}
                <div className="p-6">
                  <h4 className="text-lg font-medium text-white mb-4">Match Statistics</h4>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-gray-400 text-sm uppercase mb-1">Duration</div>
                      <div className="text-white text-xl font-bold">{gameStats.duration}</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-gray-400 text-sm uppercase mb-1">Total Kills</div>
                      <div className="text-white text-xl font-bold">{gameStats.totalKills}</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-gray-400 text-sm uppercase mb-1">Total Souls</div>
                      <div className="text-white text-xl font-bold">{gameStats.totalSouls.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  {/* Team comparison */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-white mb-4">Team Performance</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="grid grid-cols-5 gap-2 text-sm text-gray-400 mb-2 text-center">
                        <div className="text-left">{team1}</div>
                        <div>Kills</div>
                        <div>Deaths</div>
                        <div>Assists</div>
                        <div className="text-right">Souls</div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 text-white mb-4 text-center">
                        <div className="text-left font-medium">{team1}</div>
                        <div>{team1Stats.kills}</div>
                        <div>{team1Stats.deaths}</div>
                        <div>{team1Stats.assists}</div>
                        <div className="text-right">{team1Stats.souls.toLocaleString()}</div>
                      </div>
                      <div className="grid grid-cols-5 gap-2 text-white text-center">
                        <div className="text-left font-medium">{team2}</div>
                        <div>{team2Stats.kills}</div>
                        <div>{team2Stats.deaths}</div>
                        <div>{team2Stats.assists}</div>
                        <div className="text-right">{team2Stats.souls.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Player statistics */}
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Player Statistics</h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Team 1 players */}
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h5 className="text-white font-medium mb-3">{team1}</h5>
                        <div className="space-y-3">
                          {team1Heroes.map((hero, index) => (
                            <div key={index} className="grid grid-cols-5 gap-2 items-center">
                              <div className="col-span-2 flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden">
                                  <img 
                                    src={`/images/heroes/${hero.image}`} 
                                    alt={hero.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.src = 'https://via.placeholder.com/56?text=Hero';
                                    }} 
                                  />
                                </div>
                                <span className="text-white text-sm">{hero.name}</span>
                              </div>
                              <div className="text-center text-gray-300 text-sm">{hero.stats.kills}/{hero.stats.deaths}/{hero.stats.assists}</div>
                              <div className="text-right col-span-2 text-gray-300 text-sm">{hero.stats.souls.toLocaleString()} souls</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Team 2 players */}
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h5 className="text-white font-medium mb-3">{team2}</h5>
                        <div className="space-y-3">
                          {team2Heroes.map((hero, index) => (
                            <div key={index} className="grid grid-cols-5 gap-2 items-center">
                              <div className="col-span-2 flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden">
                                  <img 
                                    src={`/images/heroes/${hero.image}`} 
                                    alt={hero.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.src = 'https://via.placeholder.com/56?text=Hero';
                                    }} 
                                  />
                                </div>
                                <span className="text-white text-sm">{hero.name}</span>
                              </div>
                              <div className="text-center text-gray-300 text-sm">{hero.stats.kills}/{hero.stats.deaths}/{hero.stats.assists}</div>
                              <div className="text-right col-span-2 text-gray-300 text-sm">{hero.stats.souls.toLocaleString()} souls</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Close
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

export default MatchModal; 