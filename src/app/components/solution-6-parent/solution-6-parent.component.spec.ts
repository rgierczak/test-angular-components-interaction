import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution6ParentComponent } from './solution-6-parent.component';

describe('Solution6ParentComponent', () => {
    let component: Solution6ParentComponent;
    let fixture: ComponentFixture<Solution6ParentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution6ParentComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution6ParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
