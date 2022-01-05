import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
