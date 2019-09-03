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
        const el = self.paginas[i];
        if(el.path == newHash){
          singlePage.push(el);
          self.onsetCurrentPage(el);
          self.currentPage = singlePage;
          return;
        }else{
          if (el.children) {
            for (let j = 0; j < el.children.length; j++) {
              const el2 = el.children[j];
              if(el2.path == newHash){
                singlePage.push(el2);
                self.onsetCurrentPage(el2);
                self.currentPage = singlePage;
                return;
              }else{
                if(el2.children){
                  for(let k=0; k < el2.children.length; k++){
                    const el3 = el2.children[k]
                    if (el3.path == newHash) {
                      singlePage.push(el3);
                      self.onsetCurrentPage(el3);
                      self.currentPage = singlePage;
                      return;
                    }else{
                      if (el3.children){
                        for (let m = 0; m < el3.children.length; m++) {
                          const el4 = el3.children[m];
                          if (el4.path == newHash) {
                            singlePage.push(el4);
                            self.onsetCurrentPage(el4);
                            self.currentPage = singlePage;
                            return;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // for (let i = 0; i < self.paginas.length; i++) {
      //   let el = self.paginas[i];
      //   if (el.path == newHash) {
      //     console.log("current",el);
      //     singlePage.push(el);
      //     self.onsetCurrentPage(el);
      //     self.currentPage = singlePage;
      //   }else{
      //     if (el.children) {
      //       for (let j = 0; j < el.children.length; j++) {
      //         const element = el.children[j];
      //         this.console.log("ELEMENTO",element);
      //         if(element.path == newHash){
      //           this.console.log("ENCONTREEEEEE",element);
      //         }
      //       }
      //     }
      //   }
      // }
    });

    
    
   
    
  }

}
