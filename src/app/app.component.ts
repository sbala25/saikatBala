import { Component, HostListener, OnInit } from '@angular/core';
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
  isShowScrollTop: boolean;
  topPosToStartShowing = 100;
  title = 'saikatBala';

  ngOnInit(): void {
    setTimeout(() => {
      this.preloader = false;
    }, 4000);
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShowScrollTop = true;
    } else {
      this.isShowScrollTop = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
