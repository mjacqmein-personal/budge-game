import type { BudgetItem } from '../types/game';
import { BudgetCategory, LifeStage } from '../types/game';

const budgetItemsData: Record<LifeStage, Record<BudgetCategory, BudgetItem[]>> = {
  [LifeStage.Teen]: {
    [BudgetCategory.Job]: [
      {
        id: 'teen-allowance',
        name: 'Weekly Allowance',
        category: BudgetCategory.Job,
        cost: 0,
        income: 50,
        effect: 'Weekly allowance from parents',
        tier: 1,
        rarity: 'common',
        synergies: ['responsibility']
      },
      {
        id: 'teen-part-time',
        name: 'Part-time Job',
        category: BudgetCategory.Job,
        cost: 0,
        income: 200,
        effect: 'Weekend job at local store',
        tier: 1,
        rarity: 'uncommon',
        synergies: ['work-experience']
      },
      {
        id: 'teen-babysit',
        name: 'Babysitting',
        category: BudgetCategory.Job,
        cost: 0,
        income: 120,
        effect: 'Flexible evening income',
        tier: 1,
        rarity: 'common',
        synergies: ['flexibility']
      },
      {
        id: 'teen-tutoring',
        name: 'Peer Tutoring',
        category: BudgetCategory.Job,
        cost: 0,
        income: 100,
        effect: 'Help classmates with studies',
        tier: 1,
        rarity: 'rare',
        synergies: ['academics']
      },
      {
        id: 'teen-gig',
        name: 'Gig Work',
        category: BudgetCategory.Job,
        cost: 0,
        income: 80,
        effect: 'Flexible odd jobs',
        tier: 1,
        rarity: 'common',
        synergies: ['entrepreneurship']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'teen-home',
        name: "Parent's House",
        category: BudgetCategory.Housing,
        cost: 0,
        income: 0,
        effect: 'Free housing with family',
        tier: 1,
        rarity: 'common',
        synergies: ['family-support']
      },
      {
        id: 'teen-dorm',
        name: 'School Dorm',
        category: BudgetCategory.Housing,
        cost: 300,
        income: 0,
        effect: 'Independence but costly',
        tier: 1,
        rarity: 'uncommon',
        synergies: ['independence']
      },
      {
        id: 'teen-friend',
        name: "Friend's Place",
        category: BudgetCategory.Housing,
        cost: 100,
        income: 0,
        effect: 'Cheap shared living',
        tier: 1,
        rarity: 'rare',
        synergies: ['social']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'teen-piggy',
        name: 'Piggy Bank',
        category: BudgetCategory.Savings,
        cost: 20,
        income: 30,
        effect: 'Basic savings habits',
        tier: 1,
        rarity: 'common',
        synergies: ['discipline']
      },
      {
        id: 'teen-checking',
        name: 'First Bank Account',
        category: BudgetCategory.Savings,
        cost: 50,
        income: 60,
        effect: 'Professional banking start',
        tier: 1,
        rarity: 'uncommon',
        synergies: ['financial-literacy']
      },
      {
        id: 'teen-investing',
        name: 'Stock Market App',
        category: BudgetCategory.Savings,
        cost: 100,
        income: 80,
        effect: 'Learn investing early',
        tier: 1,
        rarity: 'rare',
        synergies: ['investment-knowledge']
      },
      {
        id: 'teen-emergency',
        name: 'Emergency Fund',
        category: BudgetCategory.Savings,
        cost: 150,
        income: 200,
        effect: 'Financial safety net',
        tier: 1,
        rarity: 'legendary',
        synergies: ['security']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'teen-phone',
        name: 'Phone Plan',
        category: BudgetCategory.Discretionary,
        cost: 80,
        income: 0,
        effect: 'Stay connected with friends',
        tier: 1,
        rarity: 'common',
        synergies: ['social']
      },
      {
        id: 'teen-gaming',
        name: 'Gaming Setup',
        category: BudgetCategory.Discretionary,
        cost: 400,
        income: 0,
        effect: 'Entertainment and social gaming',
        tier: 1,
        rarity: 'uncommon',
        synergies: ['entertainment']
      },
      {
        id: 'teen-sports',
        name: 'Sports Equipment',
        category: BudgetCategory.Discretionary,
        cost: 200,
        income: 0,
        effect: 'Health and fitness investment',
        tier: 1,
        rarity: 'common',
        synergies: ['health']
      },
      {
        id: 'teen-car',
        name: 'Used Car',
        category: BudgetCategory.Discretionary,
        cost: 600,
        income: 0,
        effect: 'Freedom but expensive',
        tier: 1,
        rarity: 'rare',
        synergies: ['independence']
      }
    ]
  },

  [LifeStage.College]: {
    [BudgetCategory.Job]: [
      {
        id: 'college-work-study',
        name: 'Work-Study Program',
        category: BudgetCategory.Job,
        cost: 0,
        income: 400,
        effect: 'On-campus employment',
        tier: 2,
        rarity: 'common',
        synergies: ['academics']
      },
      {
        id: 'college-internship',
        name: 'Summer Internship',
        category: BudgetCategory.Job,
        cost: 0,
        income: 2000,
        effect: 'Valuable experience and income',
        tier: 2,
        rarity: 'rare',
        synergies: ['career-prep']
      },
      {
        id: 'college-ta',
        name: 'Teaching Assistant',
        category: BudgetCategory.Job,
        cost: 0,
        income: 600,
        effect: 'Academic leadership role',
        tier: 2,
        rarity: 'uncommon',
        synergies: ['leadership']
      },
      {
        id: 'college-freelance',
        name: 'Freelance Work',
        category: BudgetCategory.Job,
        cost: 0,
        income: 800,
        effect: 'Flexible skill-based income',
        tier: 2,
        rarity: 'uncommon',
        synergies: ['entrepreneurship']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'college-dorm',
        name: 'College Dorm',
        category: BudgetCategory.Housing,
        cost: 800,
        income: 0,
        effect: 'Campus life experience',
        tier: 2,
        rarity: 'common',
        synergies: ['social']
      },
      {
        id: 'college-apartment',
        name: 'Shared Apartment',
        category: BudgetCategory.Housing,
        cost: 600,
        income: 0,
        effect: 'More independence, less cost',
        tier: 2,
        rarity: 'uncommon',
        synergies: ['independence']
      },
      {
        id: 'college-home',
        name: 'Live at Home',
        category: BudgetCategory.Housing,
        cost: 200,
        income: 0,
        effect: 'Commute but save money',
        tier: 2,
        rarity: 'common',
        synergies: ['savings']
      },
      {
        id: 'college-greek',
        name: 'Greek Life Housing',
        category: BudgetCategory.Housing,
        cost: 1000,
        income: 0,
        effect: 'Networking but expensive',
        tier: 2,
        rarity: 'rare',
        synergies: ['networking']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'college-scholarship',
        name: 'Merit Scholarship',
        category: BudgetCategory.Savings,
        cost: 0,
        income: 1500,
        effect: 'Academic achievement pays off',
        tier: 2,
        rarity: 'legendary',
        synergies: ['academics']
      },
      {
        id: 'college-loans',
        name: 'Student Loans',
        category: BudgetCategory.Savings,
        cost: 2000,
        income: 0,
        effect: 'Future debt for current education',
        tier: 2,
        rarity: 'common',
        synergies: ['education-investment']
      },
      {
        id: 'college-529',
        name: '529 College Fund',
        category: BudgetCategory.Savings,
        cost: 500,
        income: 800,
        effect: 'Pre-saved education money',
        tier: 2,
        rarity: 'uncommon',
        synergies: ['family-planning']
      },
      {
        id: 'college-roth',
        name: 'Roth IRA Start',
        category: BudgetCategory.Savings,
        cost: 200,
        income: 300,
        effect: 'Early retirement planning',
        tier: 2,
        rarity: 'rare',
        synergies: ['long-term-planning']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'college-textbooks',
        name: 'Textbooks',
        category: BudgetCategory.Discretionary,
        cost: 500,
        income: 0,
        effect: 'Necessary for academic success',
        tier: 2,
        rarity: 'common',
        synergies: ['academics']
      },
      {
        id: 'college-social',
        name: 'Social Activities',
        category: BudgetCategory.Discretionary,
        cost: 300,
        income: 0,
        effect: 'Networking and fun',
        tier: 2,
        rarity: 'common',
        synergies: ['social']
      },
      {
        id: 'college-laptop',
        name: 'High-End Laptop',
        category: BudgetCategory.Discretionary,
        cost: 1200,
        income: 0,
        effect: 'Better productivity tools',
        tier: 2,
        rarity: 'uncommon',
        synergies: ['productivity']
      },
      {
        id: 'college-study-abroad',
        name: 'Study Abroad',
        category: BudgetCategory.Discretionary,
        cost: 3000,
        income: 0,
        effect: 'Life-changing experience',
        tier: 2,
        rarity: 'legendary',
        synergies: ['cultural-experience']
      }
    ]
  },

  [LifeStage.YoungAdult]: {
    [BudgetCategory.Job]: [
      {
        id: 'ya-entry-level',
        name: 'Entry Level Job',
        category: BudgetCategory.Job,
        cost: 0,
        income: 3000,
        effect: 'Start your career path',
        tier: 3,
        rarity: 'common',
        synergies: ['career-building']
      },
      {
        id: 'ya-startup',
        name: 'Startup Position',
        category: BudgetCategory.Job,
        cost: 0,
        income: 2500,
        effect: 'High risk, high growth potential',
        tier: 3,
        rarity: 'uncommon',
        synergies: ['entrepreneurship']
      },
      {
        id: 'ya-corporate',
        name: 'Corporate Trainee',
        category: BudgetCategory.Job,
        cost: 0,
        income: 3500,
        effect: 'Structured career progression',
        tier: 3,
        rarity: 'uncommon',
        synergies: ['stability']
      },
      {
        id: 'ya-freelance',
        name: 'Freelance Career',
        category: BudgetCategory.Job,
        cost: 0,
        income: 2800,
        effect: 'Freedom but inconsistent',
        tier: 3,
        rarity: 'rare',
        synergies: ['flexibility']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'ya-studio',
        name: 'Studio Apartment',
        category: BudgetCategory.Housing,
        cost: 1200,
        income: 0,
        effect: 'First independent living',
        tier: 3,
        rarity: 'common',
        synergies: ['independence']
      },
      {
        id: 'ya-roommates',
        name: 'Shared House',
        category: BudgetCategory.Housing,
        cost: 800,
        income: 0,
        effect: 'Split costs with friends',
        tier: 3,
        rarity: 'common',
        synergies: ['social']
      },
      {
        id: 'ya-nice-apt',
        name: 'Nice 1BR Apartment',
        category: BudgetCategory.Housing,
        cost: 1800,
        income: 0,
        effect: 'Comfortable but expensive',
        tier: 3,
        rarity: 'uncommon',
        synergies: ['comfort']
      },
      {
        id: 'ya-buy-condo',
        name: 'First Condo Purchase',
        category: BudgetCategory.Housing,
        cost: 2200,
        income: 0,
        effect: 'Building equity early',
        tier: 3,
        rarity: 'rare',
        synergies: ['investment']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'ya-401k',
        name: '401k Contribution',
        category: BudgetCategory.Savings,
        cost: 300,
        income: 450,
        effect: 'Employer match is free money',
        tier: 3,
        rarity: 'common',
        synergies: ['retirement-planning']
      },
      {
        id: 'ya-emergency',
        name: 'Emergency Fund',
        category: BudgetCategory.Savings,
        cost: 500,
        income: 600,
        effect: '6 months of expenses saved',
        tier: 3,
        rarity: 'uncommon',
        synergies: ['security']
      },
      {
        id: 'ya-index-funds',
        name: 'Index Fund Investing',
        category: BudgetCategory.Savings,
        cost: 400,
        income: 500,
        effect: 'Diversified market exposure',
        tier: 3,
        rarity: 'uncommon',
        synergies: ['long-term-growth']
      },
      {
        id: 'ya-crypto',
        name: 'Cryptocurrency',
        category: BudgetCategory.Savings,
        cost: 600,
        income: 400,
        effect: 'High risk, high reward',
        tier: 3,
        rarity: 'rare',
        synergies: ['speculation']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'ya-car',
        name: 'Reliable Car',
        category: BudgetCategory.Discretionary,
        cost: 400,
        income: 0,
        effect: 'Transportation to work',
        tier: 3,
        rarity: 'common',
        synergies: ['mobility']
      },
      {
        id: 'ya-gym',
        name: 'Gym Membership',
        category: BudgetCategory.Discretionary,
        cost: 80,
        income: 0,
        effect: 'Health and stress relief',
        tier: 3,
        rarity: 'common',
        synergies: ['health']
      },
      {
        id: 'ya-streaming',
        name: 'Entertainment Subscriptions',
        category: BudgetCategory.Discretionary,
        cost: 50,
        income: 0,
        effect: 'Relaxation and entertainment',
        tier: 3,
        rarity: 'common',
        synergies: ['work-life-balance']
      },
      {
        id: 'ya-travel',
        name: 'Travel Fund',
        category: BudgetCategory.Discretionary,
        cost: 300,
        income: 0,
        effect: 'Experiences and adventures',
        tier: 3,
        rarity: 'uncommon',
        synergies: ['life-experiences']
      }
    ]
  },

  [LifeStage.EarlyCareer]: {
    [BudgetCategory.Job]: [
      {
        id: 'ec-promotion',
        name: 'First Promotion',
        category: BudgetCategory.Job,
        cost: 0,
        income: 4500,
        effect: 'Recognition and raise',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['career-advancement']
      },
      {
        id: 'ec-job-hop',
        name: 'Strategic Job Change',
        category: BudgetCategory.Job,
        cost: 0,
        income: 5000,
        effect: 'Market rate salary jump',
        tier: 4,
        rarity: 'rare',
        synergies: ['market-awareness']
      },
      {
        id: 'ec-specialized',
        name: 'Specialized Role',
        category: BudgetCategory.Job,
        cost: 0,
        income: 4200,
        effect: 'Niche expertise premium',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['expertise']
      },
      {
        id: 'ec-side-hustle',
        name: 'Side Business',
        category: BudgetCategory.Job,
        cost: 500,
        income: 1000,
        effect: 'Additional income stream',
        tier: 4,
        rarity: 'rare',
        synergies: ['entrepreneurship']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'ec-nice-apt',
        name: '2BR Apartment',
        category: BudgetCategory.Housing,
        cost: 2000,
        income: 0,
        effect: 'Space for home office',
        tier: 4,
        rarity: 'common',
        synergies: ['work-from-home']
      },
      {
        id: 'ec-house-down',
        name: 'House Down Payment',
        category: BudgetCategory.Housing,
        cost: 3000,
        income: 0,
        effect: 'Preparing for home ownership',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['long-term-planning']
      },
      {
        id: 'ec-luxury-apt',
        name: 'Luxury Apartment',
        category: BudgetCategory.Housing,
        cost: 2800,
        income: 0,
        effect: 'Lifestyle inflation',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['status']
      },
      {
        id: 'ec-house-buy',
        name: 'First House Purchase',
        category: BudgetCategory.Housing,
        cost: 2500,
        income: 200,
        effect: 'Building equity and stability',
        tier: 4,
        rarity: 'rare',
        synergies: ['investment', 'stability']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'ec-max-401k',
        name: 'Max 401k Contribution',
        category: BudgetCategory.Savings,
        cost: 800,
        income: 1200,
        effect: 'Maximizing employer benefits',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['retirement-planning']
      },
      {
        id: 'ec-brokerage',
        name: 'Taxable Investment Account',
        category: BudgetCategory.Savings,
        cost: 1000,
        income: 1100,
        effect: 'Building wealth beyond retirement',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['wealth-building']
      },
      {
        id: 'ec-real-estate',
        name: 'Real Estate Investment',
        category: BudgetCategory.Savings,
        cost: 2000,
        income: 1800,
        effect: 'Diversification into property',
        tier: 4,
        rarity: 'rare',
        synergies: ['diversification']
      },
      {
        id: 'ec-hsa',
        name: 'HSA Max Contribution',
        category: BudgetCategory.Savings,
        cost: 300,
        income: 400,
        effect: 'Triple tax advantage',
        tier: 4,
        rarity: 'rare',
        synergies: ['tax-optimization']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'ec-nice-car',
        name: 'New Car',
        category: BudgetCategory.Discretionary,
        cost: 600,
        income: 0,
        effect: 'Reliable and comfortable',
        tier: 4,
        rarity: 'common',
        synergies: ['comfort']
      },
      {
        id: 'ec-hobbies',
        name: 'Expensive Hobbies',
        category: BudgetCategory.Discretionary,
        cost: 400,
        income: 0,
        effect: 'Work-life balance investment',
        tier: 4,
        rarity: 'common',
        synergies: ['work-life-balance']
      },
      {
        id: 'ec-dining',
        name: 'Fine Dining',
        category: BudgetCategory.Discretionary,
        cost: 300,
        income: 0,
        effect: 'Lifestyle creep but enjoyable',
        tier: 4,
        rarity: 'common',
        synergies: ['social']
      },
      {
        id: 'ec-education',
        name: 'Professional Development',
        category: BudgetCategory.Discretionary,
        cost: 500,
        income: 0,
        effect: 'Invest in career growth',
        tier: 4,
        rarity: 'uncommon',
        synergies: ['career-advancement']
      }
    ]
  },

  [LifeStage.MidCareer]: {
    [BudgetCategory.Job]: [
      {
        id: 'mc-senior-role',
        name: 'Senior Position',
        category: BudgetCategory.Job,
        cost: 0,
        income: 7000,
        effect: 'Leadership and high income',
        tier: 5,
        rarity: 'uncommon',
        synergies: ['leadership']
      },
      {
        id: 'mc-consulting',
        name: 'Independent Consulting',
        category: BudgetCategory.Job,
        cost: 1000,
        income: 8000,
        effect: 'High income but inconsistent',
        tier: 5,
        rarity: 'rare',
        synergies: ['entrepreneurship']
      },
      {
        id: 'mc-executive',
        name: 'Executive Role',
        category: BudgetCategory.Job,
        cost: 0,
        income: 9000,
        effect: 'Top tier compensation',
        tier: 5,
        rarity: 'legendary',
        synergies: ['executive-leadership']
      },
      {
        id: 'mc-business-owner',
        name: 'Business Owner',
        category: BudgetCategory.Job,
        cost: 3000,
        income: 6000,
        effect: 'Own your destiny',
        tier: 5,
        rarity: 'rare',
        synergies: ['ownership']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'mc-family-home',
        name: 'Family Home',
        category: BudgetCategory.Housing,
        cost: 3500,
        income: 0,
        effect: 'Space for growing family',
        tier: 5,
        rarity: 'common',
        synergies: ['family']
      },
      {
        id: 'mc-upgrade-home',
        name: 'Home Upgrade',
        category: BudgetCategory.Housing,
        cost: 4000,
        income: 500,
        effect: 'Better neighborhood and schools',
        tier: 5,
        rarity: 'uncommon',
        synergies: ['status', 'family']
      },
      {
        id: 'mc-investment-property',
        name: 'Rental Property',
        category: BudgetCategory.Housing,
        cost: 2000,
        income: 1500,
        effect: 'Passive income stream',
        tier: 5,
        rarity: 'rare',
        synergies: ['passive-income']
      },
      {
        id: 'mc-vacation-home',
        name: 'Vacation Home',
        category: BudgetCategory.Housing,
        cost: 3000,
        income: 0,
        effect: 'Luxury lifestyle choice',
        tier: 5,
        rarity: 'legendary',
        synergies: ['luxury']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'mc-mega-backdoor',
        name: 'Mega Backdoor Roth',
        category: BudgetCategory.Savings,
        cost: 2000,
        income: 2500,
        effect: 'Advanced tax strategy',
        tier: 5,
        rarity: 'rare',
        synergies: ['tax-optimization']
      },
      {
        id: 'mc-529-kids',
        name: 'Kids College Fund',
        category: BudgetCategory.Savings,
        cost: 800,
        income: 1000,
        effect: 'Preparing for next generation',
        tier: 5,
        rarity: 'common',
        synergies: ['family-planning']
      },
      {
        id: 'mc-diversified',
        name: 'Diversified Portfolio',
        category: BudgetCategory.Savings,
        cost: 2500,
        income: 2800,
        effect: 'Professional wealth management',
        tier: 5,
        rarity: 'uncommon',
        synergies: ['sophisticated-investing']
      },
      {
        id: 'mc-alternative',
        name: 'Alternative Investments',
        category: BudgetCategory.Savings,
        cost: 3000,
        income: 2500,
        effect: 'Private equity, hedge funds',
        tier: 5,
        rarity: 'legendary',
        synergies: ['high-net-worth']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'mc-luxury-car',
        name: 'Luxury Vehicle',
        category: BudgetCategory.Discretionary,
        cost: 1200,
        income: 0,
        effect: 'Status symbol and comfort',
        tier: 5,
        rarity: 'uncommon',
        synergies: ['status']
      },
      {
        id: 'mc-family-activities',
        name: 'Family Experiences',
        category: BudgetCategory.Discretionary,
        cost: 800,
        income: 0,
        effect: 'Creating memories with family',
        tier: 5,
        rarity: 'common',
        synergies: ['family']
      },
      {
        id: 'mc-executive-coaching',
        name: 'Executive Coaching',
        category: BudgetCategory.Discretionary,
        cost: 1000,
        income: 0,
        effect: 'Professional development',
        tier: 5,
        rarity: 'rare',
        synergies: ['leadership-development']
      },
      {
        id: 'mc-philanthropy',
        name: 'Charitable Giving',
        category: BudgetCategory.Discretionary,
        cost: 1500,
        income: 0,
        effect: 'Give back to community',
        tier: 5,
        rarity: 'uncommon',
        synergies: ['social-impact']
      }
    ]
  },

  [LifeStage.SeniorCareer]: {
    [BudgetCategory.Job]: [
      {
        id: 'sc-c-suite',
        name: 'C-Suite Executive',
        category: BudgetCategory.Job,
        cost: 0,
        income: 15000,
        effect: 'Peak earning potential',
        tier: 6,
        rarity: 'legendary',
        synergies: ['executive-leadership']
      },
      {
        id: 'sc-board-member',
        name: 'Board Positions',
        category: BudgetCategory.Job,
        cost: 0,
        income: 3000,
        effect: 'Multiple board seats',
        tier: 6,
        rarity: 'rare',
        synergies: ['governance']
      },
      {
        id: 'sc-business-empire',
        name: 'Business Empire',
        category: BudgetCategory.Job,
        cost: 5000,
        income: 12000,
        effect: 'Multiple business ownership',
        tier: 6,
        rarity: 'legendary',
        synergies: ['empire-building']
      },
      {
        id: 'sc-expert-consulting',
        name: 'Industry Expert',
        category: BudgetCategory.Job,
        cost: 0,
        income: 8000,
        effect: 'Premium consulting rates',
        tier: 6,
        rarity: 'rare',
        synergies: ['expertise']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'sc-estate',
        name: 'Estate Property',
        category: BudgetCategory.Housing,
        cost: 8000,
        income: 0,
        effect: 'Luxury estate living',
        tier: 6,
        rarity: 'legendary',
        synergies: ['luxury']
      },
      {
        id: 'sc-portfolio',
        name: 'Property Portfolio',
        category: BudgetCategory.Housing,
        cost: 5000,
        income: 4000,
        effect: 'Multiple rental properties',
        tier: 6,
        rarity: 'rare',
        synergies: ['passive-income']
      },
      {
        id: 'sc-international',
        name: 'International Properties',
        category: BudgetCategory.Housing,
        cost: 6000,
        income: 1000,
        effect: 'Global real estate',
        tier: 6,
        rarity: 'legendary',
        synergies: ['global-lifestyle']
      },
      {
        id: 'sc-primary-upgrade',
        name: 'Primary Home Upgrade',
        category: BudgetCategory.Housing,
        cost: 4000,
        income: 0,
        effect: 'Dream home achieved',
        tier: 6,
        rarity: 'uncommon',
        synergies: ['lifestyle']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'sc-family-office',
        name: 'Family Office',
        category: BudgetCategory.Savings,
        cost: 5000,
        income: 6000,
        effect: 'Institutional wealth management',
        tier: 6,
        rarity: 'legendary',
        synergies: ['ultra-high-net-worth']
      },
      {
        id: 'sc-private-equity',
        name: 'Private Equity Fund',
        category: BudgetCategory.Savings,
        cost: 8000,
        income: 7000,
        effect: 'Accredited investor access',
        tier: 6,
        rarity: 'rare',
        synergies: ['alternative-investments']
      },
      {
        id: 'sc-trust-fund',
        name: 'Trust Fund Setup',
        category: BudgetCategory.Savings,
        cost: 3000,
        income: 4000,
        effect: 'Generational wealth transfer',
        tier: 6,
        rarity: 'rare',
        synergies: ['legacy-planning']
      },
      {
        id: 'sc-retirement-max',
        name: 'Maximum Retirement Savings',
        category: BudgetCategory.Savings,
        cost: 4000,
        income: 5000,
        effect: 'All tax-advantaged accounts maxed',
        tier: 6,
        rarity: 'uncommon',
        synergies: ['retirement-optimization']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'sc-luxury-lifestyle',
        name: 'Luxury Lifestyle',
        category: BudgetCategory.Discretionary,
        cost: 3000,
        income: 0,
        effect: 'High-end everything',
        tier: 6,
        rarity: 'uncommon',
        synergies: ['luxury']
      },
      {
        id: 'sc-private-jet',
        name: 'Private Aviation',
        category: BudgetCategory.Discretionary,
        cost: 5000,
        income: 0,
        effect: 'Ultimate convenience and status',
        tier: 6,
        rarity: 'legendary',
        synergies: ['ultra-luxury']
      },
      {
        id: 'sc-art-collection',
        name: 'Art Collection',
        category: BudgetCategory.Discretionary,
        cost: 4000,
        income: 0,
        effect: 'Investment and culture',
        tier: 6,
        rarity: 'rare',
        synergies: ['cultural-investment']
      },
      {
        id: 'sc-major-philanthropy',
        name: 'Major Philanthropic Initiative',
        category: BudgetCategory.Discretionary,
        cost: 6000,
        income: 0,
        effect: 'Significant social impact',
        tier: 6,
        rarity: 'legendary',
        synergies: ['legacy-building']
      }
    ]
  },

  [LifeStage.PreRetirement]: {
    [BudgetCategory.Job]: [
      {
        id: 'pr-reduced-hours',
        name: 'Reduced Work Schedule',
        category: BudgetCategory.Job,
        cost: 0,
        income: 6000,
        effect: 'Work-life balance focus',
        tier: 7,
        rarity: 'common',
        synergies: ['work-life-balance']
      },
      {
        id: 'pr-mentoring',
        name: 'Executive Mentoring',
        category: BudgetCategory.Job,
        cost: 0,
        income: 4000,
        effect: 'Share wisdom with next generation',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['legacy-building']
      },
      {
        id: 'pr-passive-income',
        name: 'Full Passive Income',
        category: BudgetCategory.Job,
        cost: 0,
        income: 8000,
        effect: 'Investments provide all income',
        tier: 7,
        rarity: 'rare',
        synergies: ['financial-independence']
      },
      {
        id: 'pr-advisory-roles',
        name: 'Advisory Board Roles',
        category: BudgetCategory.Job,
        cost: 0,
        income: 5000,
        effect: 'Strategic guidance for companies',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['expertise']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'pr-downsize',
        name: 'Downsize Home',
        category: BudgetCategory.Housing,
        cost: 2000,
        income: 1000,
        effect: 'Less maintenance, more cash',
        tier: 7,
        rarity: 'common',
        synergies: ['simplification']
      },
      {
        id: 'pr-retirement-community',
        name: 'Retirement Community',
        category: BudgetCategory.Housing,
        cost: 3000,
        income: 0,
        effect: 'Active adult lifestyle',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['community']
      },
      {
        id: 'pr-age-in-place',
        name: 'Age-in-Place Modifications',
        category: BudgetCategory.Housing,
        cost: 1500,
        income: 0,
        effect: 'Home modifications for aging',
        tier: 7,
        rarity: 'common',
        synergies: ['aging-preparation']
      },
      {
        id: 'pr-vacation-home-retire',
        name: 'Move to Vacation Home',
        category: BudgetCategory.Housing,
        cost: 2500,
        income: 0,
        effect: 'Dream location retirement',
        tier: 7,
        rarity: 'rare',
        synergies: ['lifestyle']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'pr-retirement-bridge',
        name: 'Retirement Bridge Strategy',
        category: BudgetCategory.Savings,
        cost: 3000,
        income: 4000,
        effect: 'Bridge gap to Social Security',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['retirement-planning']
      },
      {
        id: 'pr-roth-conversions',
        name: 'Roth Conversion Ladder',
        category: BudgetCategory.Savings,
        cost: 2000,
        income: 3000,
        effect: 'Tax-free retirement income',
        tier: 7,
        rarity: 'rare',
        synergies: ['tax-optimization']
      },
      {
        id: 'pr-estate-planning',
        name: 'Advanced Estate Planning',
        category: BudgetCategory.Savings,
        cost: 1000,
        income: 2000,
        effect: 'Optimize wealth transfer',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['legacy-planning']
      },
      {
        id: 'pr-annuities',
        name: 'Income Annuities',
        category: BudgetCategory.Savings,
        cost: 5000,
        income: 4500,
        effect: 'Guaranteed income for life',
        tier: 7,
        rarity: 'common',
        synergies: ['income-security']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'pr-travel-luxury',
        name: 'Luxury Travel',
        category: BudgetCategory.Discretionary,
        cost: 2000,
        income: 0,
        effect: 'See the world in comfort',
        tier: 7,
        rarity: 'common',
        synergies: ['life-experiences']
      },
      {
        id: 'pr-health-premium',
        name: 'Premium Healthcare',
        category: BudgetCategory.Discretionary,
        cost: 1200,
        income: 0,
        effect: 'Best medical care available',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['health-optimization']
      },
      {
        id: 'pr-grandchildren',
        name: 'Grandchildren Fund',
        category: BudgetCategory.Discretionary,
        cost: 800,
        income: 0,
        effect: 'Spoil the next generation',
        tier: 7,
        rarity: 'common',
        synergies: ['family-legacy']
      },
      {
        id: 'pr-hobbies-premium',
        name: 'Premium Hobby Pursuits',
        category: BudgetCategory.Discretionary,
        cost: 1000,
        income: 0,
        effect: 'Finally time for expensive hobbies',
        tier: 7,
        rarity: 'uncommon',
        synergies: ['personal-fulfillment']
      }
    ]
  },

  [LifeStage.Retirement]: {
    [BudgetCategory.Job]: [
      {
        id: 'ret-social-security',
        name: 'Social Security',
        category: BudgetCategory.Job,
        cost: 0,
        income: 2500,
        effect: 'Government pension benefits',
        tier: 8,
        rarity: 'common',
        synergies: ['guaranteed-income']
      },
      {
        id: 'ret-pension',
        name: 'Company Pension',
        category: BudgetCategory.Job,
        cost: 0,
        income: 3000,
        effect: 'Traditional pension payout',
        tier: 8,
        rarity: 'uncommon',
        synergies: ['defined-benefit']
      },
      {
        id: 'ret-part-time',
        name: 'Part-time Consulting',
        category: BudgetCategory.Job,
        cost: 0,
        income: 1500,
        effect: 'Stay engaged and earn',
        tier: 8,
        rarity: 'common',
        synergies: ['active-retirement']
      },
      {
        id: 'ret-royalties',
        name: 'Royalty Income',
        category: BudgetCategory.Job,
        cost: 0,
        income: 2000,
        effect: 'Passive income from IP',
        tier: 8,
        rarity: 'rare',
        synergies: ['intellectual-property']
      }
    ],
    [BudgetCategory.Housing]: [
      {
        id: 'ret-paid-off',
        name: 'Paid-off Home',
        category: BudgetCategory.Housing,
        cost: 500,
        income: 0,
        effect: 'No mortgage payments',
        tier: 8,
        rarity: 'common',
        synergies: ['debt-free']
      },
      {
        id: 'ret-assisted-living',
        name: 'Assisted Living',
        category: BudgetCategory.Housing,
        cost: 4000,
        income: 0,
        effect: 'Care and community',
        tier: 8,
        rarity: 'uncommon',
        synergies: ['care-support']
      },
      {
        id: 'ret-luxury-retirement',
        name: 'Luxury Retirement Community',
        category: BudgetCategory.Housing,
        cost: 6000,
        income: 0,
        effect: 'Premium retirement lifestyle',
        tier: 8,
        rarity: 'rare',
        synergies: ['luxury-aging']
      },
      {
        id: 'ret-age-in-place',
        name: 'Age in Place with Care',
        category: BudgetCategory.Housing,
        cost: 2500,
        income: 0,
        effect: 'Stay home with help',
        tier: 8,
        rarity: 'common',
        synergies: ['independence']
      }
    ],
    [BudgetCategory.Savings]: [
      {
        id: 'ret-401k-withdrawals',
        name: '401k/IRA Withdrawals',
        category: BudgetCategory.Savings,
        cost: 0,
        income: 4000,
        effect: 'Retirement account distributions',
        tier: 8,
        rarity: 'common',
        synergies: ['retirement-income']
      },
      {
        id: 'ret-portfolio-income',
        name: 'Investment Portfolio Income',
        category: BudgetCategory.Savings,
        cost: 0,
        income: 5000,
        effect: 'Dividends and distributions',
        tier: 8,
        rarity: 'uncommon',
        synergies: ['passive-income']
      },
      {
        id: 'ret-real-estate-income',
        name: 'Real Estate Income',
        category: BudgetCategory.Savings,
        cost: 0,
        income: 3000,
        effect: 'Rental property income',
        tier: 8,
        rarity: 'uncommon',
        synergies: ['property-income']
      },
      {
        id: 'ret-trust-distributions',
        name: 'Trust Distributions',
        category: BudgetCategory.Savings,
        cost: 0,
        income: 6000,
        effect: 'Family trust income',
        tier: 8,
        rarity: 'rare',
        synergies: ['family-wealth']
      }
    ],
    [BudgetCategory.Discretionary]: [
      {
        id: 'ret-healthcare-costs',
        name: 'Healthcare Expenses',
        category: BudgetCategory.Discretionary,
        cost: 1500,
        income: 0,
        effect: 'Medical and insurance costs',
        tier: 8,
        rarity: 'common',
        synergies: ['health-maintenance']
      },
      {
        id: 'ret-leisure-travel',
        name: 'Leisure Travel',
        category: BudgetCategory.Discretionary,
        cost: 1000,
        income: 0,
        effect: 'See the world with time',
        tier: 8,
        rarity: 'common',
        synergies: ['active-lifestyle']
      },
      {
        id: 'ret-family-gifts',
        name: 'Family Gifting',
        category: BudgetCategory.Discretionary,
        cost: 2000,
        income: 0,
        effect: 'Support children and grandchildren',
        tier: 8,
        rarity: 'uncommon',
        synergies: ['family-support']
      },
      {
        id: 'ret-legacy-giving',
        name: 'Legacy Charitable Giving',
        category: BudgetCategory.Discretionary,
        cost: 3000,
        income: 0,
        effect: 'Major philanthropic impact',
        tier: 8,
        rarity: 'rare',
        synergies: ['philanthropic-legacy']
      }
    ]
  }
};

export function generateBudgetChoices(stage: LifeStage, category: BudgetCategory, count: number = 4): BudgetItem[] {
  const categoryItems = budgetItemsData[stage][category];
  const shuffled = [...categoryItems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, categoryItems.length));
}

export function generateAllCategoryChoices(stage: LifeStage): Record<BudgetCategory, BudgetItem[]> {
  const result: Record<BudgetCategory, BudgetItem[]> = {} as Record<BudgetCategory, BudgetItem[]>;
  
  Object.values(BudgetCategory).forEach(category => {
    result[category] = generateBudgetChoices(stage, category, 4);
  });
  
  return result;
}

export function getAllBudgetItems(): BudgetItem[] {
  return Object.values(budgetItemsData)
    .flatMap(stage => Object.values(stage))
    .flat();
}