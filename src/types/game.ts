export interface GameState {
  currentStage: LifeStage;
  wins: number;
  losses: number;
  isGameOver: boolean;
  currentRound: number;
  playerBudgets: BudgetItem[];
  opponentBudgets: BudgetItem[];
  availableChoices: BudgetItem[];
  gamePhase: GamePhase;
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

export enum LifeStage {
  Teen = 'teen',
  College = 'college',
  YoungAdult = 'young-adult',
  Career = 'career',
  Midlife = 'midlife',
  Retirement = 'retirement'
}

export enum BudgetCategory {
  Housing = 'housing',
  Food = 'food',
  Transportation = 'transportation',
  Entertainment = 'entertainment',
  Education = 'education',
  Healthcare = 'healthcare',
  Savings = 'savings',
  Investment = 'investment',
  Debt = 'debt'
}

export enum GamePhase {
  Draft = 'draft',
  Battle = 'battle',
  Results = 'results',
  GameOver = 'game-over'
}

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