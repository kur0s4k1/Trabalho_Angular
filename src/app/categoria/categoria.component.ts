import { Component, OnInit } from '@angular/core';
import { Categoria } from '../entidades/categoria';
import { Observable } from 'rxjs';
import { CategoriaService } from '../servicos/categoria.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();

  categorias$: Observable<Categoria[]>;

  salvar: boolean = true;
  
  categoriaForm = this.fb.group({
    nome: ['', [
      Validators.required,
      Validators.minLength(4)]],
    descricao:['',[
      Validators.required
    ]]
  })

  constructor(private servico: CategoriaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.atualizar();
  }
  atualizar(){
    this.categorias$ = this.servico.buscar();
  }
  adicionar(){
    if (this.salvar) {
      this.servico.adicionar(this.categoria).subscribe(
        ()=>{
          this.atualizar();
        }

      );
      
    } else {
      this.servico.alterar(this.categoria).subscribe(
        ()=>{
          this.atualizar();
        }
      );
    }
    this.categoria = new Categoria();
  }
  alterar(categoria: Categoria){
    this.categoria = categoria;
    this.salvar = false;
  }
  excluir(id: number): void {
    this.servico.excluir(id).subscribe(
      ()=>{
        this.atualizar();
      }
    );
  }

}
