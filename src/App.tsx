import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { Clock, Package, CreditCard, Star, Shield, Check, ShoppingCart, Truck, Award, Heart, Play, TrendingUp, BadgeCheck, Lock } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Mendes",
    age: 42,
    text: "Recuperei minha confiança em apenas uma semana. Minha esposa notou a diferença imediatamente!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    name: "Carlos Eduardo",
    age: 38,
    text: "Estava cético no início, mas os resultados são reais. Recomendo fortemente!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    name: "Paulo Roberto",
    age: 55,
    text: "Voltei a ter a energia dos meus 30 anos. Minha vida mudou completamente!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
  }
];

const products = [
  { 
    units: 2, 
    price: 87.00, 
    url: "https://entrega.logzz.com.br/pay/mem8d5ngk/rmkt-2-unidades---r87",
    savings: "Economize R$ 82,00",
    popular: false
  },
  { 
    units: 4, 
    price: 127.00, 
    url: "https://entrega.logzz.com.br/pay/mem8d5ngk/4-unidades-r127",
    savings: "Economize R$ 166,00",
    popular: false
  },
  { 
    units: 6, 
    price: 177.00, 
    url: "https://entrega.logzz.com.br/pay/mem8d5ngk/principal---6-unidades---r177",
    savings: "Economize R$ 370,00",
    popular: true
  },
  { 
    units: 10, 
    price: 257.00, 
    url: "https://entrega.logzz.com.br/pay/mem8d5ngk/10-unidades---r257",
    savings: "Economize R$ 490,00",
    popular: false
  },
  { 
    units: 20, 
    price: 367.00, 
    url: "https://entrega.logzz.com.br/pay/mem8d5ngk/20-unidades---r367",
    savings: "Economize R$ 680,00",
    popular: false
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Ação em 30 min",
    description: "Resultados rápidos e comprovados cientificamente"
  },
  {
    icon: Package,
    title: "Entrega discreta",
    description: "Embalagem sem identificação do conteúdo"
  },
  {
    icon: CreditCard,
    title: "Pagamento na entrega",
    description: "Pague apenas quando receber o produto"
  },
  {
    icon: Shield,
    title: "100% Natural",
    description: "Fórmula segura e sem contraindicações"
  },
  {
    icon: Award,
    title: "Garantia Total",
    description: "30 dias de garantia ou seu dinheiro de volta"
  },
  {
    icon: Heart,
    title: "Satisfação Garantida",
    description: "98% dos clientes recomendam"
  }
];

const faqItems = [
  {
    question: "Quanto tempo até ver resultados?",
    answer: "Os primeiros resultados são percebidos em apenas 30 minutos após o uso. Com o uso contínuo, os efeitos se tornam ainda mais pronunciados."
  },
  {
    question: "É seguro usar continuamente?",
    answer: "Sim, o produto é 100% natural e aprovado cientificamente. Todos os ingredientes passaram por rigorosos testes de segurança."
  },
  {
    question: "Como é a embalagem de entrega?",
    answer: "Totalmente discreta, sem identificação do conteúdo. Apenas você saberá o que está recebendo."
  },
  {
    question: "Preciso de receita médica?",
    answer: "Não, por ser um produto natural, não necessita de receita. Pode ser adquirido livremente."
  },
  {
    question: "Funciona para todos os homens?",
    answer: "Sim, a fórmula é eficaz para homens de todas as idades, especialmente após os 30 anos."
  }
];

