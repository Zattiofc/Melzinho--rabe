import React from 'react';
import { Phone, Mail, Shield, CreditCard, Truck, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Achados Express</h3>
            <p className="text-gray-400 mb-6">
              Sua satisfação é nossa prioridade. Oferecemos produtos de alta qualidade com resultados comprovados.
            </p>
            <div className="flex space-x-4">
              <div className="bg-pink-600 p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-pink-600 p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-pink-500" />
                <span className="text-gray-400">+55 (11) 95557-3233</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-pink-500" />
                <span className="text-gray-400">contato@achadosexpress.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Informações</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  Política de Envio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Formas de Pagamento</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-gray-400" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center">
                <img src="https://logospng.org/download/pix/logo-pix-icone-512.png" alt="PIX" className="h-6" />
              </div>
              <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-center">
                <img src="https://logospng.org/download/boleto-bancario/logo-boleto-bancario-256.png" alt="Boleto" className="h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Achados Express. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                Site Seguro
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Lock className="h-4 w-4 mr-2 text-green-500" />
                Dados Protegidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;