import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
  ]
})
export class AppComponent implements OnInit{
  carousel: any = [
    {
      'image': 'assets/img/showcase-bg.jpg',
      'alt': 'imagen 1',
      'title': 'Imagen 1',
      'subtitle': 'Descripcion imagen 1'
    },
    {
      'image': 'assets/img/home-blur.jpg',
      'alt': 'imagen 2',
      'title': 'Imagen 2',
      'subtitle': 'Descripcion imagen 2'
    },
    {
      'image': 'assets/img/gallery/7.jpg',
      'alt': 'imagen 3',
      'title': 'Imagen 3',
      'subtitle': 'Descripcion imagen 3'
    }
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
}
