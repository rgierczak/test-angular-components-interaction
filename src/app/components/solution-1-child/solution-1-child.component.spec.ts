import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1ChildComponent } from './solution-1-child.component';

describe('Solution1ChildComponent', () => {
    let component: Solution1ChildComponent;
    let fixture: ComponentFixture<Solution1ChildComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution1ChildComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution1ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
