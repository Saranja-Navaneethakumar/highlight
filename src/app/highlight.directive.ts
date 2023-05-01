import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input('appHighlight') searchTerm: string;

  constructor(private el: ElementRef) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchTerm && this.el.nativeElement.innerText) {
      const regex = new RegExp(`(${this.searchTerm})`, 'gi');
      const result = this.el.nativeElement.innerText.replace(regex, '<mark class="highlighted-text">$1</mark>');
      this.el.nativeElement.innerHTML = result;
    }
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   const highlightedText = this.el.nativeElement.querySelector('.highlighted-text');
  //   if (highlightedText) {
  //     highlightedText.classList.add('hovered');
  //     highlightedText.style.backgroundColor = 'red';
  //   }
  // }

  // @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
  //   const highlightedText = this.el.nativeElement.querySelector('.highlighted-text');
  //   if (highlightedText) {
  //     highlightedText.classList.remove('hovered');
  //     highlightedText.style.backgroundColor = 'green';
  //   }
  // }
  
 


}
