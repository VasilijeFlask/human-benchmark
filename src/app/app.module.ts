import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ReactionTimeComponent } from './tests/reaction-time/reaction-time.component';
import { SequenceMemoryComponent } from './tests/sequence-memory/sequence-memory.component';
import { AimTrainerComponent } from './tests/aim-trainer/aim-trainer.component';
import { NumberMemoryComponent } from './tests/number-memory/number-memory.component';
import { VerbalMemoryComponent } from './tests/verbal-memory/verbal-memory.component';
import { ChimpTestComponent } from './tests/chimp-test/chimp-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ReactionTimeComponent,
    SequenceMemoryComponent,
    AimTrainerComponent,
    NumberMemoryComponent,
    VerbalMemoryComponent,
    ChimpTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
