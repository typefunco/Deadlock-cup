import React from 'react';

// Team logos object (emojis)
export const teamLogos = {
  'Galaxy Guardians': '🚀',
  'Nexus Dominators': '⚡',
  'Shadow Assassins': '🥷',
  'Arcane Mages': '🧙‍♂️',
  'Cyber Dragons': '🐉',
  'Void Warriors': '🛡️',
  'Phoenix Force': '🔥',
  'Dark Knights': '🌑',
  // Default logo
  default: '🏆'
};

// Function to get logo by team name
export const getTeamLogo = (teamName) => {
  return teamLogos[teamName] || teamLogos.default;
};

const MatchCard = ({ match, onClick }) => {
  // Parse score to determine the winner
  const [team1Score, team2Score] = match.score.split(':').map(num => parseInt(num, 10));
  const team1Win = team1Score > team2Score;
  const team2Win = team2Score > team1Score;
  
  return (
    <div 
      className="w-full p-4 bg-gray-900/80 rounded-lg shadow-lg border border-gray-800 hover:border-green-700 transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-3">
        {/* Team 1 */}
        <div className={`flex justify-between items-center ${team1Win ? 'text-green-400 font-semibold' : 'text-gray-300'}`}>
          <span>{match.team1}</span>
          <span className={`w-6 h-6 flex items-center justify-center rounded-full ${team1Win ? 'bg-green-800' : 'bg-gray-800'}`}>
            {match.score.split(':')[0]}
          </span>
        </div>
        
        <div className="border-b border-gray-700"></div>
        
        {/* Team 2 */}
        <div className={`flex justify-between items-center ${team2Win ? 'text-green-400 font-semibold' : 'text-gray-300'}`}>
          <span>{match.team2}</span>
          <span className={`w-6 h-6 flex items-center justify-center rounded-full ${team2Win ? 'bg-green-800' : 'bg-gray-800'}`}>
            {match.score.split(':')[1]}
          </span>
        </div>
        
        {/* Match information */}
        <div className="pt-2 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{match.duration}</span>
          </div>
          <div>
            <svg className="w-3 h-3 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{match.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard; 