
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Heart, Zap, Shield } from "lucide-react";

interface FoodInfoModalProps {
  food: {
    id: string;
    name: string;
    emoji: string;
    color: string;
    category: string;
    benefits: string[];
    nutrients: string[];
    funFact: string;
  };
  ageGroup: number;
  onClose: () => void;
}

const FoodInfoModal: React.FC<FoodInfoModalProps> = ({ food, ageGroup, onClose }) => {
  // Adapt content based on age group
  const getAgeAppropriateContent = () => {
    switch (ageGroup) {
      case 0: // 3-5 years
        return {
          title: `Que delícia! ${food.emoji}`,
          description: `${food.name} é muito gostoso e faz você crescer forte!`,
          benefits: food.benefits.slice(0, 2),
          language: 'simple'
        };
      case 1: // 6-8 years
        return {
          title: `Descobrindo ${food.name}`,
          description: `${food.name} tem vitaminas que ajudam seu corpo a funcionar bem!`,
          benefits: food.benefits.slice(0, 3),
          language: 'intermediate'
        };
      case 2: // 9-12 years
        return {
          title: `Nutrição: ${food.name}`,
          description: `${food.name} contém nutrientes essenciais para seu desenvolvimento.`,
          benefits: food.benefits,
          language: 'advanced'
        };
      default:
        return {
          title: food.name,
          description: `${food.name} é um alimento nutritivo!`,
          benefits: food.benefits,
          language: 'simple'
        };
    }
  };

  const content = getAgeAppropriateContent();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Food Display */}
          <div 
            className="text-center mb-6 p-6 rounded-2xl"
            style={{ backgroundColor: food.color + '20' }}
          >
            <div className="text-6xl mb-3">{food.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{food.name}</h3>
            <div className="inline-block px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-700">
              {food.category}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-center mb-6 text-lg">
            {content.description}
          </p>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              {ageGroup === 0 ? 'Por que é bom:' : 'Benefícios:'}
            </h4>
            <div className="space-y-2">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrients (for older kids) */}
          {ageGroup > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Nutrientes principais:
              </h4>
              <div className="flex flex-wrap gap-2">
                {food.nutrients.map((nutrient, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {nutrient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Fun Fact */}
          <div className="mb-6 p-4 bg-orange-50 rounded-2xl">
            <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              {ageGroup === 0 ? 'Curiosidade:' : 'Você sabia?'}
            </h4>
            <p className="text-orange-700">{food.funFact}</p>
          </div>

          {/* Continue Button */}
          <Button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl"
          >
            {ageGroup === 0 ? 'Continuar brincando! 🎮' : 'Continuar jogo! 🚀'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FoodInfoModal;
