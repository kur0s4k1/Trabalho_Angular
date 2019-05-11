import { Estado } from "src/entidades/estado";
import { Injectable } from "@angular/core";

@Injectable()
export class ServicoEstado{
    
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
        this.listaEstados.splice(i, 1);
    }

}