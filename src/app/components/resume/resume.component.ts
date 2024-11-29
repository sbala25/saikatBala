import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  imports: [PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent{
  @ViewChild('pdfContainer') pdfContainer: ElementRef;

  constructor(private _elementRef:ElementRef){}
  pageRendered(){
    let height = this._elementRef.nativeElement.getElementsByClassName('pdfViewer')[0].offsetHeight;
    this.pdfContainer.nativeElement.setAttribute("style",`height:${height+10}px`);
  }

}
