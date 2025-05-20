import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { QuestionaireType } from './questionaire.model';
import { QuestionaireService } from './questionaires.service';
import { CrudComponent } from '@common/components/crud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionaires',
  imports: [CrudComponent],
  templateUrl: './questionaires.component.html',
  styleUrl: './questionaires.component.scss'
})
export class QuestionairesComponent {
  title: string = 'Gestión de cuestionarios'
  questionaires: Observable<QuestionaireType[]> = of([]);
  exclusions: string[] = ['id']

  constructor(private router: Router, private readonly questionaireService: QuestionaireService) {
    this.readAll();
  }

  readAll(): void {
    this.questionaires = this.questionaireService.readAll();
  }

  create(): void {
    this.router.navigate(['/admin/questionaires/new'], { queryParams: { scenery: 'create' } });
  }

  delete(questionaire: QuestionaireType): void {
    this.questionaireService.delete(questionaire.id)
      .subscribe(() => this.readAll());
  }

  edit(questionaire: QuestionaireType): void {
    this.router.navigate(['/admin/questionaires/', questionaire.id], { queryParams: { scenery: 'edit' } });
  }

}
