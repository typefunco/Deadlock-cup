import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TournamentBracket from '../components/TournamentBracket';
import TeamsList from '../components/TeamsList';
import TournamentInfo from '../components/TournamentInfo';

// Import tournament data from TournamentsListPage
const tournamentsData = [
  {
    id: 1,
    name: 'Deadlock Cup 2023 Spring',
    status: 'completed',
    prizePool: 10000,
    startDate: '2023-04-10T10:00:00',
    endDate: '2023-04-20T18:00:00',
    registrationDeadline: '2023-04-05T23:59:59',
    teamLimit: 8,
    format: 'Single Elimination',
    description: 'The inaugural Deadlock Cup featuring 8 top teams competing for glory and prizes.',
    rules: [
      'All matches will be played on the official Deadlock tournament server',
      'Teams must check in 30 minutes before their scheduled match',
      'Substitute players are allowed if declared at least 24 hours in advance',
      'Match results are final and cannot be disputed after confirmation',
      'Tournament organizers have the final say in all disputes'
    ],
    prizes: [
      { place: '1st Place', amount: 5000 },
      { place: '2nd Place', amount: 3000 },
      { place: '3rd-4th Place', amount: 1000 }
    ],
    registeredTeams: [
      { id: 1, name: 'Team A' },
      { id: 2, name: 'Team B' },
      { id: 3, name: 'Team C' },
      { id: 4, name: 'Team D' },
      { id: 5, name: 'Team E' },
      { id: 6, name: 'Team F' },
      { id: 7, name: 'Team G' },
      { id: 8, name: 'Team H' }
    ]
  },
  {
    id: 2,
    name: 'Deadlock Cup 2023 Summer',
    status: 'registration',
    prizePool: 15000,
    startDate: '2023-07-15T10:00:00',
    endDate: '2023-07-30T18:00:00',
    registrationDeadline: '2023-07-10T23:59:59',
    teamLimit: 16,
    format: 'Double Elimination',
    description: 'Summer edition of Deadlock Cup with increased prize pool and more teams.',
    rules: [
      'All matches will be played on the official Deadlock tournament server',
      'Teams must check in 30 minutes before their scheduled match',
      'Substitute players are allowed if declared at least 24 hours in advance',
      'Match results are final and cannot be disputed after confirmation',
      'Tournament organizers have the final say in all disputes',
      'All players must have a valid game account',
      'Teams must have at least 5 players registered'
    ],
    prizes: [
      { place: '1st Place', amount: 7500 },
      { place: '2nd Place', amount: 4000 },
      { place: '3rd Place', amount: 2000 },
      { place: '4th Place', amount: 1000 },
      { place: '5th-8th Place', amount: 500 }
    ],
    registeredTeams: [
      { id: 1, name: 'Phantom Assassins' },
      { id: 2, name: 'Digital Chaos' },
      { id: 3, name: 'Neon Predators' },
      { id: 4, name: 'Techno Vikings' }
    ]
  },
  {
    id: 3,
    name: 'Deadlock Masters 2023',
    status: 'upcoming',
    prizePool: 25000,
    startDate: '2023-10-01T12:00:00',
    endDate: '2023-10-15T20:00:00',
    registrationDeadline: '2023-09-25T23:59:59',
    teamLimit: 12,
    format: 'Group Stage + Single Elimination Playoffs',
    description: 'The premier Deadlock tournament with the biggest prize pool of the year.',
    rules: [
      'All matches will be played on the official Deadlock tournament server',
      'Teams must check in 30 minutes before their scheduled match',
      'Substitute players are allowed if declared at least 24 hours in advance',
      'Match results are final and cannot be disputed after confirmation',
      'Tournament organizers have the final say in all disputes',
      'Only teams that have participated in previous tournaments are eligible'
    ],
    prizes: [
      { place: '1st Place', amount: 12000 },
      { place: '2nd Place', amount: 6000 },
      { place: '3rd Place', amount: 3000 },
      { place: '4th Place', amount: 2000 },
      { place: '5th-8th Place', amount: 500 }
    ],
    registeredTeams: []
  }
];

const TournamentPage = () => {
  const { cupId } = useParams();
  const tournamentId = parseInt(cupId, 10);
  
  // Find tournament data by ID
  const tournament = tournamentsData.find(t => t.id === tournamentId) || {
    id: tournamentId,
    name: `Deadlock Cup ${tournamentId}`,
    status: 'unknown',
    prizePool: 0,
    startDate: null,
    endDate: null,
    registrationDeadline: null,
    teamLimit: 0,
    format: 'TBA',
    description: 'Tournament details coming soon.',
    rules: [],
    prizes: [],
    registeredTeams: []
  };
  
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
  
  // Determine if we should show bracket or teams list
  const shouldShowBracket = tournament.status === 'active' || tournament.status === 'completed';
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">      
      {/* Tournament Header */}
      <div className="relative pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <Link to="/tournaments" className="self-start text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 inline-flex items-center mb-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Tournaments
            </Link>
            
            <div className="text-center mb-3">
              <h1 className="text-3xl font-bold">
                {tournament.name}
              </h1>
            </div>
            
            <div className="mb-4">
              {tournament.status && (
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(tournament.status)}`}>
                  {getStatusText(tournament.status)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto py-8 px-4 relative z-10">
        {/* For tournaments in registration, upcoming or unknown status, show teams list and tournament info */}
        {!shouldShowBracket ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side: Teams list */}
            <div>
              <TeamsList />
            </div>
            
            {/* Right side: Tournament info */}
            <div>
              <TournamentInfo tournament={tournament} />
            </div>
          </div>
        ) : (
          /* For active or completed tournaments, show the bracket */
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Tournament Bracket</h2>
            <TournamentBracket />
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2023 Deadlock. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TournamentPage; 