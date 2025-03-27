import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Achados Express</h3>
            <p className="text-gray-400">
              💋 Sinta-se confiante, confortável e poderoso(a) com as melhores ofertas do mercado. Para você que quer mais intensidade e prazer no seu dia a dia!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-gray-400">+55 (11)95557-3233</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-400">contato@achadosexpress.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Achados Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;