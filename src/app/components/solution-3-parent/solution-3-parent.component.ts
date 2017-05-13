import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-solution-3-parent',
    templateUrl: './solution-3-parent.component.html',
    styleUrls: ['./solution-3-parent.component.scss']
})
export class Solution3ParentComponent implements OnInit {
    parentMovies: Object;
    constructor(private requestService: RequestService) {}

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.requestService.fetchMovies()
            .subscribe((response) => {
                this.parentMovies = response.json();
            });
    }
}
