import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  @Input() carreras: any;
  @Input() paginas: any;
  // @Input() title:string;

  hash: string;
  title:string;
  current:any;
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

  constructor() { }

  ngOnInit() {

  }


}
