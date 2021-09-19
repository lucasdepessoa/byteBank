import { Transferencia } from './../models/transferencia.model';
import { TransferenciaServiceService } from './../services/transferencia-service.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent {

  @Output() saidaComponentNovaTransferencia = new EventEmitter<any>();

  valorComponentNovaTransferencia: number = 0;
  destinoComponentNovaTransferencia: number = 0;

  constructor(private service: TransferenciaServiceService,private router:Router) { }

  trasnferindoComponentNovaTransferencia() {
    console.log('Solicitada nova trasnferência');

    const valueEmit: Transferencia = { valor: this.valorComponentNovaTransferencia, destino: this.destinoComponentNovaTransferencia };

    this.service.adicionar(valueEmit).subscribe(
      (resultado) => {
        console.log('Foi adicionado', resultado);
        this.limparCamposNovaTransferencia();
        this.router.navigateByUrl('extrato');

      },
      (error) => console.log(error));
  }

  limparCamposNovaTransferencia() {
    this.valorComponentNovaTransferencia = 0;
    this.destinoComponentNovaTransferencia = 0;
  }
}
