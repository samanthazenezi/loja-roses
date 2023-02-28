import { Component, Injectable } from '@angular/core';
import { Item } from 'src/app/model/item.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class HomeComponent {
  
  itens: Item[] = [];

  constructor() {}

  ngOnInit() {
    
  }

  addItemCarrinho(imagem: string, nome: string, preco: string){
    let produto: Item = {
      imagem: imagem,
      nome: nome,
      preco: preco
    }

    this.itens.push(produto);

    localStorage.setItem("produtos", JSON.stringify(this.itens));

  }

  openClose(){
    document.getElementById('dropdown')?.classList.toggle('visivel')
  }


  contador(itens){
    
    if(itens === 0){
      itens +1
    }
    
  }
  
}
