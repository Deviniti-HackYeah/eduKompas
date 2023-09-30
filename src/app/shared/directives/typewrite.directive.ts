import {
  ElementRef,
  Renderer2,
  Directive,
  OnDestroy,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[rtmTypewrite]',
})
export class TypewriteDirective implements OnInit, OnDestroy {
  private interval?: ReturnType<typeof setTimeout>;
  @Input() public text: string = '';
  private currentIndex: number = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  public ngOnInit(): void {
    if (this.text) {
      this.interval = setInterval(() => {
        if (this.currentIndex < this.text.length) {
          const currentText = this.text.slice(0, this.currentIndex + 1);
          this.renderer.setProperty(
            this.el.nativeElement,
            'textContent',
            currentText,
          );
          this.currentIndex++;
        } else {
          this.clearInterval();
        }
      }, 20);
    }
  }

  public ngOnDestroy(): void {
    this.clearInterval();
  }

  private clearInterval(): void {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
