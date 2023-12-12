import { Match } from './types';

export class EventParser {
  makeEventName(match: Match) {
    switch (match.sport) {
      case 'soccer':
      case 'volleyball':
      case 'basketball':
        return match.participant1 + ' - ' + match.participant2;
      case 'tennis':
      case 'handball':
        return match.participant1 + ' vs ' + match.participant2;
      default:
        throw new Error('Invalid sport');
    }
  }

  formatScore(match: Match) {
    switch (match.sport) {
      case 'soccer':
      case 'handball':
        return match.score;
      case 'volleyball':
      case 'tennis':
        const [mainScore, set1, set2, set3] = match.score.split(',');
        return `Main score: ${mainScore} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
      case 'basketball':
        return match.score.flat().join(',');
      default:
        throw new Error('Invalid sport');
    }
  }
}
