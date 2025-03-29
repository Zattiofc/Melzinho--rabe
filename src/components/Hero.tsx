import React from 'react';
import { Timer, Shield, Flame } from 'lucide-react';
import toast from 'react-hot-toast';

const Hero = () => {
  const showTimer = () => {
    toast('⚡ Oferta por tempo limitado!', {
      icon: '⏰',
      duration: 3000
    });
  };

  return (
    <section className="pt-20 pb-8 px-4">
      <div className="text-center">
        <div className="inline-flex items-center bg-red-100 text-red-700 px-3 py-2 rounded-full mb-4 animate-pulse cursor-pointer" onClick={showTimer}>
          <Timer className="h-4 w-4 mr-2" />
          <span className="text-xs font-semibold">OFERTA LIMITADA: 70% OFF + FRETE GRÁTIS</span>
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
          Desperte Sua <span className="text-pink-600">Potência Natural</span> Com Resultados <span className="text-pink-600">Garantidos</span>
        </h1>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Mais de <span className="font-bold text-pink-600">37.849 homens</span> já transformaram suas vidas com nossos produtos. 
          Resultados visíveis em até 40 minutos ou seu dinheiro de volta!
        </p>

        <div className="flex flex-col items-center gap-3 mb-8">
          <a href="#products" 
             className="w-full bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
            <Flame className="h-5 w-5 mr-2" />
            QUERO AUMENTAR MINHA POTÊNCIA
          </a>
          
          <div className="flex items-center text-gray-600">
            <Shield className="h-4 w-4 mr-2 text-green-600" />
            <span className="text-xs">Compra 100% Segura e Discreta</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-pink-600 mb-1">98%</div>
            <p className="text-sm text-gray-600">dos clientes relatam resultados positivos</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-pink-600 mb-1">40min</div>
            <p className="text-sm text-gray-600">tempo médio para primeiros resultados</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-pink-600 mb-1">100%</div>
            <p className="text-sm text-gray-600">natural e sem contraindicações</p>
          </div>
        </div>
      </div>

      <div className="mt-8 relative">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Produtos Naturais"
          className="rounded-xl shadow-xl w-full object-cover h-[200px]"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg max-w-[200px]">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?img=1" className="w-6 h-6 rounded-full border-2 border-white" alt="Cliente" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-6 h-6 rounded-full border-2 border-white" alt="Cliente" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-6 h-6 rounded-full border-2 border-white" alt="Cliente" />
            </div>
            <span className="ml-2 text-xs text-gray-600">+2.847 pessoas compraram este mês</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;