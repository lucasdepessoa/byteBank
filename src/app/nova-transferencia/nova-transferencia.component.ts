import { Component, Output, EventEmitter } from "@angular/core";



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent {

  @Output() toTransfer = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  transferir() {
    console.log('Solicitada nova trasnferência');

    const valueEmit = { valor: this.valor, destino: this.destino };
    this.toTransfer.emit(valueEmit);

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
