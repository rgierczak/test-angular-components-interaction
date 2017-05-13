import {
    Component,
    Input,
    OnChanges,
    OnInit
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

    ngOnChanges() {
        this.childMovies = this.moviesFromParent;
    }
}
