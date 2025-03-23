import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Shield, 
  Truck, 
  Clock, 
  Package, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Timer
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });
  const [recentBuyers] = useState([
    { name: 'João', city: 'SP', timeAgo: '7 minutos' },
    { name: 'Maria', city: 'RJ', timeAgo: '12 minutos' },
    { name: 'Pedro', city: 'MG', timeAgo: '15 minutos' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const packages = [
    { 
      units: 2, 
      buyGet: 'Compre 1 e leve +1 de brinde',
      originalPrice: 137, 
      price: 57, 
      savings: 80, 
      unitPrice: 28.50, 
      recommendation: 'Para testar',
      link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/2-unidades---r57'
    },
    { 
      units: 4, 
      buyGet: 'Compre 2 e leve +2 de brinde',
      originalPrice: 197, 
      price: 97, 
      savings: 100, 
      unitPrice: 24.25, 
      recommendation: 'Para casais',
      link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/4-unidades---r97'
    },
    { 
      units: 6, 
      buyGet: 'Compre 3 e leve +3 de brinde',
      originalPrice: 227, 
      price: 137, 
      savings: 90, 
      unitPrice: 22.83, 
      recommendation: 'Uso pessoal',
      link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/6-unidade---r137'
    },
    { 
      units: 10, 
      buyGet: 'Compre 5 e leve +5 de brinde',
      originalPrice: 347, 
      price: 257, 
      savings: 90, 
      unitPrice: 25.70, 
      recommendation: 'Para amigos',
      link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/10-unidades---r257'
    },
    { 
      units: 20, 
      buyGet: 'Compre 10 e leve +10 de brinde',
      originalPrice: 547, 
      price: 367, 
      savings: 180, 
      unitPrice: 18.35, 
      recommendation: 'MELHOR OFERTA',
      link: 'https://entrega.logzz.com.br/pay/mem8d5ngk/20-unidades---r367'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            🔥 EXOTIC HONEY: O ESTIMULANTE NATURAL QUE TRANSFORMA SUA VIDA ÍNTIMA!
          </h1>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://miess.vteximg.com.br/arquivos/ids/228302-900-900/SF6056_1.jpg?v=637624824218230000" 
              alt="Exotic Honey" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8">
            Desperte seu potencial com uma fórmula exclusiva de mel puro e extratos naturais 
            que aumenta energia, vitalidade e desempenho em minutos!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="flex items-center"><Truck className="w-5 h-5 mr-2" /> Frete Grátis</span>
            <span className="flex items-center"><Shield className="w-5 h-5 mr-2" /> Pague na Entrega</span>
            <span className="flex items-center"><Clock className="w-5 h-5 mr-2" /> Receba em 24h</span>
            <span className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Satisfação Garantida</span>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ✨ RESULTADOS EXTRAORDINÁRIOS COM INGREDIENTES 100% NATURAIS ✨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-red-600" />, title: 'Efeito Rápido', description: 'Resultados impressionantes em apenas 30 minutos após o uso' },
              { icon: <Shield className="w-8 h-8 text-red-600" />, title: 'Totalmente Seguro', description: 'Sem contraindicações ou efeitos colaterais indesejados' },
              { icon: <Timer className="w-8 h-8 text-red-600" />, title: 'Desempenho Duradouro', description: 'Até 4 horas de energia e vitalidade máxima' },
              { icon: <Package className="w-8 h-8 text-red-600" />, title: 'Discreto e Prático', description: 'Sachês individuais ou gel de fácil aplicação e transporte' },
              { icon: <Star className="w-8 h-8 text-red-600" />, title: 'Satisfação Garantida', description: 'Resultados extraordinários ou seu dinheiro de volta' }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">⏰ ATENÇÃO: PROMOÇÃO ESPECIAL POR TEMPO LIMITADO! ⏰</h3>
          <p className="text-lg">
            Últimas 37 unidades com desconto! Já foram vendidas 143 nas últimas 6 horas.
          </p>
        </div>
      </div>

      {/* Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            💰 ESCOLHA SUA OFERTA EXCLUSIVA E ECONOMIZE AGORA! 💰
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`border-2 ${pkg.units === 20 ? 'border-red-500' : 'border-gray-200'} rounded-lg p-6 relative ${pkg.units === 20 ? 'transform hover:scale-105' : 'hover:border-red-300'} transition-all`}>
                {pkg.units === 20 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS VENDIDO
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.buyGet}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 line-through">R$ {pkg.originalPrice},00</span>
                  <span className="text-3xl font-bold text-red-600">R$ {pkg.price},00</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <p>Economia: R$ {pkg.savings},00</p>
                  <p>Preço por unidade: R$ {pkg.unitPrice.toFixed(2)}</p>
                  <p className="font-semibold">{pkg.recommendation}</p>
                </div>
                <a 
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg ${pkg.units === 20 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-800 hover:bg-gray-900'} text-white font-bold transition-colors flex items-center justify-center`}
                >
                  Comprar Agora <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Buyers */}
      <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-slide-in">
        {recentBuyers.map((buyer, index) => (
          <div key={index} className="text-sm mb-2 last:mb-0">
            <span className="font-semibold">{buyer.name}</span> de {buyer.city} comprou há {buyer.timeAgo}
          </div>
        ))}
      </div>

      {/* Timer */}
      <div className="fixed bottom-4 right-4 bg-red-600 text-white rounded-lg shadow-lg p-4">
        <p className="text-sm mb-1">Oferta expira em:</p>
        <div className="text-2xl font-bold">
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

export default App;