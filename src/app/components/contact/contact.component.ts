import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_regular from '@fortawesome/free-regular-svg-icons';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(){}

  contactMeForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });
  fortawesome_solid = fortawesome_solid;
  fortawesome_regular = fortawesome_regular;

  onContactMeSubmit(){
    console.log(this.contactMeForm.value);
    window.alert("Still I am working this functionality. I will enable soon");
  }
}
