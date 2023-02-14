import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { QualityComponent } from './quality/quality.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"home",component:HomeComponent},
  { path:"profile",component:ProfileComponent},
  { path:"experiance",component:ExperianceComponent},
  { path:"contact",component:ContactComponent},
  { path:"skill",component:ServicesComponent},
  { path:"education",component:QualityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
