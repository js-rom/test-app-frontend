import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WellcomeComponent } from './features/home/wellcome/wellcome.component';
import { AdminComponent } from './features/admin/admin.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home/wellcome' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'wellcome', component: WellcomeComponent }, // PUBLIC
        ]
    },
    {
        path: 'admin', component: AdminComponent,
        children: []
    }
];
