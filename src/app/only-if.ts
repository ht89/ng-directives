import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[onlyIf]'
})

export class OnlyIf {
    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef
    ) {}

    @Input()
    set onlyIf(condition: boolean) {
        if (condition) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainerRef.clear();
        }
    }
}