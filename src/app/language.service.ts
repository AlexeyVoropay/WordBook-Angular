import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Language } from './language';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
	
  private languagesUrl = 'api/languages';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET languages from the server */
  getLanguages(): Observable<Language[]> {
	  return this.http.get<Language[]>(this.languagesUrl)
  }  
  
  /** GET hero by id. Will 404 if id not found */
  getLanguage(id: number): Observable<Language> {
    const url = `${this.languagesUrl}/${id}`;
    return this.http.get<Language>(url).pipe(
      tap(_ => this.log(`fetched language id=${id}`))
	  ,catchError(this.handleError<Language>(`getLanguage id=${id}`)
	  )
    );
  }
  
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
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LanguageService: ${message}`);
  }
  
}