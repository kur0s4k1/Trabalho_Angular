import { Component } from "@angular/core";
import { Estado } from "src/entidades/estado";

@Component({
    selector: 'array-component',
    templateUrl: 'array.component.html'
})
export class ArrayComponent {
    // Formas para se trabalhar com Array no TypeScrip

    listaEstados = new Array<Estado>();
    estado: Estado = new Estado();

    constructor() {

    }

    adicionar(): void {
        this.listaEstados.push(this.estado);
        this.estado = new Estado();
    }

    excluir(i: number): void {
        this.listaEstados.splice(i, 1);
    }

    alterar(i: number): void {
        this.estado = this.listaEstados[i];
        this.estado = this.listaEstados[i];
        this.listaEstados.splice(i, 1);
    }

}



