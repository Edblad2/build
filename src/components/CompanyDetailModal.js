import React from 'react';

const CompanyDetailModal = ({ company, onClose }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold text-gray-900">{company.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl font-light">
            &times;
          </button>
        </div>
        <p className="text-yellow-600 font-semibold text-lg mb-4">{company.category}</p>
        <p className="text-gray-700 mb-6">{company.description}</p>

        <div className="space-y-4">
          {company.web && (
            <div className="flex items-center">
              <span className="text-gray-600 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </span>
              <a href={company.web} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg">
                {company.web}
              </a>
            </div>
          )}
          {company.whatsapp && (
            <div className="flex items-center">
              <span className="text-gray-600 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586L4 12.586V6a2 2 0 012-2h10a2 2 0 012 2v2z"></path></svg>
              </span>
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-lg">
                WhatsApp: {company.whatsapp}
              </a>
            </div>
          )}
          {company.email && (
            <div className="flex items-center">
              <span className="text-gray-600 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"></path></svg>
              </span>
              <a href={`mailto:${company.email}`} className="text-red-600 hover:underline text-lg">
                Email: {company.email}
              </a>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-8 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailModal;