import { Component, Input, ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'environment-banner',
    template: '<div class="env-container">{{text}}</div>',
    styles: [`.env-container {
        background-color: yellow;
        color: black;
        font-family: 'Roboto Bold';
        position: fixed;
        text-align: center;
        top: 0;
        width: 100%;
        z-index: 10;
      }`]
})
export class EnvironmentBannerComponent implements AfterViewInit
{
    constructor(private viewContainer: ViewContainerRef) { }

    @Input() moveDownSelector = '';
    @Input() text = '';

    ngAfterViewInit(): void
    {
        const element = this.viewContainer.element.nativeElement;
        const style = window.getComputedStyle(element.firstElementChild);
        const thisHeight = parseInt(style.height || '', 10);

        // move siblings and other specified elements down to make room for banner
        this.getSiblings(element).concat(this.getSelected(this.moveDownSelector)).forEach(el =>
        {
            const positionRect = el.getBoundingClientRect();
            const top = +positionRect.top;

            el.style.top = `${top + thisHeight}px`;
        });
    }

    private getSelected(selector: string): Element[]
    {
        const selected: Element[] = [];
        const selectedNodes = document.querySelectorAll(selector);

        Array.prototype.forEach.call(
            selectedNodes,
            (el: Element) => selected.push(el));

        return selected;
    }

    private getSiblings(element: any): any[]
    {
        const siblings = [];
        let sibling = element.parentNode.firstChild;

        while (sibling)
        {
            if (sibling.nodeType === 1 && sibling !== element)
            {
                siblings.push(sibling);
            }

            sibling = sibling.nextSibling;
        }

        return siblings;
    }
}
