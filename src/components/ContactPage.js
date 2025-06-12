import React from 'react';

const ContactPage = () => {
  const whatsappNumber = '573001234567'; // Número de WhatsApp de ejemplo
  const whatsappMessage = 'Hola, me gustaría obtener más información sobre BuildEx.';

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Contáctanos
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-8">
            ¿Listo para construir tus sueños? ¡Hablemos!
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.807-1.6-5.87 0-6.592 5.306-11.984 11.862-11.984 3.428 0 6.618 1.448 8.938 3.768 2.32 2.32 3.768 5.51 3.768 8.938 0 6.592-5.306 11.984-11.862 11.984h-.058c-2.063 0-4.066-.559-5.87-1.6L.057 24zm6.597-3.807c1.188.711 2.588 1.092 4.092 1.092h.058c5.463 0 9.984-4.425 9.984-9.984 0-2.867-1.188-5.54-3.288-7.64-2.1-2.1-4.773-3.288-7.64-3.288-5.463 0-9.984 4.425-9.984 9.984 0 1.504.381 2.904 1.092 4.092l-1.188 4.344 4.344-1.188zm5.272-2.088c-.297-.149-.647-.238-.997-.238-.35 0-.7.089-.997.238-.297.149-.547.381-.747.647-.2.266-.32.586-.32.936 0 .35.12.67.32.936.2.266.45.498.747.647.297.149.647.238.997.238.35 0 .7-.089.997-.238.297-.149.547-.381.747-.647.2-.266.32-.586.32-.936 0-.35-.12-.67-.32-.936-.2-.266-.45-.498-.747-.647zm-1.994-1.994c-.297-.149-.647-.238-.997-.238-.35 0-.7.089-.997.238-.297.149-.547.381-.747.647-.2.266-.32.586-.32.936 0 .35.12.67.32.936.2.266.45.498.747.647.297.149.647.238.997.238.35 0 .7-.089.997-.238.297-.149.547-.381.747-.647.2-.266.32-.586.32-.936 0-.35-.12-.67-.32-.936-.2-.266-.45-.498-.747-.647z"></path>
            </svg>
            <span>Chatea con nosotros</span>
          </a>
          <p className="text-gray-600 mt-4 text-lg">
            También puedes escribirnos a: <a href="mailto:samuelmartineztorres63@gmail.com" className="text-blue-600 hover:underline">samuelmartineztorres63@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;