import { TransferenciaServiceService } from './../services/transferencia-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  inputTransferenciaExtrato: any[] = [];

  constructor(private TransferenciaServiceService:TransferenciaServiceService) { }

  ngOnInit(): void {
    this.TransferenciaServiceService.todas().subscribe((transferencias:Transferencia[])=>{
      console.table(transferencias);
      this.inputTransferenciaExtrato = transferencias;
    })
  }


}
