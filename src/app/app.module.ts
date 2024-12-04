import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import{HttpClientModule} from '@angular/common/http';
import { CarddetailsComponent } from './carddetails/carddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
