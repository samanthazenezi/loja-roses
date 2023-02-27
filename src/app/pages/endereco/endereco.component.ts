import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cep } from 'src/app/model/cep.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent {

  formEndereco = new FormGroup({
    cep: new FormControl('', [Validators.required]),
    rua: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required])
  });

  constructor( private httpClient: HttpClient ) { }

  ngOnInit(): void {}

  buscarCep(){
    let cep = this.formEndereco.controls.cep.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    this.httpClient.get<Cep>(url).subscribe( x => {
      this.formEndereco.controls.cep.setValue(x.cep)
      this.formEndereco.controls.bairro.setValue(x.bairro)
      this.formEndereco.controls.rua.setValue(x.logradouro)
      this.formEndereco.controls.cidade.setValue(x.localidade)
      this.formEndereco.controls.estado.setValue(x.uf)
    }, erro => {
      alert('Erro!')
      this.formEndereco.reset()
    })

  }

  
  // Modal

  openCloseModal(){
    document.getElementById('modal')?.classList.toggle('visivel')
    this.formEndereco.reset();
  }

}
