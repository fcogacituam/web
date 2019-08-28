import { Component, OnInit , Input} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() instance: number;
  destacados: any = [
    {
      'image': 'assets/img/examples/banner_lateral2.png',
      'alt': 'imagen 1',
    },
    {
      'image': 'assets/img/examples/colchagua4.png',
      'alt': 'imagen 2',
    },
    {
      'image': 'assets/img/examples/concurso_p_blico.png',
      'alt': 'imagen 3',
    },
    {
      'image': 'assets/img/examples/LATERAL__1_.png',
      'alt': 'imagen 3',
    },
    {
      'image': 'assets/img/examples/PROTOCOLO.png',
      'alt': 'imagen 3',
    },
    {
      'image': 'assets/img/examples/tama_o__banner.png',
      'alt': 'imagen 3',
    },
    {
      'image': 'assets/img/examples/concurso_p_blico.png',
      'alt': 'imagen 3',
    },
    {
      'image': 'assets/img/examples/concurso_p_blico.png',
      'alt': 'imagen 3',
    },
    {
      'image': 'assets/img/examples/concurso_p_blico.png',
      'alt': 'imagen 3',
    }
  ];

  paneles : any = [
    {
      "id": "communication",
      "label":"Communication",
      "title": "Communicate with ease",
      "image": 'assets/img/examples/graphic.png',
      "alt": 'Graphic',
      "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.Vestibulum sit amet mattis ante.Ut placerat dui eu nulla congue tincidunt ac a nibh.Mauris accumsan pulvinar lorem placerat volutpat.Praesentnacilisis elit.Sed condimentum neque quis ex porttitor,</p> <p> malesuada faucibus augue aliquet.Sed elit est, eleifend sed dapibus a, per a eros. Vestibulum blandit vulputate pharetra.Phasellus lobortis leo a nisl euismod, eufaucibus justo sollicitudin.Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.Proin aliquet vulputate aliquam.  </p>",
    },
    {
      "id": "scheduling",
      "label":"Scheduling",
      "title": "Scheduling when you want",
      "image": 'assets/img/examples/graphic.png',
      "alt": 'Graphic',
      "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.Vestibulum sit amet mattis ante.Ut placerat dui eu nulla congue tincidunt ac a nibh.Mauris accumsan pulvinar lorem placerat volutpat.Praesentnacilisis elit.Sed condimentum neque quis ex porttitor,</p> <p> malesuada faucibus augue aliquet.Sed elit est, eleifend sed dapibus a, per a eros. Vestibulum blandit vulputate pharetra.Phasellus lobortis leo a nisl euismod, eufaucibus justo sollicitudin.Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.Proin aliquet vulputate aliquam.  </p>",
    },
    {
      "id": "messages",
      "label": "Messages",
      "title": "Realtime Messaging service",
      "image": '',
      "alt": 'Graphic',
      "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.Vestibulum sit amet mattis ante.Ut placerat dui eu nulla congue tincidunt ac a nibh.Mauris accumsan pulvinar lorem placerat volutpat.Praesentnacilisis elit.Sed condimentum neque quis ex porttitor,</p> <p> malesuada faucibus augue aliquet.Sed elit est, eleifend sed dapibus a, per a eros. Vestibulum blandit vulputate pharetra.Phasellus lobortis leo a nisl euismod, eufaucibus justo sollicitudin.Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.Proin aliquet vulputate aliquam.  </p>",
    },
    {
      "id": "livechat",
      "label":"Live Chat",
      "title": "Live chat when you needed",
      "image": '',
      "alt": 'Graphic',
      "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien.Vestibulum sit amet mattis ante.Ut placerat dui eu nulla congue tincidunt ac a nibh.Mauris accumsan pulvinar lorem placerat volutpat.Praesentnacilisis elit.Sed condimentum neque quis ex porttitor,</p> <p> malesuada faucibus augue aliquet.Sed elit est, eleifend sed dapibus a, per a eros. Vestibulum blandit vulputate pharetra.Phasellus lobortis leo a nisl euismod, eufaucibus justo sollicitudin.Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.Proin aliquet vulputate aliquam.  </p>",
    }
  ]
  constructor() { }

  ngOnInit() {
    let n_videos = this.destacados.length;
    var translated = 0;
    let currPos = 2;
    const show_slides = 2;

    setInterval(function(){
      
    },5000)

    if (currPos === 0) {
      $('.controls .prev i').css("color", "#ccc");
    }
    $('body').on('click', '.prev', function () {
      event.preventDefault();
      if (currPos > show_slides ) {
        translated = translated + 100;
        $('.container-video').css({
          '-webkit-transform': 'translateX(' + translated + '%) '
        });
        currPos -= 1;
      }
      console.log(currPos)

    });

    $('body').on('click', '.next', function () {
      event.preventDefault();
      if (currPos < n_videos ) {
        translated = translated - (100);
        $('.container-video').css({
          '-webkit-transform': 'translateX(' + translated + '%) '
        });
        currPos += 1;
      }
      console.log(currPos)

    });


   

  }

}
