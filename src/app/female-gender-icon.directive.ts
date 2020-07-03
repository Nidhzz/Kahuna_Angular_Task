import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFemaleGenderIcon]'
})
export class FemaleGenderIconDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const img3 = this.renderer.createElement('img');
    this.renderer.setAttribute(img3, 'src', './assets/icons8-female-user-50.png');
    this.renderer.setAttribute(img3, 'width', '20px');
    this.renderer.setAttribute(img3, 'height', '20px');
    this.renderer.appendChild(this.el.nativeElement, img3);
  }

}
