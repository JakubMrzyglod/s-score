import { Match, Sport } from './types';
abstract class MatchParser<T extends Sport> {
  abstract parseMatchName(match: Match<T>): string;
  abstract parseScore(match: Match<T>): string;
}

class SoccerMatchParser extends MatchParser<'soccer'> {
  parseMatchName(match: Match<'soccer'>): string {
    return `${match.participant1} - ${match.participant2}`;
  }

  parseScore(match: Match<'soccer'>): string {
    return match.score;
  }
}

class VolleyballMatchParser extends MatchParser<'volleyball'> {
  parseMatchName(match: Match<'volleyball'>): string {
    return `${match.participant1} - ${match.participant2}`;
  }

  parseScore(match: Match<'volleyball'>): string {
    const [mainScore, set1, set2, set3] = match.score.split(',');
    return `Main score: ${mainScore} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
  }
}

class BasketballMatchParser extends MatchParser<'basketball'> {
  parseMatchName(match: Match<'basketball'>): string {
    return `${match.participant1} - ${match.participant2}`;
  }

  parseScore(match: Match<'basketball'>): string {
    return match.score.flat().join(',');
  }
}

class TennisMatchParser extends MatchParser<'tennis'> {
  parseMatchName(match: Match<'tennis'>): string {
    return `${match.participant1} vs ${match.participant2}`;
  }

  parseScore(match: Match<'tennis'>): string {
    const [mainScore, set1, set2, set3] = match.score.split(',');
    return `Main score: ${mainScore} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
  }
}

class HandballMatchParser extends MatchParser<'handball'> {
  parseMatchName(match: Match<'handball'>): string {
    return `${match.participant1} vs ${match.participant2}`;
  }
  parseScore(match: Match<'handball'>): string {
    return match.score;
  }
}

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
