import { Injectable, Directive, ElementRef, HostBinding, EventEmitter, Input, Output, ChangeDetectorRef, NgZone, NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { auditTime, debounceTime, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service that acts a reference to window object
 * in platforms where `window` does not exists
 *
 */
class WindowRef {
    constructor() {
        this.closed = null;
        this.defaultStatus = null;
        this.document = null;
        this.frameElement = null;
        this.frames = null;
        this.history = null;
        this.innerHeight = null;
        this.innerWidth = null;
        this.length = null;
        this.localStorage = null;
        this.location = null;
        this.name = null;
        this.navigator = null;
        this.opener = null;
        this.outerHeight = null;
        this.outerWidth = null;
        this.pageXOffsetleft = null;
        this.pageYOffsetleft = null;
        this.parent = null;
        this.screen = null;
        this.screenLeft = null;
        this.screenTop = null;
        this.screenX = null;
        this.screenY = null;
        this.sessionStorage = null;
        this.scrollX = null;
        this.scrollY = null;
        this.self = null;
        this.status = null;
        this.top = null;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    addEventListener(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    alert(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    atob(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    blur(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    btoa(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    clearInterval(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    clearTimeout(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    close(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    confirm(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    focus(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    getComputedStyle(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    getSelection(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    matchMedia(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    moveBy(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    moveTo(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    open(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    print(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    prompt(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    resizeBy(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    resizeTo(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    removeEventListener(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    scroll(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    scrollBy(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    scrollTo(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    setInterval(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    setTimeout(...args) { }
    /**
     * @param {...?} args
     * @return {?}
     */
    stop(...args) { }
}
WindowRef.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WindowRef.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const eventPathScroll = [
    '$event.target.defaultView.innerHeight',
    '$event.target.defaultView.innerWidth',
    '$event.target.defaultView.scrollY',
    '$event.target.defaultView.scrollX'
];
const eventPathResize = [
    '$event.target.innerHeight',
    '$event.target.innerWidth',
    '$event.target.scrollY',
    '$event.target.scrollX'
];
const eventWindowResize = 'resize';
const eventWindowScroll = 'scroll';
const inViewportClass = 'class.sn-viewport-in';
const notInViewportClass = 'class.sn-viewport-out';
const eventScroll = 'scroll';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A simple lightweight library for Angular with no
 * external dependencies that detects when an element is within the
 * browser viewport and adds a `in-viewport` or `not-in-viewport` class
 * to the element.
 *
 * \@example
 * ```html
 * <p
 *  class="foo"
 *  snInViewport
 *  (inViewportChange)="myEventHandler($event)"
 *  [debounce]="300">
 *  Amet tempor excepteur occaecat nulla.
 * </p>
 * ```
 */
class InViewportDirective {
    /**
     * Creates an instance of InViewportDirective.
     *
     * \@memberof InViewportDirective
     * @param {?} el
     * @param {?} windowRef
     * @param {?} cdRef
     * @param {?} ngZone
     */
    constructor(el, windowRef, cdRef, ngZone) {
        this.el = el;
        this.windowRef = windowRef;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        /**
         * Observable that returns the size of the viewport
         *
         * \@memberof InViewportDirective
         */
        this.viewport$ = new Subject();
        /**
         * Completes on component destroy lifecycle event
         * use to handle unsubscription from infinite observables
         *
         * \@memberof InViewportDirective
         */
        this.ngUnsubscribe$ = new Subject();
        /**
         * Emits event when `inViewport` value changes
         *
         * \@memberof InViewportDirective
         */
        this.inViewportChange = new EventEmitter();
        /**
         * Amount of time in ms to wait for other scroll events
         * before running event handler
         *
         * \@memberof InViewportDirective
         */
        this.debounce = 100;
        this.inViewport = false;
    }
    /**
     * Returns true if element is in viewport
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    get isInViewport() {
        return this.inViewport;
    }
    /**
     * Returns true if element is not in viewport
     *
     * \@readonly
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    get isNotInViewport() {
        return !this.inViewport;
    }
    /**
     * Get window viewport values
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    get viewport() {
        const /** @type {?} */ bottom = this.windowRef.innerHeight;
        const /** @type {?} */ left = 0;
        const /** @type {?} */ right = this.windowRef.innerWidth;
        const /** @type {?} */ top = 0;
        return { bottom, right, left, top };
    }
    /**
     * Subscribe to `viewport$` observable which
     * will call event handler
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    ngAfterViewInit() {
        this.calculateInViewportStatus();
        this.cdRef.detectChanges();
        this.viewport$
            .pipe(debounceTime(this.debounce), takeUntil(this.ngUnsubscribe$))
            .subscribe(() => this.calculateInViewportStatus());
        // Listen for window scroll/resize events.
        this.ngZone.runOutsideAngular(() => {
            merge(fromEvent(/** @type {?} */ (this.windowRef), eventWindowResize), fromEvent(/** @type {?} */ (this.windowRef), eventWindowScroll))
                .pipe(auditTime(this.debounce), takeUntil(this.ngUnsubscribe$))
                .subscribe(() => this.onViewportChange());
        });
        if (this.parent) {
            this.ngZone.runOutsideAngular(() => {
                fromEvent(this.parent, eventScroll)
                    .pipe(auditTime(this.debounce), takeUntil(this.ngUnsubscribe$))
                    .subscribe(() => this.onParentScroll());
            });
        }
    }
    /**
     * Get window element from parent scroll event and
     * emit next value in `viewport$` observable
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    onParentScroll() {
        this.viewport$.next();
    }
    /**
     * On window scroll/resize/load events
     * emit next `viewport$` observable value
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    onViewportChange() {
        this.viewport$.next();
    }
    /**
     * Calculate inViewport status and emit event
     * when viewport status has changed
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    calculateInViewportStatus() {
        const /** @type {?} */ el = this.el.nativeElement;
        let /** @type {?} */ inParentViewport = false;
        let /** @type {?} */ inWindowViewport = false;
        if (this.parent) {
            const /** @type {?} */ parentBounds = this.parent.getBoundingClientRect();
            inParentViewport = this.isInElementViewport(parentBounds, el);
            inWindowViewport = this.isInElementViewport(this.viewport, this.parent);
        }
        else {
            inParentViewport = true;
            inWindowViewport = this.isInElementViewport(this.viewport, el);
        }
        const /** @type {?} */ oldInViewport = this.inViewport;
        this.inViewport = (inParentViewport && inWindowViewport);
        if (oldInViewport !== this.inViewport) {
            this.ngZone.run(() => this.inViewportChange.emit(this.inViewport));
        }
    }
    /**
     * Returns true if an element is currently within the `viewport`
     *
     * \@memberof InViewportDirective
     * @param {?} viewport
     * @param {?} el
     * @return {?}
     */
    isInElementViewport(viewport, el) {
        // Check if `getBoundingClientRect` is a function in case running this code
        // in an evironment without the DOM
        if (typeof el.getBoundingClientRect === 'function') {
            const /** @type {?} */ elBounds = el.getBoundingClientRect();
            return (((elBounds.top >= viewport.top) && (elBounds.top <= viewport.bottom) ||
                (elBounds.bottom >= viewport.top) && (elBounds.bottom <= viewport.bottom) ||
                (elBounds.top <= viewport.top) && (elBounds.bottom >= viewport.bottom)) &&
                ((elBounds.left >= viewport.left) && (elBounds.left <= viewport.right) ||
                    (elBounds.right >= viewport.left) && (elBounds.right <= viewport.right) ||
                    (elBounds.left <= viewport.left && elBounds.right >= viewport.right)));
        }
        else {
            return false;
        }
    }
    /**
     * trigger `ngUnsubscribe` complete on
     * component destroy lifecycle hook
     *
     * \@memberof InViewportDirective
     * @return {?}
     */
    ngOnDestroy() {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
InViewportDirective.decorators = [
    { type: Directive, args: [{
                selector: '[snInViewport]',
                exportAs: 'snInViewport'
            },] },
];
/** @nocollapse */
InViewportDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: WindowRef, },
    { type: ChangeDetectorRef, },
    { type: NgZone, },
];
InViewportDirective.propDecorators = {
    "inViewportChange": [{ type: Output },],
    "debounce": [{ type: Input },],
    "parent": [{ type: Input },],
    "isInViewport": [{ type: HostBinding, args: [inViewportClass,] },],
    "isNotInViewport": [{ type: HostBinding, args: [notInViewportClass,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const defaultProviders = [
    WindowRef
];
/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browser viewport and adds a
 * sn-viewport-in or sn-viewport-out class to the element.
 */
class InViewportModule {
    /**
     * Specify a static method for root module to ensure providers are only provided once
     * but allows the module to still be imported into other modules without reproviding
     * services.
     *
     * \@memberof InViewportModule
     * @param {?=} providers
     * @return {?}
     */
    static forRoot(providers = defaultProviders) {
        return {
            ngModule: InViewportModule,
            providers: providers
        };
    }
}
InViewportModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InViewportDirective],
                exports: [InViewportDirective]
            },] },
];
/** @nocollapse */
InViewportModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { InViewportModule, InViewportDirective, eventPathResize, eventPathScroll, eventScroll, eventWindowResize, eventWindowScroll, inViewportClass, notInViewportClass, WindowRef };
//# sourceMappingURL=thisissoon-angular-inviewport.js.map
