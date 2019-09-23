import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent implements OnInit {
  @Input() paginas: any;
  @Input() profiles: any;
  @Input() color:string;

  hash: string;
  title: string;
  current:any;


  profileCategories:any;
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
  constructor() { }

  ngOnInit() {
    let aux: any = [];
    let self = this;
    for (let i = 0; i < this.profiles.length; i++) {
      const el = this.profiles[i];
      if ($.inArray(el.page.description, aux) === -1) {
        aux.push(el.page.description);
      }
    }
    this.profileCategories = aux;
  }

}
