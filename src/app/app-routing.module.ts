import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactionComponent } from './reaction/reaction.component';
import { SequenceComponent } from './sequence/sequence.component';
import { AimComponent } from './aim/aim.component';
import { NumberComponent } from './number/number.component';
import { VerbalComponent } from './verbal/verbal.component';
import { ChimpComponent } from './chimp/chimp.component';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'reaction', component: ReactionComponent},
  { path: 'sequence', component: SequenceComponent},
  { path: 'aim', component: AimComponent},
  { path: 'number', component: NumberComponent},
  { path: 'verbal', component: VerbalComponent},
  { path: 'chimp', component: ChimpComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
