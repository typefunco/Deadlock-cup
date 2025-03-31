import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const TournamentInfo = ({ tournament }) => {
  const { user } = useAuth();
  
  if (!tournament) {
    return (
      <div className="card">
        <div className="p-6">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">Tournament information is loading...</p>
          </div>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getStatusLabel = (status) => {
    switch(status) {
      case 'registration':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            <span className="w-2 h-2 mr-1 bg-blue-500 rounded-full animate-pulse"></span>
            Registration Open
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <span className="w-2 h-2 mr-1 bg-green-500 rounded-full animate-pulse"></span>
            Active
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400">
            Completed
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
            <span className="w-2 h-2 mr-1 bg-purple-500 rounded-full animate-pulse"></span>
            Coming Soon
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="card">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold">{tournament.name || 'Tournament'}</h2>
          {tournament.status && getStatusLabel(tournament.status)}
        </div>
        
        <div className="space-y-5">
          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Start Date</span>
                <span className="font-semibold">{formatDate(tournament.startDate)}</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">End Date</span>
                <span className="font-semibold">{formatDate(tournament.endDate)}</span>
              </div>
            </div>
          </div>
          
          {/* Tournament Info */}
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span className="text-gray-600 dark:text-gray-400">Prize Pool</span>
              <span className="font-semibold">
                ${tournament.prizePool ? tournament.prizePool.toLocaleString() : 'TBA'}
              </span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span className="text-gray-600 dark:text-gray-400">Format</span>
              <span className="font-semibold">{tournament.format || 'TBA'}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span className="text-gray-600 dark:text-gray-400">Team Limit</span>
              <span className="font-semibold">{tournament.teamLimit ? `${tournament.teamLimit} teams` : 'TBA'}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
              <span className="text-gray-600 dark:text-gray-400">Registration Deadline</span>
              <span className="font-semibold">{formatDate(tournament.registrationDeadline)}</span>
            </div>
          </div>
          
          {/* Tournament Rules */}
          {tournament.rules && tournament.rules.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Tournament Rules</h3>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ul className="list-disc pl-5 space-y-1">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Prize Distribution */}
          {tournament.prizes && tournament.prizes.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Prize Distribution</h3>
              <div className="space-y-2">
                {tournament.prizes.map((prize, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold shadow-sm mr-3">
                        {index + 1}
                      </div>
                      <span className="font-medium">{prize.place}</span>
                    </div>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      ${prize.amount ? prize.amount.toLocaleString() : 'TBA'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Register Button - conditionally shown based on tournament status */}
          {tournament.status === 'registration' && (
            <div className="mt-8">
              {user ? (
                <Link
                  to="/team/create"
                  className="btn btn-primary w-full"
                >
                  Register Your Team
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-primary w-full"
                >
                  Sign In to Register
                </Link>
              )}
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                {tournament.registeredTeams && tournament.registeredTeams.length ? tournament.registeredTeams.length : 0} 
                {" "}out of{" "}
                {tournament.teamLimit || 'TBA'} teams registered
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentInfo; 