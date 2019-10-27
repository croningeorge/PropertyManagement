import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IUsers } from './usermodel';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  [x: string]: any;

  private readonly URL = "SuperAdmin/api/Users"

  constructor(private httpClient: HttpClient) { }

  public postUsers(users: IUsers): Observable<IUsers> {
    return this.httpClient.post<IUsers>(this.URL, users);
  }

 
  public deleteUsers(id: number): Observable<IUsers> {
    return this.httpClient.delete<IUsers>(`${this.URL}/${id}`);
  }

  public getUsersById(id: any): Observable<IUsers> {
    return this.httpClient.get<IUsers>(`${this.URL}/${id}`);
  }

  public getUsersList(): Observable<Array<IUsers>> {
    return this.httpClient.get<Array<IUsers>>(this.URL);
  }

  // public update(users: IUsers): Observable<IUsers> {
  //   return this.httpClient.put<IUsers>(`${this.URL}/${users.UsersId}`, Users);
  // }
}
