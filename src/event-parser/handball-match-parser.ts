import { Match } from '../types';
import { MatchParser } from './match-parser-factory';

export class HandballMatchParser extends MatchParser<'handball'> {
  parseMatchName(match: Match<'handball'>): string {
    return `${match.participant1} vs ${match.participant2}`;
  }
  parseScore(match: Match<'handball'>): string {
    return match.score;
  }
}
