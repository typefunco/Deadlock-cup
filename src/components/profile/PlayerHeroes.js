import React from 'react';

// Заглушки для изображений героев
const heroImages = {
  'abrams.png': 'https://via.placeholder.com/60?text=Abrams',
  'kelvin.png': 'https://via.placeholder.com/60?text=Kelvin',
  'lash.png': 'https://via.placeholder.com/60?text=Lash',
  'wraith.png': 'https://via.placeholder.com/60?text=Wraith',
  'ivy.png': 'https://via.placeholder.com/60?text=Ivy', 
  'dynamo.png': 'https://via.placeholder.com/60?text=Dynamo',
};

const PlayerHeroes = ({ heroes }) => {
  // Sort heroes by number of matches played (descending)
  const sortedHeroes = [...heroes].sort((a, b) => b.matches - a.matches);
  
  return (
    <div className="card">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-6">Most Played Heroes</h3>
        
        <div className="space-y-4">
          {sortedHeroes.map((hero, index) => (
            <div key={hero.name} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
              {/* Hero Image */}
              <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={`/heroes/${hero.image}`} 
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/56?text=Hero';
                  }}
                />
              </div>
              
              {/* Hero Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold truncate">{hero.name}</h4>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {hero.matches} matches
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div className="flex space-x-4">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Win Rate:</span> 
                      <span className={`ml-1 font-medium ${
                        hero.winRate >= 60 ? 'text-green-500' : 
                        hero.winRate >= 50 ? 'text-blue-500' : 'text-red-500'
                      }`}>
                        {hero.winRate}%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">KDA:</span> 
                      <span className="ml-1 font-medium">{hero.kda}</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar for mastery level based on number of matches */}
                <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${Math.min(100, (hero.matches / 100) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors">
            View All Heroes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerHeroes; 