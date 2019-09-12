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


  colores:any =[
    "0, 117, 201",
    "247, 217, 62",
    "63, 174, 42", 
    "0, 168, 135",
    "198, 9, 59", 
    "64, 180, 229"
  ];






  openMenuMovil(event){
    event.preventDefault();
    this.showMenuMovil = true;
  }
  cerrarMenu(event){
    // let self=this;
    // const menu = $(".container-fullpage-menu");
    // menu.addClass("fadeOut");
    // menu.bind('animationend', function () {
    //   self.showMenuMovil =false;
    // });
    event.preventDefault();
    this.showMenuMovil =false;
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
  profiles: any = [
    {
      "page": {
        "id": 19,
        "section_id": 37,
        "page_type_id": 3,
        "institute_id": 15,
        "path": "#valentina-sofia-giaconi-smoje",
        "show_link": 1,
        "show_title_image": 1,
        "image_id": 35,
        "icon_institute": null,
        "info_image_1": null,
        "info_image_2": null,
        "title": "Valentina Sofía Giaconi Smoje",
        "title_1": null,
        "content_1": null,
        "title_2": null,
        "content_2": null,
        "info_title_1": null,
        "info_1": null,
        "info_title_2": null,
        "info_2": null,
        "description": "Académica",
        "date_post": null,
        "status": 1,
        "created_at": "2017-10-05T19:37:08.000-03:00",
        "updated_at": "2019-04-01T13:06:24.000-03:00"
      },
      "page_type": {
        "id": 3,
        "name": "PERFIL",
        "description": "",
        "status": 1,
        "created_at": "2017-09-25T14:48:22.000-03:00",
        "updated_at": "2017-09-25T14:48:22.000-03:00"
      },
      "section": {
        "id": 37,
        "section_type_id": 1,
        "title": "Institutos",
        "description": null,
        "position": 1,
        "parent": 6,
        "path": "#institutos",
        "status": 1,
        "created_at": "2017-09-06T18:32:51.000-03:00",
        "updated_at": "2017-11-06T18:20:31.000-03:00"
      },
      "tags": [],
      "image": {
        "id": 35,
        "page_id": null,
        "link_id": null,
        "title": "",
        "subtitle": null,
        "description": null,
        "src": "assets/img/team/3.jpg",
        "alt": "",
        "status": 1,
        "created_at": "2017-10-15T01:51:29.000-03:00",
        "updated_at": "2017-10-15T01:51:29.000-03:00"
      },
      "institute": {
        "id": 15,
        "section_id": 6,
        "page_type_id": 4,
        "institute_id": null,
        "path": "#instituto-de-ciencias-de-la-educacion",
        "show_link": 1,
        "show_title_image": 1,
        "image_id": 364,
        "icon_institute": null,
        "info_image_1": null,
        "info_image_2": null,
        "title": "Instituto de Ciencias de la Educación",
        "title_1": null,
        "content_1": null,
        "title_2": null,
        "content_2": null,
        "info_title_1": null,
        "info_1": null,
        "info_title_2": null,
        "info_2": null,
        "description": "",
        "date_post": null,
        "status": 1,
        "created_at": "2017-10-02T20:49:31.000-03:00",
        "updated_at": "2018-08-08T16:01:58.000-04:00"
      },
      "gallery": [],
      "contents": [],
      "infos": [],
      "info_images": [],
      "content_images": [],
      "academic_profiles": [
        {
          "id": 7,
          "page_id": 19,
          "language": "en",
          "job_title": "Mathematical Engineer.",
          "academic_degree": "PhD in Mathematical Modelling, Universidad de Chile and in Educational Sciences, University Grenoble Alpes, France (co-tutelage Programme).",
          "email": "valentina.giaconi@uoh.cl",
          "phone": "+56 2 2903 0017",
          "web_site": "",
          "description": "Assistant professor.",
          "biography": "Valentina Giaconi studied mathematics engineering in Universidad de Chile, where she participated in several projects in mathematics education, mostly related to the professional development of mathematics teachers. Then, she completed a PhD in a conjoint program between the Laboratory of Educational Sciences from University Grenoble Alpes, in France and in mathematical modelling from University of Chile. In her PhD, she focused on the study of statistical methods for research in education, in particular the ones for missing data, selection bias and multilevel data. ",
          "interest": "•\tLearning and the school system.<br>\n•\tMathematics teacher education.<br> \n•\tDevelopment of instruments.<br> \n•\tStatistical models for research in education.<br> ",
          "teaching": "•\tClassic Geometry, Second Semester, Mathematics Education.",
          "projects": "",
          "publications": "",
          "books": null,
          "others": "",
          "status": 1,
          "created_at": "2017-10-05T19:59:59.000-03:00",
          "updated_at": "2017-10-15T02:02:14.000-03:00"
        },
        {
          "id": 6,
          "page_id": 19,
          "language": "es",
          "job_title": "Ingeniera Civil Matemática, Universidad de Chile.",
          "academic_degree": "Doctora en Modelación Matemática, Universidad de Chile.<br>Doctora en Ciencias de la Educación, Universidad Grenoble Alpes, Francia (cotutela).",
          "email": "valentina.giaconi@uoh.cl",
          "phone": "+56 2 2903 0017",
          "web_site": "",
          "description": "Profesora asistente.",
          "biography": "Valentina Giaconi estudió ingeniería matemática en la Universidad de Chile, en donde se vinculó en diversos proyectos de educación matemática relacionados principalmente con formación de profesores de matemáticas. Después, realizó un doctorado en cotutela entre el programa de modelación matemática de la Universidad de Chile y el programa de Ciencias de la Educación de la Universidad Grenoble Alpes, en Francia, en donde profundizó el uso de métodos estadísticos para la investigación en educación, en particular los que consideran datos perdidos, sesgo de selección y datos jerárquicos.",
          "interest": "•\tAprendizaje y sistema escolar.<br><br>\n•\tFormación de profesores de matemáticas.<br><br>\n•\tDesarrollo de instrumentos.<br><br>\n•\tMétodos estadísticos para la investigación en educación.",
          "teaching": "•\tGeometría Clásica.",
          "projects": "·       Investigadora en el proyecto \"Pensamiento matemático creativo en aulas de enseñanza básica: Entornos didácticos que posibilitan su desarrollo\", Fondo del Consejo Nacional de Educación CNED. <br><br>\n\n \n\n·       Investigadora en el proyecto ARPA, Activando la Resolución de Problemas en las Aulas. www.arpamat.cl.",
          "publications": "•  Cerda, G., Pérez, C., Giaconi, V., Perdomo-Díaz, J., Reyes, C., & Felmer, P. (2017). The effect of a professional development program workshop about problem solving on mathematics teachers’ ideas about the nature of mathematics, achievements in mathematics, and learning in mathematics. Psychology, Society & Education, 9, 11-26. <br><br>\n\n•  Giaconi, V., Varas, M. L., Tuohilampi, L. & Hannula, M. (2016). Affective Factors and Beliefs About Mathematics of Young Chilean Children: Understanding Cultural Characteristics. In Felmer, P., Pehkonen, E., & Kilpatrick, J. Posing and Solving Mathematical Problems (pp. 37-51). Springer International Publishing.<br><br>\n\n•  Tuohilampi, L., Hannula, M. S., Varas, L., Giaconi, V., Laine, A., Näveri, L., & i Nevado, L. S. (2015). Challenging the western approach to cultural comparisons: young pupils'affective structures regarding mathematics in Finland and Chile. International Journal of Science and Mathematics Education, 13(6), 1625-1648. <br><br>\n\n•  Varas, L., Lacourly, N., López, A., & Giaconi, V. (2013). Evaluación del conocimiento pedagógico del contenido para enseñar matemáticas elementales. Enseñanza de las Ciencias, 31(1), 0171-187.",
          "books": "lo que sea de libros",
          "others": "",
          "status": 1,
          "created_at": "2017-10-05T19:47:32.000-03:00",
          "updated_at": "2019-03-13T13:22:32.000-03:00"
        }
      ]
    },
    {
      "page": {
        "id": 19,
        "section_id": 37,
        "page_type_id": 3,
        "institute_id": 15,
        "path": "#john-doe",
        "show_link": 1,
        "show_title_image": 1,
        "image_id": 35,
        "icon_institute": null,
        "info_image_1": null,
        "info_image_2": null,
        "title": "John Doe",
        "title_1": null,
        "content_1": null,
        "title_2": null,
        "content_2": null,
        "info_title_1": null,
        "info_1": null,
        "info_title_2": null,
        "info_2": null,
        "description": "Directorio",
        "date_post": null,
        "status": 1,
        "created_at": "2017-10-05T19:37:08.000-03:00",
        "updated_at": "2019-04-01T13:06:24.000-03:00"
      },
      "page_type": {
        "id": 3,
        "name": "PERFIL",
        "description": "",
        "status": 1,
        "created_at": "2017-09-25T14:48:22.000-03:00",
        "updated_at": "2017-09-25T14:48:22.000-03:00"
      },
      "section": {
        "id": 37,
        "section_type_id": 1,
        "title": "Institutos",
        "description": null,
        "position": 1,
        "parent": 6,
        "path": "#institutos",
        "status": 1,
        "created_at": "2017-09-06T18:32:51.000-03:00",
        "updated_at": "2017-11-06T18:20:31.000-03:00"
      },
      "tags": [],
      "image": {
        "id": 35,
        "page_id": null,
        "link_id": null,
        "title": "",
        "subtitle": null,
        "description": null,
        "src": "assets/img/team/2.jpg",
        "alt": "",
        "status": 1,
        "created_at": "2017-10-15T01:51:29.000-03:00",
        "updated_at": "2017-10-15T01:51:29.000-03:00"
      },
      "institute": {
        "id": 15,
        "section_id": 6,
        "page_type_id": 4,
        "institute_id": null,
        "path": "#instituto-de-ciencias-de-la-educacion",
        "show_link": 1,
        "show_title_image": 1,
        "image_id": 364,
        "icon_institute": null,
        "info_image_1": null,
        "info_image_2": null,
        "title": "Instituto de Ciencias de la Educación",
        "title_1": null,
        "content_1": null,
        "title_2": null,
        "content_2": null,
        "info_title_1": null,
        "info_1": null,
        "info_title_2": null,
        "info_2": null,
        "description": "",
        "date_post": null,
        "status": 1,
        "created_at": "2017-10-02T20:49:31.000-03:00",
        "updated_at": "2018-08-08T16:01:58.000-04:00"
      },
      "gallery": [],
      "contents": [],
      "infos": [],
      "info_images": [],
      "content_images": [],
      "academic_profiles": [
        {
          "id": 7,
          "page_id": 19,
          "language": "en",
          "job_title": "Mathematical Engineer.",
          "academic_degree": "PhD in Mathematical Modelling, Universidad de Chile and in Educational Sciences, University Grenoble Alpes, France (co-tutelage Programme).",
          "email": "valentina.giaconi@uoh.cl",
          "phone": "+56 2 2903 0017",
          "web_site": "",
          "description": "Assistant professor.",
          "biography": "Valentina Giaconi studied mathematics engineering in Universidad de Chile, where she participated in several projects in mathematics education, mostly related to the professional development of mathematics teachers. Then, she completed a PhD in a conjoint program between the Laboratory of Educational Sciences from University Grenoble Alpes, in France and in mathematical modelling from University of Chile. In her PhD, she focused on the study of statistical methods for research in education, in particular the ones for missing data, selection bias and multilevel data. ",
          "interest": "•\tLearning and the school system.<br>\n•\tMathematics teacher education.<br> \n•\tDevelopment of instruments.<br> \n•\tStatistical models for research in education.<br> ",
          "teaching": "•\tClassic Geometry, Second Semester, Mathematics Education.",
          "projects": "",
          "publications": "",
          "books": null,
          "others": "",
          "status": 1,
          "created_at": "2017-10-05T19:59:59.000-03:00",
          "updated_at": "2017-10-15T02:02:14.000-03:00"
        },
        {
          "id": 6,
          "page_id": 19,
          "language": "es",
          "job_title": "Ingeniera Civil Matemática, Universidad de Chile.",
          "academic_degree": "Doctora en Modelación Matemática, Universidad de Chile.<br>Doctora en Ciencias de la Educación, Universidad Grenoble Alpes, Francia (cotutela).",
          "email": "valentina.giaconi@uoh.cl",
          "phone": "+56 2 2903 0017",
          "web_site": "",
          "description": "Profesora asistente.",
          "biography": "Valentina Giaconi estudió ingeniería matemática en la Universidad de Chile, en donde se vinculó en diversos proyectos de educación matemática relacionados principalmente con formación de profesores de matemáticas. Después, realizó un doctorado en cotutela entre el programa de modelación matemática de la Universidad de Chile y el programa de Ciencias de la Educación de la Universidad Grenoble Alpes, en Francia, en donde profundizó el uso de métodos estadísticos para la investigación en educación, en particular los que consideran datos perdidos, sesgo de selección y datos jerárquicos.",
          "interest": "•\tAprendizaje y sistema escolar.<br><br>\n•\tFormación de profesores de matemáticas.<br><br>\n•\tDesarrollo de instrumentos.<br><br>\n•\tMétodos estadísticos para la investigación en educación.",
          "teaching": "•\tGeometría Clásica.",
          "projects": "·       Investigadora en el proyecto \"Pensamiento matemático creativo en aulas de enseñanza básica: Entornos didácticos que posibilitan su desarrollo\", Fondo del Consejo Nacional de Educación CNED. <br><br>\n\n \n\n·       Investigadora en el proyecto ARPA, Activando la Resolución de Problemas en las Aulas. www.arpamat.cl.",
          "publications": "•  Cerda, G., Pérez, C., Giaconi, V., Perdomo-Díaz, J., Reyes, C., & Felmer, P. (2017). The effect of a professional development program workshop about problem solving on mathematics teachers’ ideas about the nature of mathematics, achievements in mathematics, and learning in mathematics. Psychology, Society & Education, 9, 11-26. <br><br>\n\n•  Giaconi, V., Varas, M. L., Tuohilampi, L. & Hannula, M. (2016). Affective Factors and Beliefs About Mathematics of Young Chilean Children: Understanding Cultural Characteristics. In Felmer, P., Pehkonen, E., & Kilpatrick, J. Posing and Solving Mathematical Problems (pp. 37-51). Springer International Publishing.<br><br>\n\n•  Tuohilampi, L., Hannula, M. S., Varas, L., Giaconi, V., Laine, A., Näveri, L., & i Nevado, L. S. (2015). Challenging the western approach to cultural comparisons: young pupils'affective structures regarding mathematics in Finland and Chile. International Journal of Science and Mathematics Education, 13(6), 1625-1648. <br><br>\n\n•  Varas, L., Lacourly, N., López, A., & Giaconi, V. (2013). Evaluación del conocimiento pedagógico del contenido para enseñar matemáticas elementales. Enseñanza de las Ciencias, 31(1), 0171-187.",
          "books": "lo que sea de libros",
          "others": "",
          "status": 1,
          "created_at": "2017-10-05T19:47:32.000-03:00",
          "updated_at": "2019-03-13T13:22:32.000-03:00"
        }
      ]
    }
  ]
  paginas : any = [
    {
      "id": 1,
      "section_type_id": 4,
      "title": "UNIVERSIDAD",
      "description": null,
      "position": 1,
      "parent": 0,
      "path": "#universidad",
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
          "path": "#organizacion",
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
              "path": "#rectoria",
              "status": 1,
              "children":[
                {
                  "id": 2,
                  "section_type_id": 4,
                  "title": "Vicerrectorías",
                  "description": null,
                  "position": 1,
                  "parent": 1,
                  "path": "#vicerrectorias",
                  "status": 1,
                  "children":[
                    {
                      "id": 20,
                      "section_type_id": 4,
                      "title": "Direciones",
                      "description": null,
                      "position": 1,
                      "parent": 1,
                      "path": "#direcciones",
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
                  "path": "#contraloria-interna",
                  "status": 1,
                },
                {
                  "id": 2,
                  "section_type_id": 4,
                  "title": "Otras Direcciones",
                  "description": null,
                  "position": 1,
                  "parent": 1,
                  "path": "#otras-direcciones",
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
              "path": "#consejo-superior",
              "status": 1,
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Consejo Académico",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "#consejo-academico",
              "status": 1,
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Item de prueba 1 ",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "#consejo-academico",
              "status": 1,
            },
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Item de prueba 2",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "#consejo-academico",
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
          "path": "#directorio",
          "status": 1,
          "created_at": "2017-09-06T15:59:49.000-03:00",
          "updated_at": "2017-11-17T19:44:24.000-03:00",
          "children":[
            {
              "id": 2,
              "section_type_id": 4,
              "title": "Item de prueba 6",
              "description": null,
              "position": 1,
              "parent": 1,
              "path": "#prueba6",
              "status": 1,
            }
          ]
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
      "path": "#investigacion",
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
          "path": "#institutos",
          "status": 1,
          "children":[
            {
              "id": 1,
              "section_type_id": 4,
              "title": "Proyectos",
              "description": null,
              "position": 1,
              "parent": 0,
              "path": "#proyectos",
              "status": 1,
            },
            {
              "id": 1,
              "section_type_id": 4,
              "title": "Académicos",
              "description": null,
              "position": 1,
              "parent": 0,
              "path": "#academicos",
              "status": 1,
            },
            {
              "id": 1,
              "section_type_id": 4,
              "title": "Otros Investigadores",
              "description": null,
              "position": 1,
              "parent": 0,
              "path": "#otros-investigadores",
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
      "path": "#comunidad-uoh",
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
          "path": "#ucampus",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Biblioteca",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#biblioteca",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Beneficios",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#beneficios",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Deportes",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#deportes",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Centro de Enseñanza y Aprendizaje",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#centro-de-ensenanza-y-aprendizaje",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Bienestar del Personal",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#bienestar-del-personal",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Gestión de Personas (RRHH)",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#gestion-de-personas",
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
      "path": "#admision",
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
          "path": "#carreras",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Vías de Ingreso",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#vias-de-ingreso",
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
      "path": "#vinculacion",
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
          "path": "#par-explora",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "ICEC",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#icec",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "Arte y Cultura",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#arte-y-cultura",
          "status": 1,
        },
        {
          "id": 1,
          "section_type_id": 4,
          "title": "IAEA (MLC)",
          "description": null,
          "position": 1,
          "parent": 0,
          "path": "#iaea",
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
      "path": "#noticias-y-eventos",
      "status": 1,
      "created_at": "2017-09-05T18:44:20.000-03:00",
      "updated_at": "2018-10-30T12:36:34.000-03:00",
    }
  ]
  constructor(){}
  ngOnInit(): void {

  }
}
