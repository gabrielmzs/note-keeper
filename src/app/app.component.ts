import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: string = 'Digite alguma coisa';

  mostrarValor() {
    alert(this.valor);
  }
}
