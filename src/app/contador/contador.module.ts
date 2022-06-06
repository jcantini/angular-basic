import { CommonModule } from '@angular/common';
import { NgModule }   from '@angular/core'
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations: [ //Defino los componentes que tiene este modulo
        ContadorComponent
    ], 
    exports: [ // Aca indico que cosas quiero hacer visible afuera de este modulo
        ContadorComponent
    ],
    imports: [ // Van modulos que necesito importar
        CommonModule // Modulo necesario para usar directivas como por ej ngfor, etc
    ]
})
export class ContadorModule {

}