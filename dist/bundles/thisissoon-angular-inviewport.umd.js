(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('@angular/core'),
        require('rxjs'),
        require('rxjs/operators')
      )
    : typeof define === 'function' && define.amd
      ? define('@thisissoon/angular-inviewport', [
          'exports',
          '@angular/core',
          'rxjs',
          'rxjs/operators'
        ], factory)
      : factory(
          ((global.thisissoon = global.thisissoon || {}),
          (global.thisissoon['angular-inviewport'] = {})),
          global.ng.core,
          global.rxjs,
          global.Rx.Observable.prototype
        );
})(this, function(exports, core, rxjs, operators) {
  'use strict';

  var WindowRef = /** @class */ (function() {
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
    WindowRef.prototype.addEventListener = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.alert = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.atob = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.blur = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.btoa = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.clearInterval = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.clearTimeout = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.close = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.confirm = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.focus = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.getComputedStyle = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.getSelection = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.matchMedia = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.moveBy = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.moveTo = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.open = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.print = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.prompt = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.resizeBy = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.resizeTo = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.removeEventListener = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.scroll = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.scrollBy = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.scrollTo = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.setInterval = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.setTimeout = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    WindowRef.prototype.stop = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    return WindowRef;
  })();
  WindowRef.decorators = [{ type: core.Injectable }];
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
  var InViewportDirective = /** @class */ (function() {
    function InViewportDirective(el, windowRef, cdRef, ngZone) {
      this.el = el;
      this.windowRef = windowRef;
      this.cdRef = cdRef;
      this.ngZone = ngZone;
      this.viewport$ = new rxjs.Subject();
      this.ngUnsubscribe$ = new rxjs.Subject();
      this.inViewportChange = new core.EventEmitter();
      this.debounce = 100;
    }
    Object.defineProperty(InViewportDirective.prototype, 'isInViewport', {
      get: function() {
        return this.inViewport;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InViewportDirective.prototype, 'isNotInViewport', {
      get: function() {
        return !this.inViewport;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InViewportDirective.prototype, 'viewport', {
      get: function() {
        var bottom = this.windowRef.innerHeight;
        var left = 0;
        var right = this.windowRef.innerWidth;
        var top = 0;
        return { bottom: bottom, right: right, left: left, top: top };
      },
      enumerable: true,
      configurable: true
    });
    InViewportDirective.prototype.ngAfterViewInit = function() {
      var _this = this;
      this.calculateInViewportStatus();
      this.cdRef.detectChanges();
      this.viewport$
        .pipe(
          operators.debounceTime(this.debounce),
          operators.takeUntil(this.ngUnsubscribe$)
        )
        .subscribe(function() {
          return _this.calculateInViewportStatus();
        });
      this.ngZone.runOutsideAngular(function() {
        rxjs
          .merge(
            rxjs.fromEvent(_this.windowRef, eventWindowResize),
            rxjs.fromEvent(_this.windowRef, eventWindowScroll)
          )
          .pipe(
            operators.auditTime(_this.debounce),
            operators.takeUntil(_this.ngUnsubscribe$)
          )
          .subscribe(function() {
            return _this.onViewportChange();
          });
      });
      if (this.parent) {
        this.ngZone.runOutsideAngular(function() {
          rxjs
            .fromEvent(_this.parent, eventScroll)
            .pipe(
              operators.auditTime(_this.debounce),
              operators.takeUntil(_this.ngUnsubscribe$)
            )
            .subscribe(function() {
              return _this.onParentScroll();
            });
        });
      }
    };
    InViewportDirective.prototype.onParentScroll = function() {
      this.viewport$.next();
    };
    InViewportDirective.prototype.onViewportChange = function() {
      this.viewport$.next();
    };
    InViewportDirective.prototype.calculateInViewportStatus = function() {
      var _this = this;
      var el = this.el.nativeElement;
      var inParentViewport = false;
      var inWindowViewport = false;
      if (this.parent) {
        var parentBounds = this.parent.getBoundingClientRect();
        inParentViewport = this.isInElementViewport(parentBounds, el);
        inWindowViewport = this.isInElementViewport(this.viewport, this.parent);
      } else {
        inParentViewport = true;
        inWindowViewport = this.isInElementViewport(this.viewport, el);
      }
      var oldInViewport = this.inViewport;
      this.inViewport = inParentViewport && inWindowViewport;
      if (oldInViewport !== this.inViewport) {
        this.ngZone.run(function() {
          return _this.inViewportChange.emit(_this.inViewport);
        });
      }
    };
    InViewportDirective.prototype.isInElementViewport = function(viewport, el) {
      if (typeof el.getBoundingClientRect === 'function') {
        var elBounds = el.getBoundingClientRect();
        return (
          ((elBounds.top >= viewport.top && elBounds.top <= viewport.bottom) ||
            (elBounds.bottom >= viewport.top &&
              elBounds.bottom <= viewport.bottom) ||
            (elBounds.top <= viewport.top &&
              elBounds.bottom >= viewport.bottom)) &&
          ((elBounds.left >= viewport.left &&
            elBounds.left <= viewport.right) ||
            (elBounds.right >= viewport.left &&
              elBounds.right <= viewport.right) ||
            (elBounds.left <= viewport.left &&
              elBounds.right >= viewport.right))
        );
      } else {
        return false;
      }
    };
    InViewportDirective.prototype.ngOnDestroy = function() {
      this.ngUnsubscribe$.next();
      this.ngUnsubscribe$.complete();
    };
    return InViewportDirective;
  })();
  InViewportDirective.decorators = [
    {
      type: core.Directive,
      args: [
        {
          selector: '[snInViewport]',
          exportAs: 'snInViewport'
        }
      ]
    }
  ];
  InViewportDirective.ctorParameters = function() {
    return [
      { type: core.ElementRef },
      { type: WindowRef },
      { type: core.ChangeDetectorRef },
      { type: core.NgZone }
    ];
  };
  InViewportDirective.propDecorators = {
    inViewportChange: [{ type: core.Output }],
    debounce: [{ type: core.Input }],
    parent: [{ type: core.Input }],
    isInViewport: [{ type: core.HostBinding, args: [inViewportClass] }],
    isNotInViewport: [{ type: core.HostBinding, args: [notInViewportClass] }]
  };
  var defaultProviders = [WindowRef];
  var InViewportModule = /** @class */ (function() {
    function InViewportModule() {}
    InViewportModule.forRoot = function(providers) {
      if (providers === void 0) {
        providers = defaultProviders;
      }
      return {
        ngModule: InViewportModule,
        providers: providers
      };
    };
    return InViewportModule;
  })();
  InViewportModule.decorators = [
    {
      type: core.NgModule,
      args: [
        {
          declarations: [InViewportDirective],
          exports: [InViewportDirective]
        }
      ]
    }
  ];

  exports.InViewportModule = InViewportModule;
  exports.InViewportDirective = InViewportDirective;
  exports.eventPathResize = eventPathResize;
  exports.eventPathScroll = eventPathScroll;
  exports.eventScroll = eventScroll;
  exports.eventWindowResize = eventWindowResize;
  exports.eventWindowScroll = eventWindowScroll;
  exports.inViewportClass = inViewportClass;
  exports.notInViewportClass = notInViewportClass;
  exports.WindowRef = WindowRef;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=thisissoon-angular-inviewport.umd.js.map
