import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'modal', component: ModalComponent}

  
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
