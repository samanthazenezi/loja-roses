import { Component } from '@angular/core';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  itens: Item[] = [];

  openClose(){
    document.getElementById('dropdown')?.classList.toggle('visivel')
  }

}
