import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fortawesome_solid from '@fortawesome/free-solid-svg-icons';
import * as fortawesome_regular from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  navColour:boolean = false;
  isCollapseMenu:boolean = false;
  fortawesome_solid = fortawesome_solid;
  fortawesome_regular = fortawesome_regular;

  constructor(private _elementRef: ElementRef, private  _renderer: Renderer2){}  

  ngAfterViewInit() {
    let navLinkList = this._elementRef.nativeElement.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinkList.length; i++) {
      navLinkList[i].addEventListener("click", this.collapseMenuClose.bind(this));
    }
  }

  collapseMenu(){
    this.isCollapseMenu = !this.isCollapseMenu;
  }
  collapseMenuClose(){
    this.isCollapseMenu = false;
  }


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navColour = scrollPosition >= 20;
  }

}
