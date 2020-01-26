import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IArea } from './area.model';


@Injectable({
  providedIn: 'root'
})
export class AreaserviceService {

  private readonly URL = "SuperAdmin/api/area"

  constructor(private httpClient: HttpClient) { }

  public postArea(area: IArea): Observable<IArea> {
    return this.httpClient.post<IArea>(this.URL, area);
  }

 
  public deleteArea(id: number): Observable<IArea> {
    return this.httpClient.delete<IArea>(`${this.URL}/${id}`);
  }

  public getAreaById(id: any): Observable<IArea> {
    return this.httpClient.get<IArea>(`${this.URL}/${id}`);
  }

  public getAreaList(): Observable<Array<IArea>> {
    return this.httpClient.get<Array<IArea>>(this.URL);
  }

  public update(area: IArea): Observable<IArea> {
    return this.httpClient.put<IArea>(`${this.URL}/${area.areaId}`, area);
  }
}
