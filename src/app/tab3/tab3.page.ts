import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  private altura: string;
  private peso: string;
  private resultado: number;

  constructor() {}

  calculaImc(){
    this.resultado = parseFloat(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura));
  }

  exibeResultado(){
    return this.resultado;
  }

}
