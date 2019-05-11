import { Component } from "@angular/core";

@Component({
    selector: 'soma-componenet',
    templateUrl: 'soma.component.html',
})
export class SomaComponent {

    numero1: number = 0;
    numero2: number = 0;
    numero3: number = 0;
    numero4: number = 0;
    numero5: number = 0;
    reusltado: number = 0;

    // Somar
    soma(): void {
        this.reusltado = this.numero1 + this.numero2
        alert("a Soma Total é = " + this.reusltado)
    }

    // Verificar Par ou Impar
    par(): void {
        if (this.numero3 % 2 == 0) {
            alert("numero informado é Par");
        } else {
            alert("numero informado é Impar");
        }
    }

    // Verificar Positivo ou Negativo
    positivo(): void {
        // if (Number(this.numero4) >= 0) {
        //     alert("Numero Positivo");
        // }else{
        //     alert("Numero Negativo");
        // }
        let resultado: string = 'O numero informado e Positivo';
        if (Number(this.numero4) < 0) {
            resultado = 'O numero informado e Negativo';
        }
        alert(resultado);
    }

     parPositivo() : void {
         if(this.numero5 % 2 == 0 && this.numero5 >= 0){
            alert('Este Numero é um Par e Positivo');
         }else{
             alert('Este Numero não é um Par ou Positivo');
         }
     }

}