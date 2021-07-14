import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonInputComponent } from './person/person-input.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PersonComponent, PersonInputComponent],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
