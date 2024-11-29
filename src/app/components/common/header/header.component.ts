import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  constructor(private _elementRef: ElementRef, private  _renderer: Renderer2){}

  navColour:boolean = false;
  isCollapseMenu:boolean = false;

  ngAfterViewInit() {
    let navLinkList = this._elementRef.nativeElement.getElementsByClassName('nav-link');
    // this._renderer.listen(elementRef.nativeElement, 'click', (event) => {
    //   // Do something with 'event'
    // })

    for (let i = 0; i < navLinkList.length; i++) {
      navLinkList[i].addEventListener("click", this.collapseMenuClose.bind(this));
    }
    // navLinkList.forEach((element:any) => {
    //   element.addEventListener('click', this.collapseMenuClose.bind(this));
    // });
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
