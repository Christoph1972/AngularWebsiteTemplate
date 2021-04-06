import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactComponent } from './contact/contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent, children: [
      { path: 'contactform', component: ContactFormComponent },
      { path: 'map', component: MapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
