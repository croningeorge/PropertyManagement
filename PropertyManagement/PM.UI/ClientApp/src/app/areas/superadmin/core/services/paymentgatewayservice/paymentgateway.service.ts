import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { IPaymentgateways } from './paymentgateway.model';
import { Observable } from 'rxjs';



@Injectable()
export class PaymentgatewayService {
  [x: string]: any;

  private readonly URL = "SuperAdmin/api/PaymentGateway/"

  constructor(private httpClient: HttpClient) { }

  public postPayment(payment: IPaymentgateways): Observable<IPaymentgateways> {
    return this.httpClient.post<IPaymentgateways>(this.URL, payment);
  }

 
  public deletePayment(id: number): Observable<IPaymentgateways> {
    return this.httpClient.delete<IPaymentgateways>(`${this.URL}/${id}`);
  }

  public getPaymentById(id: any): Observable<IPaymentgateways> {
    return this.httpClient.get<IPaymentgateways>(`${this.URL}/${id}`);
  }

  public getPaymentList(): Observable<Array<IPaymentgateways>> {
    return this.httpClient.get<Array<IPaymentgateways>>(this.URL);
  }

  public update(payment: IPaymentgateways): Observable<IPaymentgateways> {
    return this.httpClient.put<IPaymentgateways>(`${this.URL}/${payment.paymentId}`, payment);
  }
}

