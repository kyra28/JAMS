import 'rxjs';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;

    constructor(
        private http: HttpClient,
        private _configuration: Configuration) {
            this.actionUrl = _configuration.server;
        }

    public getAll<T>(path: string): Observable<T> {
        return this.http.get<T>(this.actionUrl+path);
    }

    public getSingle<T>(path: string): Observable<T> {
        return this.http.get<T>(this.actionUrl + path);
    }

    public add<T>(path: string, itemName: any): Observable<T> {
        // const toAdd = JSON.stringify({ ItemName: itemName });
        return this.http.post<T>(this.actionUrl+path, itemName);
    }

}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
