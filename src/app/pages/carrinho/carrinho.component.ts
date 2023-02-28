import { Component, Injectable } from '@angular/core';
import { Item } from 'src/app/model/item.model';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CarrinhoComponent {

  itens: Item[] = [];

  constructor() {}

  ngOnInit() {
    var produtos = localStorage.getItem("produtos");
    var produtosParsed: Item[] = JSON.parse(produtos);
    this.itens = produtosParsed;
  }

  removerProduto(nome: string){
   
    var produtos = localStorage.getItem("produtos");
    var produtosParsed: Item[] = JSON.parse(produtos);
    var index = produtosParsed.findIndex(item => item.nome === nome);
    produtosParsed.splice(index, 1);
    var novaListaString = JSON.stringify(produtosParsed);
    localStorage.setItem("produtos", novaListaString);

    window.location.reload();
  }

}
