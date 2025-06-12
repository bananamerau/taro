export interface SpreadPosition {
  id: number;
  name: string;
  enName: string;
  description: string;
}

export interface Spread {
  id: string;
  name: string;
  enName: string;
  description: string;
  positions: SpreadPosition[];
}

export const spreads: Spread[] = [
  {
    id: 'three-cards',
    name: '三牌阵',
    enName: 'Three Card Spread',
    description: '适用于快速了解事件发展脉络。',
    positions: [
      { id: 1, name: '过去', enName: 'Past', description: '事件的起因或过去影响' },
      { id: 2, name: '现在', enName: 'Present', description: '当前状况' },
      { id: 3, name: '未来', enName: 'Future', description: '可能的结果或未来趋势' },
    ],
  },
  {
    id: 'celtic-cross',
    name: '凯尔特十字',
    enName: 'Celtic Cross',
    description: '适用于深入分析复杂问题，提供多维度洞察。',
    positions: [
      { id: 1, name: '现状', enName: 'Present', description: '当前状况' },
      { id: 2, name: '挑战', enName: 'Challenge', description: '面临的障碍' },
      { id: 3, name: '潜意识', enName: 'Subconscious', description: '内在动机' },
      { id: 4, name: '显意识', enName: 'Conscious', description: '表面想法' },
      { id: 5, name: '过去', enName: 'Past', description: '过去影响' },
      { id: 6, name: '未来', enName: 'Future', description: '未来趋势' },
      { id: 7, name: '自我', enName: 'Self', description: '提问者自身状态' },
      { id: 8, name: '环境', enName: 'Environment', description: '外部环境' },
      { id: 9, name: '希望与恐惧', enName: 'Hopes and Fears', description: '内心期望与担忧' },
      { id: 10, name: '结果', enName: 'Outcome', description: '最终结果' },
    ],
  },
  {
    id: 'relationship',
    name: '爱情牌阵',
    enName: 'Relationship Spread',
    description: '适用于分析恋爱、婚姻、关系走向等问题。',
    positions: [
      { id: 1, name: '你', enName: 'You', description: '提问者自身状态' },
      { id: 2, name: '对方', enName: 'Partner', description: '对方的状态' },
      { id: 3, name: '关系现状', enName: 'Current Relationship', description: '目前的关系状况' },
      { id: 4, name: '障碍', enName: 'Obstacle', description: '阻碍关系发展的因素' },
      { id: 5, name: '未来', enName: 'Future', description: '关系的未来趋势' },
    ],
  },
  {
    id: 'career',
    name: '事业牌阵',
    enName: 'Career Spread',
    description: '适用于分析事业发展、工作变动、职业选择等问题。',
    positions: [
      { id: 1, name: '现状', enName: 'Current', description: '目前的事业状况' },
      { id: 2, name: '挑战', enName: 'Challenge', description: '面临的主要挑战' },
      { id: 3, name: '机遇', enName: 'Opportunity', description: '可把握的机会' },
      { id: 4, name: '建议', enName: 'Advice', description: '行动建议' },
      { id: 5, name: '结果', enName: 'Outcome', description: '事业的未来趋势' },
    ],
  },
]; 