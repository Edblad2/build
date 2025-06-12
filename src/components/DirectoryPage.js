import React, { useState } from 'react';
import CompanyDetailModal from './CompanyDetailModal';

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

 const companies = [
    { id: 1, name: 'Constructora Solida', category: 'Obra Gris', description: 'Expertos en cimientos y estructuras robustas.', web: 'https://constructorasolida.com', whatsapp: '3001234567', email: 'info@solida.com' },
    { id: 2, name: 'Acabados Premium', category: 'Acabados', description: 'Diseño e instalación de acabados de lujo para interiores y exteriores.', web: 'https://acabadospremium.com', whatsapp: '3007654321', email: 'contacto@premium.com' },
    { id: 3, name: 'Materiales del Valle', category: 'Materiales', description: 'Distribución de materiales de construcción de alta calidad y durabilidad.', web: 'https://materialesdelvalle.com', whatsapp: '3009876543', email: 'ventas@valle.com' },
    { id: 4, name: 'Diseño Arquitectónico Moderno', category: 'Diseño y Planificación', description: 'Creación de planos y diseños arquitectónicos innovadores y funcionales.', web: 'https://disenomoderno.com', whatsapp: '3001122334', email: 'arq@moderno.com' },
    { id: 5, name: 'Instalaciones Eléctricas Seguras', category: 'Instalaciones', description: 'Servicios de instalación y mantenimiento eléctrico residencial y comercial.', web: 'https://electricasseguras.com', whatsapp: '3004455667', email: 'electrico@seguras.com' },
    { id: 6, name: 'Plomería Express', category: 'Instalaciones', description: 'Soluciones rápidas y eficientes para problemas de plomería.', web: 'https://plomeriaexpress.com', whatsapp: '3007788990', email: 'info@plomeria.com' },
    { id: 7, name: 'Muebles a Medida', category: 'Acabados', description: 'Fabricación de mobiliario personalizado para proyectos de construcción.', web: 'https://mueblesamedida.com', whatsapp: '3001020304', email: 'contacto@muebles.com' },
    { id: 8, name: 'Alquiler de Maquinaria Pesada', category: 'Servicios Auxiliares', description: 'Renta de maquinaria para todo tipo de obras de construcción.', web: 'https://maquinariapesada.com', whatsapp: '3005060708', email: 'alquiler@maquinaria.com' },
    { id: 9, name: 'Edblad', category: 'Acabados', description: 'La mejor empresa en acabados.', web: 'https://edblad.glitch.me/', whatsapp: '+573016232176', email: 'edbladsas@gmail.com' }
];

  const categories = ['Todas', 'Obra Gris', 'Acabados', 'Materiales', 'Diseño y Planificación', 'Instalaciones', 'Servicios Auxiliares'];

  const getFilteredCompanies = (term, category) => {
    return companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(term.toLowerCase()) ||
                            company.description.toLowerCase().includes(term.toLowerCase());
      const matchesCategory = category === 'Todas' || company.category === category;
      return matchesSearch && matchesCategory;
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSelectSuggestion = (companyName) => {
    setSearchTerm(companyName);
    setShowSuggestions(false);
  };

  const openModal = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  const currentFilteredCompanies = getFilteredCompanies(searchTerm, selectedCategory);
  const searchSuggestions = searchTerm.length > 0
    ? companies.filter(company => company.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Directorio de Profesionales y Empresas
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-10 relative">
          <input
            type="text"
            placeholder="Buscar por nombre o descripción..."
            className="flex-grow px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Pequeño delay para permitir click en sugerencia
          />
          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 max-h-60 overflow-y-auto">
              {searchSuggestions.map(company => (
                <div
                  key={company.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-3"
                  onClick={() => openModal(company)} // Abre el modal al seleccionar sugerencia
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10h1m-1 4h1m-1 4h1m-4-10h1m-1 4h1m-1 4h1"></path></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{company.name}</p>
                    <p className="text-sm text-gray-600">{company.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <select
            className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFilteredCompanies.length > 0 ? (
            currentFilteredCompanies.map(company => (
              <div key={company.id} className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{company.name}</h3>
                <p className="text-yellow-600 font-semibold mb-4">{company.category}</p>
                <p className="text-gray-700">{company.description}</p>
                <button
                  onClick={() => openModal(company)}
                  className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-xl col-span-full">No se encontraron empresas que coincidan con tu búsqueda.</p>
          )}
        </div>
      </div>
      {isModalOpen && <CompanyDetailModal company={selectedCompany} onClose={closeModal} />}
    </section>
  );
};

export default DirectoryPage;
