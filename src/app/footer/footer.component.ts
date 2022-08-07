import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  iconWhats: String = '';
  linkGithub: string = ''
  
  faceLink: String = 'https://www.facebook.com/MarcosCarvalhoA/';
  LinkedinLink: String = 'https://www.linkedin.com/in/marcoscarvalho45/';
  TwitchLink: String = 'https://www.twitch.tv/marckinhofree';
  TwitterLink: String = 'https://twitter.com/marcosantcarva1';
  

  constructor( ) { 
  
    this.iconWhats = '';
    this.linkGithub = 'https://github.com/Marck45';
    
  }

  ngOnInit(): void {
  }

}
