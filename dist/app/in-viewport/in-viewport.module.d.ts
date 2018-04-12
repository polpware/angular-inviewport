import { ModuleWithProviders, Provider } from '@angular/core';
/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browser viewport and adds a
 * sn-viewport-in or sn-viewport-out class to the element.
 */
export declare class InViewportModule {
    /**
     * Specify a static method for root module to ensure providers are only provided once
     * but allows the module to still be imported into other modules without reproviding
     * services.
     *
     * @memberof InViewportModule
     */
    static forRoot(providers?: Provider[]): ModuleWithProviders;
}
