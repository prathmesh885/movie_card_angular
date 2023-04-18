import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FrontCardComponent } from './shared/components/front-card/front-card.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'frontCard/:id', component: FrontCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

