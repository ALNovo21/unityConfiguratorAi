export interface GameDefinition {
  key: string;
  name: string;
  environments: string[];
}

export const gameDefinitions: GameDefinition[] = [
  { key: 'roulette', name: 'Roulette', environments: ['Flying', 'Multi', 'Touchbet'] },
  {
    key: 'lucky-ladys-roulette',
    name: 'Lucky Ladys Roulette',
    environments: ['Flying', 'Multi', 'Touchbet']
  },
  { key: 'baccarat', name: 'Baccarat', environments: ['Flying', 'Touchbet'] },
  { key: 'blackjack', name: 'Blackjack', environments: ['Flying', 'Touchbet'] },
  { key: 'poker', name: 'Poker', environments: ['Flying', 'Touchbet'] },
  { key: 'sic-bo', name: 'Sic-Bo', environments: [] },
  { key: 'slot-games', name: 'Slot Games', environments: [] }
];
