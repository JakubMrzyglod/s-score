import { Match } from '../types';
import { MatchParser } from './match-parser';

export class SoccerMatchParser extends MatchParser<'soccer'> {
  parseMatchName(match: Match<'soccer'>): string {
    return `${match.participant1} - ${match.participant2}`;
  }

  parseScore(match: Match<'soccer'>): string {
    return match.score;
  }
}
