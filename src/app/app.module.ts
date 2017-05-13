import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { RequestService } from './services/request.service';

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

@NgModule({
    declarations: [
        AppComponent,
        Solution1ChildComponent,
        Solution2ChildComponent,
        Solution1ParentComponent,
        Solution2ParentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [RequestService],
    bootstrap: [AppComponent]
})
export class AppModule {}
