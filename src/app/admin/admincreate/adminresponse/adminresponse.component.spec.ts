import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresponseComponent } from './adminresponse.component';

describe('AdminresponseComponent', () => {
  let component: AdminresponseComponent;
  let fixture: ComponentFixture<AdminresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
