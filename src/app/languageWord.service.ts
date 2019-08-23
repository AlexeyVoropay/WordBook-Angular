import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { LanguageWord } from './languageWord';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LanguageWordService {

  private languageWordsUrl = 'http://localhost:50473/api/words';  // URL to web api
  //private languageLettersUrl = 'http://alexey.somee.com/api/letters';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET languageLetters by languageId from the server */
  /** Will 404 if id not found */
  getLanguageWords(languageId: number): Observable<LanguageWord[]> {
    const url = `${this.languageWordsUrl}?languageId=${languageId}`;
    return this.http.get<LanguageWord[]>(url)
      .pipe(
        tap(_ => this.log('fetched languageWords')),
        catchError(this.handleError<LanguageWord[]>('getLanguageWords', []))
      );
  }

  /** GET language by id. Will 404 if id not found */
  getLanguageWord(id: number): Observable<LanguageWord> {
    const url = `${this.languageWordsUrl}/${id}`;
    return this.http.get<LanguageWord>(url).pipe(
      tap(_ => this.log(`fetched languageWord id=${id}`)),
      catchError(this.handleError<LanguageWord>(`getLanguageWord id=${id}`))
    );
  }

  /** PUT: update the language on the server */
  updateLanguageWord (languageWord: LanguageWord): Observable<any> {
    return this.http.put(this.languageWordsUrl, languageWord, httpOptions).pipe(
      tap(_ => this.log(`updated languageWord id=${languageWord.id}`)),
      catchError(this.handleError<any>('updateLanguageWord'))
    );
  }

  // /** GET language by id. Return `undefined` when id not found */
  // getLanguageNo404<Data>(id: number): Observable<Language> {
  //   const url = `${this.languagesUrl}/?id=${id}`;
  //   return this.http.get<Language[]>(url)
  //     .pipe(
  //       map(languages => languages[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} language id=${id}`);
  //       }),
  //       catchError(this.handleError<Language>(`getLanguage id=${id}`))
  //     );
  // }

  // /** GET language by id. Will 404 if id not found */
  // getLanguage(id: number): Observable<Language> {
  //   const url = `${this.languagesUrl}/${id}`;
  //   return this.http.get<Language>(url).pipe(
  //     tap(_ => this.log(`fetched language id=${id}`)),
  //     catchError(this.handleError<Language>(`getLanguage id=${id}`))
  //   );
  // }

  // /* GET languages whose name contains search term */
  // searchLanguages(term: string): Observable<Language[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty language array.
  //     return of([]);
  //   }
  //   return this.http.get<Language[]>(`${this.languagesUrl}/?searchText=${term}`).pipe(
  //     tap(_ => this.log(`found languages matching "${term}"`)),
  //     catchError(this.handleError<Language[]>('searchLanguages', []))
  //   );
  // }

  // //////// Save methods //////////

  // /** POST: add a new language to the server */
  // addLanguage (language: Language): Observable<Language> {
  //   return this.http.post<Language>(this.languagesUrl, language, httpOptions).pipe(
  //     tap((newLanguage: Language) => this.log(`added language w/ id=${newLanguage.id}`)),
  //     catchError(this.handleError<Language>('addLanguage'))
  //   );
  // }

  // /** DELETE: delete the language from the server */
  // deleteLanguage (language: Language | number): Observable<Language> {
  //   const id = typeof language === 'number' ? language : language.id;
  //   const url = `${this.languagesUrl}/${id}`;

  //   return this.http.delete<Language>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted language id=${id}`)),
  //     catchError(this.handleError<Language>('deleteLanguage'))
  //   );
  // }

  // /** PUT: update the language on the server */
  // updateLanguage (language: Language): Observable<any> {
  //   return this.http.put(this.languagesUrl, language, httpOptions).pipe(
  //     tap(_ => this.log(`updated language id=${language.id}`)),
  //     catchError(this.handleError<any>('updateLanguage'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a LanguageService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LanguageWordService: ${message}`);
  }
}
