import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RejestracjaComponent } from './Rejestracja/rejestracja.component';
import { GlownaComponent } from './Glowna/glowna.component';


const routes: Routes = [
  { path: '', component: GlownaComponent },
  { path: 'rejestracja', component: RejestracjaComponent },
];

@NgModule({
  declarations: [
    RejestracjaComponent,
    GlownaComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
