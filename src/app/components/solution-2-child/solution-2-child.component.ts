import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-solution-2-child',
    templateUrl: './solution-2-child.component.html',
    styleUrls: ['./solution-2-child.component.scss']
})
export class Solution2ChildComponent implements OnInit, OnChanges {
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
