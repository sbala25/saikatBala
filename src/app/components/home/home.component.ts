import { Component, OnInit } from '@angular/core';
import { TypewriterServiceService } from '../../service/typewriter-service.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_brands from '@fortawesome/free-brands-svg-icons';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  typedText$:any;
  fortawesome_brands = fortawesome_brands;
  fortawesome_solid = fortawesome_solid;

  constructor(private _typewriterService: TypewriterServiceService){}
  ngOnInit(): void {
    this.typedText$ = this._typewriterService.getTypewriterEffect(["Software Engineer", "Frontend Developer", "Backend Developer", ]);
  }

}
