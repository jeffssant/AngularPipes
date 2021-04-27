import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string = 'Jeff';  
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino':'invirtalo',
    'feminino': 'invirtala'
  }


  //i18nPlural

  clientes:string[] = ['maria', 'Jeff'];

  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    'other':'tenemos # clientes eperando'
  }


}
