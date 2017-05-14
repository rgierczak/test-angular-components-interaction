import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution5Child2Component } from './solution-5-child-2.component';

describe('Solution5Child2Component', () => {
    let component: Solution5Child2Component;
    let fixture: ComponentFixture<Solution5Child2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution5Child2Component]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution5Child2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
