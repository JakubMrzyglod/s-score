export type Match<T extends Sport = Sport> = {
  participant1: string;
  participant2: string;
  sport: T;
  score: T extends 'basketball' ? [[string, string], [string, string]] : string;
};

export type Sport =
  | 'soccer'
  | 'volleyball'
  | 'handball'
  | 'tennis'
  | 'basketball';

export type ParsedMatch = { name: string; score: string };

export type InvalidMatches = { match: unknown; reason: string };
