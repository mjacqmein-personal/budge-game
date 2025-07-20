import './style.css'
import Phaser from 'phaser'
import { gameConfig } from './game/config'
import { useGameStore } from './store/gameStore'

let game: Phaser.Game;

function initGame() {
  const appElement = document.querySelector<HTMLDivElement>('#app')!;
  
  appElement.innerHTML = `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div class="mb-4 text-center">
        <h1 class="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Budget Pets
        </h1>
        <p class="text-gray-400 mb-4">
          Draft budget choices, battle ghost opponents, and climb through life stages!
        </p>
        <div class="flex gap-4 justify-center mb-4">
          <button id="start-game" class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
            Start New Game
          </button>
          <button id="resume-game" class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors">
            Resume Game  
          </button>
        </div>
      </div>
      <div id="game-container" class="hidden">
        
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
