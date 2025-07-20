import type { BudgetItem, BattleResult, PlayerStats } from '../types/game';
import { BudgetCategory } from '../types/game';

export function simulateBattle(playerBudgets: BudgetItem[], opponentBudgets: BudgetItem[]): BattleResult {
  const playerStats = calculateStats(playerBudgets);
  const opponentStats = calculateStats(opponentBudgets);
  
  const battleLog: string[] = [];
  
  // Calculate detailed battle scores
  const playerScore = calculateBattleScore(playerStats, playerBudgets);
  const opponentScore = calculateBattleScore(opponentStats, opponentBudgets);
  
  // Log income and expenses breakdown
  battleLog.push(`💼 PLAYER ANALYSIS:`);
  battleLog.push(`Income: $${playerStats.totalIncome.toLocaleString()}`);
  battleLog.push(`Expenses: $${playerStats.totalExpenses.toLocaleString()}`);
  battleLog.push(`Net Balance: $${playerStats.budgetBalance.toLocaleString()}`);
  
  const playerSynergies = findSynergies(playerBudgets);
  
  if (playerSynergies.length > 0) {
    battleLog.push(`✨ Synergies: ${playerSynergies.join(', ')}`);
  }
  
  battleLog.push('');
  battleLog.push(`🤖 OPPONENT ANALYSIS:`);
  battleLog.push(`Income: $${opponentStats.totalIncome.toLocaleString()}`);
  battleLog.push(`Expenses: $${opponentStats.totalExpenses.toLocaleString()}`);
  battleLog.push(`Net Balance: $${opponentStats.budgetBalance.toLocaleString()}`);
  
  const opponentSynergies = findSynergies(opponentBudgets);
  
  if (opponentSynergies.length > 0) {
    battleLog.push(`✨ Synergies: ${opponentSynergies.join(', ')}`);
  }
  
  battleLog.push('');
  battleLog.push(`⚔️ BATTLE CALCULATION:`);
  battleLog.push(`Player Score: ${playerScore.total.toFixed(0)} (Balance: ${playerScore.baseScore}, Synergies: ${playerScore.synergyBonus}, Rarity: ${playerScore.rarityBonus}, Category: ${playerScore.categoryBonus})`);
  battleLog.push(`Opponent Score: ${opponentScore.total.toFixed(0)} (Balance: ${opponentScore.baseScore}, Synergies: ${opponentScore.synergyBonus}, Rarity: ${opponentScore.rarityBonus}, Category: ${opponentScore.categoryBonus})`);
  
  const winner = playerScore.total > opponentScore.total ? 'player' : 'opponent';
  const margin = Math.abs(playerScore.total - opponentScore.total);
  
  battleLog.push('');
  if (margin < 100) {
    battleLog.push(`🏆 CLOSE VICTORY: ${winner === 'player' ? 'Player' : 'Opponent'} wins by ${margin.toFixed(0)} points!`);
  } else if (margin < 500) {
    battleLog.push(`🏆 SOLID WIN: ${winner === 'player' ? 'Player' : 'Opponent'} wins by ${margin.toFixed(0)} points!`);
  } else {
    battleLog.push(`🏆 DOMINANT VICTORY: ${winner === 'player' ? 'Player' : 'Opponent'} crushes with ${margin.toFixed(0)} point lead!`);
  }
  
  return {
    winner,
    playerStats,
    opponentStats,
    battleLog
  };
}

function calculateStats(budgets: BudgetItem[]): PlayerStats {
  const totalIncome = budgets.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = budgets.reduce((sum, item) => sum + item.cost, 0);
  const budgetBalance = totalIncome - totalExpenses;
  
  return {
    totalIncome,
    totalExpenses,
    budgetBalance,
    netWorth: budgetBalance
  };
}

interface BattleScore {
  baseScore: number;
  synergyBonus: number;
  rarityBonus: number;
  categoryBonus: number;
  total: number;
}

function calculateBattleScore(stats: PlayerStats, budgets: BudgetItem[]): BattleScore {
  // Base score from budget balance
  let baseScore = stats.budgetBalance;
  
  // Heavy penalty for negative budget balance
  if (baseScore < 0) {
    baseScore = baseScore * 2; // Double penalty for debt
  }
  
  // Synergy bonuses
  const synergies = findSynergies(budgets);
  const synergyBonus = synergies.length * 200; // Increased synergy value
  
  // Rarity bonuses
  const rarityBonus = budgets.reduce((bonus, item) => {
    switch (item.rarity) {
      case 'legendary': return bonus + 300;
      case 'rare': return bonus + 150;
      case 'uncommon': return bonus + 75;
      case 'common': return bonus + 25;
      default: return bonus;
    }
  }, 0);
  
  // Category balance bonus - reward having items from all categories
  const categoryBalance = calculateCategoryBalance(budgets);
  const categoryBonus = categoryBalance * 100;
  
  const total = baseScore + synergyBonus + rarityBonus + categoryBonus;
  
  return {
    baseScore,
    synergyBonus,
    rarityBonus,
    categoryBonus,
    total: Math.max(0, total) // Minimum score of 0
  };
}

function findSynergies(budgets: BudgetItem[]): string[] {
  const allSynergies = budgets.flatMap(item => item.synergies);
  const synergyCounts = allSynergies.reduce((counts, synergy) => {
    counts[synergy] = (counts[synergy] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  
  // Return synergies that appear 2+ times
  return Object.entries(synergyCounts)
    .filter(([_, count]) => count >= 2)
    .map(([synergy, _]) => synergy);
}

function calculateCategoryBalance(budgets: BudgetItem[]): number {
  const categories = new Set(budgets.map(item => item.category));
  const totalCategories = Object.values(BudgetCategory).length;
  
  // Bonus for having items from different categories (diversification)
  return categories.size / totalCategories;
}