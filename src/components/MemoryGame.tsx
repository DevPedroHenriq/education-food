
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GameCard from "./GameCard";
import ScoreDisplay from "./ScoreDisplay";
import FoodInfoModal from "./FoodInfoModal";
import { ArrowLeft, RotateCcw, Star } from "lucide-react";
import { foodItems } from "@/data/foodItems";

interface MemoryGameProps {
  ageGroup: number;
  onBack: () => void;
}

interface GameCard {
  id: number;
  foodId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ ageGroup, onBack }) => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [stars, setStars] = useState<number>(3);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [showFoodInfo, setShowFoodInfo] = useState<boolean>(false);

  // Grid configurations based on age group
  const gridConfigs = [
    { rows: 2, cols: 4, pairs: 4 }, // 3-5 years: 4x2
    { rows: 3, cols: 4, pairs: 6 }, // 6-8 years: 4x3
    { rows: 4, cols: 6, pairs: 12 } // 9-12 years: 6x4
  ];

  const currentGrid = gridConfigs[ageGroup];

  useEffect(() => {
    initializeGame();
  }, [ageGroup]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const timer = setTimeout(() => {
        checkForMatch();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedPairs === currentGrid.pairs && matchedPairs > 0) {
      setGameWon(true);
      calculateFinalScore();
    }
  }, [matchedPairs]);

  const initializeGame = () => {
    const selectedFoods = foodItems.slice(0, currentGrid.pairs);
    const gameCards: GameCard[] = [];
    
    selectedFoods.forEach((food, index) => {
      gameCards.push(
        { id: index * 2, foodId: food.id, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, foodId: food.id, isFlipped: false, isMatched: false }
      );
    });

    // Shuffle cards
    const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setScore(0);
    setStars(3);
    setGameWon(false);
  };

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards.find(card => card.id === cardId)?.isMatched) return;

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  const checkForMatch = () => {
    const [firstId, secondId] = flippedCards;
    const firstCard = cards.find(card => card.id === firstId);
    const secondCard = cards.find(card => card.id === secondId);

    setMoves(prev => prev + 1);

    if (firstCard?.foodId === secondCard?.foodId) {
      // Match found!
      setCards(prev => prev.map(card => 
        card.id === firstId || card.id === secondId 
          ? { ...card, isMatched: true } 
          : card
      ));
      setMatchedPairs(prev => prev + 1);
      setScore(prev => prev + 100);
      
      // Show food information
      if (firstCard) {
        setSelectedFood(firstCard.foodId);
        setShowFoodInfo(true);
      }
    } else {
      // No match - flip cards back
      setCards(prev => prev.map(card => 
        card.id === firstId || card.id === secondId 
          ? { ...card, isFlipped: false } 
          : card
      ));
      
      // Adjust stars based on moves
      if (moves > 15 && stars > 1) setStars(2);
      if (moves > 25 && stars > 2) setStars(1);
    }

    setFlippedCards([]);
  };

  const calculateFinalScore = () => {
    const baseScore = score;
    const timeBonus = Math.max(0, 500 - moves * 10);
    const starBonus = stars * 200;
    setScore(baseScore + timeBonus + starBonus);
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-orange-50 to-yellow-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center gap-2 bg-white/80 hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <ScoreDisplay 
            score={score}
            moves={moves}
            stars={stars}
            matchedPairs={matchedPairs}
            totalPairs={currentGrid.pairs}
          />
          
          <Button 
            onClick={resetGame}
            variant="outline"
            className="flex items-center gap-2 bg-white/80 hover:bg-white"
          >
            <RotateCcw className="w-4 h-4" />
            Reiniciar
          </Button>
        </div>

        {/* Game Board */}
        <div 
          className={`grid gap-3 md:gap-4 justify-center mx-auto max-w-4xl`}
          style={{
            gridTemplateColumns: `repeat(${currentGrid.cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${currentGrid.rows}, minmax(0, 1fr))`
          }}
        >
          {cards.map((card) => (
            <GameCard
              key={card.id}
              card={card}
              food={foodItems.find(food => food.id === card.foodId)!}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>

        {/* Win Modal */}
        {gameWon && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="bg-white p-8 text-center max-w-md w-full animate-scale-in">
              <div className="mb-4">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-green-600 mb-2">Parabéns!</h2>
                <p className="text-gray-700 mb-4">Você completou o jogo!</p>
                
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3].map(star => (
                    <Star 
                      key={star}
                      className={`w-8 h-8 ${star <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <div className="text-2xl font-bold text-orange-600 mb-6">
                  Pontuação: {score}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button onClick={resetGame} className="flex-1">
                  Jogar Novamente
                </Button>
                <Button onClick={onBack} variant="outline" className="flex-1">
                  Menu Principal
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Food Info Modal */}
        {showFoodInfo && selectedFood && (
          <FoodInfoModal
            food={foodItems.find(food => food.id === selectedFood)!}
            ageGroup={ageGroup}
            onClose={() => setShowFoodInfo(false)}
          />
        )}
      </div>
    </div>
  );
};

export default MemoryGame;
