import React from 'react';

const PricingPage = ({ navigate }) => {
  const plans = [
    {
      name: 'Básico',
      price: '$19',
      features: ['5 Proyectos', '10 GB Almacenamiento', 'Soporte Básico', 'Dominio Personalizado'],
      buttonText: 'Empezar Gratis',
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '$49',
      features: ['Proyectos Ilimitados', '100 GB Almacenamiento', 'Soporte Prioritario', 'Dominio Personalizado', 'Análisis Avanzado'],
      buttonText: 'Elegir Plan Pro',
      isPopular: true,
    },
    {
      name: 'Empresarial',
      price: '$99',
      features: ['Todo Ilimitado', 'Almacenamiento Dedicado', 'Soporte 24/7', 'Dominio Personalizado', 'Análisis Avanzado', 'Integraciones Premium'],
      buttonText: 'Contactar Ventas',
      isPopular: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Planes para cada necesidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col ${
                plan.isPopular ? 'border-4 border-purple-600' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  Más Popular
                </div>
              )}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-5xl font-extrabold text-purple-600 mb-6">
                {plan.price}<span className="text-xl text-gray-600">/mes</span>
              </p>
              <ul className="text-gray-700 text-lg mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('contact')}
                className={`w-full mt-auto py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;