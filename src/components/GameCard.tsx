
import React from 'react';
import { Card } from "@/components/ui/card";

interface GameCardProps {
  card: {
    id: number;
    foodId: string;
    isFlipped: boolean;
    isMatched: boolean;
  };
  food: {
    id: string;
    name: string;
    emoji: string;
    color: string;
    category: string;
  };
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ card, food, onClick }) => {
  const handleClick = () => {
    if (!card.isFlipped && !card.isMatched) {
      onClick();
    }
  };

  return (
    <div 
      className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 cursor-pointer"
      onClick={handleClick}
    >
      <div 
        className={`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${
          card.isFlipped || card.isMatched ? 'rotate-y-180' : ''
        }`}
      >
        {/* Card Back */}
        <Card 
          className={`absolute inset-0 backface-hidden rounded-xl shadow-lg ${
            card.isMatched ? 'ring-4 ring-green-400' : 'hover:scale-105 transition-transform duration-200'
          }`}
          style={{ backgroundColor: '#4ade80' }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-2xl md:text-3xl font-bold">🍎</div>
          </div>
        </Card>

        {/* Card Front */}
        <Card 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-lg"
          style={{ backgroundColor: food.color }}
        >
          <div className="flex flex-col items-center justify-center h-full p-2">
            <div className="text-3xl md:text-4xl mb-1">{food.emoji}</div>
            <div className="text-xs md:text-sm font-semibold text-white text-center leading-tight">
              {food.name}
            </div>
          </div>
        </Card>
      </div>

      {/* Match Animation */}
      {card.isMatched && (
        <div className="absolute -top-2 -right-2 z-10 animate-bounce">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCard;
