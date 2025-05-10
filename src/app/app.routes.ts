import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WellcomeComponent } from './features/home/wellcome/wellcome.component';
import { AdminComponent } from './features/admin/admin.component';
import { QuestionaireComponent } from './features/admin/questionaire/questionaire.component';
import { NewQuestionaireComponent } from './features/admin/questionaire/new-questionaire/new-questionaire.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home/wellcome' },
    {
        path: 'home', loadComponent: () => import('./features/home/home.component')
            .then(component => component.HomeComponent),
        children: [
            { path: 'wellcome', component: WellcomeComponent }, // PUBLIC
        ]
    },
    {
        path: 'admin', loadComponent: () => import('./features/admin/admin.component')
        .then(component => component.AdminComponent),
        children: [
            { path: 'questionaires', component: QuestionaireComponent },
            { path: 'questionaires/new', component: NewQuestionaireComponent },
            { path: 'questionaires/:id', component: NewQuestionaireComponent }
        ]
    }
];
