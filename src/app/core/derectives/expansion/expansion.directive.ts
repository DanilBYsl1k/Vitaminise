import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

const CLASS_NAME = 'open';

@Directive({ selector: '[vtmExpansion]', standalone: true })
export class ExpansionDirective {
  @HostListener('click') onClickElement() {
    this.onToggleClass();
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private onToggleClass(): void {
    const child = this.element.nativeElement.nextElementSibling;

    if (child?.classList?.contains('open')) {
      this.renderer.removeClass(child, CLASS_NAME);

      return;
    }

    this.renderer.addClass(child, CLASS_NAME);
  }
}
