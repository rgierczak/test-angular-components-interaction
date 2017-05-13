import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-solution-1-parent',
    templateUrl: './solution-1-parent.component.html',
    styleUrls: ['./solution-1-parent.component.scss']
})
export class Solution1ParentComponent implements OnInit {
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
