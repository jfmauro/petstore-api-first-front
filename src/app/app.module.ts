import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
