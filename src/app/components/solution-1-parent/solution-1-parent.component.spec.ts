import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1ParentComponent } from './solution-1-parent.component';

describe('Solution1ParentComponent', () => {
    let component: Solution1ParentComponent;
    let fixture: ComponentFixture<Solution1ParentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution1ParentComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution1ParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
