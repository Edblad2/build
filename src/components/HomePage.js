import React from 'react';

const HomePage = ({ navigate }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Construye tus sueños con <span className="text-yellow-600">BuildEx</span>
      </h2>
      <p className="text-xl text-gray-700 mb-10 max-w-2xl">
        Tu directorio definitivo para encontrar profesionales, materiales y servicios de construcción de alta calidad.
      </p>
      <button
        onClick={() => navigate('directory')}
        className="bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105"
      >
        Explorar el Directorio
      </button>
    </section>
  );
};

export default HomePage;