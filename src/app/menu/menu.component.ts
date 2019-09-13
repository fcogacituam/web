import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input('paginas') paginas: any;
  @Output() current= new EventEmitter();
  @Output() menu = new EventEmitter();

  onsetCurrentPage(page,menu){
    this.current.emit(page);
    this.menu.emit(menu);
  }

  currentPage:any;
  currentMenu: any;
  hash: string = window.location.hash;

  clicked:boolean=false;
  currentHold:any;

  holdHover(e){
    this.clicked=true;
    if (e.target.lastChild != this.currentHold) {
      console.log("cambiar de activo")
      
      if (this.currentHold == "" || this.currentHold ==null){
        this.currentHold = e.target.lastChild;
        let height: number = $(e.target.parentNode).height();
        $(e.target.lastChild).css("margin-top", height - 2 + 'px');
        $(e.target.lastChild).addClass("hovered animated slideInLeft");

      }else{
        $(".container-submenu").each(function (el) {
          $(this).removeClass("hovered animated slideInLeft");
        })
        this.currentHold = e.target.lastChild;
        let height: number = $(e.target.parentNode).height();
        $(e.target.lastChild).css("margin-top", height - 2 + 'px');
        $(e.target.lastChild).addClass("hovered animated slideInLeft");


      }
      
      

    }
  }
  mouseEnter(e){
    let height: number = $(e.target.parentNode).height();
    if (this.clicked) {
      if (e.target.lastChild == this.currentHold) {
        $(e.target.lastChild).css("margin-top", height - 2 + 'px');
        $(e.target.lastChild).addClass("hovered");
      }else{

      }
      
    }else{
      
      $(e.target.lastChild).css("margin-top", height - 2 + 'px');
      $(e.target.lastChild).addClass("hovered animated slideInLeft");

    }
  }
  mouseLeave(e){
    if (this.clicked) {
      
    }else{
      $(e.target.lastChild).removeClass("hovered animated slideInLeft");
    }
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
        this.onsetCurrentPage(el,el);
        this.currentPage = singlePage;
      }
    }

    //Mantener Menú al ahcer click
    $(document).ready(function(){
      $(document).on('click', function (e) {
        if (self.clicked) {
          if ($(e.target).closest(".pagina").length === 0 ) {
            $(".container-submenu").removeClass("hovered animated slideInLeft");
            self.clicked=false;
          }
        }
        
      });
    })





    
    $(window).on('hashchange',function(){
      self.currentPage = [];
      singlePage= [];
      let newHash= window.location.hash;

      for (let i = 0; i < self.paginas.length; i++) {
        const el = self.paginas[i];
        if(el.path == newHash){
          singlePage.push(el);
          self.onsetCurrentPage(el,el);
          self.currentPage = singlePage;
          // self.currentMenu = el;
          return;
        }else{
          if (el.children) {
            for (let j = 0; j < el.children.length; j++) {
              const el2 = el.children[j];
              if(el2.path == newHash){
                singlePage.push(el);
                self.onsetCurrentPage(el2,el);
                self.currentPage = singlePage;
                return;
              }else{
                if(el2.children){
                  for(let k=0; k < el2.children.length; k++){
                    const el3 = el2.children[k]
                    if (el3.path == newHash) {
                      singlePage.push(el);
                      self.onsetCurrentPage(el3,el);
                      self.currentPage = singlePage;
                      return;
                    }else{
                      if (el3.children){
                        for (let m = 0; m < el3.children.length; m++) {
                          const el4 = el3.children[m];
                          if (el4.path == newHash) {
                            singlePage.push(el);
                            self.onsetCurrentPage(el4,el);
                            self.currentPage = singlePage;
                            return;
                          }else{
                            if (el4.children) {
                              for (let n = 0; n < el4.children.length; n++) {
                                const el5 = el4.children[n];
                                if(el5.path == newHash){
                                  singlePage.push(el);
                                  self.onsetCurrentPage(el5, el);
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
          }
        }
      }

    });

    
    
   
    
  }

}
