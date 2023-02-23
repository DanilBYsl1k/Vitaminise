/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { filter, fromEvent, pipe, Subscription } from 'rxjs';

const CLASS_NAME = 'open';

@Directive({
  selector: '[clickOitside]',
})
export class DropListDirective {
  @HostListener('click') onClickElement() {
    this.onToogleClassElemnt();
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private onToogleClassElemnt(): void {
    const childElemen = this.element.nativeElement.nextElementSibling;

    if (childElemen?.classList?.contains('open')) {
      this.renderer.removeClass(childElemen, CLASS_NAME);

      return;
    }

    this.renderer.addClass(childElemen, CLASS_NAME);
  }
}
