import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ReactionComponent } from './pages/verbal/reaction/reaction.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { SequenceComponent } from './pages/verbal/sequence/sequence.component';
import { AimComponent } from './pages/verbal/aim/aim.component';
import { NumberComponent } from './pages/verbal/number/number.component';
import { VerbalComponent } from './pages/verbal/verbal/verbal.component';
import { ChimpComponent } from './pages/verbal/chimp/chimp.component';
import { SignupComponent } from './log/signup/signup.component';
import { LoginComponent } from './log/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { LogoutComponent } from './log/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ReactionComponent,
    StatsComponent,
    AboutComponent,
    SequenceComponent,
    AimComponent,
    NumberComponent,
    VerbalComponent,
    ChimpComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    StartButtonComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyModule { }