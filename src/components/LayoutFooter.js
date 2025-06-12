import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-8 text-center">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} BuildEx. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Privacidad
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Términos
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Soporte
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;