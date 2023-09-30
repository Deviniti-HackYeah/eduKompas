import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rtmVar]',
})
export class VarDirective {
  @Input()
  public set rtmVar(context: unknown) {
    this._context.$implicit = this._context.rtmVar = context;

    if (!this._hasView) {
      this._vcRef.createEmbeddedView(this._templateRef, this._context);
      this._hasView = true;
    }
  }

  private readonly _context: {
    $implicit: unknown;
    rtmVar: unknown;
  } = {
    $implicit: null,
    rtmVar: null,
  };

  private _hasView: boolean = false;

  constructor(
    private readonly _templateRef: TemplateRef<unknown>,
    private readonly _vcRef: ViewContainerRef,
  ) {}
}
