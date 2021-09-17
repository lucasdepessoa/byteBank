import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleAppComponent = 'byteBank';
  transferenciasAppComponent: any[] = [];

  inputAppModule($event: any) {
    const trasnferencia = {... $event, data: new Date()}
    this.transferenciasAppComponent.push(trasnferencia);
    console.log(this.transferenciasAppComponent);
  }
}
