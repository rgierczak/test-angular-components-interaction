import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-solution-2-parent',
    templateUrl: './solution-2-parent.component.html',
    styleUrls: ['./solution-2-parent.component.scss']
})
export class Solution2ParentComponent implements OnInit {
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
