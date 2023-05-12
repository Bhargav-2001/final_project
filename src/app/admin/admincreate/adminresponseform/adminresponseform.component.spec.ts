import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresponseformComponent } from './adminresponseform.component';

describe('AdminresponseformComponent', () => {
  let component: AdminresponseformComponent;
  let fixture: ComponentFixture<AdminresponseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminresponseformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminresponseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
