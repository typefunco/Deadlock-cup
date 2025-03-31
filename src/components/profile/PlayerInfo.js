import React from 'react';

const PlayerInfo = ({ contacts }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center gap-2 text-sm">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2 3L14.2 7.5C14.2 7.77614 14.4239 8 14.7 8L19.2 8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9 16L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9 12L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19.2 8L14.2 3L6.8 3C5.80589 3 5 3.80589 5 4.8L5 19.2C5 20.1941 5.80589 21 6.8 21L17.2 21C18.1941 21 19 20.1941 19 19.2L19 8Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Steam:</span> <a href={`https://${contacts.steam}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{contacts.steam}</a>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M17.1975 9.75C17.1975 8.50736 16.6889 7.31574 15.7855 6.41236C14.8822 5.50898 13.6905 5 12.4479 5C11.2053 5 10.0136 5.50898 9.11027 6.41236C8.20689 7.31574 7.69792 8.50736 7.69792 9.75C7.69792 14.25 5.44792 15.5 5.44792 15.5H19.4479C19.4479 15.5 17.1975 14.25 17.1975 9.75Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M13.5 19C13.5 19.5523 13.0523 20 12.5 20C11.9477 20 11.5 19.5523 11.5 19C11.5 18.4477 11.9477 18 12.5 18C13.0523 18 13.5 18.4477 13.5 19Z" fill="currentColor"/>
          </svg>
          <span className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Telegram:</span> <a href={`https://t.me/${contacts.telegram.substring(1)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{contacts.telegram}</a>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8.0001 9.05083C8.0001 9.05083 7.98913 7.93209 8.8001 7.17522C9.78312 6.2565 11.0001 6 12.0001 6C13.041 6 14.1144 6.2565 15.1379 7.17522C15.9694 8.01242 16.0001 9.05083 16.0001 9.05083C16.0001 9.05083 16.2501 10.5994 15.0001 11.8333C14.0001 12.7722 12.0001 13 12.0001 13C12.0001 13 10.0001 12.7722 9.0001 11.8333C7.95333 10.8353 8.0001 9.05083 8.0001 9.05083Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 16.0326C8 16.0326 9 19 12 19C15 19 16 16.0326 16 16.0326" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Discord:</span> <span>{contacts.discord}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Email:</span> <a href={`mailto:${contacts.email}`} className="text-blue-500 hover:underline">{contacts.email}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo; 