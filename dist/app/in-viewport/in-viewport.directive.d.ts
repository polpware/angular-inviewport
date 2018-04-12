import { ElementRef, EventEmitter, OnDestroy, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { WindowRef } from './window/window-ref.service';
import { Viewport } from './shared/viewport.model';
/**
 * A simple lightweight library for Angular with no
 * external dependencies that detects when an element is within the
 * browser viewport and adds a `in-viewport` or `not-in-viewport` class
 * to the element.
 *
 * @example
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
export declare class InViewportDirective implements AfterViewInit, OnDestroy {
    private el;
    private windowRef;
    private cdRef;
    ngZone: NgZone;
    /**
     * If true means the element is in the browser viewport
     *
     * @memberof InViewportDirective
     */
    private inViewport;
    /**
     * Observable that returns the size of the viewport
     *
     * @memberof InViewportDirective
     */
    private viewport$;
    /**
     * Completes on component destroy lifecycle event
     * use to handle unsubscription from infinite observables
     *
     * @memberof InViewportDirective
     */
    private ngUnsubscribe$;
    /**
     * Emits event when `inViewport` value changes
     *
     * @memberof InViewportDirective
     */
    inViewportChange: EventEmitter<boolean>;
    /**
     * Amount of time in ms to wait for other scroll events
     * before running event handler
     *
     * @memberof InViewportDirective
     */
    debounce: number;
    /**
     * A parent element to listen to scroll events from
     *
     * @memberof InViewportDirective
     */
    parent: any;
    /**
     * Returns true if element is in viewport
     *
     * @memberof InViewportDirective
     */
    readonly isInViewport: boolean;
    /**
     * Returns true if element is not in viewport
     *
     * @readonly
     *
     * @memberof InViewportDirective
     */
    readonly isNotInViewport: boolean;
    /**
     * Get window viewport values
     *
     * @memberof InViewportDirective
     */
    readonly viewport: Viewport;
    /**
     * Creates an instance of InViewportDirective.
     *
     * @memberof InViewportDirective
     */
    constructor(el: ElementRef, windowRef: WindowRef, cdRef: ChangeDetectorRef, ngZone: NgZone);
    /**
     * Subscribe to `viewport$` observable which
     * will call event handler
     *
     * @memberof InViewportDirective
     */
    ngAfterViewInit(): void;
    /**
     * Get window element from parent scroll event and
     * emit next value in `viewport$` observable
     *
     * @memberof InViewportDirective
     */
    onParentScroll(): void;
    /**
     * On window scroll/resize/load events
     * emit next `viewport$` observable value
     *
     * @memberof InViewportDirective
     */
    onViewportChange(): void;
    /**
     * Calculate inViewport status and emit event
     * when viewport status has changed
     *
     * @memberof InViewportDirective
     */
    calculateInViewportStatus(): void;
    /**
     * Returns true if an element is currently within the `viewport`
     *
     * @memberof InViewportDirective
     */
    isInElementViewport(viewport: Viewport, el: any): boolean;
    /**
     * trigger `ngUnsubscribe` complete on
     * component destroy lifecycle hook
     *
     * @memberof InViewportDirective
     */
    ngOnDestroy(): void;
}
