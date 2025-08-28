import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private http: HttpClient) { }
// for login endpoint
  login(data: {email: string, password: string}): Observable<any> {
    console.log("[AuthenticateService] Login ..." + `${environment.authURL}/authenticate`);
    let res = this.http.post<any>(`${environment.authURL}/authenticate`, data);
    //console.log(res)
    return res.pipe(tap((data: any) => data), catchError(err => throwError(() => {console.log(data);return err;})))
  }

  // for register endpoint
  register(data: {email: string, password: string}):Observable<any> {
    return this.http.post<any>(
      `${environment.authURL}/register`, data).pipe(
      tap((data: any) => data),
      catchError(err => throwError(() => err))
    )
  }
}
