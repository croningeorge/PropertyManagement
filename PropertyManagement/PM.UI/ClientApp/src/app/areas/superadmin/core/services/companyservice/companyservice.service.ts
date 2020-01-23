import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ICompany } from './company.module';



@Injectable()
export class CompanyService {
  [x: string]: any;

  private readonly URL = "SuperAdmin/api/Company/"

  constructor(private httpClient: HttpClient) { }

  public postcompany(company: ICompany): Observable<ICompany> {
    return this.httpClient.post<ICompany>(this.URL, company);
  }

 
  public deletecompany(id: number): Observable<ICompany> {
    return this.httpClient.delete<ICompany>(`${this.URL}/${id}`);
  }

  public getcompanyById(id: any): Observable<ICompany> {
    return this.httpClient.get<ICompany>(`${this.URL}/${id}`);
  }

  public getcompanyList(): Observable<Array<ICompany>> {
    return this.httpClient.get<Array<ICompany>>(this.URL);
  }

  public update(company: ICompany): Observable<ICompany> {
    return this.httpClient.put<ICompany>(`${this.URL}/${company.companyId}`, company);
  }
}

