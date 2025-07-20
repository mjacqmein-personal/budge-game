import './style.css'
import Phaser from 'phaser'
import { gameConfig } from './game/config'
import { useGameStore } from './store/gameStore'

let game: Phaser.Game;

function initGame() {
  const appElement = document.querySelector<HTMLDivElement>('#app')!;
  
  appElement.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background-color: #111827; color: white; font-family: system-ui, sans-serif;">
      <div style="margin-bottom: 2rem; text-align: center;">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; background: linear-gradient(to right, #60a5fa, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Budget Pets
        </h1>
        <p style="color: #9ca3af; margin-bottom: 2rem;">
          Draft budget choices, battle ghost opponents, and climb through life stages!
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
          <button id="start-game" style="background-color: #2563eb; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; cursor: pointer; font-size: 1rem; transition: background-color 0.2s;">
            Start New Game
          </button>
          <button id="resume-game" style="background-color: #16a34a; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; cursor: pointer; font-size: 1rem; transition: background-color 0.2s;">
            Resume Game  
          </button>
        </div>
      </div>
      <div id="game-container" style="display: none;">
        
      </div>
    </div>
  `;

  const startBtn = document.getElementById('start-game')!;
  const resumeBtn = document.getElementById('resume-game')!;

  startBtn.addEventListener('click', () => {
    const gameStore = useGameStore.getState();
    gameStore.startNewGame();
    startGame();
  });

  resumeBtn.addEventListener('click', () => {
    startGame();
  });

  function startGame() {
    appElement.innerHTML = '<div id="game-container"></div>';
    
    if (game) {
      game.destroy(true);
    }
    
    const config = {
      ...gameConfig,
      parent: 'game-container'
    };
    
    game = new Phaser.Game(config);
  }
}

initGame();
