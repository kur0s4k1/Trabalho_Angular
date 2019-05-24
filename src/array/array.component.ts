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
    
    estado: Estado = new Estado();

    estados$: Observable<Estado[]>;
    salvar : boolean = true;
    // private servico: ServicoEstado; //Atributo parametro

    constructor(private servico: ServicoEstado){ 
        
    }
    ngOnInit(){
        this.atualizar();
    }
    atualizar(){
        this.estados$ = this.servico.buscar();
    }
    adicionar(): void {
        if(this.salvar){
            this.servico.adicionar(this.estado).subscribe(() =>{
                this.atualizar();
            });
             
        }else{
            this.servico.alterar(this.estado).subscribe();
        }
        this.estado = new Estado();
    }
    excluir(id: number): void {
        this.servico.excluir(id).subscribe(() =>{
            this.atualizar();
        });
        
    }

    alterar(estado: Estado): void {
        this.estado = estado;
        this.salvar = false;
    }

}



