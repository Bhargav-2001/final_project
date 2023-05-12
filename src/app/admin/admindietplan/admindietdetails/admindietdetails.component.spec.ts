import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindietdetailsComponent } from './admindietdetails.component';

describe('AdmindietdetailsComponent', () => {
  let component: AdmindietdetailsComponent;
  let fixture: ComponentFixture<AdmindietdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindietdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindietdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
