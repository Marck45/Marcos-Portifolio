import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faceLink: String = 'https://www.facebook.com/MarcosCarvalhoA/';
  LinkedinLink: String = 'https://www.linkedin.com/in/marcoscarvalho45/';
  TwitchLink: String = 'https://www.twitch.tv/marckinhofree';
  TwitterLink: String = 'https://twitter.com/marcosantcarva1';

  constructor() { }

  ngOnInit(): void {


  }

}
