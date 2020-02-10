import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarksFormComponent } from './student-marks-form.component';

describe('StudentMarksFormComponent', () => {
  let component: StudentMarksFormComponent;
  let fixture: ComponentFixture<StudentMarksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMarksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMarksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
