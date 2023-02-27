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
  
  itens: Item[] 

  constructor() {}

  ngOnInit() {
    
  }

  addItemCarrinho(){
    
  }
  
}
