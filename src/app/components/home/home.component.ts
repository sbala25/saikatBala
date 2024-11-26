import { Component, OnInit } from '@angular/core';
import { TypewriterServiceService } from '../../service/typewriter-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  typedText$:any;

  constructor(private _typewriterService: TypewriterServiceService){}
  ngOnInit(): void {
    this.typedText$ = this._typewriterService.getTypewriterEffect(["Software Engineer", "Frontend Developer", "Backend Developer", ]);
  }

}
