import React from 'react';

const LayoutHeader = ({ currentPage, navigate }) => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo de BuildEx */}
          <div className="flex items-center mr-4">
            <div className="relative w-8 h-8 bg-yellow-500 rounded-md transform rotate-45">
              <div className="absolute inset-0 bg-yellow-600 rounded-md transform -rotate-45 scale-75"></div>
            </div>
            <h1 className="text-3xl font-bold ml-2">BuildEx</h1>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate('home')}
                className={`text-lg font-medium transition-all duration-300 ${
                  currentPage === 'home' ? 'border-b-2 border-yellow-400' : 'hover:text-gray-400'
                }`}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('directory')}
                className={`text-lg font-medium transition-all duration-300 ${
                  currentPage === 'directory' ? 'border-b-2 border-yellow-400' : 'hover:text-gray-400'
                }`}
              >
                Directorio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('about')}
                className={`text-lg font-medium transition-all duration-300 ${
                  currentPage === 'about' ? 'border-b-2 border-yellow-400' : 'hover:text-gray-400'
                }`}
              >
                Acerca de
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('contact')}
                className={`text-lg font-medium transition-all duration-300 ${
                  currentPage === 'contact' ? 'border-b-2 border-yellow-400' : 'hover:text-gray-400'
                }`}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;