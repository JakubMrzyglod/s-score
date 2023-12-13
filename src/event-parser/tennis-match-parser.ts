import { Match } from '../types';
import { MatchParser } from './match-parser';

export class TennisMatchParser extends MatchParser<'tennis'> {
  parseMatchName(match: Match<'tennis'>): string {
    return `${match.participant1} vs ${match.participant2}`;
  }

  parseScore(match: Match<'tennis'>): string {
    const [mainScore, set1, set2, set3] = match.score.split(',');
    return `Main score: ${mainScore} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
  }
}
