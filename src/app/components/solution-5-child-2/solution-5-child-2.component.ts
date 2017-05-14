import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-solution-5-child-2',
    templateUrl: './solution-5-child-2.component.html',
    styleUrls: ['./solution-5-child-2.component.scss']
})
export class Solution5Child2Component implements OnInit, OnChanges {
    @Input()
    moviesFromParent: Object;
    childMovies: Object;

    constructor() {}

    ngOnInit() {}

    ngOnChanges() {
        this.childMovies = this.moviesFromParent;
    }
}
