import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {
  @Input() destacados:any;
  @Input() color: any;
  @Input() paginas: any;

  hash: string;
  title: string;
  current: any;
  currentMenu: any = {
    "title": ''
  };
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
  setMenu(menu) {
    this.currentMenu = menu;
  }
  constructor() {

  }

  ngOnInit() { }
}
