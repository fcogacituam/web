import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  @Input() paginas: any;

  hash: string;
  title: string;
  current: any ={
    "title":''
  };
  showMenuMovil: boolean = false;

  cerrarMenu(e) {
    this.showMenuMovil = false;
  }

  openMenuMovil(e) {
    this.showMenuMovil = true;
  }

  setCurrent(page) {
    console.log("SET CURRENTTNTNTNNT",page)
    this.current = page;
    this.title = page.title;
  }
  constructor() { }

  ngOnInit() {
  }

}
