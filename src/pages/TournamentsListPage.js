import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for tournaments
const tournamentsData = [
  {
    id: 1,
    name: 'Deadlock Cup 2023 Spring',
    status: 'completed',
    prizePool: '$10,000',
    startDate: '10.04.2023',
    endDate: '20.04.2023',
    teams: 8,
    description: 'The inaugural Deadlock Cup featuring 8 top teams competing for glory and prizes.'
  },
  {
    id: 2,
    name: 'Deadlock Cup 2023 Summer',
    status: 'registration',
    prizePool: '$15,000',
    startDate: '15.07.2023',
    endDate: '30.07.2023',
    teams: 16,
    description: 'Summer edition of Deadlock Cup with increased prize pool and more teams.'
  },
  {
    id: 3,
    name: 'Deadlock Masters 2023',
    status: 'upcoming',
    prizePool: '$25,000',
    startDate: '01.10.2023',
    endDate: '15.10.2023',
    teams: 12,
    description: 'The premier Deadlock tournament with the biggest prize pool of the year.'
  }
];

const TournamentsListPage = () => {
  // Get status badge style
  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-gray-500 text-white';
      case 'active':
        return 'bg-green-600 text-white';
      case 'registration':
        return 'bg-blue-600 text-white';
      case 'upcoming':
        return 'bg-yellow-600 text-black';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  // Get status text
  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'Active';
      case 'registration':
        return 'Registration Open';
      case 'upcoming':
        return 'Upcoming';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="text-white">DEADLOCK</span>
          <span className="text-red-500"> TOURNAMENTS</span>
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {tournamentsData.map((tournament) => (
              <div 
                key={tournament.id} 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-white">{tournament.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(tournament.status)}`}>
                      {getStatusText(tournament.status)}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{tournament.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Prize Pool</p>
                      <p className="text-lg font-semibold text-red-400">{tournament.prizePool}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-base">{tournament.startDate} - {tournament.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teams</p>
                      <p className="text-base">{tournament.teams}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Format</p>
                      <p className="text-base">Single Elimination</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link
                      to={`/cups/${tournament.id}`}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                    >
                      View Details
                    </Link>
                    
                    {tournament.status === 'registration' && (
                      <Link
                        to="/create-team"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-3 transition"
                      >
                        Register Team
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentsListPage; 