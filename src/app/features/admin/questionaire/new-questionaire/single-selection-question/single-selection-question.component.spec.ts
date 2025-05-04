import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionQuestionComponent } from './single-selection-question.component';

describe('SingleSelectionQuestionComponent', () => {
  let component: SingleSelectionQuestionComponent;
  let fixture: ComponentFixture<SingleSelectionQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSelectionQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSelectionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
