import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    menuBar = document.getElementById("menu-bar") as HTMLElement;
    nav = document.getElementById("nav") as HTMLElement;
    menuBg = document.getElementById("menu-bg") as HTMLElement;



  constructor() {}

  ngOnInit(): void {
    this.menuBar = document.getElementById("menu-bar") as HTMLElement;
    this.nav = document.getElementById("nav") as HTMLElement;
    this.menuBg = document.getElementById("menu-bg") as HTMLElement;


  }

  
  menuOnClick() {
      this.menuBar.classList.toggle("change");
      this.nav.classList.toggle("change");
      this.menuBg.classList.toggle("change-bg");
      
  }
}
