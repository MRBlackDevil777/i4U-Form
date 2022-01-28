import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewforyouComponent } from './interviewforyou.component';

describe('InterviewforyouComponent', () => {
  let component: InterviewforyouComponent;
  let fixture: ComponentFixture<InterviewforyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewforyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
