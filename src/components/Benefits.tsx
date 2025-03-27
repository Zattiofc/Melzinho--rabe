import React from 'react';
import { Shield, Truck, Clock, Lock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pagamento na Entrega",
      description: "Pague apenas quando receber seu produto em casa"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Entrega em 24h",
      description: "Receba seu pedido discretamente em até 24 horas"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Frete Grátis",
      description: "Enviamos para todo o Brasil sem custos"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "100% Discreto",
      description: "Embalagem neutra e sem identificação"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center text-pink-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
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