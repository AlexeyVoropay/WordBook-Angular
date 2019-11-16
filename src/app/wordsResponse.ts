import { LanguageWord } from './languageWord';
import { Paging } from './paging';

export class WordsResponse {
  words: LanguageWord[];
  paging: Paging;
}