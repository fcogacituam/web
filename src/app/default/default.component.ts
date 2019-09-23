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
  @Input() pageId: string;
  @Input() type:string;
  @Input() current:any={
    'title':''
  };
  @Input() currentProfile: any;
  

  
  hash: string;
  title: string;

  profilePage:boolean= false;
  destacadosPage:boolean = false;


  categories:any =[
    "Profile"
  ]


  setProfileTrue() {
    this.profilePage = true;
  }
  unsetProfile() {
    this.profilePage = false;
  }



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
    var type = this.type;
    let self=this;
    // switch (type) {
    //   case 'perfil':
    //     this.setProfileTrue();
    //     break;

    //   default:
    //     break;
    // }
    // this.pageId = 
    // let self=this;
    $(window).on('hashchange', function () {
      // clean all categories
      cleanCategories();
      let newHash = window.location.hash;

      if(isProfile(newHash)){
        self.setProfileTrue();
      }else{
        self.unsetProfile();
      }


    });

    function cleanCategories(){
      for (let i = 0; i < self.categories.length; i++) {
        const el = self.categories[i];
        self["unset"+el]();
      }
    }


    function isProfile(hash){
      for (let i = 0; i < self.profiles.length; i++) {
        const element = self.profiles[i];
        if(element.page.path == hash){
          console.log(element);
          self.currentProfile = element;
          return true;
        }
      }
      return false;
      
    }
  }

}
