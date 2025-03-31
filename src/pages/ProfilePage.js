import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import PlayerStats from '../components/profile/PlayerStats';
import PlayerHeroes from '../components/profile/PlayerHeroes';
import PlayerInfo from '../components/profile/PlayerInfo';

// Mock player data for personal stats
const playerData = {
  name: 'John Doe',
  nickname: 'ShadowStriker',
  avatar: 'https://i.pravatar.cc/300?img=12',
  level: 42,
  mmr: 6350,
  achievements: 14,
  contacts: {
    steam: 'steamcommunity.com/id/shadowstriker',
    telegram: '@shadow_striker',
    discord: 'shadowstriker#1234',
    email: 'john.doe@example.com'
  },
  stats: {
    matches: 256,
    wins: 153,
    losses: 103,
    winRate: 59.8,
    killsPerMatch: 8.4,
    deathsPerMatch: 4.2,
    assistsPerMatch: 12.3,
    soulsPerMatch: 26520,
    averageGameDuration: '36:20'
  },
  heroes: [
    { name: 'Abrams', matches: 78, wins: 52, winRate: 66.7, kda: 3.8, image: 'abrams.png' },
    { name: 'Kelvin', matches: 54, wins: 35, winRate: 64.8, kda: 4.2, image: 'kelvin.png' },
    { name: 'Lash', matches: 42, wins: 24, winRate: 57.1, kda: 3.5, image: 'lash.png' },
    { name: 'Wraith', matches: 38, wins: 21, winRate: 55.3, kda: 3.2, image: 'wraith.png' },
    { name: 'Ivy', matches: 26, wins: 13, winRate: 50.0, kda: 2.9, image: 'ivy.png' },
    { name: 'Dynamo', matches: 18, wins: 8, winRate: 44.4, kda: 2.6, image: 'dynamo.png' }
  ],
  recentMatches: [
    { id: 1, result: 'win', hero: 'Abrams', score: '12/4/8', duration: '34:22', date: '2023-07-15' },
    { id: 2, result: 'loss', hero: 'Kelvin', score: '6/5/10', duration: '42:18', date: '2023-07-14' },
    { id: 3, result: 'win', hero: 'Abrams', score: '15/2/6', duration: '28:45', date: '2023-07-12' },
    { id: 4, result: 'win', hero: 'Wraith', score: '8/3/12', duration: '38:09', date: '2023-07-10' },
    { id: 5, result: 'loss', hero: 'Ivy', score: '4/7/9', duration: '45:37', date: '2023-07-08' }
  ]
};

const ProfilePage = () => {
  const { user } = useAuth();
  
  // In a real app, we would fetch player data based on user id
  // For now, we use mock data
  const player = playerData;
  
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2 text-center sm:text-left">Player Profile</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center sm:text-left">View game statistics and achievements</p>
        </div>
        
        {/* Profile Header with Avatar and Basic Info */}
        <div className="card mb-10 animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={player.avatar} 
                    alt={player.nickname}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-500 rounded-full p-2 shadow-md">
                  <span className="text-white text-sm font-semibold">Lvl {player.level}</span>
                </div>
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold">{player.nickname}</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{player.name}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{player.mmr}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">MMR</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{player.stats.matches}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Matches</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{player.stats.winRate}%</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Win Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{player.achievements}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Achievements</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Player Contact Info - Desktop */}
              <div className="hidden md:block">
                <PlayerInfo contacts={player.contacts} />
              </div>
            </div>
          </div>
          
          {/* Player Contact Info - Mobile */}
          <div className="px-8 pb-8 md:hidden">
            <PlayerInfo contacts={player.contacts} />
          </div>
        </div>
        
        {/* Main Content: Stats and Heroes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Player Stats */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <PlayerStats stats={player.stats} recentMatches={player.recentMatches} />
          </div>
          
          {/* Right Column: Player Heroes */}
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <PlayerHeroes heroes={player.heroes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 