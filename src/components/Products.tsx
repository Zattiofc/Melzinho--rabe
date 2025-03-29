import React, { useState, useEffect } from 'react';
import { Star, Package, Minus, Plus, Timer, Flame, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProductVariant {
  units: number;
  price: number;
  originalPrice?: number;
  link: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  image: string;
  variants: ProductVariant[];
  rating: number;
  sales: number;
}

const Products = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Exotic Honey (Sexy Fantasy)",
      description: "O segredo milenar para uma performance extraordinária. Resultados em até 40 minutos.",
      benefits: [
        "Aumento imediato da energia",
        "Maior resistência física",
        "100% natural e seguro",
        "Sem efeitos colaterais"
      ],
      image: "https://img.irroba.com.br/fit-in/450x450/filters:format(webp):fill(fff):quality(80)/lojasaca/catalog/api/lojasaca_softvari/SF6056NOVFT01.jpg",
      rating: 4.9,
      sales: 15482,
      variants: [
        { units: 2, price: 87.00, link: "https://entrega.logzz.com.br/pay/mem8d5ngk/rmkt-2-unidades---r87" },
        { units: 4, price: 127.00, link: "https://entrega.logzz.com.br/pay/mem8d5ngk/4-unidades-r127" },
        { units: 6, price: 177.00, link: "https://entrega.logzz.com.br/pay/mem8d5ngk/principal---6-unidades---r177" },
        { units: 10, price: 257.00, link: "https://entrega.logzz.com.br/pay/mem8d5ngk/10-unidades---r257" },
        { units: 20, price: 367.00, link: "https://entrega.logzz.com.br/pay/mem8d5ngk/20-unidades---r367" }
      ]
    },
    {
      id: 2,
      name: "Rivosex",
      description: "Fórmula concentrada para resultados surpreendentes. Satisfação garantida.",
      benefits: [
        "Efeito prolongado",
        "Maior disposição",
        "Resultados imediatos",
        "Aprovado pela ANVISA"
      ],
      image: "https://logzz-s3.s3.us-east-2.amazonaws.com/uploads/files/products/20241117-103011pron6476.png",
      rating: 4.8,
      sales: 12375,
      variants: [
        { units: 1, price: 100.00, link: "https://entrega.logzz.com.br/pay/mem62kvwo/rmt-gel" },
        { units: 2, price: 159.00, link: "https://entrega.logzz.com.br/pay/mem62kvwo/kgsjb-" },
        { units: 3, price: 197.00, link: "https://entrega.logzz.com.br/pay/mem62kvwo/ndlxu-3-por-197" },
        { units: 6, price: 347.00, link: "https://entrega.logzz.com.br/pay/mem62kvwo/6-por-r-34700" },
        { units: 12, price: 597.00, link: "https://entrega.logzz.com.br/pay/mem62kvwo/12-r-59700" }
      ]
    },
    {
      id: 3,
      name: "Gel Volumetrão",
      description: "O gel que vai transformar sua vida íntima. Resultados impressionantes desde a primeira aplicação.",
      benefits: [
        "Aumento real",
        "Efeito imediato",
        "Fórmula exclusiva",
        "Satisfação garantida"
      ],
      image: "https://http2.mlstatic.com/D_NQ_NP_769119-MLU75743582882_042024-O-gel-volumetro-atrasa-ejaculaco-e-aumenta-o-penis-2-undade.webp",
      rating: 4.9,
      sales: 9876,
      variants: [
        { units: 1, price: 97.00, link: "https://entrega.logzz.com.br/pay/memx037m0/vxecd-1-por-97" },
        { units: 2, price: 157.00, link: "https://entrega.logzz.com.br/pay/memx037m0/lysvj-2-por-157" },
        { units: 3, price: 197.00, link: "https://entrega.logzz.com.br/pay/memx037m0/brsam-3-por-197" },
        { units: 5, price: 267.00, link: "https://entrega.logzz.com.br/pay/memx037m0/ljkgp-5-por-257" },
        { units: 12, price: 497.00, link: "https://entrega.logzz.com.br/pay/memx037m0/eyckx-12-por-497" }
      ]
    },
    {
      id: 4,
      name: "Melzinho do Amor (Vital Honey)",
      description: "O segredo natural para uma performance extraordinária. Resultados comprovados.",
      benefits: [
        "100% Natural",
        "Efeito Rápido",
        "Maior Disposição",
        "Energia Extra"
      ],
      image: "https://acdn-us.mitiendanube.com/stores/001/828/157/products/70e977c67c21d1ad7d5c33ec988902f5-a89508fb5a755d52e217043060824096-640-0.webp",
      rating: 4.7,
      sales: 8543,
      variants: [
        { units: 2, price: 79.90, link: "https://entrega.logzz.com.br/pay/memqd083d/2-saches-do-melzinho-do-amor" },
        { units: 4, price: 119.90, link: "https://entrega.logzz.com.br/pay/memqd083d/4-saches-do-melzinho-do-amor" },
        { units: 5, price: 139.90, link: "https://entrega.logzz.com.br/pay/memqd083d/5-saches-do-melzinho-do-amor" },
        { units: 12, price: 250.00, link: "https://entrega.logzz.com.br/pay/memqd083d/12-saches-do-melzinho-do-amor" }
      ]
    },
    {
      id: 5,
      name: "BIG TORA ESTIMULANTE GOTAS 🔥",
      description: "Potência máxima em gotas. Efeito garantido ou seu dinheiro de volta.",
      benefits: [
        "Fácil de usar",
        "Efeito prolongado",
        "Resultados imediatos",
        "Máxima potência"
      ],
      image: "https://http2.mlstatic.com/D_NQ_NP_742647-MLB80361001132_112024-O-kit-gel-estimulante-masculino-big-tora-gotas-feno-grego.webp",
      rating: 4.8,
      sales: 6789,
      variants: [
        { units: 1, price: 79.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/yghdj-1-unidade-gotas" },
        { units: 2, price: 179.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/gexkp-3-unidades-gotas" },
        { units: 3, price: 239.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/atryx-5-unidades-gotas" },
        { units: 5, price: 239.90, link: "https://entrega.logzz.com.br/pay/memx037m0/ljkgp-5-por-257" },
        { units: 12, price: 279.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/hcczh-7-unidades-gotas" }
      ]
    },
    {
      id: 6,
      name: "Gel POTENTE MAX",
      description: "O gel mais potente do mercado. Satisfação 100% garantida.",
      benefits: [
        "Máxima potência",
        "Efeito duradouro",
        "Fórmula concentrada",
        "Resultado garantido"
      ],
      image: "https://http2.mlstatic.com/D_NQ_NP_968044-MLB70651529250_072023-O.webp",
      rating: 4.9,
      sales: 5432,
      variants: [
        { units: 1, price: 117.00, link: "https://entrega.logzz.com.br/pay/memype74w/1-unidade---11700" },
        { units: 2, price: 157.00, link: "https://entrega.logzz.com.br/pay/memype74w/2-uunidades---r-18700" },
        { units: 3, price: 187.00, link: "https://entrega.logzz.com.br/pay/memype74w/3-unidades---18700" },
        { units: 5, price: 237.00, link: "https://entrega.logzz.com.br/pay/memype74w/5-unidades--23700" }
      ]
    }
  ];

  const handleVariantChange = (productId: number, index: number) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: index
    });
    
    toast.success('Quantidade atualizada!', {
      icon: '✨',
      duration: 2000
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <Timer className="h-4 w-4 mr-2" />
            <span className="font-semibold text-sm">Oferta termina em: {formatTime(timeLeft)}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Escolha o Melhor Para Você
          </h2>
          <p className="text-lg text-gray-600">
            Quanto maior o pacote, maior seu desconto!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => {
            const selectedVariantIndex = selectedVariants[product.id] || 0;
            const selectedVariant = product.variants[selectedVariantIndex];
            const discount = Math.round(((selectedVariant.originalPrice || (selectedVariant.price * 2)) - selectedVariant.price) / (selectedVariant.originalPrice || (selectedVariant.price * 2)) * 100);

            return (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-[250px] object-contain bg-white p-4"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-bold">{discount}% OFF</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <ul className="space-y-2 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-sm">
                        <Shield className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => handleVariantChange(product.id, Math.max(0, selectedVariantIndex - 1))}
                          className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors disabled:opacity-50"
                          disabled={selectedVariantIndex === 0}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-base font-semibold">{selectedVariant.units} unid.</span>
                        <button 
                          onClick={() => handleVariantChange(product.id, Math.min(product.variants.length - 1, selectedVariantIndex + 1))}
                          className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors disabled:opacity-50"
                          disabled={selectedVariantIndex === product.variants.length - 1}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">
                          De R$ {(selectedVariant.originalPrice || (selectedVariant.price * 2)).toFixed(2)}
                        </div>
                        <div className="text-xl font-bold text-pink-600">
                          R$ {selectedVariant.price.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500">
                          ou 12x de R$ {(selectedVariant.price / 12).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={selectedVariant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-pink-600 text-white text-center px-4 py-3 rounded-xl hover:bg-pink-700 transition-colors font-bold text-lg transform hover:scale-105 transition-transform duration-300"
                    >
                      <Flame className="h-5 w-5 inline-block mr-2" />
                      COMPRAR AGORA
                    </a>
                  </div>

                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Package className="h-3 w-3 mr-1" />
                    <span>{product.sales} pessoas já compraram</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;