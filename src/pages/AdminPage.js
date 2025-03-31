import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock team data
const mockTeams = [
  {
    id: 1,
    name: 'Natus Vincere',
    shortName: 'NAV',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png',
    status: 'accepted',
    members: [
      { steamAccount: 'STEAM_0:0:12345678', mmr: 8700, nickname: 'No[o]ne' },
      { steamAccount: 'STEAM_0:0:23456789', mmr: 8500, nickname: 'SoNNeikO' },
      { steamAccount: 'STEAM_0:0:34567890', mmr: 8900, nickname: 'Crystallize' },
      { steamAccount: 'STEAM_0:0:45678901', mmr: 8400, nickname: 'Zayac' },
      { steamAccount: 'STEAM_0:0:56789012', mmr: 8600, nickname: 'ALOHADANCE' },
      { steamAccount: 'STEAM_0:0:56789012', mmr: 8600, nickname: 'vemosww' }
    ]
  },
  {
    id: 2,
    name: 'Team Secret',
    shortName: 'SEC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Team_Secret_logo.svg',
    status: 'pending',
    members: [
      { steamAccount: 'STEAM_0:0:11111111', mmr: 9000, nickname: 'Puppey' },
      { steamAccount: 'STEAM_0:0:22222222', mmr: 8800, nickname: 'YapzOr' },
      { steamAccount: 'STEAM_0:0:33333333', mmr: 9100, nickname: 'Nisha' },
      { steamAccount: 'STEAM_0:0:44444444', mmr: 8700, nickname: 'zai' },
      { steamAccount: 'STEAM_0:0:5487925', mmr: 8900, nickname: 'MATUMBAMAN' },
      { steamAccount: 'STEAM_0:0:55555555', mmr: 8900, nickname: 'vnfije' }
    ]
  },
  {
    id: 3,
    name: 'Evil Geniuses',
    shortName: 'EG',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Evil_Geniuses_logo.svg',
    status: 'rejected',
    members: [
      { steamAccount: 'STEAM_0:0:11112222', mmr: 8600, nickname: 'Arteezy' },
      { steamAccount: 'STEAM_0:0:22223333', mmr: 8400, nickname: 'Cr1t-' },
      { steamAccount: 'STEAM_0:0:33334444', mmr: 8750, nickname: 'Abed' },
      { steamAccount: 'STEAM_0:0:44445555', mmr: 8300, nickname: 'Fly' },
      { steamAccount: 'STEAM_0:0:55556666', mmr: 8100, nickname: 'iceiceice' },
      { steamAccount: 'STEAM_0:0:47385245', mmr: 8500, nickname: 'nvioexs' }
    ]
  },
  {
    id: 4,
    name: 'Team Liquid',
    shortName: 'LIQ',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Team_Liquid_logo.svg',
    status: 'accepted',
    members: [
      { steamAccount: 'STEAM_0:0:11113333', mmr: 8800, nickname: 'miCKe' },
      { steamAccount: 'STEAM_0:0:22224444', mmr: 8500, nickname: 'Boxi' },
      { steamAccount: 'STEAM_0:0:33335555', mmr: 8900, nickname: 'qojqva' },
      { steamAccount: 'STEAM_0:0:44446666', mmr: 8700, nickname: 'Taiga' },
      { steamAccount: 'STEAM_0:0:55557777', mmr: 8600, nickname: 'iNSaNiA' },
      { steamAccount: 'STEAM_0:0:536157777', mmr: 8400, nickname: 'Sheesh' }
    ]
  },
  {
    id: 5,
    name: 'Virtus.pro',
    shortName: 'VP',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Virtus.pro_logo.svg/1200px-Virtus.pro_logo.svg.png',
    status: 'pending',
    members: [
      { steamAccount: 'STEAM_0:0:11114444', mmr: 8700, nickname: 'Nightfall' },
      { steamAccount: 'STEAM_0:0:22225555', mmr: 8500, nickname: 'DM' },
      { steamAccount: 'STEAM_0:0:33336666', mmr: 8800, nickname: 'gpk' },
      { steamAccount: 'STEAM_0:0:44447777', mmr: 8400, nickname: 'Save-' },
      { steamAccount: 'STEAM_0:0:55558888', mmr: 8600, nickname: 'Kingslayer' },
      { steamAccount: 'STEAM_0:0:666668888', mmr: 8100, nickname: 'BuildMan' }
    ]
  }
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('accepted');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  const filteredTeams = mockTeams.filter(team => team.status === activeTab);

  const handleStatusChange = (teamId, newStatus) => {
    // In a real application, there would be an API request here
    console.log(`Changed team ${teamId} status to ${newStatus}`);
    // Implementation of team status update
  };

  const openTeamModal = (team) => {
    setSelectedTeam(team);
    setTeamModalOpen(true);
  };

  const closeTeamModal = () => {
    setTeamModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Admin Panel</h1>
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 -z-10"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000 -z-10"></div>
        
        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-700">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'accepted' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('accepted')}
          >
            Accepted Teams
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'pending' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Teams
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'rejected' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('rejected')}
          >
            Rejected Teams
          </button>
        </div>

        {/* Teams Table */}
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-xl border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Team
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Abbreviation
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Members Count
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredTeams.map(team => (
                <tr key={team.id} className="hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={team.logo} alt={team.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{team.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{team.shortName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{team.members.length}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => openTeamModal(team)}
                      className="text-red-400 hover:text-red-300 mr-3"
                    >
                      Details
                    </button>
                    {activeTab === 'pending' && (
                      <>
                        <button 
                          onClick={() => handleStatusChange(team.id, 'accepted')}
                          className="text-green-400 hover:text-green-300 mr-3"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleStatusChange(team.id, 'rejected')}
                          className="text-red-400 hover:text-red-300"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {activeTab === 'accepted' && (
                      <button 
                        onClick={() => handleStatusChange(team.id, 'rejected')}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        Exclude
                      </button>
                    )}
                    {activeTab === 'rejected' && (
                      <button 
                        onClick={() => handleStatusChange(team.id, 'accepted')}
                        className="text-green-400 hover:text-green-300"
                      >
                        Restore
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Team Modal */}
        {teamModalOpen && selectedTeam && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl border border-gray-700"
            >
              <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
                <div className="flex items-center">
                  <img src={selectedTeam.logo} alt={selectedTeam.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{selectedTeam.name}</h3>
                    <p className="text-sm text-gray-400">{selectedTeam.shortName}</p>
                  </div>
                </div>
                <button 
                  onClick={closeTeamModal}
                  className="text-gray-400 hover:text-gray-200 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-4">
                <h4 className="text-md font-medium text-white mb-4">Team Members</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-900">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Nickname
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Steam ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          MMR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {selectedTeam.members.map((member, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {member.nickname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {member.steamAccount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {member.mmr}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-900 flex justify-end">
                {selectedTeam.status === 'pending' && (
                  <>
                    <button 
                      onClick={() => {
                        handleStatusChange(selectedTeam.id, 'accepted');
                        closeTeamModal();
                      }}
                      className="mr-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Accept
                    </button>
                    <button 
                      onClick={() => {
                        handleStatusChange(selectedTeam.id, 'rejected');
                        closeTeamModal();
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </>
                )}
                {selectedTeam.status === 'accepted' && (
                  <button 
                    onClick={() => {
                      handleStatusChange(selectedTeam.id, 'rejected');
                      closeTeamModal();
                    }}
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                  >
                    Exclude
                  </button>
                )}
                {selectedTeam.status === 'rejected' && (
                  <button 
                    onClick={() => {
                      handleStatusChange(selectedTeam.id, 'accepted');
                      closeTeamModal();
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Restore
                  </button>
                )}
                <button 
                  onClick={closeTeamModal}
                  className="ml-3 px-4 py-2 bg-gray-700 text-gray-200 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPage; 