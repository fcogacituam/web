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
