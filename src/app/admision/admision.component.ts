import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
  styleUrls: ['./admision.component.css']
})
export class AdmisionComponent implements OnInit {

  @Input() paginas: any;
  @Input() color: string;
  hash: string;
  title: string;
  current:any;
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

  ngOnInit() {

  }
}
