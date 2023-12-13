import { Match } from '../types';
import { MatchParser } from './match-parser';

export class BasketballMatchParser extends MatchParser<'basketball'> {
  parseMatchName(match: Match<'basketball'>): string {
    return `${match.participant1} - ${match.participant2}`;
  }

  parseScore(match: Match<'basketball'>): string {
    return match.score.flat().join(',');
  }
}
