import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {


    constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

}
