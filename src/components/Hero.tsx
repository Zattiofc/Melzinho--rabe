import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-6">
          Desperte Sua Confiança e Potência Natural
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Produtos exclusivos para elevar sua performance e autoestima. 
          Resultados comprovados por milhares de clientes satisfeitos.
        </p>
        <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors">
          Transforme Sua Vida Hoje
        </button>
      </div>
      <div className="mt-12">
        <img 
          src="https://i.pinimg.com/736x/b3/ba/01/b3ba015d356118a9d9860ca7d34b4b5b.jpg"
          alt="Produtos Naturais"
          className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
        />
      </div>
    </section>
  );
}

export default Hero;