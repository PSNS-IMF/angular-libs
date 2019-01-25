import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  template:
  `<div class="alert alert-warning text-center ie-banner" role="alert">
    <button type="button" class="close" aria-label="Close" (click)="dismiss()">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>{{message}}</strong>
  </div>`,
  styles: [`.ie-banner {
    '-webkit-transition': 'all linear 0.5s',
    'display': 'none',
    'left': '0px',
    'opacity': 0,
    'position': 'fixed',
    'transition': 'all linear 0.5s',
    'width': '100%'
  }`]
})
export class IeBrowserBannerComponent implements OnInit
{
  private readonly _element: Element;

  @Input() message = '';

  constructor(private viewContainer: ViewContainerRef)
  {
    this._element = viewContainer.element.nativeElement;
  }

  ngOnInit()
  {
    this.message =
      this.message
      || 'We recommend using Chrome, Edge, or Firefox for the optimal experience.';
  }

  dismiss()
  {
    this._element.remove();
  }

  private isIe()
  {
    // Internet Explorer 6-11
    return false || !!document[0].documentMode;
  }
}
