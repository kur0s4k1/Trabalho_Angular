import { Component, OnInit } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servicos/servico.estado';
import { Observable } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'vetor-component'
  , templateUrl: 'vetores.component.html'
  , styleUrls: ['vetores.component.html']
})
export class VetoresComponent implements OnInit {

  estado: Estado = new Estado();

  estados$: Observable<Estado[]>;

  salvar: boolean = true;

  constructor(private servico: ServicoEstado) {

  }

  ngOnInit() {
    this.atualizar();
    
  }
  atualizar() {
    this.estados$ = this.servico.buscar();
  }
  adicionar(): void {
    if (this.salvar) {
      this.servico.adicionar(this.estado).subscribe(
        ()=>{
          this.atualizar();
        }

      );
      
    } else {
      this.servico.alterar(this.estado).subscribe(
        ()=>{
          this.atualizar();
        }
      );
    }
    this.estado = new Estado();
  }

  excluir(id: number): void {
    this.servico.excluir(id).subscribe(
      ()=>{
        this.atualizar();
      }
    );
  }

  alterar(estado: Estado): void {
    this.estado = estado;
    this.salvar = false;
  }

}