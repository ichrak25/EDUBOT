import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';

const routes: Routes = [
  { path: 'formations', component: FormationComponent },
  { path: 'formation/:id', component: FormationDetailComponent }, // Route dynamique
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
