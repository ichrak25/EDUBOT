import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // ✅ Ensure this is imported
import { FormationComponent } from './formation/formation.component';
import {RouterModule} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    FormationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardHeader,
    NgOptimizedImage,
// ✅ Make sure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
