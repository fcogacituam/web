import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  @Input() carreras: any;
  @Input() paginas: any;
  // @Output() closeMenu = new EventEmitter();
  @Input() color: string;
  // @Input() title:string;

  hash: string;
  title:string;
  current:any;
  currentMenu: any = {
    "title": ''
  };
  showMenuMovil:boolean = false;

  cerrarMenu(e){
    this.showMenuMovil=false;
  }

  openMenuMovil(e){
    this.showMenuMovil=true;
  }
  setCurrent(page){
    this.current = page;
    this.title = page.title;
  }
  setMenu(menu) {
    this.currentMenu = menu;
  }
  constructor() { }

  ngOnInit() {

  }


}
