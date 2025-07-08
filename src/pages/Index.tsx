
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MemoryGame from "@/components/MemoryGame";
import { Utensils, Star, Trophy, Users } from "lucide-react";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const ageGroups = [
    { age: "3-5", level: "easy", gridSize: "4x2", icon: "🧒", description: "Primeiros passos na alimentação saudável" },
    { age: "6-8", level: "medium", gridSize: "4x3", icon: "👶", description: "Descobrindo novos sabores" },
    { age: "9-12", level: "hard", gridSize: "6x4", icon: "🧑", description: "Especialista em nutrição" }
  ];

  if (gameStarted && selectedAge !== null) {
    return <MemoryGame ageGroup={selectedAge} onBack={() => setGameStarted(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-orange-50 to-yellow-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Utensils className="w-12 h-12 text-green-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Jogo da Memória
            </h1>
            <Utensils className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-2">
            Alimentos Nutritivos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Aprenda sobre alimentação saudável enquanto se diverte encontrando os pares de cartas!
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 animate-fade-in">
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Sistema de Estrelas</h3>
            <p className="text-sm text-gray-600">Ganhe estrelas baseado na sua performance e tempo de jogo</p>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Conquistas</h3>
            <p className="text-sm text-gray-600">Desbloqueie conquistas aprendendo sobre cada alimento</p>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Para Toda Família</h3>
            <p className="text-sm text-gray-600">Níveis adaptados para diferentes idades e habilidades</p>
          </Card>
        </div>

        {/* Age Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Escolha seu nível de dificuldade:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ageGroups.map((group, index) => (
              <Card 
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedAge === index 
                    ? 'ring-4 ring-green-400 bg-green-50' 
                    : 'bg-white/80 hover:bg-white/90'
                }`}
                onClick={() => setSelectedAge(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{group.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{group.age} anos</h4>
                  <div className="text-sm text-gray-600 mb-2">Grade: {group.gridSize}</div>
                  <p className="text-sm text-gray-700">{group.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <Button 
            onClick={() => setGameStarted(true)}
            disabled={selectedAge === null}
            className="px-8 py-4 text-xl font-bold bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {selectedAge === null ? 'Selecione uma faixa etária' : 'Começar Jogo! 🎮'}
          </Button>
        </div>

        {/* Educational Note */}
        <div className="mt-8 text-center bg-blue-50 p-6 rounded-2xl">
          <h4 className="font-semibold text-blue-800 mb-2">💡 Dica Educativa</h4>
          <p className="text-blue-700">
            Cada carta representa um alimento nutritivo! Quando encontrar um par, você aprenderá sobre os benefícios desse alimento para sua saúde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
