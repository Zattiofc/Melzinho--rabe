import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';

interface PurchaseNotificationProps {
  name: string;
  location: string;
  product: string;
}

const PurchaseNotification: React.FC<PurchaseNotificationProps> = ({ name, location, product }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 max-w-sm"
    >
      <div className="bg-pink-100 rounded-full p-2">
        <ShoppingBag className="h-6 w-6 text-pink-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">{name}</span> de {location}
        </p>
        <p className="text-sm text-gray-500">
          acabou de comprar {product}
        </p>
      </div>
      <div className="bg-green-100 rounded-full p-1">
        <Check className="h-4 w-4 text-green-600" />
      </div>
    </motion.div>
  );
};

export default PurchaseNotification;