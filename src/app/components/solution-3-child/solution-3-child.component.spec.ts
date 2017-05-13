import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution3ChildComponent } from './solution-3-child.component';

describe('Solution3ChildComponent', () => {
    let component: Solution3ChildComponent;
    let fixture: ComponentFixture<Solution3ChildComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution3ChildComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution3ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
