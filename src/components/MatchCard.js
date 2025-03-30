import React from 'react';

// Объект с логотипами команд (эмодзи)
export const teamLogos = {
  'Galaxy Guardians': '🚀',
  'Nexus Dominators': '⚡',
  'Shadow Assassins': '🥷',
  'Arcane Mages': '🧙‍♂️',
  'Cyber Dragons': '🐉',
  'Void Warriors': '🛡️',
  'Phoenix Force': '🔥',
  'Dark Knights': '🌑',
  // Логотип по умолчанию
  default: '🏆'
};

// Функция для получения логотипа по имени команды
export const getTeamLogo = (teamName) => {
  return teamLogos[teamName] || teamLogos.default;
};

const MatchCard = ({ match, onClick }) => {
  // Определяем победителя на основе счета (если он есть)
  let winner = null;
  if (match.score) {
    const scores = match.score.split(':').map(Number);
    winner = scores[0] > scores[1] ? match.team1 : match.team2;
  }

  return (
    <div
      className="w-full max-w-xs rounded-lg overflow-hidden cursor-pointer transition-all duration-300 match-card hover:translate-y-[-2px]"
      onClick={() => onClick(match)}
      style={{
        background: 'rgba(24, 24, 24, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(220, 38, 38, 0.2)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
      }}
    >
      <div className="px-4 py-3 border-b border-red-800/40"
        style={{
          background: 'linear-gradient(90deg, rgba(185, 28, 28, 0.5) 0%, rgba(127, 29, 29, 0.5) 100%)'
        }}
      >
        <h3 className="text-sm font-medium text-white">Матч #{match.id}</h3>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium text-white flex items-center">
            <span className="team-logo mr-2" style={{ fontSize: '1.2rem' }}>
              {getTeamLogo(match.team1)}
            </span>
            {match.team1}
          </div>
          {match.score && (
            <div className={`w-8 h-8 flex items-center justify-center rounded-md shadow-md ${
              winner === match.team1 ? 'bg-green-600/90' : 'bg-red-800/80'
            }`}>
              <span className="text-sm font-bold text-white">{match.score.split(':')[0]}</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="font-medium text-white flex items-center">
            <span className="team-logo mr-2" style={{ fontSize: '1.2rem' }}>
              {getTeamLogo(match.team2)}
            </span>
            {match.team2}
          </div>
          {match.score && (
            <div className={`w-8 h-8 flex items-center justify-center rounded-md shadow-md ${
              winner === match.team2 ? 'bg-green-600/90' : 'bg-red-800/80'
            }`}>
              <span className="text-sm font-bold text-white">{match.score.split(':')[1]}</span>
            </div>
          )}
        </div>
        
        <div className="mt-3 text-xs text-gray-400">{match.date}</div>
      </div>
    </div>
  );
};

export default MatchCard; 