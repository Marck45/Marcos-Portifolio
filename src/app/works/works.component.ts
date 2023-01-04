import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  imagePath1: string ='';
  imagePath2: string ='';
  imagePath3: string ='';
  imagePath4: string ='';
  work1: string = '';
  work2: string = '';
  work3: string = '';
  work4: string = '';
  linkGithub: string = ''

  constructor() { 
    this.imagePath1 = '/assets/img/work1.png';
    this.imagePath2 = '/assets/img/work2.png';
    this.imagePath3 = '/assets/img/work3.png';
    this.imagePath4 = '/assets/img/work3.png';
    this.work1 = 'https://www.cursoseducativa.com.br';
    this.work2 = 'https://github.com/Marck45/CRUD-Angular';
    this.work3 = 'https://github.com/Marck45/Calculadora-JS';
    this.work4 = 'https://github.com/Marck45/Tela-de-login';

    this.linkGithub = 'https://github.com/Marck45';
  }

  ngOnInit(): void {

  }

}
