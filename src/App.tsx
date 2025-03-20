import React, { useState, useEffect } from 'react';
import { Star, Check, Shield, Truck, Clock, Package, CreditCard, Phone } from 'lucide-react';

function CountdownTimer() {
  const [time, setTime] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 24 * 60 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="flex gap-4 justify-center">
      <div className="bg-red-600 text-white px-4 py-2 rounded">
        <span className="text-2xl font-bold">{String(hours).padStart(2, '0')}</span>
        <span className="text-sm block">Horas</span>
      </div>
      <div className="bg-red-600 text-white px-4 py-2 rounded">
        <span className="text-2xl font-bold">{String(minutes).padStart(2, '0')}</span>
        <span className="text-sm block">Minutos</span>
      </div>
      <div className="bg-red-600 text-white px-4 py-2 rounded">
        <span className="text-2xl font-bold">{String(seconds).padStart(2, '0')}</span>
        <span className="text-sm block">Segundos</span>
      </div>
    </div>
  );
}

function App() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const packages = [
    { 
      amount: '1', 
      get: '2', 
      price: 57.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/2-unidades---r57'
    },
    { 
      amount: '2', 
      get: '4', 
      price: 97.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/4-unidades---r97'
    },
    { 
      amount: '3', 
      get: '6', 
      price: 127.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/6-unidades---r127'
    },
    { 
      amount: '5', 
      get: '10', 
      price: 167.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/10-unidades---r167'
    },
    { 
      amount: '10', 
      get: '20', 
      price: 367.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/20-unidades---r367'
    },
  ];

  return (
    <div className="bg-[#F9F9F9]">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <p className="text-lg font-bold text-[#E63946] mb-2">⚡ PROMOÇÃO ESPECIAL - TERMINA EM:</p>
            <CountdownTimer />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://thumb.braavo.me/hiper/1000/2078072471.webp" 
                alt="Melzinho Árabe" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-[#333333] mb-6">
                Potência Máxima a Qualquer Hora! Mais Desejo, Mais Performance, Mais Prazer!
              </h2>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-[#FFD700]" />
                  <span>Pague Somente na Entrega</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#FFD700]" />
                  <span>Receba em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#FFD700]" />
                  <span>Frete Grátis Para Todo o Brasil</span>
                </div>
              </div>
              <a href="#comprar" className="inline-block bg-[#FFD700] text-[#333333] px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-500 transition-colors">
                QUERO MEU MELZINHO AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o Melzinho Árabe?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Ação Rápida', desc: 'Resultados em até 40 minutos' },
              { icon: Shield, title: '100% Natural', desc: 'Seguro e sem efeitos colaterais' },
              { icon: Package, title: 'Uso Discreto', desc: 'Leve para qualquer lugar' },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-[#F9F9F9] rounded-lg">
                <benefit.icon className="text-[#FFD700] mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'João, SP', text: 'Chegou no mesmo dia e funcionou muito bem! Recomendo.' },
              { name: 'Carlos, RJ', text: 'Ótimo custo-benefício, agora não fico sem!' },
              { name: 'Patrícia, MG', text: 'Comprei para meu namorado e ele AMOU! Entrega discreta e rápida.' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#FFD700] fill-[#FFD700]" size={20} />
                  ))}
                </div>
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="comprar" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">PROMOÇÃO ESPECIAL – COMPRE MAIS, LEVE MAIS!</h2>
          <p className="text-center mb-8">Escolha seu pacote:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedPackage === index 
                    ? 'border-[#FFD700] bg-[#FFF8E1]' 
                    : 'border-gray-200 hover:border-[#FFD700]'
                }`}
                onClick={() => setSelectedPackage(index)}
              >
                <h3 className="text-xl font-bold mb-2">
                  Compre {pkg.amount} Leve {pkg.get}
                </h3>
                <p className="text-3xl font-bold text-[#E63946] mb-2">
                  R$ {pkg.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  {pkg.amount === '1' ? 'Experimente agora!' : 'Economia máxima!'}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CountdownTimer />
            <a 
              href={packages[selectedPackage].url}
              className="inline-block bg-[#E63946] text-white px-12 py-6 rounded-full text-2xl font-bold mt-8 hover:bg-red-700 transition-colors"
            >
              COMPRAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 text-center">
          <Shield className="mx-auto text-[#FFD700] mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-6">Garantia de Satisfação ou Seu Dinheiro de Volta!</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <CreditCard className="text-[#FFD700]" />
              <span>Pagamento na Entrega</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="text-[#FFD700]" />
              <span>Entrega Discreta</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-[#FFD700]" />
              <span>Frete Grátis</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="max-w-2xl mx-auto">
            {[
              { q: 'O pagamento é seguro?', a: 'Sim! Você só paga quando receber.' },
              { q: 'O frete é realmente grátis?', a: 'Sim, para todo o Brasil.' },
              { q: 'O pedido é discreto?', a: 'Sim, embalagem 100% sigilosa!' },
              { q: 'Quanto tempo demora para chegar?', a: 'Até 24h nas capitais e 48h no interior.' },
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Phone size={20} />
            <span>Suporte via WhatsApp 24/7</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 Melzinho Árabe. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
