import { Cidade } from "src/entidades/cidade";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class ServicoCidade{

    private readonly URL = "http://localhost:8080/ws/cidade/";

    listaCidades = new Array<Cidade>(); //Crian uma lista para armazenar as cidades
    cidade: Cidade = new Cidade(); // Cria uma nova Cidade

    constructor(private http: HttpClient){

    }

    adicionar(cidade: Cidade){
        return this.http.post(this.URL, cidade).pipe(take(1));
    }
    deletar(id: number){
        return this.http.delete(this.URL+id).pipe(take(1));
    }
    editar(cidade: Cidade){
        return this.http.put(this.URL, cidade).pipe(take(1));
    }
    procurar(){
        return this.http.get<Cidade[]>(this.URL).pipe(take(1));
    }

}