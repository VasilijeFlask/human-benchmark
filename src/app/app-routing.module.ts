import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactionComponent } from './pages/verbal/reaction/reaction.component';
import { SequenceComponent } from './pages/verbal/sequence/sequence.component';
import { AimComponent } from './pages/verbal/aim/aim.component';
import { NumberComponent } from './pages/verbal/number/number.component';
import { VerbalComponent } from './pages/verbal/verbal/verbal.component';
import { ChimpComponent } from './pages/verbal/chimp/chimp.component';
import { SignupComponent } from './log/signup/signup.component';
import { LoginComponent } from './log/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './log/logout/logout.component';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'reaction', component: ReactionComponent},
  { path: 'sequence', component: SequenceComponent},
  { path: 'aim', component: AimComponent},
  { path: 'number', component: NumberComponent},
  { path: 'verbal', component: VerbalComponent},
  { path: 'chimp', component: ChimpComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'logout', component: LogoutComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
