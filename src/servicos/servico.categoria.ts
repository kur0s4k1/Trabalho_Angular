import { Injectable } from '@angular/core';
import { Categoria } from '../entidades/categoria';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoCategoria {

  private readonly URL = 'http://localhost:8080/ws/categoria/';

  listaCategoria = new Array<Categoria>();
  categoria: Categoria = new Categoria();

  constructor(private http: HttpClient) { }

  adicionar(categoria: Categoria){
    return this.http.post(this.URL, categoria).pipe(take(1));
  }
  excluir(id: number){
    return this.http.delete(this.URL+id).pipe(take(1));
  }
  editar(categoria: Categoria){
    return this.http.put(this.URL, categoria).pipe(take(1));
  }
  buscar(){
    return this.http.get<Categoria[]>(this.URL).pipe(take(1));
  }
}
