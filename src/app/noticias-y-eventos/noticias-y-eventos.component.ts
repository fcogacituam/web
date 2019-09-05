import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticias-y-eventos',
  templateUrl: './noticias-y-eventos.component.html',
  styleUrls: ['./noticias-y-eventos.component.css']
})
export class NoticiasYEventosComponent implements OnInit {

  @Input() paginas: any;
  @Input() color: string;
  hash: string;
  title: string;
  current: any;
  showMenuMovil: boolean = false;

  noticias:any = [
    {
      "id":0,
      "title": "Noticia 1",
      "category":"eventos",
      "author":"John Doe",
      "excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam turpis eget orci blandit lobortis. ",
      "date":"2019-09-04 21:00:00",
      "video":"",
      "images": ["https://picsum.photos/500/300"]
    },
    {
      "id": 1,
      "title": "Noticia 2",
      "category": "eventos",
      "author": "John Doe",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam turpis eget orci blandit lobortis. ",
      "date": "2019-09-04 21:00:00",
      "video": "",
      "images": ["https://picsum.photos/500/450"]
    },
    {
      "id": 2,
      "title": "Noticia 3",
      "category": "eventos",
      "author": "John Doe",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam turpis eget orci blandit lobortis. ",
      "date": "2019-09-04 21:00:00",
      "video": "",
      "images": ["https://picsum.photos/505/450", "https://picsum.photos/510/350","https://picsum.photos/515/450"]
    },
    {
      "id": 3,
      "title": "Noticia 4",
      "category": "eventos",
      "author": "John Doe",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam turpis eget orci blandit lobortis. ",
      "date": "2019-09-04 21:00:00",
      "video": "https://www.youtube.com/watch?v=J8Fht5yrD48",
      "images": ["https://picsum.photos/600/450"]
    },
    {
      "id": 4,
      "title": "Noticia 5",
      "category": "eventos",
      "author": "John Doe",
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam turpis eget orci blandit lobortis. ",
      "date": "2019-09-04 21:00:00",
      "video": "",
      "images": ["https://picsum.photos/600/300"]
    },
  ]
  cerrarMenu(e) {
    this.showMenuMovil = false;
  }

  openMenuMovil(e) {
    this.showMenuMovil = true;
  }
  setCurrent(page) {
    this.current = page;
    this.title = page.title;
  }
  constructor() { }

  ngOnInit() {}

}
