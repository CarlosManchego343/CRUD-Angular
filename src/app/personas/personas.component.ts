import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
    deshabilitar = false;
    mensaje: string = "No se a agregado ninguna persona"
    titulo = "ingeniero"

    agregarPersona() {
        this.mensaje = "Persona agregada"
    }

    // modificarTitulo(event: Event) {
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}