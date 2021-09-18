import { TransferenciaServiceService } from './services/transferencia-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleAppComponent = 'byteBank';
  

  constructor(private TransferenciaServiceService:TransferenciaServiceService){};

  inputAppModule($event: any) {
    this.TransferenciaServiceService.adicionar($event);
  }
}
