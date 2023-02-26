import { Component } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent {

  openCloseModal(){
    document.getElementById('modal')?.classList.toggle('visivel')
  }

}
