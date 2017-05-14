import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution4Child2Component } from './solution-4-child-2.component';

describe('Solution4Child2Component', () => {
    let component: Solution4Child2Component;
    let fixture: ComponentFixture<Solution4Child2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution4Child2Component]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution4Child2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
