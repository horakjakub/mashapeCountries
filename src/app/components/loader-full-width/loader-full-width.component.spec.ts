import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoaderFullWidthComponent} from './loader-full-width.component';

describe('LoaderFullWidthComponent', () => {
    let component: LoaderFullWidthComponent;
    let fixture: ComponentFixture<LoaderFullWidthComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderFullWidthComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderFullWidthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
