import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { QualityComponent } from './quality/quality.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
// import { ProtfolioComponent } from './protfolio/protfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    QualityComponent,
    ExperianceComponent,
    ServicesComponent,
    ContactComponent,
    // ProtfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
