import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionsComponent } from './positions/positions.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path: 'accounts/:id', component: OverviewComponent},
  {path: 'accounts', component: OverviewComponent},
  {path: '', redirectTo: '/accounts', pathMatch: 'full'}
 // {path: '**', component: PositionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
