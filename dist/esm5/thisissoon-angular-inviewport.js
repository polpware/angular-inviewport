import { Injectable, Directive, ElementRef, HostBinding, EventEmitter, Input, Output, ChangeDetectorRef, NgZone, NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { auditTime, debounceTime, takeUntil } from 'rxjs/operators';

var WindowRef = /** @class */ (function () {
    function WindowRef() {
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
    WindowRef.prototype.addEventListener = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.alert = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.atob = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.blur = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.btoa = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.clearInterval = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.clearTimeout = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.close = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.confirm = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.focus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.getComputedStyle = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.getSelection = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.matchMedia = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.moveBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.moveTo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.open = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.print = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.prompt = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.resizeBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.resizeTo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.removeEventListener = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.scroll = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.scrollBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.scrollTo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.setInterval = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.setTimeout = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    WindowRef.prototype.stop = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    return WindowRef;
}());
WindowRef.decorators = [
    { type: Injectable },
];
WindowRef.ctorParameters = function () { return []; };
var eventPathScroll = [
    '$event.target.defaultView.innerHeight',
    '$event.target.defaultView.innerWidth',
    '$event.target.defaultView.scrollY',
    '$event.target.defaultView.scrollX'
];
var eventPathResize = [
    '$event.target.innerHeight',
    '$event.target.innerWidth',
    '$event.target.scrollY',
    '$event.target.scrollX'
];
var eventWindowResize = 'resize';
var eventWindowScroll = 'scroll';
var inViewportClass = 'class.sn-viewport-in';
var notInViewportClass = 'class.sn-viewport-out';
var eventScroll = 'scroll';
var InViewportDirective = /** @class */ (function () {
    function InViewportDirective(el, windowRef, cdRef, ngZone) {
        this.el = el;
        this.windowRef = windowRef;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        this.viewport$ = new Subject();
        this.ngUnsubscribe$ = new Subject();
        this.inViewportChange = new EventEmitter();
        this.debounce = 100;
        this.inViewport = false;
    }
    Object.defineProperty(InViewportDirective.prototype, "isInViewport", {
        get: function () {
            return this.inViewport;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InViewportDirective.prototype, "isNotInViewport", {
        get: function () {
            return !this.inViewport;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InViewportDirective.prototype, "viewport", {
        get: function () {
            var bottom = this.windowRef.innerHeight;
            var left = 0;
            var right = this.windowRef.innerWidth;
            var top = 0;
            return { bottom: bottom, right: right, left: left, top: top };
        },
        enumerable: true,
        configurable: true
    });
    InViewportDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.calculateInViewportStatus();
        }, 100);
        this.cdRef.detectChanges();
        this.viewport$
            .pipe(debounceTime(this.debounce), takeUntil(this.ngUnsubscribe$))
            .subscribe(function () { return _this.calculateInViewportStatus(); });
        this.ngZone.runOutsideAngular(function () {
            merge(fromEvent((_this.windowRef), eventWindowResize), fromEvent((_this.windowRef), eventWindowScroll))
                .pipe(auditTime(_this.debounce), takeUntil(_this.ngUnsubscribe$))
                .subscribe(function () { return _this.onViewportChange(); });
        });
        if (this.parent) {
            this.ngZone.runOutsideAngular(function () {
                fromEvent(_this.parent, eventScroll)
                    .pipe(auditTime(_this.debounce), takeUntil(_this.ngUnsubscribe$))
                    .subscribe(function () { return _this.onParentScroll(); });
            });
        }
    };
    InViewportDirective.prototype.onParentScroll = function () {
        this.viewport$.next();
    };
    InViewportDirective.prototype.onViewportChange = function () {
        this.viewport$.next();
    };
    InViewportDirective.prototype.calculateInViewportStatus = function () {
        var _this = this;
        var el = this.el.nativeElement;
        var inParentViewport = false;
        var inWindowViewport = false;
        if (this.parent) {
            var parentBounds = this.parent.getBoundingClientRect();
            inParentViewport = this.isInElementViewport(parentBounds, el);
            inWindowViewport = this.isInElementViewport(this.viewport, this.parent);
        }
        else {
            inParentViewport = true;
            inWindowViewport = this.isInElementViewport(this.viewport, el);
        }
        var oldInViewport = this.inViewport;
        this.inViewport = (inParentViewport && inWindowViewport);
        if (oldInViewport !== this.inViewport) {
            this.ngZone.run(function () { return _this.inViewportChange.emit(_this.inViewport); });
        }
    };
    InViewportDirective.prototype.isInElementViewport = function (viewport, el) {
        if (typeof el.getBoundingClientRect === 'function') {
            var elBounds = el.getBoundingClientRect();
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
    };
    InViewportDirective.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    return InViewportDirective;
}());
InViewportDirective.decorators = [
    { type: Directive, args: [{
                selector: '[snInViewport]',
                exportAs: 'snInViewport'
            },] },
];
InViewportDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: WindowRef, },
    { type: ChangeDetectorRef, },
    { type: NgZone, },
]; };
InViewportDirective.propDecorators = {
    "inViewportChange": [{ type: Output },],
    "debounce": [{ type: Input },],
    "parent": [{ type: Input },],
    "isInViewport": [{ type: HostBinding, args: [inViewportClass,] },],
    "isNotInViewport": [{ type: HostBinding, args: [notInViewportClass,] },],
};
var defaultProviders = [
    WindowRef
];
var InViewportModule = /** @class */ (function () {
    function InViewportModule() {
    }
    InViewportModule.forRoot = function (providers) {
        if (providers === void 0) { providers = defaultProviders; }
        return {
            ngModule: InViewportModule,
            providers: providers
        };
    };
    return InViewportModule;
}());
InViewportModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InViewportDirective],
                exports: [InViewportDirective]
            },] },
];
InViewportModule.ctorParameters = function () { return []; };

export { InViewportModule, InViewportDirective, eventPathResize, eventPathScroll, eventScroll, eventWindowResize, eventWindowScroll, inViewportClass, notInViewportClass, WindowRef };
//# sourceMappingURL=thisissoon-angular-inviewport.js.map
