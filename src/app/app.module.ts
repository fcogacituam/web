import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { InclusionComponent } from './inclusion/inclusion.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CirclesComponent } from './circles/circles.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';
import { UniversidadComponent } from './universidad/universidad.component';
import { AdmisionComponent } from './admision/admision.component';
import { ComunidadUohComponent } from './comunidad-uoh/comunidad-uoh.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { NoticiasYEventosComponent } from './noticias-y-eventos/noticias-y-eventos.component';
@NgModule({
  declarations: [
    AppComponent,
    InclusionComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CirclesComponent,
    MenuMobileComponent,
    InvestigacionComponent,
    UniversidadComponent,
    AdmisionComponent,
    ComunidadUohComponent,
    VinculacionComponent,
    NoticiasYEventosComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(fas,far);
  }
}
