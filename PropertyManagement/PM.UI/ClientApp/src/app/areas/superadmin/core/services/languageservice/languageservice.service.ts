import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';
import { ILanguage } from './language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageserviceService {

  [x: string]: any;

  private readonly URL = "SuperAdmin/api/Language/"

  constructor(private httpClient: HttpClient) { }

  public postLanguage(language: ILanguage): Observable<ILanguage> {
    return this.httpClient.post<ILanguage>(this.URL, language);
  }

 
  public deleteLanguage(id: number): Observable<ILanguage> {
    return this.httpClient.delete<ILanguage>(`${this.URL}/${id}`);
  }

  public getLanguageById(id: any): Observable<ILanguage> {
    return this.httpClient.get<ILanguage>(`${this.URL}/${id}`);
  }

  public getLanguageList(): Observable<Array<ILanguage>> {
    return this.httpClient.get<Array<ILanguage>>(this.URL);
  }

  public update(language: ILanguage): Observable<ILanguage> {
    return this.httpClient.put<ILanguage>(`${this.URL}/${language.languageId}`, language);
  }
}