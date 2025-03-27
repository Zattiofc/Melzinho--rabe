import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-pink-600">Achados Express HOT</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#products" className="text-gray-600 hover:text-pink-600 transition-colors">
            Produtos
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors">
            Depoimentos
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;