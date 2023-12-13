import { Match, Sport } from '../types';
import { BasketballMatchParser } from './basketball-match-parser';
import { HandballMatchParser } from './handball-match-parser';
import { TennisMatchParser } from './tennis-match-parser';
import { VolleyballMatchParser } from './VolleyballMatchParser';
import { SoccerMatchParser } from './soccer-match-parser';
import { MatchParser } from './match-parser';

export class MatchParserFactory {
  static create<T extends Sport>(match: Match<T>): MatchParser<Sport> {
    switch (match.sport) {
      case 'soccer':
        return new SoccerMatchParser();
      case 'basketball':
        return new BasketballMatchParser();
      case 'handball':
        return new HandballMatchParser();
      case 'tennis':
        return new TennisMatchParser();
      case 'volleyball':
        return new VolleyballMatchParser();
      default:
        throw new Error('Invalid sport');
    }
  }
}
