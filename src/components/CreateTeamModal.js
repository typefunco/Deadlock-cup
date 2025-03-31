import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateTeamModal = ({ isOpen, closeModal, onCreateTeam }) => {
  // Form state
  const [teamName, setTeamName] = useState('');
  const [shortName, setShortName] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [players, setPlayers] = useState([
    { nickname: '', steamId: '', mmr: '' },
    { nickname: '', steamId: '', mmr: '' },
    { nickname: '', steamId: '', mmr: '' },
    { nickname: '', steamId: '', mmr: '' },
    { nickname: '', steamId: '', mmr: '' }
  ]);
  const [errors, setErrors] = useState({});

  // Logo change handling
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (2MB = 2 * 1024 * 1024)
      if (file.size > 2 * 1024 * 1024) {
        setErrors({ ...errors, logo: 'File size should not exceed 2MB' });
        return;
      }

      // Check file type
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        setErrors({ ...errors, logo: 'Allowed formats: PNG, JPEG, JPG' });
        return;
      }

      // If all checks passed, update state
      setLogoFile(file);
      setErrors({ ...errors, logo: null });

      // Create logo preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Player data change handling
  const handlePlayerChange = (index, field, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
    setPlayers(updatedPlayers);
  };

  // Add player
  const addPlayer = () => {
    setPlayers([...players, { nickname: '', steamId: '', mmr: '' }]);
  };

  // Remove player
  const removePlayer = (index) => {
    if (players.length > 5) {
      const updatedPlayers = [...players];
      updatedPlayers.splice(index, 1);
      setPlayers(updatedPlayers);
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Team name validation
    if (!teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    } else if (teamName.length < 3 || teamName.length > 20) {
      newErrors.teamName = 'Name must contain 3 to 20 characters';
    }

    // Short name validation
    if (!shortName.trim()) {
      newErrors.shortName = 'Short name is required';
    } else if (shortName.length !== 3) {
      newErrors.shortName = 'Short name must contain exactly 3 characters';
    }

    // Logo validation
    if (!logoFile) {
      newErrors.logo = 'Logo is required';
    }

    // Players validation
    const validPlayers = players.filter(player => 
      player.nickname.trim() && player.steamId.trim()
    );

    if (validPlayers.length < 5) {
      newErrors.players = 'You must add at least 5 players';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create team data object
      const teamData = {
        name: teamName,
        shortName: shortName.toUpperCase(),
        logo: logoPreview, // In a real app, this would be a URL or ID of the uploaded image
        players: players.filter(player => player.nickname.trim() && player.steamId.trim())
      };
      
      // Pass data to parent component
      onCreateTeam(teamData);
      
      // Reset form
      setTeamName('');
      setShortName('');
      setLogoFile(null);
      setLogoPreview('');
      setPlayers([
        { nickname: '', steamId: '', mmr: '' },
        { nickname: '', steamId: '', mmr: '' },
        { nickname: '', steamId: '', mmr: '' },
        { nickname: '', steamId: '', mmr: '' },
        { nickname: '', steamId: '', mmr: '' }
      ]);
      setErrors({});
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 z-20 bg-gray-900 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Team Creation</h2>
          <button 
            onClick={closeModal} 
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  className="bg-gray-700 text-white w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-red-500"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Team name"
                />
                {errors.teamName && <p className="text-red-500 text-xs mt-1">{errors.teamName}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Short Name (3 characters)
                </label>
                <input
                  type="text"
                  className="bg-gray-700 text-white w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-red-500"
                  value={shortName}
                  onChange={(e) => setShortName(e.target.value.toUpperCase().slice(0, 3))}
                  placeholder="SEK"
                  maxLength={3}
                />
                {errors.shortName && <p className="text-red-500 text-xs mt-1">{errors.shortName}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Team Logo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden border border-gray-600">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo" className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <label className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded inline-block">
                      Choose File
                      <input
                        type="file"
                        className="hidden"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleLogoChange}
                      />
                    </label>
                    <p className="text-gray-400 text-xs mt-1">PNG, JPEG or JPG, max. 2MB</p>
                    {errors.logo && <p className="text-red-500 text-xs mt-1">{errors.logo}</p>}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-gray-300 text-sm font-bold">
                    Team Members
                  </label>
                  <button
                    type="button"
                    className="text-sm text-red-500 hover:text-red-400"
                    onClick={addPlayer}
                  >
                    + Add Player
                  </button>
                </div>
                
                {errors.players && <p className="text-red-500 text-xs mb-2">{errors.players}</p>}
                
                <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                  {players.map((player, index) => (
                    <div key={index} className="bg-gray-700 p-3 rounded flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300 text-sm font-bold">Player {index + 1}</span>
                        {players.length > 5 && (
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-400"
                            onClick={() => removePlayer(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      
                      <input
                        type="text"
                        className="bg-gray-600 text-white px-3 py-1 rounded text-sm w-full"
                        value={player.nickname}
                        onChange={(e) => handlePlayerChange(index, 'nickname', e.target.value)}
                        placeholder="Player nickname"
                      />
                      
                      <input
                        type="text"
                        className="bg-gray-600 text-white px-3 py-1 rounded text-sm w-full"
                        value={player.steamId}
                        onChange={(e) => handlePlayerChange(index, 'steamId', e.target.value)}
                        placeholder="Steam ID"
                      />
                      
                      <input
                        type="number"
                        className="bg-gray-600 text-white px-3 py-1 rounded text-sm w-full"
                        value={player.mmr}
                        onChange={(e) => handlePlayerChange(index, 'mmr', e.target.value)}
                        placeholder="MMR (optional)"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            >
              Create Team
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateTeamModal; 