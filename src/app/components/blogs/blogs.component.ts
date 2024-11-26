import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-blogs',
  imports: [LottieComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: 'assets/json/lottie.json',
    loop: true,
    autoplay: true
  };
  
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

}
