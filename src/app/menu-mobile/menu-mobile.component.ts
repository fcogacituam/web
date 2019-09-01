import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {
  @Input('paginas') paginas: any;
 

  // close=true;
  constructor() { }


 
  ngOnInit() {
    console.log("PAGINAS CURRENT",this.paginas);
    let self=this;
    $(document).ready(function(){
      $(".expand").on('click', function (el) {
        $("svg",el.currentTarget).toggleClass("fa-plus fa-minus");
        var parent = el.currentTarget.parentNode.parentNode;
        $(".child",parent).toggleClass("d-none");
      });

      $(".expand2").on('click', function (el) {
        $("svg", el.currentTarget).toggleClass("fa-plus fa-minus");
        var parent = el.currentTarget.parentNode.parentNode;
        $(".firstChild", parent).toggleClass("d-none");
      });

      $(".expand3").on('click', function (el) {
        $("svg", el.currentTarget).toggleClass("fa-plus fa-minus");
        var parent = el.currentTarget.parentNode.parentNode;
        $(".secondChild", parent).toggleClass("d-none");
      });
    })
    
  }

}
