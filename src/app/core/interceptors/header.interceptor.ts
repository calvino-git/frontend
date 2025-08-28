import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization = localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '';
    //console.log("Authorization : " + Authorization  + " for " + httpRequest.url);
    if (httpRequest.url.includes('api/v1'))
      return next.handle(httpRequest.clone({setHeaders: {Authorization}}));
    else
      return next.handle(httpRequest);
  }
}
