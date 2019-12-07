import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LodowkaComponent } from './lodowka/lodowka.component';
import { PrzepisyComponent } from './przepisy/przepisy.component';
import { WarzenieComponent } from './warzenie/warzenie.component';
import { ListaComponent } from './Lista/lista.component';
import { GlownaComponent } from './Glowna/glowna.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CeleComponent } from './cele/cele.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { ProfilComponent } from './profil/profil.component';




@NgModule({
  declarations: [
    AppComponent,
    LodowkaComponent,
    PrzepisyComponent,
    WarzenieComponent,
    ListaComponent,
    GlownaComponent,
    NavbarComponent,
    FooterComponent,
    CeleComponent,
    RejestracjaComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
