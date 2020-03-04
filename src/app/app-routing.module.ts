import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionsComponent } from './positions/positions.component';

const routes: Routes = [
  {path: 'user/:id', component: PositionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
