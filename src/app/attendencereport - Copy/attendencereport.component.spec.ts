import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendencereportComponent } from './attendencereport.component';

describe('AttendencereportComponent', () => {
  let component: AttendencereportComponent;
  let fixture: ComponentFixture<AttendencereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendencereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendencereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
