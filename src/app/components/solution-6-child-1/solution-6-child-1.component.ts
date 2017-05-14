import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-solution-6-child-1',
    templateUrl: './solution-6-child-1.component.html',
    styleUrls: ['./solution-6-child-1.component.scss']
})
export class Solution6Child1Component implements OnInit {
    constructor(private communicationService: CommunicationService,
                private requestService: RequestService) {}

    ngOnInit() {
        this.requestService
            .fetchMovies()
            .subscribe((response) => {
                this.notify(response.json());
            });
    }

    notify(data) {
        this.communicationService.notifyNext({data});
    }
}
