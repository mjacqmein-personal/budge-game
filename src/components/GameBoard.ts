import { Scene } from 'phaser';
import { useGameStore } from '../store/gameStore';
import { GamePhase, BudgetCategory } from '../types/game';

export class GameBoard extends Scene {
  private gameStore: any;
  private uiContainer!: Phaser.GameObjects.Container;

  constructor() {
    super({ key: 'GameBoard' });
  }

  preload() {
    this.load.image('background', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNGY0NmU1IiBzdG9wLW9wYWNpdHk9IjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA2YjZkNCIgc3RvcC1vcGFjaXR5PSIxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9InVybCgjYmcpIiAvPgo8L3N2Zz4K');
  }

  create() {
    this.gameStore = useGameStore.getState();
    
    const bg = this.add.image(400, 300, 'background');
    bg.setDisplaySize(800, 600);
    
    this.uiContainer = this.add.container(0, 0);
    
    this.createUI();
    this.setupGameLoop();
  }

  createUI() {
    const title = this.add.text(400, 30, 'Budget Pets', {
      fontSize: '28px',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontStyle: 'bold'
    }).setOrigin(0.5);
    
    const stageText = this.add.text(400, 70, `Life Stage: ${this.formatStageName(this.gameStore.currentStage)}`, {
      fontSize: '18px',
      color: '#4ade80',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const scoreText = this.add.text(400, 100, `Record: ${this.gameStore.wins}W - ${this.gameStore.losses}L | Round: ${this.gameStore.currentRound}`, {
      fontSize: '14px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    // Show current budget summary
    const totalIncome = this.gameStore.playerBudgets.reduce((sum: number, item: any) => sum + item.income, 0);
    const totalExpenses = this.gameStore.playerBudgets.reduce((sum: number, item: any) => sum + item.cost, 0);
    const netBalance = totalIncome - totalExpenses;
    
    if (this.gameStore.playerBudgets.length > 0) {
      const balanceColor = netBalance >= 0 ? '#4ade80' : '#ef4444';
      const budgetText = this.add.text(400, 125, `Current Budget: $${netBalance.toLocaleString()} (Income: $${totalIncome.toLocaleString()}, Expenses: $${totalExpenses.toLocaleString()})`, {
        fontSize: '12px',
        color: balanceColor,
        fontFamily: 'Arial'
      }).setOrigin(0.5);
      
      this.uiContainer.add(budgetText);
    }
    
    this.uiContainer.add([title, stageText, scoreText]);
  }

  formatStageName(stage: string): string {
    return stage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  setupGameLoop() {
    const state = useGameStore.getState();
    
    switch (state.gamePhase) {
      case GamePhase.Draft:
        this.showDraftPhase();
        break;
      case GamePhase.Battle:
        this.showBattlePhase();
        break;
      case GamePhase.Results:
        this.showResultsPhase();
        break;
      case GamePhase.GameOver:
        this.showGameOverPhase();
        break;
    }
  }

  showDraftPhase() {
    const state = useGameStore.getState();
    const currentCategory = state.currentDraftCategory;
    
    if (!currentCategory) return;
    
    const categoryName = this.formatStageName(currentCategory);
    const selectedCount = state.selectedItemsThisRound.length;
    
    const phaseTitle = this.add.text(400, 160, `Draft Phase: Choose ${categoryName}`, {
      fontSize: '20px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const progressText = this.add.text(400, 185, `Category ${selectedCount + 1} of 4`, {
      fontSize: '14px',
      color: '#94a3b8',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    // Show previously selected items this round
    if (selectedCount > 0) {
      const selectedText = this.add.text(400, 205, `Selected: ${state.selectedItemsThisRound.map((item: any) => item.name).join(', ')}`, {
        fontSize: '12px',
        color: '#4ade80',
        fontFamily: 'Arial'
      }).setOrigin(0.5);
      this.uiContainer.add(selectedText);
    }
    
    const choices = state.availableChoices[currentCategory];
    choices.forEach((item, index) => {
      const cardX = 100 + (index * 150);
      const cardY = 280;
      this.createBudgetCard(item, cardX, cardY, () => {
        state.selectBudgetItem(item);
        this.scene.restart();
      });
    });
    
    this.uiContainer.add([phaseTitle, progressText]);
  }

  showBattlePhase() {
    const battleTitle = this.add.text(400, 200, 'Battle Phase - Fighting Ghost Opponent!', {
      fontSize: '20px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const battleButton = this.add.rectangle(400, 300, 200, 50, 0x4ade80)
      .setInteractive()
      .on('pointerdown', () => {
        this.startBattle();
      });
    
    const battleText = this.add.text(400, 300, 'Start Battle!', {
      fontSize: '18px',
      color: '#000000',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    this.uiContainer.add([battleTitle, battleButton, battleText]);
  }

  showResultsPhase() {
    const resultsTitle = this.add.text(400, 150, 'Battle Results', {
      fontSize: '24px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const continueButton = this.add.rectangle(400, 400, 200, 50, 0x3b82f6)
      .setInteractive()
      .on('pointerdown', () => {
        const state = useGameStore.getState();
        state.advanceStage();
        this.scene.restart();
      });
    
    const continueText = this.add.text(400, 400, 'Continue', {
      fontSize: '18px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    this.uiContainer.add([resultsTitle, continueButton, continueText]);
  }

  showGameOverPhase() {
    const state = useGameStore.getState();
    const isWin = state.wins >= 10;
    
    const gameOverTitle = this.add.text(400, 200, isWin ? 'Victory!' : 'Game Over', {
      fontSize: '32px',
      color: isWin ? '#4ade80' : '#ef4444',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const finalScore = this.add.text(400, 250, `Final Score: ${state.wins}W - ${state.losses}L`, {
      fontSize: '20px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const restartButton = this.add.rectangle(400, 350, 200, 50, 0x4ade80)
      .setInteractive()
      .on('pointerdown', () => {
        state.resetGame();
        state.startNewGame();
        this.scene.restart();
      });
    
    const restartText = this.add.text(400, 350, 'Play Again', {
      fontSize: '18px',
      color: '#000000',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    this.uiContainer.add([gameOverTitle, finalScore, restartButton, restartText]);
  }

  createBudgetCard(item: any, x: number, y: number, onClick: () => void) {
    // Card background with rarity-based border color
    const borderColors = {
      'common': 0x9ca3af,
      'uncommon': 0x10b981,
      'rare': 0x3b82f6,
      'legendary': 0xf59e0b
    };
    
    const card = this.add.rectangle(x, y, 130, 120, 0x1f2937)
      .setStrokeStyle(2, borderColors[item.rarity as keyof typeof borderColors] || 0x374151)
      .setInteractive()
      .on('pointerdown', onClick)
      .on('pointerover', () => card.setAlpha(0.8))
      .on('pointerout', () => card.setAlpha(1));
    
    const name = this.add.text(x, y - 40, item.name, {
      fontSize: '11px',
      color: '#ffffff',
      fontFamily: 'Arial',
      align: 'center',
      wordWrap: { width: 120 }
    }).setOrigin(0.5);
    
    const cost = this.add.text(x, y - 10, `Cost: $${item.cost.toLocaleString()}`, {
      fontSize: '10px',
      color: item.cost > 0 ? '#ef4444' : '#94a3b8',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const income = this.add.text(x, y + 5, `Income: $${item.income.toLocaleString()}`, {
      fontSize: '10px',
      color: item.income > 0 ? '#4ade80' : '#94a3b8',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const rarity = this.add.text(x, y + 25, item.rarity.toUpperCase(), {
      fontSize: '8px',
      color: '#' + (borderColors[item.rarity as keyof typeof borderColors] || 0x374151).toString(16),
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const effect = this.add.text(x, y + 40, item.effect, {
      fontSize: '8px',
      color: '#94a3b8',
      fontFamily: 'Arial',
      align: 'center',
      wordWrap: { width: 115 }
    }).setOrigin(0.5);
    
    this.uiContainer.add([card, name, cost, income, rarity, effect]);
  }

  startBattle() {
    const state = useGameStore.getState();
    const ghostReplays = state.getGhostReplays();
    
    const randomGhost = ghostReplays.length > 0 
      ? ghostReplays[Math.floor(Math.random() * ghostReplays.length)]
      : this.createDefaultGhost();
    
    const result = state.battleAgainstGhost(randomGhost);
    
    alert(`Battle Result: ${result.winner === 'player' ? 'You Won!' : 'You Lost!'}\n\n${result.battleLog.join('\n')}`);
    
    this.scene.restart();
  }

  createDefaultGhost() {
    const currentStage = useGameStore.getState().currentStage;
    const generateDefaultBudget = (category: any, stage: string) => ({
      id: `ghost-${category}-${stage}`,
      name: `Ghost ${category}`,
      category: category,
      cost: Math.floor(Math.random() * 1000) + 100,
      income: Math.floor(Math.random() * 1500) + 200,
      effect: `AI-generated ${category} choice`,
      tier: 1,
      rarity: 'common' as const,
      synergies: ['ai-generated']
    });

    const ghostBudgets = [
      generateDefaultBudget(BudgetCategory.Job, currentStage),
      generateDefaultBudget(BudgetCategory.Housing, currentStage),
      generateDefaultBudget(BudgetCategory.Savings, currentStage),
      generateDefaultBudget(BudgetCategory.Discretionary, currentStage)
    ];

    const totalIncome = ghostBudgets.reduce((sum, item) => sum + item.income, 0);
    const totalExpenses = ghostBudgets.reduce((sum, item) => sum + item.cost, 0);

    return {
      id: 'default-ghost',
      playerName: 'AI Ghost',
      stage: currentStage,
      budgets: ghostBudgets,
      finalStats: { 
        totalIncome, 
        totalExpenses, 
        netWorth: totalIncome - totalExpenses, 
        budgetBalance: totalIncome - totalExpenses 
      },
      timestamp: Date.now()
    };
  }
}