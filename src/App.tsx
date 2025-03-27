import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Toaster />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;