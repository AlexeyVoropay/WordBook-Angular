import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ConversionPair } from './conversionPair';
import { MessageService } from './message.service';

import * as globalConstants from './constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ConversionPairService {

  private conversionsUrl = globalConstants.apiHost + 'conversions';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET conversionPairs from the server */
  getConversionPairs (conversionId: number): Observable<ConversionPair[]> {
    const url = `${this.conversionsUrl}/${conversionId}/pairs`;
    return this.http.get<ConversionPair[]>(url)
      .pipe(
        tap(_ => this.log('fetched conversionPairs')),
        catchError(this.handleError<ConversionPair[]>('getConversionPairs', []))
      );
  }

  /** POST: add a new language to the server */
  addConversionPair (conversionPair: ConversionPair): Observable<ConversionPair> {
    const url = `${this.conversionsUrl}/${conversionPair.conversionId}/pairs`;
    return this.http.post<ConversionPair>(url, conversionPair, httpOptions).pipe(
      tap((newConversionPair: ConversionPair) => this.log(`added conversionPair w/ id=${newConversionPair.id}`)),
      catchError(this.handleError<ConversionPair>('addConversionPair'))
    );
  }

  /** DELETE: delete the language from the server */
  deleteConversionPair (conversionPair: ConversionPair): Observable<ConversionPair> {
    const id = conversionPair.id;
    const url = `${this.conversionsUrl}/${conversionPair.conversionId}/pairs/${id}`;
    return this.http.delete<ConversionPair>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted conversionPair id=${id}`)),
      catchError(this.handleError<ConversionPair>('deleteConversionPair'))
    );
  }

  // /** GET conversion by id. Will 404 if id not found */
  // getConversion(id: number): Observable<Conversion> {
  //   const url = `${this.conversionsUrl}/${id}`;
  //   return this.http.get<Conversion>(url).pipe(
  //     tap(_ => this.log(`fetched conversion id=${id}`)),
  //     catchError(this.handleError<Conversion>(`getConversion id=${id}`))
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

  /** Log a ConversionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ConversionService: ${message}`);
  }
}