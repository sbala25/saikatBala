import { Component } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";

@Component({
  selector: 'app-resume',
  imports: [BlogsComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
