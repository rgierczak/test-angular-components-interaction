import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution6Child1Component } from './solution-6-child-1.component';

describe('Solution6Child1Component', () => {
    let component: Solution6Child1Component;
    let fixture: ComponentFixture<Solution6Child1Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution6Child1Component]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution6Child1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
