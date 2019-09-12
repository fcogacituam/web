import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  @Input() paginas: any;
  @Input() profiles: any;
  @Input() color: string;
  hash: string;
  title: string;

  profilePage:boolean= false;
  currentProfile:any;
  setProfileTrue(e) {
    this.profilePage = true;
  }



  current: any ={
    "title":''
  };
  currentMenu:any={
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
    this.current = page;
    this.title = page.title;
  }
  setMenu(menu){
    this.currentMenu = menu;
  }


  constructor() {

  }

  ngOnInit() {
    let self=this;
    $(window).on('hashchange', function () {
      let newHash = window.location.hash;
      console.log("LO CAPTURO DE AQUI",newHash);
      if(isProfile(newHash)){
        self.setProfileTrue(newHash);
      }
    });

    function isProfile(hash){
      for (let i = 0; i < self.profiles.length; i++) {
        const element = self.profiles[i];
        console.log("Hash",hash);
        if(element.page.path == hash){
          self.currentProfile = element;
          return true;
        }
      }
      
    }
  }

}
