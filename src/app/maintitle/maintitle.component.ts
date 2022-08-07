import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintitle',
  templateUrl: './maintitle.component.html',
  styleUrls: ['./maintitle.component.css']
})
export class MaintitleComponent implements OnInit {

  marckAvatar: String = '';

  constructor() { 

      this.marckAvatar = '/assets/img/pngwing.com (2).png';

   }

  ngOnInit(): void {
    
  }

}
