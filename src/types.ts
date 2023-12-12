export type Match = {
  participant1: string;
  participant2: string;
} & (
  | {
      sport: 'soccer' | 'volleyball' | 'handball' | 'tennis';
      score: string;
    }
  | {
      sport: 'basketball';
      score: [[string, string], [string, string]];
    }
);

export type ParsedMatch = { name: string; score: string };

export type InvalidMatches = { match: Match; reason: string };
