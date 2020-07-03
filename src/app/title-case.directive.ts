import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appTitleCase]'
})
export class TitleCaseDirective {

  // constructor(private _elemRef: ElementRef, private _renderer: Renderer) {
  //   this._renderer.setElementProperty(this._elemRef.nativeElement, 'innerHTML', 'my new content');
  //  }


  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'red';
  }
}

