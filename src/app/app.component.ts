import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/common/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/common/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  preloader:boolean = true;
  title = 'saikatBala';

  ngOnInit(): void {
    setTimeout(() => {
      this.preloader = false;
    }, 4000);
  }
}
