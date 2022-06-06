import { CommonModule } from '@angular/common';
import { NgModule }   from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ //Defino los componentes que tiene este modulo
        HeroeComponent,
        ListadoComponent
    ], 
    exports: [ // Aca indico que cosas quiero hacer visible afuera de este modulo
        ListadoComponent
    ],
    imports: [ // Van modulos que necesito importar
        CommonModule // Modulo necesario para usar directivas como por ej ngfor, etc
    ]
})
export class HeroesModule {

}