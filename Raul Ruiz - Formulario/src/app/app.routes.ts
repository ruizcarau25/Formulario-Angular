import { Routes } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { RegisterFormComponent } from './components/register-form/register-form';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'formulario', component: Formulario},
    {path: 'register', component: RegisterFormComponent},
    {path: '', pathMatch: 'full', redirectTo: '/register'},
    {path: '**', component: NotFoundPage}
];
