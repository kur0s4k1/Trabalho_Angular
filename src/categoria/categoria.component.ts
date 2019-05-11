import { Component } from "@angular/core";
import { Categoria } from "src/entidades/categoria";

@Component({
    selector: 'categoria-component',
    templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
    listaCategoria = new Array<Categoria>();
    categoria: Categoria = new Categoria();


    adicionar(): void {
        this.listaCategoria.push(this.categoria);
        this.categoria = new Categoria();
    }

    excluir(i: number): void {
        this.listaCategoria.splice(i, 1);
    }

    editar(i: number): void {
       this.categoria = this.listaCategoria[i];
       this.listaCategoria.splice(i, 1);

    }

}