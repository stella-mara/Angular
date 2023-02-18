import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Fotos de paisagens';

  public imagesLocation: string[] = [
    '/assets/foto1.jpg',
    '/assets/foto2.jpg',
    '/assets/foto3.jpg',
    '/assets/foto4.jpg',
    '/assets/foto5.jpg',
  ];
}
