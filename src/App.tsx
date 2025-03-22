import React, { useState, useEffect } from 'react';
import { Star, Check, Shield, Truck, Clock, Package, CreditCard, Phone, Heart, Zap, ThumbsUp, AlertCircle, Siren as Fire, Gift } from 'lucide-react';

function CountdownTimer() {
  const [time, setTime] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 5 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex gap-4 justify-center">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg">
        <span className="text-3xl font-bold">{String(minutes).padStart(2, '0')}</span>
        <span className="text-sm block font-medium">Minutos</span>
      </div>
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg">
        <span className="text-3xl font-bold">{String(seconds).padStart(2, '0')}</span>
        <span className="text-sm block font-medium">Segundos</span>
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
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/2-unidades---r57',
      savings: 'Economize R$ 57,00',
      popular: false
    },
    { 
      amount: '2', 
      get: '4', 
      price: 97.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/4-unidades---r97',
      savings: 'Economize R$ 121,00',
      popular: true
    },
    { 
      amount: '3', 
      get: '6', 
      price: 127.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/6-unidade---r137',
      savings: 'Economize R$ 215,00',
      popular: false
    },
    { 
      amount: '5', 
      get: '10', 
      price: 167.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/10-unidades---r257',
      savings: 'Economize R$ 403,00',
      popular: false
    },
    { 
      amount: '10', 
      get: '20', 
      price: 367.00,
      url: 'https://entrega.logzz.com.br/pay/mem8d5ngk/20-unidades---r367',
      savings: 'Economize R$ 773,00',
      popular: false
    },
  ];

  return (
    <div className="bg-[#F9F9F9]">
      {/* Header with Timer */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="text-center">
            <p className="text-xl font-bold text-[#E63946] mb-1 flex items-center justify-center gap-2">
              <Fire className="animate-pulse" />
              OFERTA ESPECIAL - TERMINA EM:
              <Fire className="animate-pulse" />
            </p>
            <CountdownTimer />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-white to-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative group">
                <img 
                  src="https://thumb.braavo.me/hiper/1000/2078072471.webp" 
                  alt="Melzinho Árabe" 
                  className="rounded-2xl shadow-2xl w-full transform transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full transform rotate-12 shadow-lg">
                  <span className="text-sm font-bold flex items-center gap-2">
                    <Gift className="animate-bounce" />
                    LEVE 2 PAGUE 1
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#FFD700] fill-[#FFD700] w-6 h-6" />
                  ))}
                </div>
                <span className="text-gray-600 ml-2 font-medium">(4.9/5 com base em 2847 avaliações)</span>
              </div>
              <h1 className="text-4xl font-bold text-[#333333] mb-6 leading-tight">
                Melzinho Árabe: Potência e Vigor Natural para uma Vida Íntima Extraordinária
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Descubra o segredo milenar da medicina árabe que está revolucionando a vida íntima de milhares de brasileiros. 
                Com resultados comprovados em até 40 minutos após o uso, o Melzinho Árabe é a solução natural que você procurava.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <div className="flex items-center gap-3 text-green-700 font-medium">
                  <Check className="text-green-500 w-6 h-6" />
                  <span>100% Natural e Aprovado pela ANVISA</span>
                </div>
                <div className="flex items-center gap-3 text-green-700 font-medium mt-3">
                  <Check className="text-green-500 w-6 h-6" />
                  <span>Resultados em até 40 Minutos</span>
                </div>
                <div className="flex items-center gap-3 text-green-700 font-medium mt-3">
                  <Check className="text-green-500 w-6 h-6" />
                  <span>Satisfação Garantida ou Seu Dinheiro De Volta</span>
                </div>
              </div>
              <a 
                href="#comprar" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Zap className="w-6 h-6" />
                QUERO AUMENTAR MINHA POTÊNCIA AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Benefícios Exclusivos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubra por que mais de 50.000 brasileiros já escolheram o Melzinho Árabe para transformar sua vida íntima
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Ação Ultra Rápida', desc: 'Efeito em até 40 minutos' },
              { icon: Shield, title: '100% Natural', desc: 'Sem contraindicações' },
              { icon: Heart, title: 'Maior Disposição', desc: 'Energia que dura horas' },
              { icon: ThumbsUp, title: 'Satisfação Total', desc: 'Ou seu dinheiro de volta' },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-[#F9F9F9] rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-red-100 to-red-200 rounded-full mb-4">
                  <benefit.icon className="text-[#E63946]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Como Funciona</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            O Melzinho Árabe age de forma natural e eficaz, proporcionando resultados impressionantes
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Tome 40 minutos antes', desc: 'Dissolva uma porção em água ou suco' },
              { step: '2', title: 'Sinta o efeito', desc: 'Aumento natural do desejo e disposição' },
              { step: '3', title: 'Aproveite por horas', desc: 'Efeito duradouro e sem efeitos colaterais' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="comprar" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ESCOLHA SEU PACOTE ESPECIAL</h2>
            <p className="text-gray-600 text-lg">Quanto maior o pacote, maior seu desconto!</p>
            <div className="mt-4">
              <CountdownTimer />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all ${
                  selectedPackage === index 
                    ? 'border-[#E63946] bg-red-50 transform scale-105 shadow-xl' 
                    : 'border-gray-200 hover:border-[#E63946] hover:shadow-lg'
                }`}
                onClick={() => setSelectedPackage(index)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Compre {pkg.amount} Leve {pkg.get}
                  </h3>
                  <p className="text-4xl font-bold text-[#E63946] mb-2">
                    R$ {pkg.price.toFixed(2)}
                  </p>
                  <p className="text-green-600 font-medium mb-4">
                    {pkg.savings}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Truck size={20} />
                    <span>Frete Grátis</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={packages[selectedPackage].url}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-red-700 hover:to-red-800 transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Fire className="w-8 h-8" />
              COMPRAR AGORA
              <Fire className="w-8 h-8" />
            </a>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Shield className="text-[#FFD700]" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="text-[#FFD700]" />
                <span>Pague na Entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="text-[#FFD700]" />
                <span>Entrega Discreta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Depoimentos Reais</h2>
          <p className="text-center text-gray-600 mb-12">
            Veja o que nossos clientes estão dizendo sobre o Melzinho Árabe
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'João Silva, 45 anos', text: 'Produto incrível! Resultados desde o primeiro uso. Recomendo muito!', location: 'São Paulo, SP' },
              { name: 'Carlos Santos, 52 anos', text: 'Melhorou muito minha disposição. Agora não fico mais sem!', location: 'Rio de Janeiro, RJ' },
              { name: 'Roberto Lima, 38 anos', text: 'Superou todas as expectativas. Entrega rápida e discreta.', location: 'Belo Horizonte, MG' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#FFD700] fill-[#FFD700]" size={20} />
                  ))}
                </div>
                <p className="mb-4 text-gray-700 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              { q: 'O produto é seguro?', a: 'Sim! O Melzinho Árabe é 100% natural e aprovado pela ANVISA.' },
              { q: 'Quanto tempo demora para fazer efeito?', a: 'Os efeitos começam em até 40 minutos após o uso.' },
              { q: 'A entrega é discreta?', a: 'Sim! Embalagem totalmente discreta e sem identificação do conteúdo.' },
              { q: 'Tem efeitos colaterais?', a: 'Por ser um produto natural, não possui efeitos colaterais.' },
              { q: 'Precisa de receita médica?', a: 'Não é necessário receita médica para comprar.' },
            ].map((faq, index) => (
              <div key={index} className="bg-[#F9F9F9] p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <AlertCircle className="text-[#E63946]" size={24} />
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Phone size={24} />
              <span className="text-lg">Suporte 24/7 via WhatsApp</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield size={20} />
                <span>Site 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={20} />
                <span>Pagamento na Entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={20} />
                <span>Frete Grátis</span>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">© 2025 Melzinho Árabe. Todos os direitos reservados.</p>
            <p>Este produto é um suplemento natural e os resultados podem variar de pessoa para pessoa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;