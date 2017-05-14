import {
    AfterViewInit,
    Component,
    OnInit,
    ViewChild
} from '@angular/core';

import {
    Solution4Child1Component
} from '../solution-4-child-1/solution-4-child-1.component';

interface Movie {
    title: string;
    year: string;
}

@Component({
    selector: 'app-solution-4-parent',
    templateUrl: './solution-4-parent.component.html',
    styleUrls: ['./solution-4-parent.component.scss']
})
export class Solution4ParentComponent implements OnInit, AfterViewInit {
    @ViewChild(Solution4Child1Component) child: Solution4Child1Component;

    parentMovies: Movie[] = [];

    constructor() {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.getMovies();
    }

    getMovies() {
        this.child
            .getMovies()
            .subscribe((response) => {
                this.parseMovies(response);
            });
    }

    parseMovies(movies) {
        movies.forEach((movie) => {
            this.parentMovies.push({
                title: 'title: ' + movie.title,
                year: 'year: ' + movie.year
            });
        });
    }
}
