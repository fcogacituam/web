import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {
  @Input('paginas') paginas: any;
  @Output() closeMenu = new EventEmitter();

  close=true;

  onCloseMenuMovile(close) {
    let self=this;
    console.log("click event en hijo",close)
    const menu = $(".container-fullpage-menu");
    menu.addClass("fadeOut");
    menu.bind('animationend',function(){
      self.closeMenu.emit(close);
    });
    // this.closeMenu.emit(close);
  }

  saludar(){
    console.log("wena wnnnnnnnn")
  }



  constructor() { }


 
  ngOnInit() {
    console.log("PAGINAS CURRENT",this.paginas);
  }

}
