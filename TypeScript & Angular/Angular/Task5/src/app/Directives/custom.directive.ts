import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ref:ElementRef) {
 }  

@HostListener('click') click(){
this.ref.nativeElement.style.color= this.color.fontColor;
this.ref.nativeElement.style.backgroundColor= this.color.bgColor;
this.ref.nativeElement.style.fontFamily= this.color.font;


}
@Input('appCustom') color:any;

}
