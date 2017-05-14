import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-solution-5-child-1',
    templateUrl: './solution-5-child-1.component.html',
    styleUrls: ['./solution-5-child-1.component.scss']
})
export class Solution5ChildComponent implements OnInit {
    @Output() notify: EventEmitter<Response> = new EventEmitter<Response>();

    constructor(private requestService: RequestService) {}

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.requestService
            .fetchMovies()
            .subscribe((response) => {
                this.notify.emit(response.json());
            });
    }
}
