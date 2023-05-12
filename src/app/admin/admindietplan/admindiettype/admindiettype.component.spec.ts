import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindiettypeComponent } from './admindiettype.component';

describe('AdmindiettypeComponent', () => {
  let component: AdmindiettypeComponent;
  let fixture: ComponentFixture<AdmindiettypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindiettypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindiettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
