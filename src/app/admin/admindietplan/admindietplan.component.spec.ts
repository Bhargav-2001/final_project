import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindietplanComponent } from './admindietplan.component';

describe('AdmindietplanComponent', () => {
  let component: AdmindietplanComponent;
  let fixture: ComponentFixture<AdmindietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindietplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
