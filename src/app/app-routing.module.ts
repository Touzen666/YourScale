import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RejestracjaComponent } from "./Rejestracja/rejestracja.component";
import { GlownaComponent } from "./Glowna/glowna.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { ProfilComponent } from "./Profil/profil.component";
import { CeleComponent } from "./Cele/cele.component";
import { WarzenieComponent } from "./Warzenie/warzenie.component";
import { PrzepisyComponent } from "./Przepisy/przepisy.component";
import { LodowkaComponent } from "./Lodowka/lodowka.component";
import { ListaComponent } from "./Lista/lista.component";
import { KontoComponent } from "./konto/konto.component";
import { UstawieniaComponent } from "./ustawienia/ustawienia.component";

const routes: Routes = [
  { path: "", component: GlownaComponent },
  { path: "rejestracja", component: RejestracjaComponent },
  { path: "kontakt", component: KontaktComponent },
  { path: "profil", component: ProfilComponent },
  { path: "cele", component: CeleComponent },
  { path: "warzenie", component: WarzenieComponent },
  { path: "przepisy", component: PrzepisyComponent },
  { path: "lodowka", component: LodowkaComponent },
  { path: "lista", component: ListaComponent },
  { path: "konto", component: KontoComponent },
  { path: "ustawienia", component: UstawieniaComponent }
];

@NgModule({
  declarations: [
    RejestracjaComponent,
    GlownaComponent,
    KontaktComponent,
    ProfilComponent,
    KontoComponent,
    UstawieniaComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
