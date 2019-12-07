import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PrzepisyComponent } from './Przepisy/przepisy.component';
// import { LodowkaComponent } from './Lodowka/lodowka.component';
// import { ZakupyComponent } from './zakupy/zakupy.component';
import { RejestracjaComponent } from './Rejestracja/rejestracja.component';


const routes: Routes = [
  { path: '', component: RejestracjaComponent },
  // { path: 'Lodowka', Component: LodowkaComponent }
  // // { path: 'Zakupy', Component: ZakupyComponent }
];

@NgModule({
  declarations: [
    RejestracjaComponent,
    RejestracjaComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
