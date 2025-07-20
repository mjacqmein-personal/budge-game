import type { GameState, BudgetItem, BattleResult, GhostReplay } from '../types/game';
import { LifeStage, GamePhase, BudgetCategory } from '../types/game';
import { generateAllCategoryChoices } from '../data/budgetItems';
import { simulateBattle } from '../game/battleSimulator';

const initialState: GameState = {
  currentStage: LifeStage.Teen,
  wins: 0,
  losses: 0,
  isGameOver: false,
  currentRound: 1,
  playerBudgets: [],
  opponentBudgets: [],
  availableChoices: {
    [BudgetCategory.Job]: [],
    [BudgetCategory.Housing]: [],
    [BudgetCategory.Savings]: [],
    [BudgetCategory.Discretionary]: []
  },
  gamePhase: GamePhase.Draft,
  currentDraftCategory: null,
  selectedItemsThisRound: [],
};

class SimpleGameStore {
  private state: GameState = { ...initialState };
  private listeners: (() => void)[] = [];

  getState(): GameState {
    return this.state;
  }

  setState(newState: Partial<GameState>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  startNewGame() {
    const choices = generateAllCategoryChoices(LifeStage.Teen);
    this.setState({
      ...initialState,
      availableChoices: choices,
      gamePhase: GamePhase.Draft,
      currentDraftCategory: BudgetCategory.Job,
    });
  }

  selectBudgetItem(item: BudgetItem) {
    const newSelectedItems = [...this.state.selectedItemsThisRound, item];
    
    if (newSelectedItems.length >= 4) {
      this.setState({
        playerBudgets: [...this.state.playerBudgets, ...newSelectedItems],
        selectedItemsThisRound: [],
        gamePhase: GamePhase.Battle,
        currentDraftCategory: null,
      });
    } else {
      const categories = Object.values(BudgetCategory);
      const currentIndex = categories.indexOf(this.state.currentDraftCategory!);
      const nextCategory = categories[currentIndex + 1];
      
      this.setState({
        selectedItemsThisRound: newSelectedItems,
        currentDraftCategory: nextCategory,
      });
    }
  }

  battleAgainstGhost(ghostReplay: GhostReplay): BattleResult {
    const result = simulateBattle(this.state.playerBudgets, ghostReplay.budgets);
    
    const newWins = result.winner === 'player' ? this.state.wins + 1 : this.state.wins;
    const newLosses = result.winner === 'opponent' ? this.state.losses + 1 : this.state.losses;
    
    const isGameOver = newWins >= 10 || newLosses >= 3;
    
    this.setState({
      wins: newWins,
      losses: newLosses,
      isGameOver,
      gamePhase: isGameOver ? GamePhase.GameOver : GamePhase.Results,
      opponentBudgets: ghostReplay.budgets,
    });
    
    return result;
  }

  advanceStage() {
    const stages = Object.values(LifeStage);
    const currentIndex = stages.indexOf(this.state.currentStage);
    const nextStage = stages[Math.min(currentIndex + 1, stages.length - 1)];
    
    const choices = generateAllCategoryChoices(nextStage);
    
    this.setState({
      currentStage: nextStage,
      currentRound: this.state.currentRound + 1,
      selectedItemsThisRound: [],
      availableChoices: choices,
      gamePhase: GamePhase.Draft,
      currentDraftCategory: BudgetCategory.Job,
    });
  }

  resetGame() {
    this.setState(initialState);
  }

  getGhostReplays(): GhostReplay[] {
    return JSON.parse(localStorage.getItem('ghost-replays') || '[]');
  }

  saveGhostReplay() {
    const replay: GhostReplay = {
      id: Date.now().toString(),
      playerName: 'Player',
      stage: this.state.currentStage,
      budgets: this.state.playerBudgets,
      finalStats: {
        totalIncome: this.state.playerBudgets.reduce((sum, item) => sum + item.income, 0),
        totalExpenses: this.state.playerBudgets.reduce((sum, item) => sum + item.cost, 0),
        netWorth: 0,
        budgetBalance: 0,
      },
      timestamp: Date.now(),
    };
    
    const existingReplays = JSON.parse(localStorage.getItem('ghost-replays') || '[]');
    existingReplays.push(replay);
    localStorage.setItem('ghost-replays', JSON.stringify(existingReplays));
  }
}

export const gameStore = new SimpleGameStore();