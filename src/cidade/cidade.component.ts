import { Component, OnInit } from "@angular/core";
import { Cidade } from "src/entidades/cidade";
import { Observable } from "rxjs";
import { ServicoCidade } from "src/servicos/servico.cidade";

@Component({
    selector: 'cidade-component',
    templateUrl: 'cidade.component.html'
})
export class CidadaComponent implements OnInit{
    
    cidade: Cidade = new Cidade();

    cidades$: Observable<Cidade[]>;
    salvar : boolean = true;

    constructor(private servico: ServicoCidade){

    }
    ngOnInit(){
        this.atualizar();
    }
    atualizar(){
        this.cidades$ = this.servico.procurar();
    }
    adicionar(): void{
        if(this.salvar){
            this.servico.adicionar(this.cidade).subscribe(() => {
                this.atualizar();
            });
        }else{
            this.servico.editar(this.cidade).subscribe();
        }
        this.cidade = new Cidade();
    }
    deletar(id: number): void{
        this.servico.deletar(id).subscribe(() =>{
            this.atualizar();
        });
    }
    procurar(cidade: Cidade): void{
        this.cidade = cidade;
        this.salvar = false;
    }
}