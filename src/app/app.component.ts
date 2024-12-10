import { ChangeDetectionStrategy, Component, HostListener, isDevMode, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/common/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/common/footer/footer.component";
import { LoaderComponent } from "./components/common/loader/loader.component";
import { UtilsService } from './service/utils.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  preloader: boolean = true;
  isShowScrollTop: boolean;
  topPosToStartShowing = 100;
  title = 'saikatBala';
  isDevMode:boolean = isDevMode();
  isLoaderApi = signal<boolean>(false);
  fortawesome_solid = fortawesome_solid;

  constructor(private _utilsService:UtilsService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.preloader = false;
    }, 4000);
    this._utilsService.isLoaderApi.subscribe(res=>{
      this.isLoaderApi.update(()=>res);
    });
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
