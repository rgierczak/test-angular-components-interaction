import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution5ChildComponent } from './solution-5-child-1.component';

describe('Solution5ChildComponent', () => {
    let component: Solution5ChildComponent;
    let fixture: ComponentFixture<Solution5ChildComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution5ChildComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution5ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
