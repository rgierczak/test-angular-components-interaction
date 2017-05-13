import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-solution-3-child',
    templateUrl: './solution-3-child.component.html',
    styleUrls: ['./solution-3-child.component.scss']
})
export class Solution3ChildComponent implements OnInit {
    private movies = new BehaviorSubject<Object>([]);

    childMovies: Object;

    @Input()
    set moviesFromParent(value) {
        this.movies.next(value);
    };

    get moviesFromParent() {
        return this.movies.getValue();
    }

    constructor() {}

    ngOnInit() {
        this.movies.subscribe((response) => {
            this.childMovies = response;
        });
    }
}
