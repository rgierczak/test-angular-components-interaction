import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution2ChildComponent } from './solution-2-child.component';

describe('Solution2ChildComponent', () => {
    let component: Solution2ChildComponent;
    let fixture: ComponentFixture<Solution2ChildComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [Solution2ChildComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Solution2ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
