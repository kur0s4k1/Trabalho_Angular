import { Component, OnInit } from "@angular/core";
import { ServicoCategoria } from "src/servicos/servico.categoria";
import { Categoria } from "src/entidades/categoria";
import { Observable } from "rxjs";

@Component({
    selector: 'categoria-component',
    templateUrl: 'categoria.component.html',
})
export class CategoriaComponent implements OnInit{
    
    categoria: Categoria = new Categoria();

    categorias$: Observable<Categoria[]>;
    salvar : boolean = true;

    constructor(private servico: ServicoCategoria){

    }
    ngOnInit(){
        this.atualizar();
    }
    atualizar(){
        this.categorias$ = this.servico.buscar();
    }

    adicionar(): void {
        if(this.salvar){
            this.servico.adicionar(this.categoria).subscribe(() =>{
                this.atualizar();
            });
             
        }else{
            this.servico.editar(this.categoria).subscribe();
        }
        this.categoria = new Categoria();
    }

    excluir(id: number): void {
        this.servico.excluir(id).subscribe(() =>{
            this.atualizar();
        });
    }

    editar(categoria: Categoria): void {
        this.categoria = categoria;
        this.salvar = false;
    }


}