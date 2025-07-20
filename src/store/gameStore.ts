import { create } from 'zustand';
import type { GameState, BudgetItem, BattleResult, GhostReplay } from '../types/game';
import { LifeStage, GamePhase, BudgetCategory } from '../types/game';
import { generateAllCategoryChoices } from '../data/budgetItems';
import { simulateBattle } from '../game/battleSimulator';

interface GameStore extends GameState {
  startNewGame: () => void;
  selectBudgetItem: (item: BudgetItem) => void;
  proceedToBattle: () => void;
  battleAgainstGhost: (ghostReplay: GhostReplay) => BattleResult;
  advanceStage: () => void;
  resetGame: () => void;
  saveGhostReplay: () => void;
  getGhostReplays: () => GhostReplay[];
}

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

export const useGameStore = create<GameStore>()((set, get) => ({
      ...initialState,

      startNewGame: () => {
        const choices = generateAllCategoryChoices(LifeStage.Teen);
        set({
          ...initialState,
          availableChoices: choices,
          gamePhase: GamePhase.Draft,
          currentDraftCategory: BudgetCategory.Job,
        });
      },

      selectBudgetItem: (item: BudgetItem) => {
        const state = get();
        const newSelectedItems = [...state.selectedItemsThisRound, item];
        
        // Each round, select 1 item from each category (4 total)
        if (newSelectedItems.length >= 4) {
          // Round complete, add to player budgets and start battle
          set({
            playerBudgets: [...state.playerBudgets, ...newSelectedItems],
            selectedItemsThisRound: [],
            gamePhase: GamePhase.Battle,
            currentDraftCategory: null,
          });
        } else {
          // Move to next category
          const categories = Object.values(BudgetCategory);
          const currentIndex = categories.indexOf(state.currentDraftCategory!);
          const nextCategory = categories[currentIndex + 1];
          
          set({
            selectedItemsThisRound: newSelectedItems,
            currentDraftCategory: nextCategory,
          });
        }
      },

      proceedToBattle: () => {
        set({ gamePhase: GamePhase.Battle });
      },

      battleAgainstGhost: (ghostReplay: GhostReplay) => {
        const state = get();
        const result = simulateBattle(state.playerBudgets, ghostReplay.budgets);
        
        const newWins = result.winner === 'player' ? state.wins + 1 : state.wins;
        const newLosses = result.winner === 'opponent' ? state.losses + 1 : state.losses;
        
        const isGameOver = newWins >= 10 || newLosses >= 3;
        
        set({
          wins: newWins,
          losses: newLosses,
          isGameOver,
          gamePhase: isGameOver ? GamePhase.GameOver : GamePhase.Results,
          opponentBudgets: ghostReplay.budgets,
        });
        
        return result;
      },

      advanceStage: () => {
        const state = get();
        const stages = Object.values(LifeStage);
        const currentIndex = stages.indexOf(state.currentStage);
        const nextStage = stages[Math.min(currentIndex + 1, stages.length - 1)];
        
        const choices = generateAllCategoryChoices(nextStage);
        
        set({
          currentStage: nextStage,
          currentRound: state.currentRound + 1,
          selectedItemsThisRound: [],
          availableChoices: choices,
          gamePhase: GamePhase.Draft,
          currentDraftCategory: BudgetCategory.Job,
        });
      },

      resetGame: () => {
        set(initialState);
      },

      saveGhostReplay: () => {
        const state = get();
        const replay: GhostReplay = {
          id: Date.now().toString(),
          playerName: 'Player',
          stage: state.currentStage,
          budgets: state.playerBudgets,
          finalStats: {
            totalIncome: state.playerBudgets.reduce((sum, item) => sum + item.income, 0),
            totalExpenses: state.playerBudgets.reduce((sum, item) => sum + item.cost, 0),
            netWorth: 0,
            budgetBalance: 0,
          },
          timestamp: Date.now(),
        };
        
        const existingReplays = JSON.parse(localStorage.getItem('ghost-replays') || '[]');
        existingReplays.push(replay);
        localStorage.setItem('ghost-replays', JSON.stringify(existingReplays));
      },

      getGhostReplays: () => {
        return JSON.parse(localStorage.getItem('ghost-replays') || '[]');
      },
    }));