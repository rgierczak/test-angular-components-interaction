import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    routing: [Object] = [
        {
            link: '/solution1',
            text: 'Solution 1'
        }, {
            link: '/solution2',
            text: 'Solution 2'
        }];
}
