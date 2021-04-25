import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  nombre: string = "Jeff";

  mostrarNombre(){
    console.log(this.nombre);
  }
}
