import { create } from 'zustand';
import { GameState, BudgetItem, LifeStage, GamePhase, BattleResult, GhostReplay } from '../types/game';
import { generateBudgetChoices } from '../data/budgetItems';
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
  availableChoices: [],
  gamePhase: GamePhase.Draft,
};

export const useGameStore = create<GameStore>()((set, get) => ({
      ...initialState,

      startNewGame: () => {
        const choices = generateBudgetChoices(LifeStage.Teen, 3);
        set({
          ...initialState,
          availableChoices: choices,
          gamePhase: GamePhase.Draft,
        });
      },

      selectBudgetItem: (item: BudgetItem) => {
        const state = get();
        const newPlayerBudgets = [...state.playerBudgets, item];
        
        if (newPlayerBudgets.length >= 3) {
          set({
            playerBudgets: newPlayerBudgets,
            gamePhase: GamePhase.Battle,
          });
        } else {
          const newChoices = generateBudgetChoices(state.currentStage, 3);
          set({
            playerBudgets: newPlayerBudgets,
            availableChoices: newChoices,
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
        
        const choices = generateBudgetChoices(nextStage, 3);
        
        set({
          currentStage: nextStage,
          currentRound: state.currentRound + 1,
          playerBudgets: [],
          availableChoices: choices,
          gamePhase: GamePhase.Draft,
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