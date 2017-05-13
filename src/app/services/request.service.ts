import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const URL = 'assets/mock-movies.json';

@Injectable()
export class RequestService {

    constructor(private http: Http) {
    }

    fetchMovies(): Observable<Response> {
        return this.http.get(URL);
    }
}
