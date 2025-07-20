import { BudgetItem, BudgetCategory, LifeStage } from '../types/game';

const budgetItemsData: Record<LifeStage, BudgetItem[]> = {
  [LifeStage.Teen]: [
    {
      id: 'teen-allowance',
      name: 'Weekly Allowance',
      category: BudgetCategory.Savings,
      cost: 0,
      income: 20,
      effect: '+$20/week for chores',
      tier: 1,
      rarity: 'common',
      synergies: ['responsibility', 'savings']
    },
    {
      id: 'teen-part-time',
      name: 'Part-time Job',
      category: BudgetCategory.Savings,
      cost: 10,
      income: 80,
      effect: 'Weekend job at local store',
      tier: 1,
      rarity: 'uncommon',
      synergies: ['work-experience', 'time-management']
    },
    {
      id: 'teen-phone',
      name: 'Phone Plan',
      category: BudgetCategory.Entertainment,
      cost: 40,
      income: 0,
      effect: 'Stay connected with friends',
      tier: 1,
      rarity: 'common',
      synergies: ['social', 'communication']
    },
    {
      id: 'teen-gaming',
      name: 'Gaming Console',
      category: BudgetCategory.Entertainment,
      cost: 300,
      income: 0,
      effect: 'Entertainment but expensive',
      tier: 1,
      rarity: 'rare',
      synergies: ['entertainment', 'social']
    },
    {
      id: 'teen-savings',
      name: 'Piggy Bank',
      category: BudgetCategory.Savings,
      cost: 5,
      income: 5,
      effect: 'Start building savings habits',
      tier: 1,
      rarity: 'common',
      synergies: ['discipline', 'future-planning']
    }
  ],
  
  [LifeStage.College]: [
    {
      id: 'college-loan',
      name: 'Student Loan',
      category: BudgetCategory.Debt,
      cost: 50000,
      income: 0,
      effect: 'Education investment with debt',
      tier: 2,
      rarity: 'common',
      synergies: ['education', 'future-earning']
    },
    {
      id: 'college-scholarship',
      name: 'Merit Scholarship',
      category: BudgetCategory.Education,
      cost: 0,
      income: 15000,
      effect: 'Reduces education costs',
      tier: 2,
      rarity: 'rare',
      synergies: ['academics', 'achievement']
    },
    {
      id: 'college-ramen',
      name: 'Ramen Diet',
      category: BudgetCategory.Food,
      cost: 100,
      income: 0,
      effect: 'Cheap but unhealthy meals',
      tier: 2,
      rarity: 'common',
      synergies: ['budget', 'survival']
    },
    {
      id: 'college-internship',
      name: 'Summer Internship',
      category: BudgetCategory.Savings,
      cost: 0,
      income: 3000,
      effect: 'Gain experience and money',
      tier: 2,
      rarity: 'uncommon',
      synergies: ['experience', 'networking']
    }
  ],
  
  [LifeStage.YoungAdult]: [
    {
      id: 'ya-apartment',
      name: 'Studio Apartment',
      category: BudgetCategory.Housing,
      cost: 1200,
      income: 0,
      effect: 'First independent living space',
      tier: 3,
      rarity: 'common',
      synergies: ['independence', 'location']
    },
    {
      id: 'ya-entry-job',
      name: 'Entry Level Job',
      category: BudgetCategory.Savings,
      cost: 0,
      income: 3000,
      effect: 'Start your career',
      tier: 3,
      rarity: 'common',
      synergies: ['career', 'stability']
    },
    {
      id: 'ya-car',
      name: 'Used Car',
      category: BudgetCategory.Transportation,
      cost: 8000,
      income: 0,
      effect: 'Freedom to travel, maintenance costs',
      tier: 3,
      rarity: 'uncommon',
      synergies: ['mobility', 'independence']
    },
    {
      id: 'ya-401k',
      name: '401k Plan',
      category: BudgetCategory.Investment,
      cost: 150,
      income: 200,
      effect: 'Start retirement savings early',
      tier: 3,
      rarity: 'uncommon',
      synergies: ['compound-interest', 'future-planning']
    }
  ],
  
  [LifeStage.Career]: [
    {
      id: 'career-house',
      name: 'Mortgage',
      category: BudgetCategory.Housing,
      cost: 2500,
      income: 0,
      effect: 'Building equity in property',
      tier: 4,
      rarity: 'common',
      synergies: ['stability', 'investment']
    },
    {
      id: 'career-promotion',
      name: 'Senior Role',
      category: BudgetCategory.Savings,
      cost: 0,
      income: 6000,
      effect: 'Higher salary and responsibility',
      tier: 4,
      rarity: 'uncommon',
      synergies: ['leadership', 'expertise']
    },
    {
      id: 'career-stocks',
      name: 'Stock Portfolio',
      category: BudgetCategory.Investment,
      cost: 1000,
      income: 300,
      effect: 'Market gains with risk',
      tier: 4,
      rarity: 'rare',
      synergies: ['diversification', 'growth']
    }
  ],
  
  [LifeStage.Midlife]: [
    {
      id: 'midlife-kids',
      name: 'Child Education',
      category: BudgetCategory.Education,
      cost: 2000,
      income: 0,
      effect: 'Investment in next generation',
      tier: 5,
      rarity: 'common',
      synergies: ['family', 'future']
    },
    {
      id: 'midlife-business',
      name: 'Small Business',
      category: BudgetCategory.Investment,
      cost: 50000,
      income: 4000,
      effect: 'Entrepreneurial venture',
      tier: 5,
      rarity: 'rare',
      synergies: ['independence', 'risk-reward']
    }
  ],
  
  [LifeStage.Retirement]: [
    {
      id: 'retirement-pension',
      name: 'Pension Payout',
      category: BudgetCategory.Savings,
      cost: 0,
      income: 2500,
      effect: 'Lifetime work finally paying off',
      tier: 6,
      rarity: 'uncommon',
      synergies: ['stability', 'reward']
    },
    {
      id: 'retirement-healthcare',
      name: 'Healthcare Costs',
      category: BudgetCategory.Healthcare,
      cost: 800,
      income: 0,
      effect: 'Higher medical expenses',
      tier: 6,
      rarity: 'common',
      synergies: ['aging', 'necessity']
    }
  ]
};

export function generateBudgetChoices(stage: LifeStage, count: number): BudgetItem[] {
  const stageItems = budgetItemsData[stage];
  const shuffled = [...stageItems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getAllBudgetItems(): BudgetItem[] {
  return Object.values(budgetItemsData).flat();
}