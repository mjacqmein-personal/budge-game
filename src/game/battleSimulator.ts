import { BudgetItem, BattleResult, PlayerStats } from '../types/game';

export function simulateBattle(playerBudgets: BudgetItem[], opponentBudgets: BudgetItem[]): BattleResult {
  const playerStats = calculateStats(playerBudgets);
  const opponentStats = calculateStats(opponentBudgets);
  
  const battleLog: string[] = [];
  battleLog.push(`🏠 Player Income: $${playerStats.totalIncome}`);
  battleLog.push(`💰 Player Expenses: $${playerStats.totalExpenses}`);
  battleLog.push(`📊 Player Balance: $${playerStats.budgetBalance}`);
  battleLog.push('');
  battleLog.push(`🤖 Opponent Income: $${opponentStats.totalIncome}`);
  battleLog.push(`💸 Opponent Expenses: $${opponentStats.totalExpenses}`);
  battleLog.push(`📈 Opponent Balance: $${opponentStats.budgetBalance}`);
  battleLog.push('');
  
  let playerScore = calculateBattleScore(playerStats, playerBudgets);
  let opponentScore = calculateBattleScore(opponentStats, opponentBudgets);
  
  battleLog.push(`⚔️ Battle Scores:`);
  battleLog.push(`Player: ${playerScore.toFixed(1)}`);
  battleLog.push(`Opponent: ${opponentScore.toFixed(1)}`);
  
  const winner = playerScore > opponentScore ? 'player' : 'opponent';
  
  battleLog.push('');
  battleLog.push(`🏆 Winner: ${winner === 'player' ? 'Player' : 'Opponent'}!`);
  
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
    netWorth: budgetBalance > 0 ? budgetBalance * 1.2 : budgetBalance
  };
}

function calculateBattleScore(stats: PlayerStats, budgets: BudgetItem[]): number {
  let score = stats.budgetBalance;
  
  const synergies = findSynergies(budgets);
  score += synergies.length * 100;
  
  const rarityBonus = budgets.reduce((bonus, item) => {
    switch (item.rarity) {
      case 'legendary': return bonus + 500;
      case 'rare': return bonus + 200;
      case 'uncommon': return bonus + 50;
      default: return bonus;
    }
  }, 0);
  
  score += rarityBonus;
  
  if (stats.budgetBalance < 0) {
    score *= 0.5;
  }
  
  return Math.max(0, score);
}

function findSynergies(budgets: BudgetItem[]): string[] {
  const allSynergies = budgets.flatMap(item => item.synergies);
  const synergyCounts = allSynergies.reduce((counts, synergy) => {
    counts[synergy] = (counts[synergy] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  
  return Object.entries(synergyCounts)
    .filter(([_, count]) => count >= 2)
    .map(([synergy, _]) => synergy);
}