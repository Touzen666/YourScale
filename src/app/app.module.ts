import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LodowkaComponent } from "./Lodowka/lodowka.component";
import { PrzepisyComponent } from "./Przepisy/przepisy.component";
import { WarzenieComponent } from "./Warzenie/warzenie.component";
import { ListaComponent } from "./Lista/lista.component";
import { GlownaComponent } from "./Glowna/glowna.component";
import { NavbarComponent } from "./Navbar/navbar.component";
import { FooterComponent } from "./Footer/footer.component";
import { CeleComponent } from "./Cele/cele.component";
import { RejestracjaComponent } from "./Rejestracja/rejestracja.component";
import { ProfilComponent } from "./Profil/profil.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { KontoComponent } from "./konto/konto.component";
import { UstawieniaComponent } from "./ustawienia/ustawienia.component";
import { DodajPrzepisComponent } from "./dodaj-przepis/dodaj-przepis.component";
import { DodajListeComponent } from "./dodaj-liste/dodaj-liste.component";
import { ZaplanujDieteComponent } from "./zaplanuj-diete/zaplanuj-diete.component";
import { SubskrybujComponent } from "./subskrybuj/subskrybuj.component";
import { PolitykaComponent } from "./polityka/polityka.component";
import { CookiesComponent } from "./cookies/cookies.component";
import { EmailBoxComponent } from './email-box/email-box.component';
import { ListaUzytkownikaComponent } from './lista-uzytkownika/lista-uzytkownika.component';
import { ZalogujComponent } from './zaloguj/zaloguj.component';

@NgModule({
  declarations: [
    AppComponent,
    LodowkaComponent,
    PrzepisyComponent,
    WarzenieComponent,
    ListaComponent,
    // GlownaComponent,
    NavbarComponent,
    FooterComponent,
    CeleComponent,
    DodajPrzepisComponent,
    DodajListeComponent,
    ZaplanujDieteComponent,
    SubskrybujComponent,
    PolitykaComponent,
    CookiesComponent,
    EmailBoxComponent,
    ListaUzytkownikaComponent,
    ZalogujComponent

    // UstawieniaComponent,
    // KontoComponent
    // RejestracjaComponent,
    // ProfilComponent,
    // KontaktComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
