import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},

  
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BudgetlistComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
