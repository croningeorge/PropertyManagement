import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ICountry } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  private readonly URL = "SuperAdmin/api/country"

  constructor(private httpClient: HttpClient) { }

  public postCountry(country: ICountry): Observable<ICountry> {
    return this.httpClient.post<ICountry>(this.URL, country);
  }

 
  public deleteCountry(id: number): Observable<ICountry> {
    return this.httpClient.delete<ICountry>(`${this.URL}/${id}`);
  }

  public getCountryById(id: any): Observable<ICountry> {
    return this.httpClient.get<ICountry>(`${this.URL}/${id}`);
  }

  public getCountryList(): Observable<Array<ICountry>> {
    return this.httpClient.get<Array<ICountry>>(this.URL);
  }

  public update(country: ICountry): Observable<ICountry> {
    return this.httpClient.put<ICountry>(`${this.URL}/${country.countryId}`, country);
  }
}

