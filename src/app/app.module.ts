import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RequestService } from './services/request.service';
import { CommunicationService } from './services/communication.service';

import { AppComponent } from './app.component';
import {
    Solution1ChildComponent
} from './components/solution-1-child/solution-1-child.component';
import {
    Solution2ChildComponent
} from './components/solution-2-child/solution-2-child.component';
import {
    Solution1ParentComponent
} from './components/solution-1-parent/solution-1-parent.component';
import {
    Solution2ParentComponent
} from './components/solution-2-parent/solution-2-parent.component';
import {
    Solution3ParentComponent
} from './components/solution-3-parent/solution-3-parent.component';
import {
    Solution3ChildComponent
} from './components/solution-3-child/solution-3-child.component';
import {
    Solution4Child1Component
} from './components/solution-4-child-1/solution-4-child-1.component';
import {
    Solution4ParentComponent
} from './components/solution-4-parent/solution-4-parent.component';
import {
    Solution4Child2Component
} from './components/solution-4-child-2/solution-4-child-2.component';
import {
    Solution5ParentComponent
} from './components/solution-5-parent/solution-5-parent.component';
import {
    Solution5ChildComponent
} from './components/solution-5-child-1/solution-5-child-1.component';
import {
    Solution5Child2Component
} from './components/solution-5-child-2/solution-5-child-2.component';
import {
    Solution6ParentComponent
} from './components/solution-6-parent/solution-6-parent.component';
import {
    Solution6Child2Component
} from './components/solution-6-child-2/solution-6-child-2.component';
import {
    Solution6Child1Component
} from './components/solution-6-child-1/solution-6-child-1.component';

@NgModule({
    declarations: [
        AppComponent,
        Solution1ChildComponent,
        Solution2ChildComponent,
        Solution1ParentComponent,
        Solution2ParentComponent,
        Solution3ParentComponent,
        Solution3ChildComponent,
        Solution4ParentComponent,
        Solution4Child1Component,
        Solution4Child2Component,
        Solution5ParentComponent,
        Solution5ChildComponent,
        Solution5Child2Component,
        Solution6ParentComponent,
        Solution6Child2Component,
        Solution6Child1Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        RequestService,
        CommunicationService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
