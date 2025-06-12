import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomePage from './components/HomePage';
import DirectoryPage from './components/DirectoryPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'directory':
        return <DirectoryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader currentPage={currentPage} navigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE