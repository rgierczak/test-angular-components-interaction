import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    Solution4ParentComponent
} from './components/solution-4-parent/solution-4-parent.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/solution1'
    },
    {
        path: 'solution1',
        component: Solution1ParentComponent
    },
    {
        path: 'solution2',
        component: Solution2ParentComponent
    },
    {
        path: 'solution3',
        component: Solution3ParentComponent
    },
    {
        path: 'solution4',
        component: Solution4ParentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
