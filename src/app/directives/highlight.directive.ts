import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private er: ElementRef) {
      er.nativeElement.style.backgroundColor = "yellow";
   }

   @Input("appHighlight") newColor:string;

   @HostListener('mouseenter') mouseEnter (){
      this.highlight(this.newColor || 'yellow')
   }

   @HostListener('mouseleave') mouseLeave (){
    this.highlight( null )
   }

   highlight(color:string){
    this.er.nativeElement.style.backgroundColor = color;
   }

 }
