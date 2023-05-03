import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ReactionComponent } from './reaction/reaction.component';
import { StatsComponent } from './stats/stats.component';
import { AboutComponent } from './about/about.component';
import { SequenceComponent } from './sequence/sequence.component';
import { AimComponent } from './aim/aim.component';
import { NumberComponent } from './number/number.component';
import { VerbalComponent } from './verbal/verbal.component';
import { ChimpComponent } from './chimp/chimp.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
