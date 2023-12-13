import { Match, Sport } from '../types';

export abstract class MatchParser<T extends Sport> {
  abstract parseMatchName(match: Match<T>): string;
  abstract parseScore(match: Match<T>): string;
}
