import { Component, Output, EventEmitter } from "@angular/core";



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent {

  @Output() saidaComponentNovaTransferencia = new EventEmitter<any>();

  valorComponentNovaTransferencia: number | undefined;
  destinoComponentNovaTransferencia: number | undefined;

  trasnferindoComponentNovaTransferencia() {
    console.log('Solicitada nova trasnferência');

    const valueEmit = { valor: this.valorComponentNovaTransferencia, destino: this.destinoComponentNovaTransferencia };
    this.saidaComponentNovaTransferencia.emit(valueEmit);

    this.limparCamposNovaTransferencia();
  }

  limparCamposNovaTransferencia(){
    this.valorComponentNovaTransferencia = 0;
    this.destinoComponentNovaTransferencia = 0;
  }
}
