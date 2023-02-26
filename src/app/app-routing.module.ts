import { EnderecoComponent } from './pages/endereco/endereco.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path:'endereco', component: EnderecoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
