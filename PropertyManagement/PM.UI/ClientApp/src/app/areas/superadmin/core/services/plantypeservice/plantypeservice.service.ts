import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IPlanType } from './plantype.model';


@Injectable({
  providedIn: 'root'
})
export class PlantypeserviceService {


  private readonly URL = "SuperAdmin/api/plantype"

  constructor(private httpClient: HttpClient) { }

  public postPlantype(Plantype: IPlanType): Observable<IPlanType> {
    return this.httpClient.post<IPlanType>(this.URL, Plantype);
  }

 
  public deletePlantype(id: number): Observable<IPlanType> {
    return this.httpClient.delete<IPlanType>(`${this.URL}/${id}`);
  }

  public getPlantypeById(id: any): Observable<IPlanType> {
    return this.httpClient.get<IPlanType>(`${this.URL}/${id}`);
  }

  public getPlantypeList(): Observable<Array<IPlanType>> {
    return this.httpClient.get<Array<IPlanType>>(this.URL);
  }

  public update(plantype: IPlanType): Observable<IPlanType> {
    return this.httpClient.put<IPlanType>(`${this.URL}/${plantype.planId}`, plantype);
  }
}
