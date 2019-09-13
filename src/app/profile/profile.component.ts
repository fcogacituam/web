import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() currentProfile: any;
  constructor() { }

  ngOnInit() {
    let self=this;
    $(document).ready(function(){

      //ON OPEN VIDEO
      $(".btn-holder").on('click', function () {
        let height = $('.v-card'+self.currentProfile.page.id).height();
        let width = $('.v-card' + self.currentProfile.page.id).width();
        $(this).animate({
          'top': (height / 2) - ($(this).height() / 2),
          'right': width / 2
        },400, "linear", function(){
            setTimeout(() => {
              $(this).css('transform', 'scale(40)');
              $("svg", this).animate({
                'opacity': 0
              }, 40, function () {
                setTimeout(() => {
                  $(".video").animate({
                    'opacity': 1,
                    'height': '100%'
                  });
                  $(".close-video-btn").css("z-index","3");
                }, 500);
                
              })
            }, 600);
           
        })
      });

      //ON CLOSE VIDEO
      $(".close-video-btn").on('click',function(){
        let height = $('.v-card' + self.currentProfile.page.id).height();
        let width = $('.v-card' + self.currentProfile.page.id).width();
        $(this).css("z-index",0);
        $(".video").animate({
          'height':0,
          
        },400,function(){
          $(".btn-holder").css("transform","scale(1)")
          setTimeout(() => {
            $(".btn-holder svg").animate({
              'opacity':1
            },400,function(){
              console.log("estoy entrando aca");
              $(".btn-holder").css("top", "75px");
              $(".btn-holder").css("right", "346px");
              // $(".btn-holder").animate({
              //   'top':'75px',
              //   'right':'346px'
              // })
            })
          }, 400);
          
        })
      })
    })
    
  }

}
