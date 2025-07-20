import { Scene } from 'phaser';
import { useGameStore } from '../store/gameStore';
import { GamePhase } from '../types/game';

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
    const title = this.add.text(400, 50, 'Budget Pets', {
      fontSize: '32px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const stageText = this.add.text(400, 100, `Stage: ${this.gameStore.currentStage}`, {
      fontSize: '20px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    const scoreText = this.add.text(400, 130, `Wins: ${this.gameStore.wins} | Losses: ${this.gameStore.losses}`, {
      fontSize: '16px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    this.uiContainer.add([title, stageText, scoreText]);
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
    const phaseTitle = this.add.text(400, 180, 'Choose Your Budget Items', {
      fontSize: '24px',
      color: '#ffffff',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
    
    state.availableChoices.forEach((item, index) => {
      const cardY = 250 + (index * 100);
      this.createBudgetCard(item, 150, cardY, () => {
        state.selectBudgetItem(item);
        this.scene.restart();
      });
    });
    
    this.uiContainer.add(phaseTitle);
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
    const card = this.add.rectangle(x, y, 280, 80, 0x1f2937)
      .setStrokeStyle(2, 0x374151)
      .setInteractive()
      .on('pointerdown', onClick);
    
    const name = this.add.text(x - 130, y - 20, item.name, {
      fontSize: '14px',
      color: '#ffffff',
      fontFamily: 'Arial'
    });
    
    const cost = this.add.text(x - 130, y, `Cost: $${item.cost}`, {
      fontSize: '12px',
      color: '#fbbf24',
      fontFamily: 'Arial'
    });
    
    const income = this.add.text(x - 130, y + 15, `Income: $${item.income}`, {
      fontSize: '12px',
      color: '#4ade80',
      fontFamily: 'Arial'
    });
    
    this.uiContainer.add([card, name, cost, income]);
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
    return {
      id: 'default',
      playerName: 'Ghost Player',
      stage: useGameStore.getState().currentStage,
      budgets: [
        {
          id: 'ghost1',
          name: 'Ghost Budget 1',
          category: 'savings',
          cost: 100,
          income: 200,
          effect: 'Basic ghost budget',
          tier: 1,
          rarity: 'common' as const,
          synergies: []
        }
      ],
      finalStats: { totalIncome: 200, totalExpenses: 100, netWorth: 100, budgetBalance: 100 },
      timestamp: Date.now()
    };
  }
}