import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution5ParentComponent } from './solution-5-parent.component';

describe('Solution5ParentComponent', () => {
    let component: Solution5ParentComponent;
    let fixture: ComponentFixture<Solution5ParentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution5ParentComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution5ParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
