import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byteBank';
  transferencia: any;

  transferirLocal($event: any) {
    console.log($event);
    this.transferencia = $event;
  }
}
