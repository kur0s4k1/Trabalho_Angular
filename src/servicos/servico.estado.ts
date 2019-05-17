import { Estado } from "src/entidades/estado";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";

@Injectable()
export class ServicoEstado{
    private readonly URL = "http://localhost:8080/ws/estado/";
    listaEstados = new Array<Estado>();
    estado: Estado = new Estado();

    constructor(private http: HttpClient) {

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

    buscar(){
        return this.http.get<Estado[]>(this.URL).pipe(take(1));
    }

}