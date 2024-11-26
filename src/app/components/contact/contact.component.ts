import { Component } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";

@Component({
  selector: 'app-contact',
  imports: [BlogsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
