import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
          Acerca de BuildEx
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            BuildEx es la plataforma líder dedicada a conectar a quienes construyen el futuro con quienes lo necesitan. Desde la obra gris hasta los acabados más finos, y desde los materiales más básicos hasta las soluciones más innovadoras, nuestro objetivo es simplificar el proceso de construcción.
          </p>
          <p className="mb-6">
            Nacimos de la necesidad de un directorio confiable y completo que agrupe a los mejores profesionales y empresas del sector de la construcción. Queremos ser el puente que une la calidad, la eficiencia y la confianza en cada proyecto.
          </p>
          <p>
            Estamos comprometidos con el crecimiento del sector, facilitando la visibilidad de los expertos y la accesibilidad a los recursos necesarios para que cada construcción sea un éxito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;