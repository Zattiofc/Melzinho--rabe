import React from 'react';
import { Shield, Truck, Clock, Lock, CheckCircle, Package, CreditCard } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia de Satisfação",
      description: "Resultados garantidos ou seu dinheiro de volta em até 30 dias"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Entrega Express",
      description: "Receba em casa em até 24 horas com total discrição"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Embalagem Discreta",
      description: "Enviamos em caixa totalmente neutra e sem identificação"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pagamento Facilitado",
      description: "Parcele em até 12x ou pague apenas na entrega"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "100% Natural",
      description: "Fórmula aprovada e testada clinicamente"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Compra Segura",
      description: "Site seguro com dados criptografados"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Por Que Escolher a <span className="text-pink-600">Achados Express</span>?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Mais de 37 mil clientes satisfeitos confiam em nossa qualidade e discrição
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 rounded-full p-3 mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 ml-16">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;