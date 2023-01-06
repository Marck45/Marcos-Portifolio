import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  name:any = document.getElementById("inputName");

  userForm!: FormGroup;
  

  constructor() { 

    this.name;
    

  }

  ngOnInit(): void {
    
  }

  btnSubmit(){
    console.log("ok");

    if (this.name == "") {
        console.log("vazio");
    } else {
      console.log("seu nome é:", this.name);
    }

  }
}
