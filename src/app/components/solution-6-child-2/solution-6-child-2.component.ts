import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommunicationService } from '../../services/communication.service';

@Component({
    selector: 'app-solution-6-child-2',
    templateUrl: './solution-6-child-2.component.html',
    styleUrls: ['./solution-6-child-2.component.scss'],
})
export class Solution6Child2Component
    implements OnInit, OnDestroy, AfterViewInit {
    private subscription: Subscription;
    movies: Object;

    constructor(private communicationService: CommunicationService) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.addSubscription();
    }

    addSubscription() {
        this.subscription = this.communicationService
            .notifyObservable
            .subscribe((response) => {
                if (response.hasOwnProperty('data')) {
                    this.movies = response['data'];
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
