import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-solution-1-parent',
    templateUrl: './solution-1-parent.component.html',
    styleUrls: ['./solution-1-parent.component.scss']
})
export class Solution1ParentComponent implements OnInit {
    private parentMovies;

    constructor(private requestService: RequestService) {
    }

    ngOnInit() {
        this.requestService.fetchMovies()
            .subscribe((response) => {
                this.parentMovies = response.json();
            });
    }
}
