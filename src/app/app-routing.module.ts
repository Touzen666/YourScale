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
import { DodajPrzepisComponent } from "./dodaj-przepis/dodaj-przepis.component";
import { DodajListeComponent } from "./dodaj-liste/dodaj-liste.component";
import { ZaplanujDieteComponent } from "./zaplanuj-diete/zaplanuj-diete.component";
import { SubskrybujComponent } from "./subskrybuj/subskrybuj.component";
import { PolitykaComponent } from "./polityka/polityka.component";
import { CookiesComponent } from "./cookies/cookies.component";
import { EmailBoxComponent } from "./email-box/email-box.component";
import { ListaUzytkownikaComponent } from './lista-uzytkownika/lista-uzytkownika.component';
import { ZalogujComponent } from './zaloguj/zaloguj.component';

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
  { path: "ustawienia", component: UstawieniaComponent },
  { path: "dodajPrzepis", component: DodajPrzepisComponent },
  { path: "dodajListe", component: DodajListeComponent },
  { path: "zaplanujDiete", component: ZaplanujDieteComponent },
  { path: "subskrybuj", component: SubskrybujComponent },
  { path: "politykaPrywatnosci", component: PolitykaComponent },
  { path: "plikiCookies", component: CookiesComponent },
  { path: "emailBox", component: EmailBoxComponent },
  { path: "listaUzytkownika", component: ListaUzytkownikaComponent },
  { path: "zaloguj", component: ZalogujComponent }
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
export class AppRoutingModule { }
