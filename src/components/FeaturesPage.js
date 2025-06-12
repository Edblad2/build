import React from 'react';

const FeaturesPage = () => {
  const features = [
    {
      title: 'Desarrollo Ágil',
      description: 'Implementa tus proyectos con metodologías ágiles y ciclos de desarrollo rápidos.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    {
      title: 'Escalabilidad Ilimitada',
      description: 'Tu proyecto crecerá sin límites, adaptándose a cualquier demanda de tráfico.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10l2 2h10l2-2V7m-2 0H6m12 0V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2m12 0h-2.586a1 1 0 00-.707.293L11 11m0 0L9.293 12.707a1 1 0 01-.707.293H6m0 0v4m0-4h6m6 0v4m0-4h-6"></path>
        </svg>
      ),
    },
    {
      title: 'Seguridad Robusta',
      description: 'Protege tus datos y los de tus usuarios con las últimas tecnologías de seguridad.',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
    },
    {
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de expertos está disponible día y noche para ayudarte en lo que necesites.',
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 5c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-1.76-.574-3.38-1.536-4.652M12 10v4m0 0l-2-2m2 2l2-2"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Características que te Impulsarán
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;