function App() {
  const [stockCount, setStockCount] = useState(27);
  const [satisfiedCustomers] = useState(15347);
  const [recentBuyer, setRecentBuyer] = useState({
    name: "João",
    city: "São Paulo",
    units: 6
  });

  const countdownDate = Date.now() + 12 * 60 * 60 * 1000;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient">
          <img 
            src="https://img.irroba.com.br/fit-in/450x450/filters:format(webp):fill(fff):quality(80)/lojasaca/catalog/api/lojasaca_softvari/SF6056NOVFT01.jpg"
            alt="Exotic Honey"
            className="w-full h-full object-cover opacity-90"
            style={{ maxHeight: '80vh' }}
          />
        </div>
        <div className="absolute top-4 right-4 bg-[#8B0000] text-white px-6 py-3 rounded-lg animate-pulse">
          <p className="text-lg font-bold">ÚLTIMAS {stockCount} UNIDADES EM ESTOQUE</p>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="bg-black/80 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D4AF37]">
              DESPERTE SEU POTENCIAL MÁXIMO EM 30 MINUTOS OU SEU DINHEIRO DE VOLTA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              A fórmula natural que transformou a vida íntima de mais de 10.000 homens
            </p>
            <div className="mb-8">
              <p className="text-xl mb-2 text-[#D4AF37]">PROMOÇÃO ENCERRA EM:</p>
              <Countdown 
                date={countdownDate}
                renderer={({ hours, minutes, seconds }) => (
                  <div className="flex justify-center gap-4">
                    <div className="bg-[#8B0000] p-4 rounded-lg">
                      <span className="text-4xl font-bold">{hours}</span>
                      <span className="block text-sm">Horas</span>
                    </div>
                    <div className="bg-[#8B0000] p-4 rounded-lg">
                      <span className="text-4xl font-bold">{minutes}</span>
                      <span className="block text-sm">Minutos</span>
                    </div>
                    <div className="bg-[#8B0000] p-4 rounded-lg">
                      <span className="text-4xl font-bold">{seconds}</span>
                      <span className="block text-sm">Segundos</span>
                    </div>
                  </div>
                )}
              />
            </div>
            <button 
              className="cta-button text-2xl py-6 px-12 font-semibold rounded-lg w-full md:w-auto"
            >
              QUERO RESULTADOS AGORA
              <span className="block text-sm mt-2">🔥 Últimas unidades disponíveis</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#8B0000]">A VERDADE QUE NINGUÉM CONTA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl">
                Todo homem merece se sentir confiante e poderoso. Inclusive celebridades e atletas de alto nível já descobriram o segredo do Exotic Honey para manter sua performance no mais alto nível...
              </p>
              <div className="flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                <p className="text-lg font-semibold">97% relatam resultados na primeira aplicação</p>
              </div>
              <div className="flex items-center gap-4">
                <BadgeCheck className="w-8 h-8 text-[#D4AF37]" />
                <p className="text-lg font-semibold">+{satisfiedCustomers} homens satisfeitos este mês</p>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-[#D4AF37]">
                <p className="text-lg font-semibold text-[#8B0000]">
                  "O segredo dos campeões agora ao seu alcance"
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/6b/07/f4/6b07f42847d146f0fea76c078f4e80ac.jpg"
                alt="Atleta Profissional"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-white text-center font-semibold">
                  Usado e recomendado por atletas profissionais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#8B0000]">Por que escolher Exotic Honey?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card p-8 rounded-xl text-center">
                <benefit.icon className="w-16 h-16 mx-auto mb-6 text-[#8B0000]" />
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Escolha seu pacote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.units} 
                className={`product-card bg-white p-8 rounded-xl relative ${
                  product.popular ? 'border-4 border-[#D4AF37]' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white px-6 py-2 rounded-full">
                    MAIS VENDIDO
                  </div>
                )}
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#8B0000]">{product.units} unidades</span>
                  <div className="mt-4">
                    <span className="line-through text-gray-500 text-lg">R$ 249,00/un</span>
                    <div className="text-4xl font-bold text-[#8B0000] mt-2">
                      R$ {(product.price / product.units).toFixed(2)}/un
                    </div>
                    <div className="text-[#D4AF37] font-semibold mt-2">
                      {product.savings}
                    </div>
                  </div>
                </div>
                <a 
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center cta-button py-4 px-8 font-semibold rounded-lg"
                >
                  <ShoppingCart className="inline-block mr-2 w-6 h-6" />
                  Comprar {product.units} un.
                </a>
                <div className="mt-4 text-center text-sm text-gray-600">
                  <Truck className="inline-block mr-2 w-4 h-4" />
                  Entrega em 2-3 dias úteis
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white p-8 rounded-xl">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <h4 className="font-semibold text-xl mb-4">{testimonial.name}, {testimonial.age}</h4>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Formas de Pagamento</h4>
              <div className="flex space-x-4">
                <CreditCard className="w-10 h-10" />
                <ShoppingCart className="w-10 h-10" />
                <Package className="w-10 h-10" />
              </div>
              <div className="mt-4 flex items-center text-[#D4AF37]">
                <Lock className="w-6 h-6 mr-2" />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Políticas</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Reembolso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Contato</h4>
              <p className="mb-4">suporte@exotichoney.com.br</p>
              <p>Atendimento: Seg-Sex 9h-18h</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Certificações</h4>
              <div className="flex space-x-4">
                <Shield className="w-10 h-10 text-[#D4AF37]" />
                <Award className="w-10 h-10 text-[#D4AF37]" />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Exotic Honey. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 bg-white p-6 rounded-xl shadow-lg floating-notification">
        <p className="text-lg font-semibold text-[#8B0000]">
          ⚡ Apenas {stockCount} unidades disponíveis hoje
        </p>
      </div>

      <div className="fixed bottom-4 right-4 bg-white p-6 rounded-xl shadow-lg floating-notification">
        <p className="text-lg">
          🎉 {recentBuyer.name} em {recentBuyer.city} acabou de comprar {recentBuyer.units} unidades
        </p>
      </div>
    </div>
  );
}

export default App;