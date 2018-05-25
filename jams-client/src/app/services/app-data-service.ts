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

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + '/' + id);
    }

    public add<T>(itemName: any): Observable<T> {
        // const toAdd = JSON.stringify({ ItemName: itemName });
        return this.http.post<T>(this.actionUrl, itemName);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }

    public serviceQuestion () {
        this.actionUrl += 'question/';
    }

    public serviceAnswer () {
        this.actionUrl += 'answer/';
    }

    public serviceUser () {
        this.actionUrl += 'user/';
    }

    public serviceQCM () {
        this.actionUrl += 'qcm/';
    }

  public serviceSession () {
    this.actionUrl += 'session/';
  }
  public serviceEtudiant () {
    this.actionUrl = 'http://localhost:5353/etudiant/all';
  }
  public serviceNew () {
    this.actionUrl = 'http://localhost:5353/etudiant/create';
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
