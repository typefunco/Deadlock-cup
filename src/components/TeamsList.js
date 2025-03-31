import React, { useState } from 'react';
import { FiUsers, FiEye } from 'react-icons/fi';
import TeamDetailsModal from './TeamDetailsModal';

// Mock data for registered teams
const mockTeams = [
  {
    id: 1,
    name: 'Phantom Assassins',
    logo: 'https://via.placeholder.com/80',
    shortName: 'PHT',
    players: [
      { id: 1, nickname: 'ShadowBlade', steamId: 'STEAM_0:1:12345678', mmr: 6500 },
      { id: 2, nickname: 'NightStalker', steamId: 'STEAM_0:0:23456789', mmr: 6300 },
      { id: 3, nickname: 'SilentKiller', steamId: 'STEAM_0:1:34567890', mmr: 6100 },
      { id: 4, nickname: 'DarkMaster', steamId: 'STEAM_0:0:45678901', mmr: 5900 },
      { id: 5, nickname: 'GhostWalker', steamId: 'STEAM_0:1:56789012', mmr: 6200 }
    ]
  },
  {
    id: 2,
    name: 'Digital Chaos',
    logo: 'https://via.placeholder.com/80',
    shortName: 'DC',
    players: [
      { id: 6, nickname: 'ByteWizard', steamId: 'STEAM_0:0:67890123', mmr: 6400 },
      { id: 7, nickname: 'PixelPunisher', steamId: 'STEAM_0:1:78901234', mmr: 6450 },
      { id: 8, nickname: 'DataDemon', steamId: 'STEAM_0:0:89012345', mmr: 6250 },
      { id: 9, nickname: 'CodeBreaker', steamId: 'STEAM_0:1:90123456', mmr: 6150 },
      { id: 10, nickname: 'BitCrusher', steamId: 'STEAM_0:0:01234567', mmr: 6350 }
    ]
  },
  {
    id: 3,
    name: 'Neon Predators',
    logo: 'https://via.placeholder.com/80',
    shortName: 'NP',
    players: [
      { id: 11, nickname: 'GlowStalker', steamId: 'STEAM_0:1:12345678', mmr: 6600 },
      { id: 12, nickname: 'VoltHunter', steamId: 'STEAM_0:0:23456789', mmr: 6400 },
      { id: 13, nickname: 'FlashPanther', steamId: 'STEAM_0:1:34567890', mmr: 6300 },
      { id: 14, nickname: 'LuminousShark', steamId: 'STEAM_0:0:45678901', mmr: 6200 },
      { id: 15, nickname: 'PlasmaWolf', steamId: 'STEAM_0:1:56789012', mmr: 6500 }
    ]
  },
  {
    id: 4,
    name: 'Techno Vikings',
    logo: 'https://via.placeholder.com/80',
    shortName: 'TV',
    players: [
      { id: 16, nickname: 'CircuitBeard', steamId: 'STEAM_0:0:67890123', mmr: 6200 },
      { id: 17, nickname: 'MotherboardMauler', steamId: 'STEAM_0:1:78901234', mmr: 6300 },
      { id: 18, nickname: 'CPUCrusher', steamId: 'STEAM_0:0:89012345', mmr: 6100 },
      { id: 19, nickname: 'WirelessWarrior', steamId: 'STEAM_0:1:90123456', mmr: 6000 },
      { id: 20, nickname: 'BluetoothBerserker', steamId: 'STEAM_0:0:01234567', mmr: 6250 }
    ]
  }
];

const TeamsList = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openTeamDetails = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
    console.log("Opening modal for team:", team.name);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("Closing modal");
  };
  
  return (
    <div className="card">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-2xl font-bold mb-2 sm:mb-0">Registered Teams</h2>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            {mockTeams.length} teams
          </span>
        </div>
        
        <div className="space-y-3">
          {mockTeams.map(team => (
            <div 
              key={team.id}
              className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={team.logo} 
                    alt={`${team.name} logo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80/718096/FFFFFF?text=${team.shortName}`;
                    }}
                  />
                </div>
              </div>
              
              <div className="ml-4 flex-1">
                <div className="font-bold">{team.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <FiUsers className="mr-1" />
                  {team.players.length} players
                </div>
              </div>
              
              <button 
                onClick={() => openTeamDetails(team)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
              >
                <FiEye className="mr-2" />
                View Roster
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {selectedTeam && (
        <TeamDetailsModal 
          team={selectedTeam}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default TeamsList; 