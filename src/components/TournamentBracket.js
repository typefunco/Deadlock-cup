import React, { useState } from 'react';
import MatchCard from './MatchCard';
import MatchModal from './MatchModal';

// Моковые данные для турнира Deadlock
const tournamentData = {
  rounds: [
    {
      name: 'Четвертьфинал',
      matches: [
        { id: 1, team1: 'Galaxy Guardians', team2: 'Nexus Dominators', score: '1:0', duration: '45 мин', date: '10.04.2023' },
        { id: 2, team1: 'Shadow Assassins', team2: 'Arcane Mages', score: '1:0', duration: '38 мин', date: '10.04.2023' },
        { id: 3, team1: 'Cyber Dragons', team2: 'Void Warriors', score: '0:1', duration: '52 мин', date: '11.04.2023' },
        { id: 4, team1: 'Phoenix Force', team2: 'Dark Knights', score: '0:1', duration: '61 мин', date: '11.04.2023' },
      ]
    },
    {
      name: 'Полуфинал',
      matches: [
        { id: 5, team1: 'Galaxy Guardians', team2: 'Shadow Assassins', score: '1:3', duration: '49 мин', date: '15.04.2023' },
        { id: 6, team1: 'Void Warriors', team2: 'Dark Knights', score: '0:3', duration: '42 мин', date: '15.04.2023' },
      ]
    },
    {
      name: 'Финал',
      matches: [
        { id: 7, team1: 'Shadow Assassins', team2: 'Dark Knights', score: '3:2', duration: '58 мин', date: '20.04.2023' },
      ]
    }
  ]
};

const TournamentBracket = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 min-h-screen" 
      style={{
        background: 'radial-gradient(circle at center, rgba(64, 64, 64, 0.7) 0%, rgba(32, 32, 32, 0.9) 50%, rgba(0, 0, 0, 1) 100%)',
      }}
    >
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {tournamentData.rounds.map((round, roundIndex) => (
            <div 
              key={roundIndex} 
              className="flex flex-col space-y-6 items-center p-6 rounded-lg shadow-lg border border-green-900/30"
              style={{
                background: 'rgba(20, 20, 20, 0.65)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h2 className="text-xl font-semibold mb-4 text-white border-b-2 border-green-800/60 pb-2 w-full text-center">{round.name}</h2>
              
              <div className={`flex flex-col justify-around w-full ${
                roundIndex === 0 ? 'space-y-6' : 
                roundIndex === 1 ? 'space-y-32' : 
                'space-y-0 pt-32'
              }`}>
                {round.matches.map((match) => (
                  <div 
                    key={match.id}
                    className="flex cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
                    onClick={() => handleMatchClick(match)}
                  >
                    <MatchCard 
                      match={match} 
                      onClick={() => handleMatchClick(match)} 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMatch && (
        <MatchModal 
          isOpen={isModalOpen} 
          closeModal={closeModal} 
          match={selectedMatch} 
        />
      )}
    </div>
  );
};

export default TournamentBracket; 