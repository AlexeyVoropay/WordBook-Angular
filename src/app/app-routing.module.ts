import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: LanguageDetailComponent },
  { path: 'languages', component: LanguagesComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
