import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionaireComponent } from './new-questionaire.component';

describe('NewQuestionaireComponent', () => {
  let component: NewQuestionaireComponent;
  let fixture: ComponentFixture<NewQuestionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewQuestionaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewQuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
