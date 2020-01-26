import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ICity } from './city.model';


@Injectable({
  providedIn: 'root'
})
export class CityserviceService {

  private readonly URL = "SuperAdmin/api/city"

  constructor(private httpClient: HttpClient) { }

  public postCity(city: ICity): Observable<ICity> {
    return this.httpClient.post<ICity>(this.URL, city);
  }

 
  public deleteCity(id: number): Observable<ICity> {
    return this.httpClient.delete<ICity>(`${this.URL}/${id}`);
  }

  public getCityById(id: any): Observable<ICity> {
    return this.httpClient.get<ICity>(`${this.URL}/${id}`);
  }

  public getCityList(): Observable<Array<ICity>> {
    return this.httpClient.get<Array<ICity>>(this.URL);
  }

  public update(city: ICity): Observable<ICity> {
    return this.httpClient.put<ICity>(`${this.URL}/${city.cityId}`, city);
  }
}
