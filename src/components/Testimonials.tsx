import React from 'react';
import { Star, ThumbsUp, Quote, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      location: "São Paulo, SP",
      text: "Resultados incríveis desde o primeiro uso! Minha esposa notou a diferença imediatamente. Super recomendo!",
      rating: 5,
      verified: true,
      image: "https://i.pravatar.cc/150?img=8"
    },
    {
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ",
      text: "Produto sensacional! Entrega super discreta e rápida. A qualidade é excepcional e os resultados são garantidos.",
      rating: 5,
      verified: true,
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Pedro Rocha",
      location: "Belo Horizonte, MG",
      text: "Já testei vários produtos, mas esse é diferente. Efeito rápido e duradouro. Vale cada centavo investido!",
      rating: 5,
      verified: true,
      image: "https://i.pravatar.cc/150?img=15"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Histórias Reais de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 37.000 clientes satisfeitos compartilham suas experiências
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-pink-100 absolute -top-4 -left-4" />
                <p className="text-gray-600 italic relative z-10">"{testimonial.text}"</p>
              </div>

              {testimonial.verified && (
                <div className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Compra Verificada</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#products" className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors">
            <ThumbsUp className="h-5 w-5 mr-2" />
            Junte-se aos clientes satisfeitos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;