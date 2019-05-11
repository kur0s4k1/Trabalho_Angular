import { Component } from "@angular/core";
import { ServicoEstado } from "src/servicos/servico.estado";

@Component({
    selector: 'array-component',
    templateUrl: 'array.component.html'
})
export class ArrayComponent {

    servico: ServicoEstado  = new ServicoEstado();

    adicionar(): void {
        this.servico.adicionar();
    }

    excluir(i: number): void {
        this.servico.excluir(i);
    }

    alterar(i: number): void {
        this.servico.alterar(i);
    }

}



