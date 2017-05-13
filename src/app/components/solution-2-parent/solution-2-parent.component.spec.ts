import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution2ParentComponent } from './solution-2-parent.component';

describe('Solution2ParentComponent', () => {
    let component: Solution2ParentComponent;
    let fixture: ComponentFixture<Solution2ParentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution2ParentComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution2ParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
