import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution3ParentComponent } from './solution-3-parent.component';

describe('Solution3ParentComponent', () => {
    let component: Solution3ParentComponent;
    let fixture: ComponentFixture<Solution3ParentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution3ParentComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution3ParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
