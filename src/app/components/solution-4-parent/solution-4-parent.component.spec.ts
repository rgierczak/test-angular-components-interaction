import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution4ParentComponent } from './solution-4-parent.component';

describe('Solution4ParentComponent', () => {
    let component: Solution4ParentComponent;
    let fixture: ComponentFixture<Solution4ParentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution4ParentComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution4ParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
