
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star, Target, Trophy } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  moves: number;
  stars: number;
  matchedPairs: number;
  totalPairs: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ 
  score, 
  moves, 
  stars, 
  matchedPairs, 
  totalPairs 
}) => {
  return (
    <Card className="bg-white/90 backdrop-blur-sm p-4 min-w-fit">
      <div className="flex items-center gap-4 text-sm md:text-base">
        {/* Score */}
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <span className="font-semibold text-gray-800">{score}</span>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-800">
            {matchedPairs}/{totalPairs}
          </span>
        </div>

        {/* Moves */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Jogadas:</span>
          <span className="font-semibold text-gray-800">{moves}</span>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[1, 2, 3].map(star => (
            <Star 
              key={star}
              className={`w-5 h-5 ${
                star <= stars 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ScoreDisplay;
