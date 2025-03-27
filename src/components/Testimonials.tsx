import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "João S.",
      text: "Produto incrível! Superou todas as minhas expectativas. Recomendo fortemente!",
      rating: 5,
      verified: true
    },
    {
      name: "Carlos M.",
      text: "Resultados surpreendentes desde o primeiro uso. Qualidade excepcional!",
      rating: 5,
      verified: true
    },
    {
      name: "Pedro R.",
      text: "Melhor produto que já experimentei. Entrega rápida e discreta.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
          O Que Dizem Nossos Clientes Satisfeitos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                {testimonial.verified && (
                  <div className="flex items-center text-green-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">Compra Verificada</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;