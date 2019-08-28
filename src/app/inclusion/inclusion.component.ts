import { Component, OnInit,Input } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-inclusion',
  templateUrl: './inclusion.component.html',
  styleUrls: ['./inclusion.component.css']
})
export class InclusionComponent  {


  @Input()
  display: string;
  isActive:boolean = false;
  isSearchOpen: boolean = false;
  isTextOpen: boolean = false;
  isColorOpen: boolean = false;
  isLangOpen: boolean = false;

  toUp:boolean;

  constructor(){
    console.log("inclusion component");
  }

  ngOnInit(){
    if (this.display==='up') {
      this.toUp = true;
    }else{
      this.toUp = false;
    }
  }

  public toggle(event:Event){
    this.isActive =! this.isActive;
  }
  public openSearch(event:Event){
    this.isSearchOpen = !this.isSearchOpen;
  }
  public openText(event: Event) {
    this.isTextOpen = !this.isTextOpen;
  }
  public openColor(event: Event) {
    this.isColorOpen = !this.isColorOpen;
  }
  public openLang(event: Event) {
    this.isLangOpen = !this.isLangOpen;
  }
  

 

}
