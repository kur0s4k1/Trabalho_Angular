import { Component } from "@angular/core";
import { ServicoCategoria } from "src/servicos/servico.categoria";

@Component({
    selector: 'categoria-component',
    templateUrl: 'categoria.component.html',
})
export class CategoriaComponent {
    
    servico: ServicoCategoria = new ServicoCategoria();


    adicionar(): void {
        this.servico.adicionar();
    }

    excluir(i: number): void {
        this.servico.excluir(i);
    }

    editar(i: number): void {
       this.servico.editar(i);

    }

}