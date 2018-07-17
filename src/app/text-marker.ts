import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[text-marker]'
})

export class TextMarker {
    @Input('text-marker') private color: string;
    constructor(
        private element: ElementRef, 
        private renderer: Renderer
    ) {}

    @HostListener('mouseenter')
    onEnter() {
        this.applyStyle(this.color, true);
    }

    @HostListener('mouseleave')
    onExit() {
        this.applyStyle('', false);
    }

    private applyStyle(color: string, mark: boolean) {
        this.renderer.setElementStyle(this.element.nativeElement, 'text-decoration', mark ? 'underline' : '');
        this.renderer.setElementStyle(this.element.nativeElement, 'color', color);
    }
}