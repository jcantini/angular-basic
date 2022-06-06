import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Batman']
  heroeBorrado:string = '';

  borrarHeroe() {
    this.heroeBorrado  = this.heroes.shift() || ''; // Si el shift me da undefined, le asigno un string vacio
  }
}
