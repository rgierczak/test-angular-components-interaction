import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-solution-5-parent',
    templateUrl: './solution-5-parent.component.html',
    styleUrls: ['./solution-5-parent.component.scss']
})
export class Solution5ParentComponent implements OnInit {
    childMovies: Object;
    constructor() {}

    ngOnInit() {}

    onNotify(payload) {
        this.childMovies = payload;
    }
}
