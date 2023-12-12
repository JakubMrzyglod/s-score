import { expect, test } from 'vitest';
import { EventParser } from '@app/event-parser';
import { Match } from '@app/types';

test('match parser [SOCCER]', () => {
  const match = {
    sport: 'soccer' as const,
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  };
  const parser = new EventParser();
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  expect(name).to.equal('Chelsea - Arsenal');
  expect(score).to.equal('2:1');
});

test('match parser [SOCCER]', () => {
  const match = {
    sport: 'soccer',
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  };
  const parser = new EventParser();
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  expect(name).to.equal('Chelsea - Arsenal');
  expect(score).to.equal('2:1');
});

test('match parser [VOLLEYBALL]', () => {
  const match = {
    sport: 'volleyball' as const,
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  };
  const parser = new EventParser();
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  expect(name).to.equal('Germany - France');
  expect(score).to.equal(
    'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'
  );
});

test('match parser [HANDBALL]', () => {
  const match = {
    sport: 'handball' as const,
    participant1: 'Pogoń Szczeciń',
    participant2: 'Azoty Puławy',
    score: '34:26',
  };
  const parser = new EventParser();
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  expect(name).to.equal('Pogoń Szczeciń vs Azoty Puławy');
  expect(score).to.equal('34:26');
});

test('match parser [BASKETBALL]', () => {
  const match: Match = {
    sport: 'basketball',
    participant1: 'GKS Tychy',
    participant2: 'GKS Katowice',
    score: [
      ['9:7', '2:1'],
      ['5:3', '9:9'],
    ],
  };
  const parser = new EventParser();
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  expect(name).to.equal('GKS Tychy - GKS Katowice');
  expect(score).to.equal('9:7,2:1,5:3,9:9');
});

test('match parser [TENNIS]', () => {
  const match = {
    sport: 'tennis' as const,
    participant1: 'Maria Sharapova',
    participant2: 'Serena Williams',
    score: '2:1,7:6,6:3,6:7',
  };
  const parser = new EventParser();
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  expect(name).to.equal('Maria Sharapova vs Serena Williams');
  expect(score).to.equal('Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)');
});

test('match parser [SKI JUMPING]', () => {
  const match = {
    sport: 'ski jumping',
  } as unknown as Match;
  const parser = new EventParser();

  expect(() => parser.makeEventName(match)).toThrow(new Error('Invalid sport'));
  expect(() => parser.formatScore(match)).toThrow(new Error('Invalid sport'));
});
