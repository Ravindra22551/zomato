import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {path:'',component:CardsComponent},
  {path:'card/:id',component:CarddetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
