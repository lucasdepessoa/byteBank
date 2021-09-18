import { TransferenciaServiceService } from './../services/transferencia-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  inputTransferenciaExtrato: any[] = [];

  constructor(private TransferenciaServiceService:TransferenciaServiceService) { }

  ngOnInit(): void {
    this.inputTransferenciaExtrato = this.TransferenciaServiceService.transferencias;
  }


}
