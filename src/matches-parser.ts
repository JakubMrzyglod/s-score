import { EventParser } from './event-parser';
import { InvalidMatches, Match, ParsedMatch } from './types';

export const parseMatches = (matches: Match[]) => {
  const matchesParsed: ParsedMatch[] = [];
  const invalidMatches: InvalidMatches[] = [];

  matches.forEach((match) => {
    try {
      const parser = new EventParser();
      const name = parser.makeEventName(match);
      const score = parser.formatScore(match);

      matchesParsed.push({
        name,
        score,
      });
    } catch (e) {
      const err = e as unknown as Error;
      invalidMatches.push({ match, reason: err.message });
    }
  });

  return { matchesParsed, invalidMatches };
};
