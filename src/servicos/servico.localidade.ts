import { Injectable } from "@angular/core";
import { Localidade } from "src/entidades/localidade";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicoLocalidade{
  private readonly URL = "https://viacep.com.br/ws/87703536/xml/";

  listaCep = new Array<Localidade>();
  localidade: Localidade = new Localidade();

  constructor(private http: HttpClient){

  }



}
