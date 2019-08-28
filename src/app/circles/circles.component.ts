import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {
  @Input('data') datos: any;
  @Input('tipo') type: number;
  @Input('diametro') diam: number;
  @Input('distancia') dist: number;
  // @Input('options') opt: Array<any>;
  activeData:any;
  moveCircle: any={"rotate":'',"space":'',"rotateReverse":''};
  props: any={"height":'',"bg":''};

  isStarted:boolean=false;


  setActive(index) {
    for (let i = 0; i < this.datos.length; i++) {
      this.datos[i].active = false;
    }
    this.datos[index].active = true;
    this.activeData = this.datos[index];

    this.moveCircle.rotate =  this.datos[index].rotate;
    this.moveCircle.space =  this.datos[index].space- this.dist+25;
    this.moveCircle.rotateReverse =  this.datos[index].rotateReverse;
  }

  get desc(){
    return this.activeData.description.substring(0,120)+" ...";
  }

  start(){
    this.isStarted= true;
    // Añadir transition a todos los elementos
    var start = 0;
    var space = (this.diam / 2) + this.dist;
    var n_el = this.datos.length;
    if (n_el <= 6) {
      this.type = 0.5;
      // this.props.height = this.diam + this.dist+100;
      this.props.bg = 'linear-gradient(to top, #2575c9, transparent 50%)';
    } else {
      this.type = 1;
      // this.props.height = this.diam + (this.dist * 2)+150;
      this.props.bg ='#2575c9';
      // $(".container-circulos").css("height", "800px");
    }
    var numberOfElements = (this.type === 1) ? n_el : n_el - 1;
    var slice = 360 * this.type / numberOfElements;

    for (let i = 0; i < this.datos.length; i++) {
      $(".circulo-girador").css("z-index","103");
      var $self = $(this);
      var rotate = slice * i + start;
      var rotateReverse = rotate * -1;
      this.datos[i].rotate = rotate;
      this.moveCircle.rotate = rotate;
      this.datos[i].space = space;
      this.moveCircle.space = space;
      this.datos[i].rotateReverse = rotateReverse;
      this.moveCircle.rotateReverse = rotateReverse;

    }
    this.setActive(this.datos.length -1);
  }



  constructor() { }

  ngOnInit() {
    let n_datos = this.datos.length;
    if (n_datos <= 6) {
      this.props.height = this.diam + (this.dist) +100;      
    }else{
      this.props.height = this.diam + (this.dist *2) + 150;   
    }
    
   
  }

}
