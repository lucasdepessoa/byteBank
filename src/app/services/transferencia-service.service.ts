import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService {
  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private HttpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  todas():Observable<Transferencia[]>{
    return this.HttpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia:Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.HttpClient.post<Transferencia>(this.url,transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
