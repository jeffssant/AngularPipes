import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'jeff';
  nombreUpper: string = 'JEFF';
  nombreCompleto: string = 'JefferSOn CoSTa';

  fecha: Date = new Date();
  
}
