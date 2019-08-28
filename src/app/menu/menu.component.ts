import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input('paginas') paginas: any;
  @Output() current= new EventEmitter();


  onsetCurrentPage(page){
    this.current.emit(page);
  }

  currentPage:any;
  hash: string = window.location.hash.substring(1);

  mouseEnter(e){
    let height:number = $(e.target.parentNode).height();
    $(e.target.lastChild).css("margin-top", height - 2 + 'px');
    $(e.target.lastChild).addClass("hovered animated slideInLeft");
  }
  mouseLeave(e){
    $(e.target.lastChild).removeClass("hovered animated slideInLeft");
  }

  constructor() { }

  ngOnInit() {
    let self=this;
    self.currentPage = [];
    let singlePage = [];
    for (let i = 0; i < this.paginas.length; i++) {
      let el = this.paginas[i];
      if (el.path == self.hash) {
        singlePage.push(el);
        this.onsetCurrentPage(el);
        this.currentPage = singlePage;
      }
    }

    
    $(window).on('hashchange',function(){
      self.currentPage = [];
      singlePage= [];
      let newHash= window.location.hash.substring(1);

      for (let i = 0; i < self.paginas.length; i++) {
        let el = self.paginas[i];
        if (el.path == newHash) {
          this.console.log("current",el);
          singlePage.push(el);
          self.onsetCurrentPage(el);
          self.currentPage = singlePage;
        }
      }
    });

    
    
   
    
  }

}
