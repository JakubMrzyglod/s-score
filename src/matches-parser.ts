import { MatchParserFactory } from './event-parser/match-parser-factory';
import { InvalidMatches, Match, ParsedMatch, Sport } from './types';

export const parseMatches = (matches: Match[]) => {
  const matchesParsed: ParsedMatch[] = [];
  const invalidMatches: InvalidMatches[] = [];

  matches.forEach((match) => {
    try {
      const parser = MatchParserFactory.create(match);
      const name = parser.parseMatchName(match);
      const score = parser.parseScore(match);

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
