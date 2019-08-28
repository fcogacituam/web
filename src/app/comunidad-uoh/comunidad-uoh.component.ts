import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comunidad-uoh',
  templateUrl: './comunidad-uoh.component.html',
  styleUrls: ['./comunidad-uoh.component.css']
})
export class ComunidadUohComponent implements OnInit {

  @Input() paginas: any;

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

  ngOnInit() { }

}
