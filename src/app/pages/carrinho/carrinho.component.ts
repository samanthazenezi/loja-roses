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
    // let carrinho = localStorage.getItem(this.itens);
  }

}
