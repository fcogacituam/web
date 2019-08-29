import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
  ]
})
export class AppComponent implements OnInit{
  @Input() instance: number;
  showMenuMovil:boolean=false;
  openMenuMovil(event){
    event.preventDefault();
    this.showMenuMovil = true;
  }
  carousel: any = [
    {
      'image': 'assets/img/showcase-bg.jpg',
      'alt': 'imagen 1',
      'title': 'Imagen 1',
      'subtitle': 'Descripcion imagen 1'
    },
    {
      'image': 'assets/img/home-blur.jpg',
      'alt': 'imagen 2',
      'title': 'Imagen 2',
      'subtitle': 'Descripcion imagen 2'
    },
    {
      'image': 'assets/img/gallery/7.jpg',
      'alt': 'imagen 3',
      'title': 'Imagen 3',
      'subtitle': 'Descripcion imagen 3'
    }
  ];
  ejemplo: any = [
    {
      title: 'Carrera 1',
      href: '#carrera1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 2 con un nombre bastante largo y relleno mas relleno para ver',
      href: '#carrera2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporInteger sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 3',
      href: '#carrera3',
      description: 'Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    }
  ]
  carreras: any = [
    {
      title: 'Carrera 1',
      href: '#carrera1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 2 con un nombre bastante largo y relleno mas relleno para ver',
      href: '#carrera2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporInteger sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 3',
      href: '#carrera3',
      description: 'Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 3',
      href: '#carrera3',
      description: 'Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 3',
      href: '#carrera3',
      description: 'Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },
    {
      title: 'Carrera 3',
      href: '#carrera3',
      description: 'Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis temporLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus semper neque quis auctor. Morbi mattis ut ipsum in congue. Nulla posuere nibh eget felis pretium placerat. Integer sed sollicitudin ligula. Curabitur molestie dui venenatis odio mattis tempor.',
    },

  ];
  paginas : any = [
    {
      "id": 1,
      "section_type_id": 4,
      "title": "UNIVERSIDAD",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "universidad",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
      "children": [
        {
          "id": 2,
          "section_type_id": 4,
          "title": "Organización",
          "description": null,
          "position": 1,
          "parent": 1,
          "path": "organizacion",
          "status": 1,
          "created_at": "2017-09-06T15:59:49.000-03:00",
          "updated_at": "2017-11-17T19:44:24.000-03:00",
          "children": [
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Rectoría",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "rectoria",
              "status": 1,
              "children":[
                {
                  "id": 2,
                  "section_type_id": 4,
                  "title": "Vicerrectorías",
                  "description": null,
                  "position": 1,
                  "parent": 1,
                  "path": "vicerrectorias",
                  "status": 1,
                  "children":[
                    {
                      "id": 2,
                      "section_type_id": 4,
                      "title": "Direciones",
                      "description": null,
                      "position": 1,
                      "parent": 1,
                      "path": "direcciones",
                      "status": 1,
                    }
                  ]
                },
                {
                  "id": 2,
                  "section_type_id": 4,
                  "title": "Contraloría Interna",
                  "description": null,
                  "position": 1,
                  "parent": 1,
                  "path": "contraloria-interna",
                  "status": 1,
                },
                {
                  "id": 2,
                  "section_type_id": 4,
                  "title": "Otras Direcciones",
                  "description": null,
                  "position": 1,
                  "parent": 1,
                  "path": "otras-direcciones",
                  "status": 1,
                },
              ]
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Consejo Superior",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "consejo-superior",
              "status": 1,
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Consejo Académico",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "consejo-academico",
              "status": 1,
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Item de prueba 1 ",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "consejo-academico",
              "status": 1,
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Item de prueba 2",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "consejo-academico",
              "status": 1,
            }
          ]
        },
        {
          "id": 3,
          "section_type_id": 4,
          "title": "DIRECTORIO",
          "description": null,
          "position": 1,
          "parent": 1,
          "path": "directorio",
          "status": 1,
          "created_at": "2017-09-06T15:59:49.000-03:00",
          "updated_at": "2017-11-17T19:44:24.000-03:00"
        }
      ]
    },
    {
      "id": 1,
      "section_type_id": 4,
      "title": "INVESTIGACIÓN",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "investigacion",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
      "children": [
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Institutos",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "investigacion",
          "status": 1,
          "children":[
            {
              "id": 1,
              "section_type_id": 4,
              "title": "Proyectos",
              "description": null,
              "position": 1,
              "parent": 0,
              "path": "proyectos",
              "status": 1,
            },
            {
              "id": 1,
              "section_type_id": 4,
              "title": "Académicos",
              "description": null,
              "position": 1,
              "parent": 0,
              "path": "academicos",
              "status": 1,
            },
            {
              "id": 1,
              "section_type_id": 4,
              "title": "Otros Investigadores",
              "description": null,
              "position": 1,
              "parent": 0,
              "path": "otros-investigadores",
              "status": 1,
            },
          ]
        }
      ]
    },
    {
      "id": 1,
      "section_type_id": 4,
      "title": "COMUNIDAD UOH",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "comunidad-uoh",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
      "children": [
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Ucampus",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "ucampus",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Biblioteca",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "biblioteca",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Beneficios",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "beneficios",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Deportes",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "deportes",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Centro de Enseñanza y Aprendizaje",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "centro-de-enseñanza-y-aprendizaje",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Bienestar del Personal",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "bienestar-del-personal",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Gestión de Personas (RRHH)",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "gestion-de-personas",
          "status": 1,
        },
      ]
    },
    {
      "id": 1,
      "section_type_id": 4,
      "title": "ADMISIÓN",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "admision",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
      "children": [
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Carreras",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "carreras",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Vías de Ingreso",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "vias-de-ingreso",
          "status": 1,
        }
      ]
    },
    {
      "id": 1,
      "section_type_id": 4,
      "title": "VINCULACIÓN",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "vinculacion",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
      "children": [
        {
          "id": 1,
          "section_type_id": 4,
          "title": "PAR Explora",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "par-explora",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "ICEC",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "icec",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Arte y Cultura",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "arte-y-cultura",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "IAEA (MLC)",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "iaea",
          "status": 1,
        },
      ]
    },
    {
      "id": 1,
      "section_type_id": 4,
      "title": "NOTICIAS Y EVENTOS",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "noticias-y-eventos",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
    }
  ]
  constructor(){}
  ngOnInit(): void {
    // $(".menu-mobile").click(function(e){
    //   e.preventDefault();
    //   console.log("mehan presionao");
    // })
    let self=this;
    $(".container-fullpage-menu .close").on('click',function(){
      self.showMenuMovil =false;
    })
  }
}
