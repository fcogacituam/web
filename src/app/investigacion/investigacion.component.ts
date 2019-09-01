import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  @Input() carreras: any;
  @Input() paginas: any;
  @Output() closeMenu = new EventEmitter();
  // @Input() title:string;

  hash: string;
  title:string;
  current:any;
  showMenuMovil:boolean = false;
  onCloseMenuMovile(close) {
    let self = this;
    console.log("click event en hijo", close)
    const menu = $(".container-fullpage-menu");
    menu.addClass("fadeOut");
    menu.bind('animationend', function () {
      self.closeMenu.emit(close);
    });
    // this.closeMenu.emit(close);
  }
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

  constructor() { }

  ngOnInit() {

  }


}
