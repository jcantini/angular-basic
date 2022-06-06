import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 30

    // get es un apropiedad que cuando la llame se va a procesar
    get nombreCapitalizado(): string { //no es un metodo, es un getter, cuando lo llame no hay que ponerle ()
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 38;
    }
}