import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserInputComponent } from './user-input/user-input.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
