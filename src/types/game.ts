export interface GameState {
  currentStage: LifeStage;
  wins: number;
  losses: number;
  isGameOver: boolean;
  currentRound: number;
  playerBudgets: BudgetItem[];
  opponentBudgets: BudgetItem[];
  availableChoices: Record<BudgetCategory, BudgetItem[]>;
  gamePhase: GamePhase;
  currentDraftCategory: BudgetCategory | null;
  selectedItemsThisRound: BudgetItem[];
}

export interface BudgetItem {
  id: string;
  name: string;
  category: BudgetCategory;
  cost: number;
  income: number;
  effect: string;
  tier: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  synergies: string[];
}

export interface PlayerStats {
  totalIncome: number;
  totalExpenses: number;
  netWorth: number;
  budgetBalance: number;
}

export const LifeStage = {
  Teen: 'teen',
  College: 'college',
  YoungAdult: 'young-adult',
  EarlyCareer: 'early-career',
  MidCareer: 'mid-career',
  SeniorCareer: 'senior-career',
  PreRetirement: 'pre-retirement',
  Retirement: 'retirement'
} as const;

export type LifeStage = typeof LifeStage[keyof typeof LifeStage];

export const BudgetCategory = {
  Job: 'job',
  Housing: 'housing',
  Savings: 'savings',
  Discretionary: 'discretionary'
} as const;

export type BudgetCategory = typeof BudgetCategory[keyof typeof BudgetCategory];

export const GamePhase = {
  Draft: 'draft',
  Battle: 'battle',
  Results: 'results',
  GameOver: 'game-over'
} as const;

export type GamePhase = typeof GamePhase[keyof typeof GamePhase];

export interface BattleResult {
  winner: 'player' | 'opponent';
  playerStats: PlayerStats;
  opponentStats: PlayerStats;
  battleLog: string[];
}

export interface GhostReplay {
  id: string;
  playerName: string;
  stage: LifeStage;
  budgets: BudgetItem[];
  finalStats: PlayerStats;
  timestamp: number;
}