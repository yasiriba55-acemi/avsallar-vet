import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-vet-light via-white to-blue-50 text-gray-800 font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-vet-primary mb-4">Hizmetler Sayfası</h1><p className="text-gray-600">Yakında...</p></div></div>} />
            <Route path="/team" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-vet-primary mb-4">Ekibimiz Sayfası</h1><p className="text-gray-600">Yakında...</p></div></div>} />
            <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-vet-primary mb-4">Blog Sayfası</h1><p className="text-gray-600">Yakında...</p></div></div>} />
            <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold text-vet-primary mb-4">İletişim Sayfası</h1><p className="text-gray-600">Yakında...</p></div></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
