
export interface FoodItem {
  id: string;
  name: string;
  emoji: string;
  color: string;
  category: string;
  benefits: string[];
  nutrients: string[];
  funFact: string;
}

export const foodItems: FoodItem[] = [
  {
    id: 'apple',
    name: 'Maçã',
    emoji: '🍎',
    color: '#ef4444',
    category: 'Fruta',
    benefits: [
      'Fortalece os dentes e gengivas',
      'Rica em fibras que ajudam na digestão',
      'Vitaminas que fortalecem o sistema imunológico',
      'Antioxidantes que protegem as células'
    ],
    nutrients: ['Vitamina C', 'Fibras', 'Potássio', 'Antioxidantes'],
    funFact: 'Uma maçã tem mais de 7.500 variedades diferentes no mundo!'
  },
  {
    id: 'banana',
    name: 'Banana',
    emoji: '🍌',
    color: '#facc15',
    category: 'Fruta',
    benefits: [
      'Dá energia rápida para brincar',
      'Potássio para músculos fortes',
      'Ajuda o coração a bater direito',
      'Melhora o humor e o sono'
    ],
    nutrients: ['Potássio', 'Vitamina B6', 'Vitamina C', 'Fibras'],
    funFact: 'As bananas são tecnicamente uma baga, não uma fruta comum!'
  },
  {
    id: 'carrot',
    name: 'Cenoura',
    emoji: '🥕',
    color: '#f97316',
    category: 'Vegetal',
    benefits: [
      'Melhora a visão, especialmente à noite',
      'Deixa a pele bonita e saudável',
      'Fortalece o sistema imunológico',
      'Ajuda no crescimento saudável'
    ],
    nutrients: ['Beta-caroteno', 'Vitamina A', 'Fibras', 'Potássio'],
    funFact: 'As cenouras eram originalmente roxas! As laranja foram desenvolvidas na Holanda.'
  },
  {
    id: 'broccoli',
    name: 'Brócolis',
    emoji: '🥦',
    color: '#22c55e',
    category: 'Vegetal',
    benefits: [
      'Super vitaminas para crescer forte',
      'Protege contra doenças',
      'Fortalece ossos e dentes',
      'Melhora a concentração nos estudos'
    ],
    nutrients: ['Vitamina C', 'Vitamina K', 'Folato', 'Ferro'],
    funFact: 'O brócolis é como uma mini árvore comestível cheia de nutrientes!'
  },
  {
    id: 'milk',
    name: 'Leite',
    emoji: '🥛',
    color: '#f3f4f6',
    category: 'Laticínio',
    benefits: [
      'Constrói ossos e dentes fortes',
      'Músculos crescem mais rápido',
      'Ajuda a dormir melhor',
      'Dá energia para o dia todo'
    ],
    nutrients: ['Cálcio', 'Proteína', 'Vitamina D', 'Vitamina B12'],
    funFact: 'Uma vaca pode produzir até 30 litros de leite por dia!'
  },
  {
    id: 'egg',
    name: 'Ovo',
    emoji: '🥚',
    color: '#fbbf24',
    category: 'Proteína',
    benefits: [
      'Proteína completa para crescer',
      'Melhora a memória e concentração',
      'Fortalece músculos e cabelos',
      'Vitaminas para o desenvolvimento'
    ],
    nutrients: ['Proteína', 'Colina', 'Vitamina D', 'Ferro'],
    funFact: 'A cor da casca do ovo depende da raça da galinha, não da qualidade!'
  },
  {
    id: 'fish',
    name: 'Peixe',
    emoji: '🐟',
    color: '#0ea5e9',
    category: 'Proteína',
    benefits: [
      'Ômega-3 para o cérebro funcionar bem',
      'Proteína para músculos fortes',
      'Melhora a capacidade de aprender',
      'Fortalece o coração'
    ],
    nutrients: ['Ômega-3', 'Proteína', 'Vitamina D', 'Iodo'],
    funFact: 'Alguns peixes podem viver mais de 100 anos!'
  },
  {
    id: 'orange',
    name: 'Laranja',
    emoji: '🍊',
    color: '#fb923c',
    category: 'Fruta',
    benefits: [
      'Vitamina C protege contra gripes',
      'Fortalece o sistema de defesa',
      'Ajuda a absorver ferro dos alimentos',
      'Mantém a pele saudável'
    ],
    nutrients: ['Vitamina C', 'Folato', 'Fibras', 'Potássio'],
    funFact: 'Uma laranja tem mais de 170 tipos diferentes de nutrientes!'
  },
  {
    id: 'spinach',
    name: 'Espinafre',
    emoji: '🥬',
    color: '#16a34a',
    category: 'Vegetal',
    benefits: [
      'Ferro para não ficar cansado',
      'Vitaminas para crescer alto',
      'Fortalece os músculos',
      'Melhora a concentração'
    ],
    nutrients: ['Ferro', 'Vitamina K', 'Folato', 'Magnésio'],
    funFact: 'O Popeye estava certo! O espinafre realmente dá força!'
  },
  {
    id: 'yogurt',
    name: 'Iogurte',
    emoji: '🍧',
    color: '#f8fafc',
    category: 'Laticínio',
    benefits: [
      'Bactérias boas para a barriga',
      'Cálcio para ossos fortes',
      'Proteína para crescer',
      'Melhora a digestão'
    ],
    nutrients: ['Probióticos', 'Cálcio', 'Proteína', 'Vitamina B12'],
    funFact: 'O iogurte tem bilhões de bactérias boas que ajudam nosso corpo!'
  },
  {
    id: 'avocado',
    name: 'Abacate',
    emoji: '🥑',
    color: '#84cc16',
    category: 'Fruta',
    benefits: [
      'Gorduras boas para o cérebro',
      'Vitaminas para crescimento',
      'Energia que dura muito tempo',
      'Fortalece o coração'
    ],
    nutrients: ['Gorduras mono-insaturadas', 'Vitamina K', 'Folato', 'Potássio'],
    funFact: 'O abacate é tecnicamente uma fruta, mas muitos o usam como vegetal!'
  },
  {
    id: 'strawberry',
    name: 'Morango',
    emoji: '🍓',
    color: '#f43f5e',
    category: 'Fruta',
    benefits: [
      'Antioxidantes que protegem o corpo',
      'Vitamina C mais que a laranja',
      'Ajuda na concentração',
      'Fortalece o sistema imunológico'
    ],
    nutrients: ['Vitamina C', 'Antioxidantes', 'Folato', 'Manganês'],
    funFact: 'Os morangos são a única fruta com sementes do lado de fora!'
  }
];
