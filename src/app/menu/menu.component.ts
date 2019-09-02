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
    console.log("me llego estoooooo",page)
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
      this.console.log("newhash",newHash)
      this.console.log("PAGIGIANANSA",self.paginas);
      this.console.log("lengthh",self.paginas.length);
      for (let i = 0; i < self.paginas.length; i++) {
        const el = self.paginas[i];
        this.console.log("elemento I"+i, el);
        if(el.path == newHash){
          this.console.log("ENCONTRE LA PAAGINA ",el);
          singlePage.push(el);
          self.onsetCurrentPage(el);
          self.currentPage = singlePage;
          return;
        }else{
          if (el.children) {
            for (let j = 0; j < el.children.length; j++) {
              const el2 = el.children[j];
              this.console.log("elemento J "+j,el2);
              if(el2.path == newHash){
                this.console.log("ENCONTRE LA PAAGINA ", el2);
                singlePage.push(el2);
                self.onsetCurrentPage(el2);
                self.currentPage = singlePage;
                return;
              }else{
                if(el2.children){
                  for(let k=0; k < el2.children.length; k++){
                    const el3 = el2.children[k]
                    this.console.log("elemento K " + k, el3);
                    if (el3.path == newHash) {
                      this.console.log("ENCONTRE LA PAAGINA ", el3);
                      singlePage.push(el3);
                      self.onsetCurrentPage(el3);
                      self.currentPage = singlePage;
                      return;
                    }else{
                      if (el3.children){
                        for (let m = 0; m < el3.children.length; m++) {
                          const el4 = el3.children[m];
                          this.console.log("elemento M " + m, el4);
                          if (el4.path == newHash) {
                            this.console.log("ENCONTRE LA PAAGINA ", el4);
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
