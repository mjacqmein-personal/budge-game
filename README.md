# Budget Pets - Async Roguelike Budget Game

A 2D web game similar to Super Auto Pets, but themed around household budgeting and financial decisions. Players draft budget choices each round, then battle against "ghost" replays of other players through different life stages.

## 🎮 Game Features

- **Async Multiplayer**: Battle against ghost replays, no real-time required
- **Draft Gameplay**: Choose budget items each round from randomized options
- **Life Stages**: Progress from Teen → College → Young Adult → Career → Midlife → Retirement
- **Win/Loss System**: Win 10 battles to achieve victory, 3 losses ends the game
- **Budget Strategy**: Balance income vs expenses, find synergies between choices
- **Mobile Friendly**: Touch interface with responsive design

## 🛠️ Tech Stack

- **Frontend**: Phaser.js 3 (2D game framework)
- **State Management**: Zustand (lightweight store)
- **Styling**: Tailwind CSS (utility-first)
- **Build Tool**: Vite (fast development)
- **Language**: TypeScript
- **Storage**: Local Storage (player progress + ghost replays)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Game Flow

1. **Draft Phase**: Choose 3 budget items from random selections
2. **Battle Phase**: Face off against a ghost opponent
3. **Results**: See battle outcome and advance to next stage
4. **Progression**: Continue until 10 wins (victory) or 3 losses (game over)

## 📱 Mobile Support

The game is optimized for both desktop and mobile devices with:
- Touch-friendly interface
- Responsive scaling
- Mobile-first design principles

## 🏗️ Architecture

```
src/
├── components/     # Phaser scenes and game components
├── data/          # Budget items and game data
├── game/          # Game configuration and battle logic
├── store/         # Zustand state management
├── types/         # TypeScript type definitions
└── main.ts        # Entry point
```

## 🎲 Budget Categories

- **Housing**: Rent, mortgage, utilities
- **Food**: Groceries, dining out
- **Transportation**: Cars, public transit
- **Entertainment**: Gaming, streaming, hobbies
- **Education**: Courses, certifications, degrees
- **Healthcare**: Insurance, medical expenses
- **Savings**: Emergency funds, retirement accounts
- **Investment**: Stocks, real estate, business ventures
- **Debt**: Student loans, credit cards

## 🌟 Future Enhancements

- Backend integration for true multiplayer ghost sharing
- More life stages and budget categories
- Achievement system
- Leaderboards
- Social features for sharing replays