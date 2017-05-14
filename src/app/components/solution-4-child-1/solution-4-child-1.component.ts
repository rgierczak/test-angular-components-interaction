import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-solution-4-child-1',
    templateUrl: './solution-4-child-1.component.html',
    styleUrls: ['./solution-4-child-1.component.scss']
})
export class Solution4Child1Component implements OnInit {
    movies;
    constructor(private requestService: RequestService) {}

    ngOnInit() {
        this.getMovies().subscribe((response) => {
            this.movies = response;
        });
    }

    getMovies(): Observable<Response> {
        return this.requestService
            .fetchMovies()
            .map((response) => {
                return response.json();
            });
    }
}
