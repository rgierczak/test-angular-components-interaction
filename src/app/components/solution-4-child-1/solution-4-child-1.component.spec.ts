import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution4Child1Component } from './solution-4-child-1.component';

describe('Solution4ChildComponent', () => {
    let component: Solution4Child1Component;
    let fixture: ComponentFixture<Solution4Child1Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution4Child1Component]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution4Child1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
