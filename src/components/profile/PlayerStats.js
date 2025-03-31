import React from 'react';

const PlayerStats = ({ stats, recentMatches }) => {
  return (
    <div className="space-y-8">
      <div className="card">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6">Game Performance</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Matches</div>
              <div className="text-2xl font-bold">{stats.matches}</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Win Rate</div>
              <div className="text-2xl font-bold">{stats.winRate}%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stats.wins}W - {stats.losses}L
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">KDA Ratio</div>
              <div className="text-2xl font-bold">
                {((stats.killsPerMatch + stats.assistsPerMatch) / stats.deathsPerMatch).toFixed(1)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stats.killsPerMatch}/{stats.deathsPerMatch}/{stats.assistsPerMatch}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Avg. Souls</div>
              <div className="text-2xl font-bold">{Math.round(stats.soulsPerMatch).toLocaleString()}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                per match
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Matches */}
      <div className="card">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6">Recent Matches</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                  <th className="text-left pb-3 font-medium">Hero</th>
                  <th className="text-left pb-3 font-medium">Result</th>
                  <th className="text-left pb-3 font-medium">K/D/A</th>
                  <th className="text-left pb-3 font-medium">Duration</th>
                  <th className="text-left pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentMatches.map((match) => (
                  <tr 
                    key={match.id} 
                    className="border-b border-gray-100 dark:border-gray-800 text-sm"
                  >
                    <td className="py-3 font-medium">{match.hero}</td>
                    <td className="py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        match.result === 'win' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {match.result === 'win' ? 'Victory' : 'Defeat'}
                      </span>
                    </td>
                    <td className="py-3">{match.score}</td>
                    <td className="py-3">{match.duration}</td>
                    <td className="py-3 text-gray-500 dark:text-gray-400">{match.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors">
              View Match History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats; 