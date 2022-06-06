import { Component} from '@angular/core'

// Creo un componente que se encarga de crear un contador y lo puedo usar desde cualquier otro componente
// En el decorador uso template en lugar de templateurl porque voy a poner el html en este componente
@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }}</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <button (click)="acumular(base)"> + {{base}}</button>

        <span>{{ numero }}</span>

        <button (click)="acumular(-base)"> - {{base}}</button> 
    `
})

export class ContadorComponent {
        title : string = 'Contador app';
        numero: number = 10;
        base  : number = 5;
      
        acumular( valor: number) {
          this.numero += valor;
        }
}