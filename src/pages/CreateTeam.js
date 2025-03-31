import React, { useState } from 'react';
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
    // Here will be the logic to save team data
    console.log('Team created:', teamData);
    
    // Save team to localStorage for demonstration
    const existingTeams = JSON.parse(localStorage.getItem('teams')) || [];
    const newTeam = {
      id: Date.now(),
      name: teamData.name,
      shortName: teamData.shortName,
      logo: teamData.logo,
      players: teamData.players
    };
    
    localStorage.setItem('teams', JSON.stringify([...existingTeams, newTeam]));
    
    // Close the modal window
    closeModal();
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            <span className="text-white">Team Creation </span>
            <span className="text-red-600 uppercase font-black">DEADLOCK CUP</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Create your team to participate in the Deadlock Cup tournament. 
            You need to specify the team name, short name (3 letters), 
            logo, and add at least 6 players with their Steam profiles.
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
            Create Team
          </button>
        </div>
        
        {/* Additional information */}
        <div className="max-w-4xl mx-auto mt-16 bg-gray-800/50 p-8 rounded-xl border border-red-900/30">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Team Requirements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Team name must contain between 3 and 20 characters</li>
            <li>Team short name must consist of exactly 3 letters</li>
            <li>Team logo must be in PNG or JPEG format, up to 2MB in size</li>
            <li>You need to add at least 6 players with valid Steam profiles</li>
            <li>One player cannot be a member of multiple teams simultaneously</li>
            <li>After creating a team, you can edit its roster until the tournament begins</li>
          </ul>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 bg-gray-800/50 p-8 rounded-xl border border-red-900/30">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Registration Process</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3">
            <li>Click the "Create Team" button above</li>
            <li>Fill in all fields in the form that appears</li>
            <li>Add all team members (minimum 6)</li>
            <li>Confirm team creation</li>
            <li>After verification by administrators, your team will be added to the list of participants</li>
          </ol>
        </div>
      </div>
      
      {/* Team creation modal window */}
      <CreateTeamModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        onCreateTeam={handleCreateTeam} 
      />
      
      {/* Footer */}
      <footer className="border-t border-red-900/30 py-4 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; 2025 Deadlock. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CreateTeam; 