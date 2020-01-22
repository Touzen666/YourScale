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
    CeleComponent

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
