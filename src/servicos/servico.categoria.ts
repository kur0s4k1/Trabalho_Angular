import { Categoria } from "src/entidades/categoria";

export class ServicoCategoria{
    
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