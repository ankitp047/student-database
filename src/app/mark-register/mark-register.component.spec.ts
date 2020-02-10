import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkRegisterComponent } from './mark-register.component';

describe('MarkRegisterComponent', () => {
  let component: MarkRegisterComponent;
  let fixture: ComponentFixture<MarkRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
