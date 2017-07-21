import { Component, OnInit } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submit data: " + JSON.stringify(this.address));
  }
}
