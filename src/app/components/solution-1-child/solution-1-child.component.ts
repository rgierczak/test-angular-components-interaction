import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-solution-1-child',
    templateUrl: './solution-1-child.component.html',
    styleUrls: ['./solution-1-child.component.scss']
})
export class Solution1ChildComponent implements OnInit, OnChanges {
    @Input()
    moviesFromParent: Object;
    childMovies: Object;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        const isDataReceived = changes.moviesFromParent.currentValue;
        // const isDataReceived = !changes.moviesFromParent.isFirstChange();
        // const isDataReceived = this.moviesFromParent;

        if (isDataReceived) {
            this.childMovies = this.moviesFromParent;
        }
    }
}
