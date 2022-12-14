import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProgramsLayoutComponent } from './layouts/new-programs-layout/new-programs-layout.component';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProgramsLayoutComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
