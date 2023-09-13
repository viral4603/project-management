import { CommonModule } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDragOver]',
  standalone: true,
})
export class HighlightDragOverDirective {
  el: ElementRef;
  constructor(el: ElementRef) {
    // el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouse entering')
  }
  @HostListener("dragover") onDragOver() {
    // evt.preventDefault()
    console.log("A");
  }
}
