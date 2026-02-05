import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color?: string; // Tailwind text color class
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, features, icon: Icon, color = 'text-accent' }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-black/30 group-hover:bg-accent group-hover:text-primary transition-colors ${color}`}>
          <Icon size={28} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 min-h-[60px]">{description}</p>
      
      <ul className="space-y-2">
        {features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;