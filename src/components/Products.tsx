import React, { useState } from 'react';
import { Star, Package, Minus, Plus, Sparkles, Siren as Fire, Timer } from 'lucide-react';

interface ProductVariant {
  units: number;
  price: number;
  link: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
}

const Products = () => {
  const products: Product[] = [
    {
    id: 1,
    name: "Exotic Honey",
    description: "Experimente o poder da natureza em sua forma mais pura. Resultados surpreendentes desde a primeira experiência.",
    image: "https://img.irroba.com.br/fit-in/450x450/filters:format(webp):fill(fff):quality(80)/lojasaca/catalog/api/lojasaca_softvari/SF6056NOVFT01.jpg",
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
    description: "Maximize sua performance e desperte todo seu potencial natural com nossa fórmula exclusiva.",
    image: "https://logzz-s3.s3.us-east-2.amazonaws.com/uploads/files/products/20241117-103011pron6476.png",
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
    description: "Resultados visíveis desde as primeiras aplicações. Satisfação garantida ou seu dinheiro de volta.",
    image: "https://http2.mlstatic.com/D_NQ_NP_769119-MLU75743582882_042024-O-gel-volumetro-atrasa-ejaculaco-e-aumenta-o-penis-2-undade.webp",
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
    name: "Melzinho do Amor",
    description: "O segredo milenar para uma experiência única e inesquecível. 100% natural.",
    image: "https://acdn-us.mitiendanube.com/stores/001/828/157/products/70e977c67c21d1ad7d5c33ec988902f5-a89508fb5a755d52e217043060824096-640-0.webp",
    variants: [
      { units: 2, price: 79.90, link: "https://entrega.logzz.com.br/pay/memqd083d/2-saches-do-melzinho-do-amor" },
      { units: 3, price: 99.90, link: "https://entrega.logzz.com.br/pay/memqd083d/3-saches-do-melzinho-do-amor" },
      { units: 4, price: 119.90, link: "https://entrega.logzz.com.br/pay/memqd083d/3-saches-do-melzinho-do-amor" },
      { units: 5, price: 139.90, link: "https://entrega.logzz.com.br/pay/memqd083d/5-saches-do-melzinho-do-amor" },
      { units: 12, price: 250.00, link: "https://entrega.logzz.com.br/pay/memqd083d/12-saches-do-melzinho-do-amor" }
    ]
  },
  {
    id: 5,
    name: "BIG TORA Estimulante Gotas",
    description: "Potência e vigor instantâneos com nossa fórmula concentrada em gotas.",
    image: "https://http2.mlstatic.com/D_NQ_NP_742647-MLB80361001132_112024-O-kit-gel-estimulante-masculino-big-tora-gotas-feno-grego.webp",
    variants: [
      { units: 1, price: 79.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/yghdj-1-unidade-gotas" },
      { units: 2, price: 179.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/gexkp-3-unidades-gotas" },
      { units: 3, price: 239.90, link: "https://entrega.logzz.com.br/pay/memlonkdk/atryx-5-unidades-gotas" }
    ]
  },
  {
    id: 6,
    name: "Gel POTENTE MAX",
    description: "A solução definitiva para quem busca resultados extraordinários. Efeito garantido.",
    image: "https://http2.mlstatic.com/D_NQ_NP_968044-MLB70651529250_072023-O.webp",
    variants: [
      { units: 1, price: 117.00, link: "https://entrega.logzz.com.br/pay/memype74w/1-unidade---11700" },
      { units: 2, price: 157.00, link: "https://entrega.logzz.com.br/pay/memype74w/2-uunidades---r-18700" },
      { units: 3, price: 187.00, link: "https://entrega.logzz.com.br/pay/memype74w/3-unidades---18700" },
      { units: 5, price: 237.00, link: "https://entrega.logzz.com.br/pay/memype74w/5-unidades--23700" }
    ]
  }
];

  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: number }>({});

  const handleVariantChange = (productId: number, index: number) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: index
    });
  };

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
          Produtos Exclusivos Para Sua Satisfação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const selectedVariantIndex = selectedVariants[product.id] || 0;
            const selectedVariant = product.variants[selectedVariantIndex];

            return (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-contain bg-white p-4"
                  />
                  <div className="absolute top-0 right-0 bg-pink-600 text-white px-3 py-1 rounded-bl-lg">
                    Mais Vendido
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => handleVariantChange(product.id, Math.max(0, selectedVariantIndex - 1))}
                          className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
                          disabled={selectedVariantIndex === 0}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-lg font-semibold">{selectedVariant.units} unid.</span>
                        <button 
                          onClick={() => handleVariantChange(product.id, Math.min(product.variants.length - 1, selectedVariantIndex + 1))}
                          className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
                          disabled={selectedVariantIndex === product.variants.length - 1}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-xl font-bold text-pink-600">
                        R$ {selectedVariant.price.toFixed(2)}
                      </div>
                    </div>
                    <a
                      href={selectedVariant.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-pink-600 text-white text-center px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold"
                    >
                      Comprar Agora
                    </a>
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
