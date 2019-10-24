import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubscription } from './subscripiton.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionplanService {

  [x: string]: any;

  private readonly URL = "SuperAdmin/api/SubscriptionPlan/"

  constructor(private httpClient: HttpClient) { }

  public postSubscription(subscripiton: ISubscription): Observable<ISubscription> {
    return this.httpClient.post<ISubscription>(this.URL, subscripiton);
  }
  public deleteSubscription(id: number): Observable<ISubscription> {
    return this.httpClient.delete<ISubscription>(`${this.URL}/${id}`);
  }
  public getSubscriptionById(id: any): Observable<ISubscription> {
    return this.httpClient.get<ISubscription>(`${this.URL}/${id}`);
  }
  public getSubscriptionList(): Observable<Array<ISubscription>> {
    return this.httpClient.get<Array<ISubscription>>(this.URL);
  }
  public update(subscripiton: ISubscription): Observable<ISubscription> {
    return this.httpClient.put<ISubscription>(`${this.URL}/${subscripiton.planId}`, subscripiton);
  }
}

