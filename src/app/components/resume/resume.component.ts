import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  imports: [FontAwesomeModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent{
  fortawesome_solid = fortawesome_solid;

  constructor(){}

}
