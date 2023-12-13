import { expect, test } from 'vitest';
import { Match, Sport } from '@app/types';
import { parseMatches } from '@app/matches-parser';

test('match parser [SOCCER]', () => {
  const match = {
    sport: 'soccer' as const,
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  };
  const result = parseMatches([match]);
  expect(result).toEqual({
    invalidMatches: [],
    matchesParsed: [{ name: 'Chelsea - Arsenal', score: `2:1` }],
  });
});

test('match parser [VOLLEYBALL]', () => {
  const match = {
    sport: 'volleyball' as const,
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  };
  const result = parseMatches([match]);
  expect(result).toEqual({
    invalidMatches: [],
    matchesParsed: [
      {
        name: 'Germany - France',
        score: `Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)`,
      },
    ],
  });
});

test('match parser [HANDBALL]', () => {
  const match = {
    sport: 'handball' as const,
    participant1: 'Pogoń Szczeciń',
    participant2: 'Azoty Puławy',
    score: '34:26',
  };
  const result = parseMatches([match]);
  expect(result).toEqual({
    invalidMatches: [],
    matchesParsed: [{ name: 'Pogoń Szczeciń vs Azoty Puławy', score: '34:26' }],
  });
});

test('match parser [BASKETBALL]', () => {
  const match: Match<'basketball'> = {
    sport: 'basketball',
    participant1: 'GKS Tychy',
    participant2: 'GKS Katowice',
    score: [
      ['9:7', '2:1'],
      ['5:3', '9:9'],
    ],
  };
  const result = parseMatches([match]);
  expect(result).toEqual({
    invalidMatches: [],
    matchesParsed: [
      { name: 'GKS Tychy - GKS Katowice', score: '9:7,2:1,5:3,9:9' },
    ],
  });
});

test('match parser [TENNIS]', () => {
  const match = {
    sport: 'tennis' as const,
    participant1: 'Maria Sharapova',
    participant2: 'Serena Williams',
    score: '2:1,7:6,6:3,6:7',
  };
  const result = parseMatches([match]);
  expect(result).toEqual({
    invalidMatches: [],
    matchesParsed: [
      {
        name: 'Maria Sharapova vs Serena Williams',
        score: 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)',
      },
    ],
  });
});

test('match parser [SKI JUMPING]', () => {
  const match = {
    sport: 'ski jumping',
  } as unknown as Match;
  const result = parseMatches([match]);
  expect(result).toEqual({
    invalidMatches: [{ match, reason: 'Invalid sport' }],
    matchesParsed: [],
  });
});
