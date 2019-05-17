import { Component, OnInit } from "@angular/core";
import { ServicoEstado } from "src/servicos/servico.estado";
import { Estado } from "src/entidades/estado";
import { Observable } from "rxjs";

@Component({
    selector: 'array-component',
    templateUrl: 'array.component.html'
})
export class ArrayComponent implements OnInit{
    
    // Serviço $
    estados$: Observable <Estado[]>;

    // private servico: ServicoEstado; //Atributo parametro

    constructor(private servico: ServicoEstado){ 
        
    }
    ngOnInit(){
        this.estados$ = this.servico.buscar();
    }

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



