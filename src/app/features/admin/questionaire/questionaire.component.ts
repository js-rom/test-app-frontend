import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionaire } from './questionaire.model';
import { QuestionaireService } from './questionaire.service';
import { CrudComponent } from '@common/components/crud.component';

@Component({
  selector: 'app-questionaire',
  imports: [CrudComponent],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})
export class QuestionaireComponent {
  title : string = 'Gestión de cuestionarios'
  questionaires : Observable<Questionaire[]> = of([]);

  constructor(private readonly questionaireService: QuestionaireService){
    this.questionaires = questionaireService.readAll();
  }

  update(questionaire : Questionaire) {
    console.log(questionaire);
  }

}
