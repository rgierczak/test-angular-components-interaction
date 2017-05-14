import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution6Child2Component } from './solution-6-child-2.component';

describe('Solution6Child2Component', () => {
    let component: Solution6Child2Component;
    let fixture: ComponentFixture<Solution6Child2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution6Child2Component]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution6Child2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
