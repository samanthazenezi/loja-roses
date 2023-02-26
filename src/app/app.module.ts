import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FluxoComponent } from './componentes/fluxo/fluxo.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CarrinhoComponent,
    FluxoComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
