import { Match } from '../types';
import { MatchParser } from './match-parser-factory';

export class VolleyballMatchParser extends MatchParser<'volleyball'> {
  parseMatchName(match: Match<'volleyball'>): string {
    return `${match.participant1} - ${match.participant2}`;
  }

  parseScore(match: Match<'volleyball'>): string {
    const [mainScore, set1, set2, set3] = match.score.split(',');
    return `Main score: ${mainScore} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
  }
}
