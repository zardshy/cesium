(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js ***!
  \**********************************************************************************/
/*! exports provided: NzButtonComponent, NzButtonGroupComponent, NzButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzButtonComponent", function() { return NzButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzButtonGroupComponent", function() { return NzButtonGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzButtonModule", function() { return NzButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");











/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */






const _c0 = ["nz-button", ""];
function NzButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 1);
} }
const _c1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'button';
class NzButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} nzConfigService
     */
    constructor(elementRef, cdr, renderer, nzConfigService) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzDanger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.nzType = null;
        this.nzShape = null;
        this.nzSize = 'default';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    haltDisabledEvents(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    /**
     * @param {?} nodes
     * @param {?} renderer
     * @return {?}
     */
    insertSpan(nodes, renderer) {
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            if (node.nodeName === '#text') {
                /** @type {?} */
                const span = renderer.createElement('span');
                /** @type {?} */
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        }));
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    assertIconOnly(element, renderer) {
        /** @type {?} */
        const listOfNode = Array.from(element.childNodes);
        /** @type {?} */
        const iconCount = listOfNode.filter((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeName === 'I')).length;
        /** @type {?} */
        const noText = listOfNode.every((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeName !== '#text'));
        /** @type {?} */
        const noSpan = listOfNode.every((/**
         * @param {?} node
         * @return {?}
         */
        node => node.nodeName !== 'SPAN'));
        /** @type {?} */
        const isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzLoading } = changes;
        if (nzLoading) {
            this.loading$.next(this.nzLoading);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.loading$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.nzLoading), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @return {?}
         */
        () => !!this.nzIconDirectiveElement)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        loading => {
            /** @type {?} */
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(nativeElement, 'display');
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) { return new (t || NzButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"])); };
NzButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzButtonComponent, selectors: [["button", "nz-button", ""], ["a", "nz-button", ""]], contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzIconDirectiveElement = _t.first);
    } }, hostVars: 30, hostBindings: function NzButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzButtonComponent_click_HostBindingHandler($event) { return ctx.haltDisabledEvents($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-btn", true)("ant-btn-primary", ctx.nzType === "primary")("ant-btn-dashed", ctx.nzType === "dashed")("ant-btn-link", ctx.nzType === "link")("ant-btn-danger", ctx.nzType === "danger")("ant-btn-circle", ctx.nzShape === "circle")("ant-btn-round", ctx.nzShape === "round")("ant-btn-lg", ctx.nzSize === "large")("ant-btn-sm", ctx.nzSize === "small")("ant-btn-dangerous", ctx.nzDanger)("ant-btn-loading", ctx.nzLoading)("ant-btn-background-ghost", ctx.nzGhost)("ant-btn-block", ctx.nzBlock)("ant-input-search-button", ctx.nzSearch);
    } }, inputs: { nzBlock: "nzBlock", nzGhost: "nzGhost", nzSearch: "nzSearch", nzLoading: "nzLoading", nzDanger: "nzDanger", disabled: "disabled", tabIndex: "tabIndex", nzType: "nzType", nzShape: "nzShape", nzSize: "nzSize" }, exportAs: ["nzButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzButtonComponent_i_0_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"] }
];
NzButtonComponent.propDecorators = {
    nzIconDirectiveElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    nzBlock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzGhost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzShape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzButtonComponent.prototype, "nzBlock", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzButtonComponent.prototype, "nzGhost", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzButtonComponent.prototype, "nzSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzButtonComponent.prototype, "nzLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzButtonComponent.prototype, "nzDanger", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzButtonComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzButtonComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'button[nz-button], a[nz-button]',
                exportAs: 'nzButton',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                template: `
    <i nz-icon nzType="loading" *ngIf="nzLoading"></i>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-btn]': `true`,
                    '[class.ant-btn-primary]': `nzType === 'primary'`,
                    '[class.ant-btn-dashed]': `nzType === 'dashed'`,
                    '[class.ant-btn-link]': `nzType === 'link'`,
                    '[class.ant-btn-danger]': `nzType === 'danger'`,
                    '[class.ant-btn-circle]': `nzShape === 'circle'`,
                    '[class.ant-btn-round]': `nzShape === 'round'`,
                    '[class.ant-btn-lg]': `nzSize === 'large'`,
                    '[class.ant-btn-sm]': `nzSize === 'small'`,
                    '[class.ant-btn-dangerous]': `nzDanger`,
                    '[class.ant-btn-loading]': `nzLoading`,
                    '[class.ant-btn-background-ghost]': `nzGhost`,
                    '[class.ant-btn-block]': `nzBlock`,
                    '[class.ant-input-search-button]': `nzSearch`,
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                    '[attr.disabled]': 'disabled || null',
                    '(click)': 'haltDisabledEvents($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_2__["NzConfigService"] }]; }, { nzBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzShape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzIconDirectiveElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: button-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzButtonGroupComponent {
    constructor() {
        this.nzSize = 'default';
    }
}
NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) { return new (t || NzButtonGroupComponent)(); };
NzButtonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzButtonGroupComponent, selectors: [["nz-button-group"]], hostVars: 6, hostBindings: function NzButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-btn-group", true)("ant-btn-group-lg", ctx.nzSize === "large")("ant-btn-group-sm", ctx.nzSize === "small");
    } }, inputs: { nzSize: "nzSize" }, exportAs: ["nzButtonGroup"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzButtonGroupComponent.propDecorators = {
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzButtonGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-button-group',
                exportAs: 'nzButtonGroup',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                host: {
                    '[class.ant-btn-group]': `true`,
                    '[class.ant-btn-group-lg]': `nzSize === 'large'`,
                    '[class.ant-btn-group-sm]': `nzSize === 'small'`
                },
                preserveWhitespaces: false,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return []; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzButtonModule {
}
NzButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzButtonModule });
NzButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzButtonModule_Factory(t) { return new (t || NzButtonModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchModule"]],
        ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzButtonModule, { declarations: function () { return [NzButtonComponent,
        NzButtonGroupComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchModule"]]; }, exports: function () { return [NzButtonComponent,
        NzButtonGroupComponent,
        ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzButtonComponent, NzButtonGroupComponent],
                exports: [NzButtonComponent, NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveModule"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-button.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js ***!
  \*************************************************************************************************/
/*! exports provided: ɵNzTransitionPatchDirective, ɵNzTransitionPatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTransitionPatchDirective", function() { return NzTransitionPatchDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTransitionPatchModule", function() { return NzTransitionPatchModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: transition-patch.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * hack the bug
 * angular router change with unexpected transition trigger after calling applicationRef.attachView
 * https://github.com/angular/angular/issues/34718
 */

class NzTransitionPatchDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.hidden = null;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
    }
    /**
     * @return {?}
     */
    setHiddenAttribute() {
        if (this.hidden === true) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
        }
        else if (this.hidden === false || this.hidden === null) {
            this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
        }
        else if (typeof this.hidden === 'string') {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', this.hidden);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setHiddenAttribute();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setHiddenAttribute();
    }
}
NzTransitionPatchDirective.ɵfac = function NzTransitionPatchDirective_Factory(t) { return new (t || NzTransitionPatchDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NzTransitionPatchDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzTransitionPatchDirective, selectors: [["", "nz-button", ""], ["nz-button-group"], ["", "nz-icon", ""], ["", "nz-menu-item", ""], ["", "nz-submenu", ""], ["nz-select-top-control"], ["nz-select-placeholder"]], inputs: { hidden: "hidden" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzTransitionPatchDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
NzTransitionPatchDirective.propDecorators = {
    hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTransitionPatchDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nz-button],nz-button-group,[nz-icon],[nz-menu-item],[nz-submenu],nz-select-top-control,nz-select-placeholder'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: transition-patch.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTransitionPatchModule {
}
NzTransitionPatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzTransitionPatchModule });
NzTransitionPatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzTransitionPatchModule_Factory(t) { return new (t || NzTransitionPatchModule)(); }, imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzTransitionPatchModule, { declarations: function () { return [NzTransitionPatchDirective]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]; }, exports: function () { return [NzTransitionPatchDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTransitionPatchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                exports: [NzTransitionPatchDirective],
                declarations: [NzTransitionPatchDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-transition-patch.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-transition-patch.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js ***!
  \*************************************************************************************/
/*! exports provided: NZ_WAVE_GLOBAL_CONFIG, NZ_WAVE_GLOBAL_CONFIG_FACTORY, NZ_WAVE_GLOBAL_DEFAULT_CONFIG, NzWaveDirective, NzWaveModule, NzWaveRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_WAVE_GLOBAL_CONFIG", function() { return NZ_WAVE_GLOBAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_WAVE_GLOBAL_CONFIG_FACTORY", function() { return NZ_WAVE_GLOBAL_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_WAVE_GLOBAL_DEFAULT_CONFIG", function() { return NZ_WAVE_GLOBAL_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzWaveDirective", function() { return NzWaveDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzWaveModule", function() { return NzWaveModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzWaveRenderer", function() { return NzWaveRenderer; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");




/**
 * @fileoverview added by tsickle
 * Generated from: nz-wave-renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NzWaveRenderer {
    /**
     * @param {?} triggerElement
     * @param {?} ngZone
     * @param {?} insertExtraNode
     */
    constructor(triggerElement, ngZone, insertExtraNode) {
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.styleForPseudo = null;
        this.extraNode = null;
        this.lastTime = 0;
        this.platform = new _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]();
        this.onClick = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this.triggerElement ||
                !this.triggerElement.getAttribute ||
                this.triggerElement.getAttribute('disabled') ||
                ((/** @type {?} */ (event.target))).tagName === 'INPUT' ||
                this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            this.fadeOutWave();
        });
        this.clickHandler = this.onClick.bind(this);
        this.bindTriggerEvent();
    }
    /**
     * @return {?}
     */
    get waveAttributeName() {
        return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
    /**
     * @return {?}
     */
    bindTriggerEvent() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.removeTriggerEvent();
                if (this.triggerElement) {
                    this.triggerElement.addEventListener('click', this.clickHandler, true);
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    removeTriggerEvent() {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.clickHandler, true);
        }
    }
    /**
     * @return {?}
     */
    removeStyleAndExtraNode() {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild((/** @type {?} */ (this.extraNode)));
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    }
    /**
     * @private
     * @return {?}
     */
    fadeOutWave() {
        /** @type {?} */
        const node = this.triggerElement;
        /** @type {?} */
        const waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            node.removeAttribute(this.waveAttributeName);
            this.removeStyleAndExtraNode();
        }), this.waveTransitionDuration);
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    isValidColor(color) {
        return (!!color &&
            color !== '#ffffff' &&
            color !== 'rgb(255, 255, 255)' &&
            this.isNotGrey(color) &&
            !/rgba\(\d*, \d*, \d*, 0\)/.test(color) &&
            color !== 'transparent');
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    isNotGrey(color) {
        /** @type {?} */
        const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    }
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    getWaveColor(node) {
        /** @type {?} */
        const nodeStyle = getComputedStyle(node);
        return (nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color'));
    }
    /**
     * @private
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    runTimeoutOutsideZone(fn, delay) {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(fn, delay)));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-wave.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzWaveConfig() { }
if (false) {}
/** @type {?} */
const NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
const NZ_WAVE_GLOBAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
class NzWaveDirective {
    /**
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} config
     * @param {?} animationType
     */
    constructor(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.waveDisabled;
    }
    /**
     * @return {?}
     */
    get rendererRef() {
        return this.waveRenderer;
    }
    /**
     * @return {?}
     */
    isConfigDisabled() {
        /** @type {?} */
        let disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderWaveIfEnabled();
    }
    /**
     * @return {?}
     */
    renderWaveIfEnabled() {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    }
    /**
     * @return {?}
     */
    disable() {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    }
    /**
     * @return {?}
     */
    enable() {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    }
}
NzWaveDirective.ɵfac = function NzWaveDirective_Factory(t) { return new (t || NzWaveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NZ_WAVE_GLOBAL_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"], 8)); };
NzWaveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzWaveDirective, selectors: [["", "nz-wave", ""], ["button", "nz-button", "", 3, "nzType", "link"]], inputs: { nzWaveExtraNode: "nzWaveExtraNode" }, exportAs: ["nzWave"] });
/** @nocollapse */
NzWaveDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"],] }] }
];
NzWaveDirective.propDecorators = {
    nzWaveExtraNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzWaveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nz-wave],button[nz-button]:not([nzType="link"])',
                exportAs: 'nzWave'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { nzWaveExtraNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-wave.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzWaveModule {
}
NzWaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzWaveModule });
NzWaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzWaveModule_Factory(t) { return new (t || NzWaveModule)(); }, imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzWaveModule, { declarations: function () { return [NzWaveDirective]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]; }, exports: function () { return [NzWaveDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzWaveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                exports: [NzWaveDirective],
                declarations: [NzWaveDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-wave.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-wave.js.map

/***/ }),

/***/ "./src/app/pages/welcome/func/ClusterPointLayer.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/func/ClusterPointLayer.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterPointLayer; });
class ClusterPointLayer {
    constructor(viewer) {
        this.viewer = viewer;
        this._init();
    }
    _init() {
        this.layer = new Cesium.CustomDataSource('zard');
        this.layer.entities.add({
            id: '111',
            position: Cesium.Cartesian3.fromDegrees(121.8142, 30.8649, 100),
            billboard: {
                image: 'assets/IMG/deng_r.jpg',
                width: 22,
                height: 22,
            },
        });
        this.layer.entities.add({
            id: '222',
            position: Cesium.Cartesian3.fromDegrees(121.8192, 30.8649, 100),
            billboard: {
                image: 'assets/IMG/deng_r.jpg',
                width: 22,
                height: 22,
            }
        });
        const dataSources = this.viewer.dataSources.add(this.layer);
        dataSources.then(function (dataSource) {
            var pixelRange = 15;
            var minimumClusterSize = 2;
            var enabled = true;
            dataSource.clustering.enabled = enabled;
            dataSource.clustering.pixelRange = pixelRange;
            dataSource.clustering.minimumClusterSize = minimumClusterSize;
            var removeListener;
            function customStyle() {
                if (Cesium.defined(removeListener)) {
                    removeListener();
                    removeListener = undefined;
                }
                else {
                    removeListener = dataSource.clustering.clusterEvent.addEventListener(function (clusteredEntities, cluster) {
                        cluster.label.show = false;
                        cluster.billboard.show = true;
                        cluster.billboard.id = cluster.label.id;
                        cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
                        // let image= `${beforeurlImg}/taklaImg/poi/40-66.png`
                        if (clusteredEntities.length) {
                            cluster.billboard.image = 'assets/IMG/deng_g.jpg';
                            // cluster.billboard.scale = 0.5
                        }
                    });
                }
                // force a re-cluster with the new styling
                var pixelRange = dataSource.clustering.pixelRange;
                dataSource.clustering.pixelRange = 0;
                dataSource.clustering.pixelRange = pixelRange;
            }
            // customStyle()
        });
    }
}


/***/ }),

/***/ "./src/app/pages/welcome/func/addMarker.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/func/addMarker.ts ***!
  \*************************************************/
/*! exports provided: createMarkerLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarkerLayer", function() { return createMarkerLayer; });
function createMarkerLayer(viewer, options) {
    const { dataArr, layerId, fieldNameId, isLabel, isBillBoard, billBoardConfig, isPoint, isZoomTo } = options;
    const layer = new Cesium.CustomDataSource(layerId);
    dataArr.forEach((element, index) => {
        const attr = {};
        for (let key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                attr[key] = element[key];
            }
        }
        ;
        attr.layerId = layerId;
        const entitiesId = element[fieldNameId] || index;
        const position = Cesium.Cartesian3.fromDegrees(element.lng, element.lat, element.alt || 0);
        const label = {
            show: isLabel,
            text: entitiesId,
            font: '14pt monospace',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            verticalOrigin: Cesium.VerticalOrigin.BASELINE,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            pixelOffset: new Cesium.Cartesian2(0, -Number(billBoardConfig ? billBoardConfig.height : -10) + 10)
            // eyeOffset :new Cesium.Cartesian3(0.0, 500.0, 0.0)
        };
        const billboard = {
            show: isBillBoard,
            image: billBoardConfig.image,
            width: billBoardConfig.width,
            height: billBoardConfig.height,
        };
        const point = {
            show: isPoint,
            pixelSize: 5,
            color: Cesium.Color.RED,
            outlineColor: Cesium.Color.WHITE,
            outlineWidth: 2
        };
        const entity = layer.entities.add({
            id: entitiesId,
            position,
            label,
            billboard,
            point,
            attr
        });
    });
    viewer.dataSources.add(layer);
    if (isZoomTo)
        viewer.zoomTo(layer);
    return layer;
}


/***/ }),

/***/ "./src/app/pages/welcome/func/baseMap.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/func/baseMap.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addBaseMap; });
function addBaseMap(viewer, type) {
    let layer = null;
    viewer.scene.imageryLayers.removeAll();
    const urlTemplate = (arg) => new Cesium.UrlTemplateImageryProvider(arg);
    switch (type) {
        case 'ARCGIS':
            layer = new Cesium.ArcGisMapServerImageryProvider({
                url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
            });
            break;
        case 'BAIDU':
            let bd_sl = 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1';
            layer = new BaiduImageryProvider({
                url: bd_sl
            });
            break;
        case 'GAODE':
            let gd_yx = 'http://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}';
            let gd_sl = 'http://webst02.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}';
            layer = urlTemplate({ url: gd_yx });
            break;
        case 'OSM':
            layer = new Cesium.OpenStreetMapImageryProvider({
                url: 'https://a.tile.openstreetmap.org/'
            });
            break;
        case 'TDT':
            break;
        case 'IMG':
            layer = new Cesium.SingleTileImageryProvider({
                url: "assets/IMG/aa.jpg",
                rectangle: Cesium.Rectangle.fromDegrees(-90.0, -45.0, 90.0, 45.0),
            });
            break;
        default:
            layer = urlTemplate({
                url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
                minimumLevel: 0,
                maximumLevel: 15,
                hue: '3'
            });
            break;
    }
    viewer.scene.imageryLayers.addImageryProvider(layer);
}
function BaiduImageryProvider(options) {
    this._errorEvent = new Cesium.Event();
    this._tileWidth = 256;
    this._tileHeight = 256;
    this._maximumLevel = 18;
    this._minimumLevel = 1;
    var southwestInMeters = new Cesium.Cartesian2(-33554054, -33746824);
    var northeastInMeters = new Cesium.Cartesian2(33554054, 33746824);
    this._tilingScheme = new Cesium.WebMercatorTilingScheme({
        rectangleSouthwestInMeters: southwestInMeters,
        rectangleNortheastInMeters: northeastInMeters
    });
    this._rectangle = this._tilingScheme.rectangle;
    var resource = Cesium.Resource.createIfNeeded(options.url);
    this._resource = resource;
    this._tileDiscardPolicy = undefined;
    this._credit = undefined;
    this._readyPromise = undefined;
}
Object.defineProperties(BaiduImageryProvider.prototype, {
    url: {
        get: function () {
            return this._resource.url;
        }
    },
    proxy: {
        get: function () {
            return this._resource.proxy;
        }
    },
    tileWidth: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tileWidth must not be called before the imagery provider is ready.');
            }
            return this._tileWidth;
        }
    },
    tileHeight: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tileHeight must not be called before the imagery provider is ready.');
            }
            return this._tileHeight;
        }
    },
    maximumLevel: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('maximumLevel must not be called before the imagery provider is ready.');
            }
            return this._maximumLevel;
        }
    },
    minimumLevel: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('minimumLevel must not be called before the imagery provider is ready.');
            }
            return this._minimumLevel;
        }
    },
    tilingScheme: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tilingScheme must not be called before the imagery provider is ready.');
            }
            return this._tilingScheme;
        }
    },
    tileDiscardPolicy: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tileDiscardPolicy must not be called before the imagery provider is ready.');
            }
            return this._tileDiscardPolicy;
        }
    },
    rectangle: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.');
            }
            return this._rectangle;
        }
    },
    errorEvent: {
        get: function () {
            return this._errorEvent;
        }
    },
    ready: {
        get: function () {
            return this._resource;
        }
    },
    readyPromise: {
        get: function () {
            return this._readyPromise;
        }
    },
    credit: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('credit must not be called before the imagery provider is ready.');
            }
            return this._credit;
        }
    },
});
BaiduImageryProvider.prototype.requestImage = function (x, y, level, request) {
    var r = this._tilingScheme.getNumberOfXTilesAtLevel(level);
    var c = this._tilingScheme.getNumberOfYTilesAtLevel(level);
    var s = this.url.replace("{x}", x - r / 2).replace("{y}", c / 2 - y - 1).replace("{z}", level).replace("{s}", Math.floor(10 * Math.random()));
    return Cesium.ImageryProvider.loadImage(this, s);
};


/***/ }),

/***/ "./src/app/pages/welcome/func/cameraFunc.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/welcome/func/cameraFunc.ts ***!
  \**************************************************/
/*! exports provided: initCameraView, getCameraXyzHpr, zoomToModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCameraView", function() { return initCameraView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCameraXyzHpr", function() { return getCameraXyzHpr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomToModel", function() { return zoomToModel; });
// 初始化相机位置
function initCameraView(viewer, options, isFly = true) {
    const { x, y, z, h, p, r } = options;
    const destination = new Cesium.Cartesian3(x, y, z);
    const orientation = {
        heading: h,
        pitch: p,
        roll: r
    };
    const cameraView = {
        destination,
        orientation
    };
    if (isFly) {
        viewer.camera.flyTo(cameraView);
    }
    else {
        viewer.scene.camera.setView(cameraView);
    }
}
// 获取当前相机参数
function getCameraXyzHpr(viewer) {
    const CameraXyzHpr = {};
    const position = viewer.scene.camera.position;
    CameraXyzHpr.x = position.x;
    CameraXyzHpr.y = position.y;
    CameraXyzHpr.z = position.z;
    CameraXyzHpr.h = viewer.scene.camera.heading;
    CameraXyzHpr.p = viewer.scene.camera.pitch;
    CameraXyzHpr.r = viewer.scene.camera.roll;
    return CameraXyzHpr;
}
// 缩放至model
function zoomToModel(viewer, model) {
    const controller = viewer.scene.screenSpaceCameraController;
    const r = 2.0 * Math.max(model.boundingSphere.radius, viewer.scene.camera.frustum.near);
    controller.minimumZoomDistance = r * 0.5;
    const center = Cesium.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center, new Cesium.Cartesian3());
    const heading = Cesium.Math.toRadians(230.0);
    const pitch = Cesium.Math.toRadians(-20.0);
    viewer.scene.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, r * 100.0));
}


/***/ }),

/***/ "./src/app/pages/welcome/func/cavas/diffCircle.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/welcome/func/cavas/diffCircle.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diffCircle; });
function diffCircle() {
    const WIDTH = 600;
    const HEIGHT = 600;
    let radius = 0;
    const canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d");
    ctx.globalAlpha = 0.95;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


/***/ }),

/***/ "./src/app/pages/welcome/func/createModel.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/welcome/func/createModel.ts ***!
  \***************************************************/
/*! exports provided: createModelsCollection, createModelByPrimitive, createModelByEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModelsCollection", function() { return createModelsCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModelByPrimitive", function() { return createModelByPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModelByEntity", function() { return createModelByEntity; });
// 适用于海量数据渲染 同批次绘制增加性能
function createModelsCollection(viewer) {
    const temp = [{ lng: 121.1, lat: 31.1, alt: 1, h: 0, p: 0, r: 0 }];
    const instances = [];
    const scale = 1;
    function createInstances() {
        for (let item of temp) {
            const origin = Cesium.Cartesian3.fromDegrees(item.lng, item.lat, item.alt);
            const hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(item.h), Cesium.Math.toRadians(item.p), Cesium.Math.toRadians(item.r));
            const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(origin, hpr);
            Cesium.Matrix4.multiplyByUniformScale(modelMatrix, scale, modelMatrix);
            instances.push({ modelMatrix: modelMatrix });
        }
    }
    createInstances();
    const collection = viewer.scene.primitives.add(new Cesium.ModelInstanceCollection({
        url: 'assets/models/gltf/Car1120.gltf',
        instances: instances,
    }));
    collection.readyPromise
        .then((collection) => {
        console.log(collection);
    })
        .otherwise(function (error) {
        console.error(error);
    });
}
function createModelByPrimitive(viewer, options, callBack) {
    const { lng, lat, alt, h, p, r, url } = options || {};
    let model = null;
    const origin = Cesium.Cartesian3.fromDegrees(lng | 121.1, lat | 31.1, alt | 0);
    // 航向角 0默认向东, 向北为-
    const _h = Cesium.Math.toRadians(h | 0.0);
    // 俯仰角 向下为-
    const _p = Cesium.Math.toRadians(p | 0.0);
    // 翻滚角 向左为-
    const _r = Cesium.Math.toRadians(r | 0.0);
    // 模型姿态 (欧拉角euler)
    const hpr = new Cesium.HeadingPitchRoll(_h, _p, _r);
    // 模型矩阵
    const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(origin, hpr);
    model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
        url: url || 'assets/models/gltf/Car1120.gltf',
        modelMatrix: modelMatrix,
        //   allowPicking : true,  // 是否可选取
        //   scale : 50 ,  // 缩放比例
        minimumPixelSize: 128,
    }));
    model.readyPromise
        .then(function (model) {
        callBack(model);
    })
        .otherwise(function (error) {
        console.error(error);
    });
    return model;
}
function createModelByEntity(viewer, options) {
    const { lng, lat, alt, h, p, r, url } = options || {};
    let entity = null;
    const origin = Cesium.Cartesian3.fromDegrees(lng | 121.1, lat | 31.1, alt | 0);
    const _h = Cesium.Math.toRadians(h | 0.0);
    const _p = Cesium.Math.toRadians(p | 0.0);
    const _r = Cesium.Math.toRadians(r | 0.0);
    const hpr = new Cesium.HeadingPitchRoll(_h, _p, _r);
    const orientation = Cesium.Transforms.headingPitchRollQuaternion(origin, hpr);
    entity = viewer.entities.add({
        position: origin,
        orientation: orientation,
        label: {
            text: '测试名称\n 123',
            // font : '14pt Source Han Sans CN',
            font: '14pt monospace',
            // fillColor:new Cesium.Color.fromCssColorString("rgba(255, 255, 255,1)"),   //字体颜色
            //   fillColor:fadeColor,
            scale: 0.8,
            backgroundColor: new Cesium.Color.fromCssColorString("rgba(28, 28, 28, 1)"),
            backgroundPadding: new Cesium.Cartesian2(20, 10),
            showBackground: true,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth: 2,
            verticalOrigin: Cesium.VerticalOrigin.TOP,
            // horizontalOrigin :Cesium.HorizontalOrigin.LEFT,//水平位置
            // pixelOffset: Cesium.Cartesian2.ZERO,        
            // eyeOffset: Cesium.Cartesian3.ZERO,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            eyeOffset: new Cesium.Cartesian3(0, 120, 0),
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000),
        },
        point: {
            pixelSize: 10,
            color: Cesium.Color.YELLOW,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(8000, 2000000000),
        },
        billboard: {
            image: 'assets/IMG/aa.jpg',
            width: 31,
            height: 31,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(4000, 8000)
        },
        model: {
            // color: new Cesium.Color(0 ,224 ,0,0.001),
            uri: url || 'assets/models/gltf/Car1120.gltf',
            scale: 50,
            // color:getLineColorCallbackProperty(Cesium.Color.RED),
            // silhouetteColor :Cesium.Color.RED.withAlpha(10),
            // silhouetteSize  :fadeWidth,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 4000)
        }
    });
    return entity;
}


/***/ }),

/***/ "./src/app/pages/welcome/func/numberCity.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/welcome/func/numberCity.ts ***!
  \**************************************************/
/*! exports provided: numberCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberCity", function() { return numberCity; });
function numberCity(viewer, tileset) {
    tileset.tileVisible.addEventListener((tile) => {
        var content = tile.content;
        var featuresLength = content.featuresLength;
        for (var i = 0; i < featuresLength; i += 2) {
            const feature = content.getFeature(i);
            const model = feature.content._model;
            if (model && model._sourcePrograms && model._rendererResources) {
                Object.keys(model._sourcePrograms).forEach((key) => {
                    const program = model._sourcePrograms[key];
                    const fragmentShader = model._rendererResources.sourceShaders[program.fragmentShader];
                    let vPosition = '';
                    if (fragmentShader.indexOf(' v_positionEC;') !== -1) {
                        vPosition = 'v_positionEC';
                    }
                    else if (fragmentShader.indexOf(' v_pos;') !== -1) {
                        vPosition = 'v_pos';
                    }
                    //   const color = `vec4(${feature.color.toString()})`
                    const color = `vec4(0, 0.5, 1.0,0.1)`;
                    // const color = `vec4(0,150,255,0.6)`
                    console.log(vPosition);
                    var shaderStr = `
              varying vec3 ${vPosition};// 相机坐标系的模型坐标
              void main(void){
                  /* 渐变效果 */
                  vec4 v_helsing_position = czm_inverseModelView * vec4(${vPosition},1);// 解算出模型坐标
                  float stc_pl = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
                  float stc_sd = v_helsing_position.z / 60.0 + sin(stc_pl) * 0.1;
                  gl_FragColor = ${color};// 基础颜色
                  gl_FragColor *= vec4(stc_sd, stc_sd, stc_sd, 1.0);// 按模型高度进行颜色变暗处理
                  /* 扫描线 */
                  float glowRange = 200.0; // 光环的移动范围(高度)，最高到360米
                  float stc_a13 = fract(czm_frameNumber / 200.0);// 计算当前着色器的时间，帧率/（1），即时间放慢6倍
                  float stc_h = clamp(v_helsing_position.z / glowRange, 0.0, 1.0);
                  stc_a13 = abs(stc_a13 - 0.5) * 2.0;
                  float stc_diff = step(0.005, abs(stc_h - stc_a13));// 根据时间来计算颜色差异
                  gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - stc_diff);// 原有颜色加上颜色差异值提高亮度
              }`;
                    // console.log(shaderStr)
                    // 自定义着色器
                    model._rendererResources.sourceShaders[program.fragmentShader] = shaderStr;
                    // 默认
                    //   `
                    //   varying vec3 ${vPosition};// 相机坐标系的模型坐标
                    //   void main(void){
                    //       /* 渐变效果 */
                    //       vec4 v_helsing_position = czm_inverseModelView * vec4(${vPosition},1);// 解算出模型坐标
                    //       float stc_pl = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
                    //       /* 扫描线  v_helsing_position.z / 5.0 + sin(stc_pl) * 0.1 其中5.0是5米一下变暗*/
                    //       float stc_sd = v_helsing_position.z / 220.0 + sin(stc_pl) * 0.1;
                    //       gl_FragColor = ${color};// 基础颜色
                    //       gl_FragColor *= vec4(stc_sd, stc_sd, stc_sd, 0.6);// 按模型高度进行颜色变暗处理
                    //       /* 扫描线 */
                    //       float glowRange = 360.0; // 光环的移动范围(高度)，最高到360米
                    //       /* 调整光环移动速度调整360 */
                    //       //float stc_a13 = fract(czm_frameNumber / 360.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
                    //       float stc_a13 = fract(czm_frameNumber / 200.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
                    //       float stc_h = clamp(v_helsing_position.z / glowRange, 0.0, 1.0);
                    //       stc_a13 = abs(stc_a13 - 0.5) * 2.0;
                    //       float stc_diff = step(0.005, abs(stc_h - stc_a13));// 根据时间来计算颜色差异
                    //       //gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - stc_diff);// 原有颜色加上颜色差异值提高亮度
                    //   }`
                });
                // 让系统重新编译着色器
                model._shouldRegenerateShaders = true;
            }
        }
    });
}


/***/ }),

/***/ "./src/app/pages/welcome/func/texiao/City.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/welcome/func/texiao/City.ts ***!
  \***************************************************/
/*! exports provided: numberCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberCity", function() { return numberCity; });
function numberCity(viewer, tileset) {
    viewer.scene.primitives.add(tileset);
    let r = tileset.boundingSphere.radius;
    if (tileset.boundingSphere.radius > 10000) {
        r = tileset.boundingSphere.radius / 10;
    }
    // viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, r))
    // tileset.style = new Cesium.Cesium3DTileStyle({
    //         color: 'vec4(0, 0.5, 1.0,1)'
    //     })
    // 注入 shader
    tileset.tileVisible.addEventListener((tile) => {
        var content = tile.content;
        var featuresLength = content.featuresLength;
        for (var i = 0; i < featuresLength; i += 2) {
            const feature = content.getFeature(i);
            const model = feature.content._model;
            if (model && model._sourcePrograms && model._rendererResources) {
                //   Object.keys(model._sourcePrograms).forEach((key) => {
                //     const program = model._sourcePrograms[key]
                //     const fragmentShader = model._rendererResources.sourceShaders[program.vertexShader]
                //     model._rendererResources.sourceShaders[program.vertexShader] =
                //     `
                //     attribute vec3 a_normal;
                //     precision highp float;
                //     uniform mat4 u_modelViewMatrix;
                //     uniform mat4 u_projectionMatrix;
                //     attribute vec3 a_position;
                //     attribute float a_batchId;
                //     varying vec3 v_positionEC;
                //     void main(void) 
                //     {
                //         vec3 weightedPosition = a_position;
                //         vec4 position = vec4(weightedPosition, 1.0);
                //         position = u_modelViewMatrix * position;
                //         v_positionEC = position.xyz;
                //         gl_Position = u_projectionMatrix * position;
                //     }
                //     `
                //   })
                Object.keys(model._sourcePrograms).forEach((key) => {
                    const program = model._sourcePrograms[key];
                    const fragmentShader = model._rendererResources.sourceShaders[program.vertexShader];
                    let vPosition = '';
                    if (fragmentShader.indexOf(' v_positionEC;') !== -1) {
                        vPosition = 'v_positionEC';
                    }
                    else if (fragmentShader.indexOf('v _pos;') !== -1) {
                        vPosition = 'v_pos';
                    }
                    // const color = `vec4(${feature.color.toString()})`
                    const color = `vec4(0, 0.5, 1.0,0.1)`;
                    // const color = `vec4(0,150,255,0.6)`
                    // 自定义着色器
                    model._rendererResources.sourceShaders[program.fragmentShader] =
                        // 默认
                        `
                varying vec3 ${vPosition};// 相机坐标系的模型坐标
                void main(void){
                    /* 渐变效果 */
                    vec4 v_helsing_position = czm_inverseModelView * vec4(${vPosition},1);// 解算出模型坐标
                    float stc_pl = fract(czm_frameNumber / 150.0) * 3.14159265 * 2.0;
                    float stc_sd = v_helsing_position.z / 100.0 + sin(stc_pl) * 0.1;
                    gl_FragColor = ${color};// 基础颜色
                    gl_FragColor *= vec4(stc_sd, stc_sd, stc_sd, 100.0);// 按模型高度进行颜色变暗处理
                    /* 扫描线 */
                    float glowRange = 150.0; // 光环的移动范围(高度)，最高到360米
                    float stc_a13 = fract(czm_frameNumber / 200.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
                    float stc_h = clamp(v_helsing_position.z / glowRange, 0.0, 1.0);
                    stc_a13 = abs(stc_a13 - 0.5) * 2.0;
                    float stc_diff = step(0.005, abs(stc_h - stc_a13));// 根据时间来计算颜色差异
                    gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - stc_diff);// 原有颜色加上颜色差异值提高亮度
                }`;
                    // `
                    // varying vec3 ${vPosition};// 相机坐标系的模型坐标
                    // void main(void){
                    //     /* 渐变效果 */
                    //     vec4 v_helsing_position = czm_inverseModelView * vec4(${vPosition},1);// 解算出模型坐标
                    //     float stc_pl = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
                    //     /* 扫描线  v_helsing_position.z / 5.0 + sin(stc_pl) * 0.1 其中5.0是5米一下变暗*/
                    //     float stc_sd = v_helsing_position.z / 80.0 + sin(stc_pl) * 0.1;
                    //     gl_FragColor = ${color};// 基础颜色
                    //     gl_FragColor *= vec4(stc_sd, stc_sd, stc_sd, 0.6);// 按模型高度进行颜色变暗处理
                    //     /* 扫描线 */
                    //     float glowRange = 100.0; // 光环的移动范围(高度)，最高到360米
                    //     /* 调整光环移动速度调整360 */
                    //     //float stc_a13 = fract(czm_frameNumber / 360.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
                    //     float stc_a13 = fract(czm_frameNumber / 200.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
                    //     float stc_h = clamp(v_helsing_position.z / glowRange, 0.0, 1.0);
                    //     stc_a13 = abs(stc_a13 - 0.5) * 2.0;
                    //     float stc_diff = step(0.005, abs(stc_h - stc_a13));// 根据时间来计算颜色差异
                    //     //gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - stc_diff);// 原有颜色加上颜色差异值提高亮度
                    // }`
                });
                // 让系统重新编译着色器
                model._shouldRegenerateShaders = true;
            }
        }
    });
}


/***/ }),

/***/ "./src/app/pages/welcome/func/texiao/DynamicWallMaterialProperty.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/welcome/func/texiao/DynamicWallMaterialProperty.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicWallMaterialProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicWallMaterialProperty", function() { return DynamicWallMaterialProperty; });
class DynamicWallMaterialProperty {
    constructor(duration, color) {
        this.duration = duration;
        this._color = undefined;
        this.color = color;
        this._time = (new Date()).getTime();
        this._definitionChanged = new Cesium.Event();
        this.init();
    }
    init() {
        Cesium.DynamicWallMaterialProperty = DynamicWallMaterialProperty;
        Cesium.Material.DynamicWallMaterialProperty = 'DynamicWallMaterialProperty';
        // Cesium.Material.WallImage1 = "./images/WallImage1.png";
        // Cesium.Material.WallImage2 = "./images/WallImage2.png";
        Cesium.Material.WallImage1 = 'assets/materia/colors.png';
        Cesium.Material.WallImage2 = 'assets/materia/polylineTrailLinkMaterial.png';
        Cesium.Material.WallSource = "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
        {\n\
            czm_material material = czm_getDefaultMaterial(materialInput);\n\
            vec2 st = materialInput.st;\n\
            vec4 colorImage = texture2D(image, vec2(0.8-st.t, st.s));\n\
            vec4 colorImage2 = texture2D(image2, vec2(st.s, fract(st.t*1.0- time)));\n\
            material.alpha = colorImage.a * color.a + 0.5*colorImage2.r;\n\
            material.diffuse = color.rgb;\n\
            material.emission = vec3(0.4);\n\
            return material;\n\
        }";
        Cesium.Material._materialCache.addMaterial(Cesium.Material.DynamicWallMaterialProperty, {
            fabric: {
                type: Cesium.Material.DynamicWallMaterialProperty,
                uniforms: {
                    color: new Cesium.Color(0.5, 0.5, 0.5, 1.0),
                    image: Cesium.Material.WallImage1,
                    image2: Cesium.Material.WallImage2,
                    time: 0
                },
                source: Cesium.Material.WallSource
            },
            translucent: function (material) {
                return material.uniforms.color.alpha <= 1.0;
                ;
            }
        });
    }
    getType() {
        return 'DynamicWallMaterialProperty';
    }
    getValue(time, result) {
        if (!Cesium.defined(result)) {
            result = {};
        }
        result.color = resultcolor((((new Date()).getTime() - this._time)) % (this.duration * 35) / (this.duration * 35));
        result.time = (((new Date()).getTime() - this._time)) / this.duration;
        return result;
        function resultcolor(p) {
            var a = p;
            //var a = p / (scale * 7);//0-1
            var r = 1;
            var g = 1;
            var b = 1;
            if (a >= 0 && a < 0.14) {
                g = a / 0.28;
                b = 0;
            }
            else if (a >= 0.14 && a < 0.28) {
                g = (a - 0.14) / 0.28 + 0.5;
                b = 0;
            }
            else if (a >= 0.28 && a < 0.42) {
                r = 1 - (a - 0.28) / 0.14;
                b = 0;
            }
            else if (a >= 0.42 && a < 0.56) {
                r = 0;
                b = (a - 0.42) / 0.14;
            }
            else if (a >= 0.56 && a < 0.7) {
                r = 0;
                g = 1 - (a - 0.56) / 0.14;
            }
            else if (a >= 0.7 && a < 0.84) {
                r = (a - 0.7) / 0.14;
                g = 0;
            }
            else if (a >= 0.84 && a < 1) {
                g = 0;
                b = 1 - (a - 0.84) / 0.16;
            }
            r = r > 1 ? 1 : r;
            g = g > 1 ? 1 : g;
            b = b > 1 ? 1 : b;
            return new Cesium.Color(r, g, b);
        }
    }
    equals(other) {
        return this === other || (other instanceof DynamicWallMaterialProperty && Cesium.Property.equals(this._color, other._color));
    }
}
Object.defineProperties(DynamicWallMaterialProperty.prototype, {
    isConstant: {
        get: function () {
            return false;
        }
    },
    definitionChanged: {
        get: function () {
            return this._definitionChanged;
        }
    },
    color: Cesium.createPropertyDescriptor('color')
});


/***/ }),

/***/ "./src/app/pages/welcome/func/texiao/FlyLine.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/func/texiao/FlyLine.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flyLine; });
function flyLine(viewer, p1, p2, h, t) {
    const PolylineGeometry = new Cesium.PolylineGeometry({
        positions: computeFlyline(p1, p2, h),
        width: 2,
    });
    const instance = new Cesium.GeometryInstance({
        geometry: PolylineGeometry,
        id: 'flyline',
    });
    let en = viewer.scene.primitives.add(new Cesium.Primitive({
        geometryInstances: [instance],
        appearance: getFlylineMaterial(t),
        releaseGeometryInstances: false,
        compressVertices: false,
    }));
}
function computeFlyline(p1, p2, h) {
    let flyline = getBSRxyz(p1[0], p1[1], p2[0], p2[1], h);
    return flyline;
    // 将数据转换为cesium polyline positions格式
    function getBSRxyz(x1, y1, x2, y2, h) {
        let arr3d = getBSRPoints(x1, y1, x2, y2, h);
        let arrAll = [];
        for (let ite of arr3d) {
            arrAll.push(ite[0]);
            arrAll.push(ite[1]);
            arrAll.push(ite[2]);
        }
        return Cesium.Cartesian3.fromDegreesArrayHeights(arrAll);
    }
    function getBSRPoints(x1, y1, x2, y2, h) {
        let point1 = [y1, 0];
        let point2 = [(y2 + y1) / 2, h];
        let point3 = [y2, 0];
        let arr = getBSR(point1, point2, point3);
        let arr3d = [];
        for (let i = 0; i < arr.length; i++) {
            let x = ((x2 - x1) * (arr[i][0] - y1)) / (y2 - y1) + x1;
            arr3d.push([x, arr[i][0], arr[i][1]]);
        }
        return arr3d;
    }
    // 生成贝塞尔曲线
    function getBSR(point1, point2, point3) {
        var ps = [
            { x: point1[0], y: point1[1] },
            { x: point2[0], y: point2[1] },
            { x: point3[0], y: point3[1] }
        ];
        // 100 每条线由100个点组成
        let guijipoints = CreateBezierPoints(ps, 100);
        return guijipoints;
    }
    // 贝赛尔曲线算法
    // 参数：
    // anchorpoints: [{ x: 116.30, y: 39.60 }, { x: 37.50, y: 40.25 }, { x: 39.51, y: 36.25 }]
    function CreateBezierPoints(anchorpoints, pointsAmount) {
        var points = [];
        for (var i = 0; i < pointsAmount; i++) {
            var point = MultiPointBezier(anchorpoints, i / pointsAmount);
            points.push([point.x, point.y]);
        }
        return points;
    }
    function MultiPointBezier(points, t) {
        var len = points.length;
        var x = 0, y = 0;
        var erxiangshi = function (start, end) {
            var cs = 1, bcs = 1;
            while (end > 0) {
                cs *= start;
                bcs *= end;
                start--;
                end--;
            }
            return cs / bcs;
        };
        for (var i = 0; i < len; i++) {
            var point = points[i];
            x +=
                point.x *
                    Math.pow(1 - t, len - 1 - i) *
                    Math.pow(t, i) *
                    erxiangshi(len - 1, i);
            y +=
                point.y *
                    Math.pow(1 - t, len - 1 - i) *
                    Math.pow(t, i) *
                    erxiangshi(len - 1, i);
        }
        return { x: x, y: y };
    }
}
function getFlylineMaterial(type) {
    // 创建材质，在MaterialAppearance中若不添加基础材质，模型将会透明
    var material = new Cesium.Material.fromType('Color');
    material.uniforms.color = Cesium.Color.ORANGE;
    let fragmentShaderSource;
    switch (type) {
        case 1:
            fragmentShaderSource = `         
            varying vec2 v_st;    
            varying float v_width;    
            varying float v_polylineAngle;
            varying vec4 v_positionEC;
            varying vec3 v_normalEC;
            void main()
            {
                vec2 st = v_st;

                float num = 4.0;
                float xx = fract(st.s*num - czm_frameNumber/60.0);
                float r = xx;
                float g = 0.0;
                float b = 0.0;
                float a = xx;
                if(fract(st.s*num/4.0 - czm_frameNumber/240.0)<0.75){
                    a=0.0;
                }

                gl_FragColor = vec4(r,g,b,a);
            }`;
            break;
        case 2:
            fragmentShaderSource = `         
            varying vec2 v_st;    
            varying float v_width;    
            varying float v_polylineAngle;
            varying vec4 v_positionEC;
            varying vec3 v_normalEC;
            void main()
            {
                vec2 st = v_st;

                // 七彩渐变飞线，宽度2
                float xx = fract(st.s*2.0 - czm_frameNumber/60.0);
                float r = xx;
                float g = sin(czm_frameNumber/30.0);
                float b = cos(czm_frameNumber/30.0);
                float a = xx;

                gl_FragColor = vec4(r,g,b,a);
            }`;
            break;
        case 3:
            fragmentShaderSource = `         
            varying vec2 v_st;    
            varying float v_width;    
            varying float v_polylineAngle;
            varying vec4 v_positionEC;
            varying vec3 v_normalEC;
            void main()
            {
                vec2 st = v_st;
                
                //卡巴斯基
                float xx = sin(st.s*6.0 -czm_frameNumber/5.0) - cos(st.t*6.0);
                float r = 0.0;
                float g = xx;
                float b = xx;
                float a = xx;

                gl_FragColor = vec4(r,g,b,a);
            }`;
            break;
        case 4:
            fragmentShaderSource = `         
                varying vec2 v_st;    
                varying float v_width;    
                varying float v_polylineAngle;
                varying vec4 v_positionEC;
                varying vec3 v_normalEC;
                void main()
                {
                    vec2 st = v_st;
                    // 箭头飞线，宽度 8
                    float xx = fract(st.s*10.0 + st.t  - czm_frameNumber/60.0);
                    if (st.t<0.5) {
                        xx = fract(st.s*10.0 - st.t - czm_frameNumber/60.0);
                    }
                    float r = 0.0;
                    float g = xx;
                    float b = xx;
                    float a = xx;

                    // 飞线边框
                    if (st.t>0.8||st.t<0.2) {
                        g = 1.0;
                        b = 1.0;
                        a = 0.4;
                    }

                    gl_FragColor = vec4(r,g,b,a);
                }`;
            break;
        default:
            break;
    }
    // 自定义材质
    const aper = new Cesium.PolylineMaterialAppearance({
        material: material,
        translucent: true,
        vertexShaderSource: `
                    #define CLIP_POLYLINE 
                    void clipLineSegmentToNearPlane(
                        vec3 p0,
                        vec3 p1,
                        out vec4 positionWC,
                        out bool clipped,
                        out bool culledByNearPlane,
                        out vec4 clippedPositionEC)
                    {
                        culledByNearPlane = false;
                        clipped = false;
                        vec3 p0ToP1 = p1 - p0;
                        float magnitude = length(p0ToP1);
                        vec3 direction = normalize(p0ToP1);
                        float endPoint0Distance =  czm_currentFrustum.x + p0.z;
                        float denominator = -direction.z;
                        if (endPoint0Distance > 0.0 && abs(denominator) < czm_epsilon7)
                        {
                            culledByNearPlane = true;
                        }
                        else if (endPoint0Distance > 0.0)
                        {
                            float t = endPoint0Distance / denominator;
                            if (t < 0.0 || t > magnitude)
                            {
                                culledByNearPlane = true;
                            }
                            else
                            {
                                p0 = p0 + t * direction;
                                p0.z = min(p0.z, -czm_currentFrustum.x);
                                clipped = true;
                            }
                        }
                        clippedPositionEC = vec4(p0, 1.0);
                        positionWC = czm_eyeToWindowCoordinates(clippedPositionEC);
                    }
                    vec4 getPolylineWindowCoordinatesEC(vec4 positionEC, vec4 prevEC, vec4 nextEC, float expandDirection, float width, bool usePrevious, out float angle)
                    {
                        #ifdef POLYLINE_DASH
                        vec4 positionWindow = czm_eyeToWindowCoordinates(positionEC);
                        vec4 previousWindow = czm_eyeToWindowCoordinates(prevEC);
                        vec4 nextWindow = czm_eyeToWindowCoordinates(nextEC);
                        vec2 lineDir;
                        if (usePrevious) {
                            lineDir = normalize(positionWindow.xy - previousWindow.xy);
                        }
                        else {
                            lineDir = normalize(nextWindow.xy - positionWindow.xy);
                        }
                        angle = atan(lineDir.x, lineDir.y) - 1.570796327;
                        angle = floor(angle / czm_piOverFour + 0.5) * czm_piOverFour;
                        #endif
                        vec4 clippedPrevWC, clippedPrevEC;
                        bool prevSegmentClipped, prevSegmentCulled;
                        clipLineSegmentToNearPlane(prevEC.xyz, positionEC.xyz, clippedPrevWC, prevSegmentClipped, prevSegmentCulled, clippedPrevEC);
                        vec4 clippedNextWC, clippedNextEC;
                        bool nextSegmentClipped, nextSegmentCulled;
                        clipLineSegmentToNearPlane(nextEC.xyz, positionEC.xyz, clippedNextWC, nextSegmentClipped, nextSegmentCulled, clippedNextEC);
                        bool segmentClipped, segmentCulled;
                        vec4 clippedPositionWC, clippedPositionEC;
                        clipLineSegmentToNearPlane(positionEC.xyz, usePrevious ? prevEC.xyz : nextEC.xyz, clippedPositionWC, segmentClipped, segmentCulled, clippedPositionEC);
                        if (segmentCulled)
                        {
                            return vec4(0.0, 0.0, 0.0, 1.0);
                        }
                        vec2 directionToPrevWC = normalize(clippedPrevWC.xy - clippedPositionWC.xy);
                        vec2 directionToNextWC = normalize(clippedNextWC.xy - clippedPositionWC.xy);
                        if (prevSegmentCulled)
                        {
                            directionToPrevWC = -directionToNextWC;
                        }
                        else if (nextSegmentCulled)
                        {
                            directionToNextWC = -directionToPrevWC;
                        }
                        vec2 thisSegmentForwardWC, otherSegmentForwardWC;
                        if (usePrevious)
                        {
                            thisSegmentForwardWC = -directionToPrevWC;
                            otherSegmentForwardWC = directionToNextWC;
                        }
                        else
                        {
                            thisSegmentForwardWC = directionToNextWC;
                            otherSegmentForwardWC =  -directionToPrevWC;
                        }
                        vec2 thisSegmentLeftWC = vec2(-thisSegmentForwardWC.y, thisSegmentForwardWC.x);
                        vec2 leftWC = thisSegmentLeftWC;
                        float expandWidth = width * 0.5;
                        if (!czm_equalsEpsilon(prevEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1) && !czm_equalsEpsilon(nextEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1))
                        {
                            vec2 otherSegmentLeftWC = vec2(-otherSegmentForwardWC.y, otherSegmentForwardWC.x);
                            vec2 leftSumWC = thisSegmentLeftWC + otherSegmentLeftWC;
                            float leftSumLength = length(leftSumWC);
                            leftWC = leftSumLength < czm_epsilon6 ? thisSegmentLeftWC : (leftSumWC / leftSumLength);
                            vec2 u = -thisSegmentForwardWC;
                            vec2 v = leftWC;
                            float sinAngle = abs(u.x * v.y - u.y * v.x);
                            expandWidth = clamp(expandWidth / sinAngle, 0.0, width * 2.0);
                        }
                        vec2 offset = leftWC * expandDirection * expandWidth * czm_pixelRatio;
                        return vec4(clippedPositionWC.xy + offset, -clippedPositionWC.z, 1.0) * (czm_projection * clippedPositionEC).w;
                    }
                    vec4 getPolylineWindowCoordinates(vec4 position, vec4 previous, vec4 next, float expandDirection, float width, bool usePrevious, out float angle)
                    {
                        vec4 positionEC = czm_modelViewRelativeToEye * position;
                        vec4 prevEC = czm_modelViewRelativeToEye * previous;
                        vec4 nextEC = czm_modelViewRelativeToEye * next;
                        return getPolylineWindowCoordinatesEC(positionEC, prevEC, nextEC, expandDirection, width, usePrevious, angle);
                    }

                    attribute vec3 position3DHigh;
                    attribute vec3 position3DLow;
                    attribute vec3 prevPosition3DHigh;
                    attribute vec3 prevPosition3DLow;
                    attribute vec3 nextPosition3DHigh;
                    attribute vec3 nextPosition3DLow;
                    attribute vec2 expandAndWidth;
                    attribute vec2 st;
                    attribute float batchId;

                    varying float v_width;
                    varying vec2 v_st;
                    varying float v_polylineAngle;
                    
                    varying vec4 v_positionEC;
                    varying vec3 v_normalEC;
                    void main()
                    {
                    float expandDir = expandAndWidth.x;
                    float width = abs(expandAndWidth.y) + 0.5;
                    bool usePrev = expandAndWidth.y < 0.0;

                    vec4 p = czm_computePosition();
                    vec4 prev = czm_computePrevPosition();
                    vec4 next = czm_computeNextPosition();
                    
                    float angle;
                    vec4 positionWC = getPolylineWindowCoordinates(p, prev, next, expandDir, width, usePrev, angle);
                    gl_Position = czm_viewportOrthographic * positionWC;
                    
                    v_width = width;
                    v_st.s = st.s;
                    v_st.t = st.t;
                    // v_st.t = czm_writeNonPerspective(st.t, gl_Position.w);
                    v_polylineAngle = angle;


                    
                    vec4 eyePosition = czm_modelViewRelativeToEye * p;
                    v_positionEC =  czm_inverseModelView * eyePosition;      // position in eye coordinates
                    //v_normalEC = czm_normal * normal;                         // normal in eye coordinates
                    }

                `,
        fragmentShaderSource: fragmentShaderSource
    });
    return aper;
}


/***/ }),

/***/ "./src/app/pages/welcome/func/texiao/GroundScanLine.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/welcome/func/texiao/GroundScanLine.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroundScanLine; });
/*
    添加扫描线
    viewer
    cartographicCenter 扫描中心
    maxRadius 最大半径 米
    scanColor 扫描颜色
    duration 持续时间 毫秒
*/
function GroundScanLine(viewer, cartographicCenter, maxRadius, scanColor, duration) {
    // 启用照明 默认true
    viewer.scene.globe.enableLighting = false;
    // 深度检测 默认flase
    viewer.scene.globe.depthTestAgainstTerrain = true;
    // 启用地面大气 默认true
    viewer.scene.globe.showGroundAtmosphere = false;
    var ScanSegmentShader = "uniform sampler2D colorTexture;\n" +
        "uniform sampler2D depthTexture;\n" +
        "varying vec2 v_textureCoordinates;\n" +
        "uniform vec4 u_scanCenterEC;\n" +
        "uniform vec3 u_scanPlaneNormalEC;\n" +
        "uniform float u_radius;\n" +
        "uniform vec4 u_scanColor;\n" +
        "vec4 toEye(in vec2 uv, in float depth)\n" +
        " {\n" +
        " vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n" +
        " vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n" +
        " posInCamera =posInCamera / posInCamera.w;\n" +
        " return posInCamera;\n" +
        " }\n" +
        "vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n" +
        "{\n" +
        "vec3 v01 = point -planeOrigin;\n" +
        "float d = dot(planeNormal, v01) ;\n" +
        "return (point - planeNormal * d);\n" +
        "}\n" +
        "float getDepth(in vec4 depth)\n" +
        "{\n" +
        "float z_window = czm_unpackDepth(depth);\n" +
        "z_window = czm_reverseLogDepth(z_window);\n" +
        "float n_range = czm_depthRange.near;\n" +
        "float f_range = czm_depthRange.far;\n" +
        "return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n" +
        "}\n" +
        "void main()\n" +
        "{\n" +
        "gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n" +
        "float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n" +
        "vec4 viewPos = toEye(v_textureCoordinates, depth);\n" +
        "vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n" +
        "float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n" +
        "if(dis < u_radius)\n" +
        "{\n" +
        "float f = 1.0 -abs(u_radius - dis) / u_radius;\n" +
        "f = pow(f, 4.0);\n" +
        "gl_FragColor = mix(gl_FragColor, u_scanColor, f);\n" +
        "}\n" +
        "}\n";
    var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter);
    var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1);
    var _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500);
    var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1);
    var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1);
    var _time = (new Date()).getTime();
    var _scratchCartesian4Center = new Cesium.Cartesian4();
    var _scratchCartesian4Center1 = new Cesium.Cartesian4();
    var _scratchCartesian3Normal = new Cesium.Cartesian3();
    var ScanPostStage = new Cesium.PostProcessStage({
        fragmentShader: ScanSegmentShader,
        uniforms: {
            u_scanCenterEC: function () {
                return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
            },
            u_scanPlaneNormalEC: function () {
                var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1);
                _scratchCartesian3Normal.x = temp1.x - temp.x;
                _scratchCartesian3Normal.y = temp1.y - temp.y;
                _scratchCartesian3Normal.z = temp1.z - temp.z;
                Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal);
                return _scratchCartesian3Normal;
            },
            u_radius: function () {
                return maxRadius * (((new Date()).getTime() - _time) % duration) / duration;
            },
            u_scanColor: scanColor
        }
    });
    viewer.scene.postProcessStages.add(ScanPostStage);
}


/***/ }),

/***/ "./src/app/pages/welcome/func/texiao/PolylineTrailLinkMaterialProperty.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/welcome/func/texiao/PolylineTrailLinkMaterialProperty.ts ***!
  \********************************************************************************/
/*! exports provided: PolylineTrailLinkMaterialProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineTrailLinkMaterialProperty", function() { return PolylineTrailLinkMaterialProperty; });
class PolylineTrailLinkMaterialProperty {
    constructor(duration, color) {
        this.duration = duration;
        this._color = undefined;
        this.color = color;
        this._time = (new Date()).getTime();
        this._definitionChanged = new Cesium.Event();
        this.init();
    }
    init() {
        Cesium.Material.PolylineTrailLinkType = 'PolylineTrailLink';
        // Cesium.Material.PolylineTrailLinkImage = 'assets/materia/linecyan.png'
        Cesium.Material.PolylineTrailLinkImage = 'assets/materia/polylineLineFlowMaterial.png';
        // // 不显示轨迹线(传入颜色)
        // Cesium.Material.PolylineTrailLinkSource =
        // `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
        //     {\n\
        //         czm_material material = czm_getDefaultMaterial(materialInput);\n\
        //         vec2 st = materialInput.st;\n\
        //         vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
        //         material.alpha = colorImage.a;\n\
        //         material.diffuse = color.rgb;\n\
        //         return material;\n\
        // }`
        // 白色光斑运动 红色线
        // Cesium.Material.PolylineTrailLinkSource =
        // `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
        //     {\n\
        //         czm_material material = czm_getDefaultMaterial(materialInput);\n\
        //         vec2 st = materialInput.st;\n\
        //         vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
        //         material.alpha = color.a;\n\
        //         material.diffuse = colorImage.rgb;\n\
        //         return material;\n\
        //     }`;
        // 不显示轨迹线(图片颜色和传入颜色混合)
        Cesium.Material.PolylineTrailLinkSource =
            `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
            {\n\
                    czm_material material = czm_getDefaultMaterial(materialInput);\n\
                    vec2 st = materialInput.st;\n\
                    vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
                    material.alpha = colorImage.a * color.a;\n\
                    material.diffuse = (colorImage.rgb+color.rgb)/2.0;\n\
                    return material;\n\
                }`;
        Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType, {
            fabric: {
                type: Cesium.Material.PolylineTrailLinkType,
                uniforms: {
                    color: new Cesium.Color(1.0, 0.0, 0.0, 1),
                    image: Cesium.Material.PolylineTrailLinkImage,
                    time: 50,
                },
                source: Cesium.Material.PolylineTrailLinkSource
            },
            translucent: function (material) {
                return true;
            }
        });
    }
    getType() {
        return 'PolylineTrailLink';
    }
    getValue(time, result) {
        if (!Cesium.defined(result)) {
            result = {};
        }
        result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color);
        result.image = Cesium.Material.PolylineTrailLinkImage;
        result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration;
        return result;
    }
    equals(other) {
        return this === other || (other instanceof PolylineTrailLinkMaterialProperty && Cesium.Property.equals(this._color, other._color));
    }
    get isConstant() {
        return false;
    }
    get definitionChanged() {
        return this._definitionChanged;
    }
}
Object.defineProperties(PolylineTrailLinkMaterialProperty.prototype, {
    color: Cesium.createPropertyDescriptor('color')
});


/***/ }),

/***/ "./src/app/pages/welcome/func/texiao/Water.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/func/texiao/Water.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addWaterAnimation; });
function addWaterAnimation(viewer, coordinates) {
    const primitive = new Cesium.Primitive({
        show: true,
        geometryInstances: new Cesium.GeometryInstance({
            geometry: new Cesium.PolygonGeometry({
                polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(coordinates)),
                vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
                extrudedHeight: 0,
                height: 30
            })
        }),
        appearance: new Cesium.EllipsoidSurfaceAppearance({
            aboveGround: true,
            material: new Cesium.Material({
                fabric: {
                    type: 'Water',
                    uniforms: {
                        baseWaterColor: Cesium.Color.BLUE,
                        blendColor: Cesium.Color.BLUE,
                        normalMap: 'assets/materia/water.jpg',
                        frequency: 100.0,
                        animationSpeed: 0.01,
                        amplitude: 100.0,
                        // 反射强度
                        specularIntensity: 100
                    }
                }
            }),
            fragmentShaderSource: 'varying vec3 v_positionMC;\n' +
                'varying vec3 v_positionEC;\n' +
                'varying vec2 v_st;\n' +
                'void main()\n' +
                '{\n' +
                'czm_materialInput materialInput;\n' +
                'vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));\n' +
                '#ifdef FACE_FORWARD\n' +
                'normalEC = faceforward(normalEC, vec3(0.0, 1.0, 1.0), -normalEC);\n' +
                '#endif\n' +
                'materialInput.s = v_st.s;\n' +
                'materialInput.st = v_st;\n' +
                'materialInput.str = vec3(v_st, 0.0);\n' +
                'materialInput.normalEC = normalEC;\n' +
                'materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);\n' +
                'vec3 positionToEyeEC = -v_positionEC;\n' +
                'materialInput.positionToEyeEC = positionToEyeEC;\n' +
                'czm_material material = czm_getMaterial(materialInput);\n' +
                '#ifdef FLAT\n' +
                'gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);\n' +
                '#else\n' +
                'gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);\n' +
                'gl_FragColor.a=0.5;\n' +
                '#endif\n' +
                '}\n'
        })
    });
    viewer.scene.primitives.add(primitive);
}


/***/ }),

/***/ "./src/app/pages/welcome/func/trackAnimation.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/func/trackAnimation.ts ***!
  \******************************************************/
/*! exports provided: TrackAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackAnimation", function() { return TrackAnimation; });
class TrackAnimation {
    constructor(options) {
        this.multiplier = 0.5;
        this.ifPathLine = false;
        this.ifPathPoint = false;
        const { viewer, pathArr, entity, runTime, ifPathLine, ifPathPoint } = options;
        this.viewer = viewer;
        this.pathPositions = pathArr;
        this.handleEntity = entity;
        this.entityRunTime = runTime;
        if (typeof (ifPathLine) != 'undefined')
            this.ifPathLine = ifPathLine;
        if (typeof (ifPathPoint) != 'undefined')
            this.ifPathPoint = ifPathPoint;
        this._init();
    }
    _init() {
        //设置随机种子使随机数一致
        Cesium.Math.setRandomNumberSeed(888);
        this._setTimeExtent();
        this._setProperty();
        this._setInterpolation(1);
        this.sideView();
    }
    _setTimeExtent() {
        this.startTime = Cesium.JulianDate.fromDate(new Date());
        this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, 360, new Cesium.JulianDate());
        // this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, this.pathPositions.length-1, new Cesium.JulianDate);
        this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, 360, new Cesium.JulianDate);
        // 设置始时钟始时间
        this.viewer.clock.startTime = this.startTime.clone();
        this.viewer.clock.currentTime = this.startTime.clone();
        this.viewer.clock.stopTime = this.stopTime.clone();
        // 时间速率，数字越大时间过的越快 
        this.viewer.clock.multiplier = this.multiplier;
        // SYSTEM_CLOCK 将时钟设置为当前系统时间；忽略所有其他设置 
        // SYSTEM_CLOCK_MULTIPLIER  系统时间*multiplier
        // TICK_DEPENDENT   提前固定时间
        this.viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
        // 循环执行
        this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
    }
    // 计算位置property
    _getProperty() {
        const property = new Cesium.SampledPositionProperty();
        this.pathPositions.forEach((element, index) => {
            // const time = Cesium.JulianDate.addSeconds(this.startTime, index, new Cesium.JulianDate);
            const time = Cesium.JulianDate.addSeconds(this.entityRunTime, index, new Cesium.JulianDate);
            const position = Cesium.Cartesian3.fromDegrees(element.lng, element.lat, element.alt);
            property.addSample(time, position);
            // 修改停止时间 确保每个entiry轨迹完整
            if (index === this.pathPositions.length - 1) {
                this.viewer.clock.stopTime = Cesium.JulianDate.addSeconds(this.entityRunTime, index, new Cesium.JulianDate);
            }
            if (this.ifPathPoint) {
                this.viewer.entities.add({
                    position: position,
                    point: {
                        pixelSize: 8,
                        color: Cesium.Color.TRANSPARENT,
                        outlineColor: Cesium.Color.RED,
                        outlineWidth: 3,
                    },
                });
            }
        });
        return property;
    }
    _setProperty() {
        const satellitePosition = this._getProperty();
        // 设置运动时间间隔
        this.handleEntity.availability = new Cesium.TimeIntervalCollection([
            new Cesium.TimeInterval({ start: this.startTime, stop: this.stopTime })
        ]);
        // 模型矩阵
        this.handleEntity.position = satellitePosition;
        // 基于位置移动自动计算方向
        this.handleEntity.orientation = new Cesium.VelocityOrientationProperty(satellitePosition);
        if (this.ifPathLine) {
            this.handleEntity.path = {
                resolution: 0.1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.1,
                    color: Cesium.Color.YELLOW
                }),
                width: 3
            };
        }
    }
    // 插值器
    _setInterpolation(type) {
        switch (type) {
            case 1:
                // 线性插值
                this.handleEntity.position.setInterpolationOptions({
                    interpolationDegree: 1,
                    interpolationAlgorithm: Cesium.LinearApproximation,
                });
                break;
            case 2:
                // 拉格朗日插值
                this.handleEntity.position.setInterpolationOptions({
                    interpolationDegree: 5,
                    interpolationAlgorithm: Cesium.LagrangePolynomialApproximation,
                });
                break;
            case 3:
                // 埃尔米特插值
                this.handleEntity.position.setInterpolationOptions({
                    interpolationDegree: 2,
                    interpolationAlgorithm: Cesium.HermitePolynomialApproximation,
                });
                break;
            default:
                break;
        }
    }
    // 计算模型矩阵 相机视角锁定
    _followCameraCallBack() {
        function getModelMatrix(entity, time, result) {
            let matrix3Scratch = new Cesium.Matrix3();
            let positionScratch = new Cesium.Cartesian3();
            let orientationScratch = new Cesium.Quaternion();
            let position = Cesium.Property.getValueOrUndefined(entity.position, time, positionScratch);
            if (!Cesium.defined(position)) {
                return undefined;
            }
            let orientation = Cesium.Property.getValueOrUndefined(entity.orientation, time, orientationScratch);
            if (!Cesium.defined(orientation)) {
                result = Cesium.Transforms.eastNorthUpToFixedFrame(position, undefined, result);
            }
            else {
                result = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(orientation, matrix3Scratch), position, result);
            }
            return result;
        }
        let scratch = new Cesium.Matrix4();
        getModelMatrix(this.handleEntity, this.viewer.clock.currentTime, scratch);
        this.viewer.scene.camera.lookAtTransform(scratch, new Cesium.Cartesian3(-50, 0, 10));
    }
    // 切换相机跟随模式
    _changeCameraMode(type) {
        this.removeFollowCamera();
        switch (type) {
            case 1:
                this.viewer.scene.preRender.addEventListener(this._followCameraCallBack, this);
                break;
            case 3:
                this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
                this.viewer.trackedEntity = this.handleEntity;
                break;
        }
    }
    // 播放
    play() {
        this.viewer.clock.shouldAnimate = true;
    }
    //　暂停
    pause() {
        this.viewer.clock.shouldAnimate = false;
    }
    // 第一人称视角锁定
    firstPerson() {
        this._changeCameraMode(1);
    }
    // 第三人称自由视角
    thirdPerson() {
        this._changeCameraMode(3);
    }
    // 头顶视角
    topView() {
        this.viewer.trackedEntity = undefined;
        this.viewer.zoomTo(this.viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)));
    }
    // 侧边视角
    sideView() {
        this.viewer.trackedEntity = undefined;
        this.viewer.zoomTo(this.viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 12500));
    }
    // 取消相机跟随
    removeFollowCamera() {
        this.viewer.trackedEntity = undefined;
        this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        this.viewer.scene.preRender.removeEventListener(this._followCameraCallBack, this);
    }
}


/***/ }),

/***/ "./src/app/pages/welcome/func/transformCoord.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/func/transformCoord.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TfCoords; });
// 世界坐标Cartesian3笛卡尔空间直角坐标系   new Cesium.Cartesian3(x, y, z)
// 屏幕坐标Cartesian2二维笛卡尔坐标系  new Cesium.Cartesian2(x, y)
// 地理坐标(经纬度)WGS84 经度[-180,180] 纬度[-90,90]  cesium中经纬度要计算为弧度 
// WGS84弧度坐标系Cartographic  new Cesium.Cartographic(longitude, latitude, height)
class TfCoords {
    constructor() { }
    // 经纬度转换为世界坐标
    static lnglatToxyz(lng, lat, alt, ellipsoid) {
        return Cesium.Cartesian3.fromDegrees(lng, lat, alt, ellipsoid || Cesium.Ellipsoid.WGS84);
    }
    // 世界坐标转换为经纬度
    static xyzTolnglat(x, y, z) {
        const ellipsoid = Cesium.Ellipsoid.WGS84;
        const cartesian3 = new Cesium.Cartesian3(x, y, z);
        const cartographic = ellipsoid.cartesianToCartographic(cartesian3);
        const lat = Cesium.Math.toDegrees(cartographic.latitude);
        const lng = Cesium.Math.toDegrees(cartographic.longitude);
        const alt = cartographic.height;
        return { lng, lat, alt };
    }
    // 世界坐标转屏幕坐标
    static xyzToScreen(viewer, cartesian3) {
        return Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian3);
    }
    // 经、纬度转弧度
    static degTorad(degrees) {
        return Cesium.Math.toRadians(degrees);
    }
    // 弧度转经、纬度
    static redToDeg(radians) {
        return Cesium.Math.toDegrees(radians);
    }
}
// var a = TfCoords.lnglatToxyz(121.1,31.1,10)
// console.log(a)
// var b = tfCoord.xyzTolnglat(a.x,a.y,a.z);
// console.log(b)


/***/ }),

/***/ "./src/app/pages/welcome/pages/add-entity/add-entity.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/welcome/pages/add-entity/add-entity.component.ts ***!
  \************************************************************************/
/*! exports provided: AddEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntityComponent", function() { return AddEntityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _func_addMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../func/addMarker */ "./src/app/pages/welcome/func/addMarker.ts");
/* harmony import */ var _func_cavas_diffCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../func/cavas/diffCircle */ "./src/app/pages/welcome/func/cavas/diffCircle.ts");
/* harmony import */ var _func_transformCoord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../func/transformCoord */ "./src/app/pages/welcome/func/transformCoord.ts");
/* harmony import */ var _func_texiao_Water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../func/texiao/Water */ "./src/app/pages/welcome/func/texiao/Water.ts");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");
/*
 * @Author: your name
 * @Date: 2021-10-12 17:29:25
 * @LastEditTime: 2021-11-05 00:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ngcesium\src\app\pages\welcome\pages\add-entity\add-entity.component.ts
 */










class AddEntityComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
        var cartesian3 = _func_transformCoord__WEBPACK_IMPORTED_MODULE_3__["default"].lnglatToxyz(121.1, 31.1, 10);
        console.log(cartesian3);
        var screenCoord = Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.viewer.scene, cartesian3);
        console.log(screenCoord);
        // 拾取实体
        // const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        // handler.setInputAction((movement)=>{
        //   const picked = this.viewer.scene.pick(movement.position);
        // if(picked){
        //   const entity = Cesium.defaultValue(picked.id, picked.primitive.id);
        //   if (entity instanceof Cesium.Entity) {
        //     console.log(entity)
        //     return entity;
        //   }
        // }
        // },Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }
    // 实体集
    getEntities() {
        var entity = new Cesium.Entity({
            id: 'zard',
            polygon: {
                hierarchy: Cesium.Cartesian3.fromDegreesArray([
                    -109.080842, 45.002073,
                    -105.91517, 45.002073,
                    -104.058488, 44.996596,
                    -104.053011, 43.002989,
                    -104.053011, 41.003906,
                    -105.728954, 40.998429,
                    -107.919731, 41.003906,
                    -109.04798, 40.998429,
                    -111.047063, 40.998429,
                    -111.047063, 42.000709,
                    -111.047063, 44.476286,
                    -111.05254, 45.002073
                ]),
                height: 10,
                // material : Cesium.Color.RED.withAlpha(0.5), // 材质
                material: 'assets/IMG/aa.jpg',
                outline: true,
                outlineColor: Cesium.Color.BLACK
            }
        });
        // 通过ID获取实体
        var entity = this.viewer.entities.getById('zard');
        // 获取实体 如果不存在则创建
        var entity1 = this.viewer.entities.getOrCreateEntity('uniqueId');
        // 实体集监听
        // this.viewer.entities.collectionChanged.addEventListener(onChanged);
        // 添加
        this.viewer.entities.add(entity);
        // 删除
        this.viewer.entities.remove(entity);
        // 删除实体通过ID
        this.viewer.entities.remove('zard');
        // 删除所有
        this.viewer.entities.removeAll();
        // 获取实体
        this.viewer.entities.getById('zard');
        // 是否包含
        this.viewer.entities.contains(entity);
        // 实体集监听
        function onChanged(collection, added, removed, changed) {
            var msg = 'Added ids';
            for (var i = 0; i < added.length; i++) {
                msg += '\n' + added[i].id;
            }
            console.log(msg);
        }
    }
    // 添加立方体
    addLFT() {
        var imgMaterial = new Cesium.ImageMaterialProperty({
            image: '/assets/IMG/aa.jpg',
            color: Cesium.Color.BLUE,
            repeat: new Cesium.Cartesian2(1, 1)
        });
        var redBox = this.viewer.entities.add({
            id: 'entityid123',
            name: 'entityname123',
            position: Cesium.Cartesian3.fromDegrees(121.0, 31.0, 0.0),
            box: {
                // 尺寸
                dimensions: new Cesium.Cartesian3(300000.0, 300000.0, 200000.0),
                // 材质
                material: new Cesium.ImageMaterialProperty({
                    color: Cesium.Color.BLUE,
                    repeat: new Cesium.Cartesian2(1, 1)
                }),
                // material :imgMaterial,
                outline: true,
                outlineColor: Cesium.Color.BLACK
            },
            description: '描述信息',
            label: {
                text: 'Citizens Bank Park',
                font: '14pt monospace',
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, 1)
            }
        });
        this.viewer.zoomTo(this.viewer.entities);
        setTimeout(() => {
            // var entity = this.viewer.entities.getById('entityid');
            // this.viewer.entities.remove(entity) 
        }, 7000);
    }
    // 添加多边形
    addDBX() {
        var wyoming = this.viewer.entities.add({
            id: 'zard',
            polygon: {
                hierarchy: Cesium.Cartesian3.fromDegreesArray([
                    -109.080842, 45.002073,
                    -105.91517, 45.002073,
                    -104.058488, 44.996596,
                    -104.053011, 43.002989,
                    -104.053011, 41.003906,
                    -105.728954, 40.998429,
                    -107.919731, 41.003906,
                    -109.04798, 40.998429,
                    -111.047063, 40.998429,
                    -111.047063, 42.000709,
                    -111.047063, 44.476286,
                    -111.05254, 45.002073
                ]),
                height: 0,
                // material : Cesium.Color.RED.withAlpha(0.5), // 材质
                material: 'assets/IMG/aa.jpg',
                outline: true,
                outlineColor: Cesium.Color.BLACK
            }
        });
        this.viewer.zoomTo(wyoming);
    }
    // 添加折线
    addZX() {
        this.polyLine = this.viewer.entities.add({
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray([121.1, 31.1, 122, 32]),
                width: 15,
            }
        });
        this.viewer.zoomTo(this.viewer.entities);
        // 发光
        // entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
        //   glowPower : 0.9,
        //   color : Cesium.Color.RED
        // });
    }
    addPlane() {
        let c = Object(_func_cavas_diffCircle__WEBPACK_IMPORTED_MODULE_2__["default"])();
        const position = Cesium.Cartesian3.fromDegrees(121, 31, 100);
        const canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 150;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 法线
        const normal = Cesium.Cartesian3.UNIT_Y;
        const board = this.viewer.entities.add({
            position: position,
            plane: {
                plane: new Cesium.Plane(normal, 0),
                dimensions: new Cesium.Cartesian2(5, 1.5),
                material: new Cesium.ImageMaterialProperty({
                    image: c,
                    transparent: true //透明贴图
                })
            }
        });
        this.viewer.zoomTo(board);
    }
    updatepolyLine() {
        this.polyLine.polyline.material = new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.3,
            color: Cesium.Color.YELLOW,
        });
    }
    addPoint() {
        Object(_func_texiao_Water__WEBPACK_IMPORTED_MODULE_4__["default"])(this.viewer, [
            121.93770628339514,
            30.90989525340411,
            0,
            121.94179304137732,
            30.909861693589566,
            0,
            121.94591833644154,
            30.90885409927493,
            0,
            121.94903081429607,
            30.907175070796296,
            0,
            121.95144180168687,
            30.90502646120125,
            0,
            121.95322902361073,
            30.902274455081354,
            0,
            121.95447033047725,
            30.898752043613865,
            0,
            121.95454497797425,
            30.895633591542385,
            0,
            121.95341472305923,
            30.892650524496407,
            0,
            121.95143000951653,
            30.889769143047925,
            0,
            121.94890259964873,
            30.88765908612741,
            0,
            121.94524935785677,
            30.885783931027714,
            0,
            121.94058704020226,
            30.88521479153862,
            0,
            121.93639094306872,
            30.885716934595568,
            0,
            121.93219395692941,
            30.88712314673071,
            0,
            121.9289275019642,
            30.890003512749026,
            0,
            121.92670846518199,
            30.893588747457514,
            0,
            121.92584812345648,
            30.8982152905379,
            0,
            121.92701090380825,
            30.902039452712483,
            0,
            121.92883613978637,
            30.905429153718934,
            0,
            121.93218071226671,
            30.90798085793282,
            0,
            121.93556566796289,
            30.90986161530055,
            0,
            121.93743383238098,
            30.910130366791957,
            0
        ]);
        return;
        let dataArr = [
            { lng: 121.1, lat: 31.1, alt: 10, name: 'zard1' },
            { lng: 121.13, lat: 31.13, alt: 0, name: 'zard2' }
        ];
        let billBoardConfig = {
            width: 30,
            height: 50,
            image: 'assets/IMG/aa.jpg',
            distanceDisplayCondition: [0, 200000],
            scaleByDistance: [1, 1, 2e5, 1]
        };
        let layerConf = {
            dataArr,
            layerId: 'markerlayer',
            fieldNameId: 'name',
            isLabel: true,
            isBillBoard: true,
            billBoardConfig,
            isPoint: false,
            isZoomTo: true
        };
        Object(_func_addMarker__WEBPACK_IMPORTED_MODULE_1__["createMarkerLayer"])(this.viewer, layerConf);
        function callBack(res) {
            console.log(res);
        }
        let handler = this.addMarkerPick(callBack);
        setTimeout(() => {
            this.removeMarkerPick(handler);
        }, 5000);
        //this.viewer.dataSources.remove(this.viewer.dataSources.getByName('markerlayer')[0]); // 删除单个数据集
        // this.viewer.dataSources.removeAll() // 删除所有数据集
    }
    addMarkerPick(callBack) {
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction((movement) => {
            const picked = this.viewer.scene.pick(movement.position);
            if (picked) {
                const entity = Cesium.defaultValue(picked.id, picked.primitive.id);
                if (entity instanceof Cesium.Entity) {
                    callBack(entity.attr);
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        return handler;
    }
    removeMarkerPick(handler) {
        handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    drawLine() {
        let pointArr = [];
        let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction((e) => {
            let ray = this.viewer.camera.getPickRay(e.position);
            let position = this.viewer.scene.globe.pick(ray, this.viewer.scene);
            let cartographic = Cesium.Cartographic.fromCartesian(position);
            let lon = Cesium.Math.toDegrees(cartographic.longitude);
            let lat = Cesium.Math.toDegrees(cartographic.latitude);
            console.log(lon);
            console.log(lat);
            console.log(0);
            let pointPrimitives = null;
            pointPrimitives = this.viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection());
            pointPrimitives.add({
                pixelSize: 10,
                color: Cesium.Color.RED,
                position: Cesium.Cartesian3.fromDegrees(lon, lat),
            });
            pointArr.push(lon);
            pointArr.push(lat);
            this.viewer.entities.add({
                name: 'line',
                polyline: {
                    positions: Cesium.Cartesian3.fromDegreesArray(pointArr),
                    width: 2,
                    material: Cesium.Color.YELLOW,
                    clampToGround: true
                }
            });
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
}
AddEntityComponent.ɵfac = function AddEntityComponent_Factory(t) { return new (t || AddEntityComponent)(); };
AddEntityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEntityComponent, selectors: [["app-add-entity"]], decls: 15, vars: 0, consts: [[2, "margin", "10px"], ["nz-icon", "", "nzType", "step-backward", "nzTheme", "outline"], ["nz-icon", "", "nzType", "fast-backward", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function AddEntityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEntityComponent_Template_button_click_4_listener() { return ctx.addZX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6DFB\u52A0\u6298\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEntityComponent_Template_button_click_6_listener() { return ctx.updatepolyLine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u4FEE\u6539\u6750\u8D28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEntityComponent_Template_button_click_8_listener() { return ctx.addPoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u6DFB\u52A0marker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEntityComponent_Template_button_click_10_listener() { return ctx.addPlane(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "cavas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEntityComponent_Template_button_click_12_listener() { return ctx.drawLine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "drawLine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-init-cesium", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function AddEntityComponent_Template_app_init_cesium_mapLoaded_14_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_8__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvYWRkLWVudGl0eS9hZGQtZW50aXR5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEntityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-entity',
                templateUrl: './add-entity.component.html',
                styleUrls: ['./add-entity.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/add-gltf/add-gltf.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/welcome/pages/add-gltf/add-gltf.component.ts ***!
  \********************************************************************/
/*! exports provided: AddGltfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGltfComponent", function() { return AddGltfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _track_flyPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../track/flyPath */ "./src/app/pages/welcome/pages/track/flyPath.ts");
/* harmony import */ var _func_trackAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../func/trackAnimation */ "./src/app/pages/welcome/func/trackAnimation.ts");
/* harmony import */ var _func_createModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../func/createModel */ "./src/app/pages/welcome/func/createModel.ts");
/* harmony import */ var _func_cameraFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../func/cameraFunc */ "./src/app/pages/welcome/func/cameraFunc.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");










class AddGltfComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
        // var bloom = this.viewer.scene.postProcessStages.bloom;
        // bloom.enabled = true;
        // bloom.uniforms.glowOnly = false;
        // bloom.uniforms.contrast = 128;
        // bloom.uniforms.brightness = -0.3;
        // bloom.uniforms.delta = 1;
        // bloom.uniforms.sigma = 2;
        // bloom.uniforms.stepSize = 1
    }
    mouseSelect() {
        // 边缘检测
        var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
        silhouetteBlue.enabled = true;
        silhouetteBlue.uniforms.color = Cesium.Color.RED;
        silhouetteBlue.uniforms.length = 1;
        silhouetteBlue.selected = [];
        this.viewer.scene.postProcessStages.add(Cesium.PostProcessStageLibrary.createSilhouetteStage([
            silhouetteBlue
        ]));
        var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction((event) => {
            silhouetteBlue.selected = [];
            var picked = this.viewer.scene.pick(event.position);
            if (!Cesium.defined(picked)) {
                return;
            }
            if (picked.id) {
                silhouetteBlue.selected = [picked.primitive];
                console.log(1);
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    // 通过entity 添加模型
    addGltfModel_entity() {
        var position = Cesium.Cartesian3.fromDegrees(121.1, 31.1);
        var heading = Cesium.Math.toRadians(100);
        var pitch = Cesium.Math.toRadians(0);
        var roll = Cesium.Math.toRadians(0.0);
        // 仰俯角、偏转角、翻滚角  注意旋转中心是建模时的模型中心而不是笛卡尔坐标系
        var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
        // 模型姿态
        var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
        var r = 255, g = 0, b = 0;
        var fadeColor = new Cesium.CallbackProperty(function (time, result) {
            if (r > 0 && b === 0) {
                r--;
                g++;
            }
            if (g > 0 && r === 0) {
                g--;
                b++;
            }
            if (b > 0 && g === 0) {
                r++;
                b--;
            }
            return Cesium.Color.fromBytes(r, g, b, 160, result);
        }, false);
        let w = 1;
        var fadeWidth = new Cesium.CallbackProperty(function (time, result) {
            if (w >= 8) {
                w = 0;
            }
            else if (w < 8) {
                w += 0.25;
            }
            // console.log(Math.floor( Math.random() * (5 - 0) + 5))
            return w;
        }, false);
        let _num = 0;
        function getLineColorCallbackProperty(color) {
            var callback = new Cesium.CallbackProperty(function (t, c) {
                if ((_num % 2) === 0) {
                    c.alpha -= 0.05;
                }
                else {
                    c.alpha += 0.05;
                }
                if (c.alpha <= 0.2) {
                    c.alpha = 0.21;
                    _num++;
                }
                else if (c.alpha >= 0.7) {
                    c.alpha = 0.69;
                    _num++;
                }
                // entity的颜色透明 并不影响材质，并且 entity也会透明
                return color.withAlpha(c.alpha);
            });
            return callback;
        }
        var entity = this.viewer.entities.add({
            id: 'zard',
            position: position,
            orientation: orientation,
            label: {
                text: '测试名称\n 123',
                // font : '14pt Source Han Sans CN',
                font: '14pt monospace',
                // fillColor:new Cesium.Color.fromCssColorString("rgba(255, 255, 255,1)"),   //字体颜色
                fillColor: fadeColor,
                scale: 0.8,
                backgroundColor: new Cesium.Color.fromCssColorString("rgba(28, 28, 28, 1)"),
                backgroundPadding: new Cesium.Cartesian2(20, 10),
                showBackground: true,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.TOP,
                // horizontalOrigin :Cesium.HorizontalOrigin.LEFT,//水平位置
                // pixelOffset: Cesium.Cartesian2.ZERO,        
                // eyeOffset: Cesium.Cartesian3.ZERO,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                eyeOffset: new Cesium.Cartesian3(0, 120, 0),
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000),
            },
            point: {
                pixelSize: 10,
                color: Cesium.Color.YELLOW,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(8000, 2000000000),
            },
            billboard: {
                image: 'assets/IMG/aa.jpg',
                width: 31,
                height: 31,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(4000, 8000)
            },
            model: {
                // color: new Cesium.Color(0 ,224 ,0,0.001),
                uri: 'assets/models/gltf/Car1120.gltf',
                scale: 50,
                // color:getLineColorCallbackProperty(Cesium.Color.RED),
                // silhouetteColor :Cesium.Color.RED.withAlpha(10),
                // silhouetteSize  :fadeWidth,
                distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 4000)
            }
        });
        this.viewer.zoomTo(entity);
    }
    // 通过primitive 添加模型
    addGltfModel_primitives() {
        let opt = {
            lng: 121.62898254394531,
            lat: 31.02804946899414,
            alt: 1,
            h: -90,
            p: 0,
            r: 0
        };
        let callBack = (model) => {
            console.log(model);
            Object(_func_cameraFunc__WEBPACK_IMPORTED_MODULE_4__["zoomToModel"])(this.viewer, model);
        };
        let model = Object(_func_createModel__WEBPACK_IMPORTED_MODULE_3__["createModelByPrimitive"])(this.viewer, opt, callBack);
        // createModelsCollection(this.viewer)
        // let entity = createModelByEntity(this.viewer,null,callBack)
        return;
        const position = Cesium.Cartesian3.fromDegrees(121.62898254394531, 31.02804946899414, 0);
        const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position);
        this.model = this.viewer.scene.primitives.add(Cesium.Model.fromGltf({
            // distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000),
            id: 'zardModel',
            show: true,
            url: 'assets/models/gltf/Car1120.gltf',
            // basePath:'assets/models/gltf/Car1120.gltf',
            modelMatrix,
            allowPicking: false,
            scale: 50,
            minimumPixelSize: 128,
            maximumScale: 20000,
            // shadows:
            color: new Cesium.Color(1, 2, 3, 1),
            // ColorBlendMode :10,
            // colorBlendAmount: 1,
            // lightColor:new Cesium.Color(1,2,3,1),
            // silhouetteColor :Cesium.Color.RED,
            // silhouetteSize  :fadeWidth,
            showOutline: true,
            incrementallyLoadTextures: true,
            runAnimations: true,
            clampAnimations: true,
            debugShowBoundingVolume: false,
            debugWireframe: false // 调试线框
        }));
        //延X轴放大2倍
        //延Y轴放大3倍
        //延Z轴放大4倍
        // const scale=Cesium.Matrix4.fromScale(new Cesium.Cartesian3(2,3,4),new Cesium.Matrix4)
        // this.model.modelMatrix=Cesium.Matrix4.multiply(this.model.modelMatrix,scale,this.model.modelMatrix)
        // 模型平移 延Y轴平移100m
        const translation = Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(0, 1000, 0));
        Cesium.Matrix4.multiply(this.model.modelMatrix, translation, this.model.modelMatrix);
        // 模型旋转 延Z轴旋转90度
        const angel = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(90));
        const rotation = Cesium.Matrix4.fromRotationTranslation(angel);
        Cesium.Matrix4.multiply(this.model.modelMatrix, rotation, this.model.modelMatrix);
        Cesium.when(this.model.readyPromise).then((model) => {
            // model.activeAnimations.addAll({
            //     loop : Cesium.ModelAnimationLoop.REPEAT
            // });
            this.viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(121.62898254394531, 31.02804946899414, 1000),
                orientation: {
                    heading: Cesium.Math.toRadians(0.0),
                    pitch: Cesium.Math.toRadians(-45.0),
                    roll: 0
                }
            });
        });
    }
    run() {
        this.viewer.clock.shouldAnimate = true;
        // const dataArr = [
        //   { lng: 121.1, lat:31.1, alt:100 },
        //   { lng: 121.2, lat:31.2, alt:100 },
        //   { lng: 121.2, lat:31.1, alt:100 },
        //   { lng: 121.1, lat:31.3, alt:100 },
        // ]
        const dataArr = _track_flyPath__WEBPACK_IMPORTED_MODULE_1__["default"][0].pathPositionArr;
        // this.viewer.scene.globe.depthTestAgainstTerrain = true;
        //设置随机数种子以获得一致的结果
        Cesium.Math.setRandomNumberSeed(3);
        // 起始时间
        let start = Cesium.JulianDate.fromDate(new Date());
        // 结束时间
        let stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
        // 设置始时钟始时间
        this.viewer.clock.startTime = start.clone();
        // 设置时钟当前时间
        this.viewer.clock.currentTime = start.clone();
        // 设置始终停止时间
        this.viewer.clock.stopTime = stop.clone();
        // 时间速率，数字越大时间过的越快
        this.viewer.clock.multiplier = 100;
        // 时间轴 
        // view.timeline.zoomTo(start,stop);
        // 循环执行
        this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
        const property = new Cesium.SampledPositionProperty();
        for (let i = 0; i < dataArr.length; i++) {
            let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate);
            let position = Cesium.Cartesian3.fromDegrees(dataArr[i].lng, dataArr[i].lat, dataArr[i].alt);
            property.addSample(time, position);
        }
        const model = this.viewer.entities.add({
            id: 'zardcar',
            // model: {
            //     uri: 'assets/models/gltf/Car1120.gltf',
            //     minimumPixelSize: 200, // 最小像素大小
            //     maximumScale: 200, // 模型的最大比例尺大小。 minimumPixelSize的上限,
            // }
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({ start: start, stop: stop })]),
            point: {
                pixelSize: 1,
                color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
            },
            position: property,
            orientation: new Cesium.VelocityOrientationProperty(property),
        });
        // 将路径显示为以0.1秒为增量采样的路径线
        // model.path=  {
        //   resolution : 0.1,
        //   material : new Cesium.PolylineGlowMaterialProperty({
        //       glowPower : 0.1,
        //       color : Cesium.Color.YELLOW
        //   }),
        //   width :3
        // }
        model.billboard = {
            "image": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgzNDY3MTIyNzY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM2MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTc5LjQ2MzUyOSAyMDYuMDA0NzA2Yy0zMC4xMTc2NDctMTQ2Ljk3NDExOC02MC4yMzUyOTQtMTYyLjYzNTI5NC02MC4yMzUyOTQtMTYyLjYzNTI5NC00LjgxODgyNC00LjgxODgyNC0xMC44NDIzNTMtNC44MTg4MjQtMTUuNjYxMTc2IDAgMCAwLTMwLjExNzY0NyAxNS42NjExNzYtNjAuMjM1Mjk0IDE2Mi42MzUyOTQgMCAwLTE5LjI3NTI5NCAxMDIuNC0xOS4yNzUyOTQgMTg1LjUyNDcwNlY1NTQuMTY0NzA2YzAgNDUuNzc4ODI0IDE3NC42ODIzNTMgNDAuOTYgMTc0LjY4MjM1MyAzLjYxNDExOFYzOTEuNTI5NDEyYzEuMjA0NzA2LTgzLjEyNDcwNi0xOS4yNzUyOTQtMTg1LjUyNDcwNi0xOS4yNzUyOTUtMTg1LjUyNDcwNnpNNTY2LjIxMTc2NSAzMTAuODE0MTE4YzAgNi4wMjM1MjktMS4yMDQ3MDYgNC44MTg4MjQtNi4wMjM1MyA2LjAyMzUyOWgtMTAuODQyMzUzcy0xNC40NTY0NzEtMTc4LjI5NjQ3MS0yNy43MDgyMzUtMjMzLjcxMjk0MWMwIDAgNDguMTg4MjM1IDEyMS42NzUyOTQgNDQuNTc0MTE4IDIyNy42ODk0MTJ6TTQ1NC4xNzQxMTggODM2LjA2NTg4Mmw3LjIyODIzNS0yMDkuNjE4ODIzYy02LjAyMzUyOS0yLjQwOTQxMi0xMC44NDIzNTMtNC44MTg4MjQtMTUuNjYxMTc3LTcuMjI4MjM1bDguNDMyOTQyIDIxNi44NDcwNTh6TTQzMS4yODQ3MDYgNzQ4LjEyMjM1M2w0LjgxODgyMy0xMzYuMTMxNzY1Yy0zLjYxNDExOC0zLjYxNDExOC03LjIyODIzNS03LjIyODIzNS05LjYzNzY0Ny0xMi4wNDcwNTlsNC44MTg4MjQgMTQ4LjE3ODgyNHpNNDgzLjA4NzA1OSA4OTUuMDk2NDcxbDkuNjM3NjQ3LTI2MS40MjExNzdjLTYuMDIzNTI5IDAtMTIuMDQ3MDU5LTEuMjA0NzA2LTE2Ljg2NTg4Mi0yLjQwOTQxMmw3LjIyODIzNSAyNjMuODMwNTg5ek01NzMuNDQgODMyLjQ1MTc2NWw3LjIyODIzNS0yMTUuNjQyMzUzYy0zLjYxNDExOCAzLjYxNDExOC04LjQzMjk0MSA2LjAyMzUyOS0xNC40NTY0NyA4LjQzMjk0MWw3LjIyODIzNSAyMDcuMjA5NDEyek01MDMuNTY3MDU5IDYzNC44OGw5LjYzNzY0NyAzNTAuNTY5NDEyIDkuNjM3NjQ3LTM1MC41Njk0MTJjLTYuMDIzNTI5IDAtMTMuMjUxNzY1IDEuMjA0NzA2LTE5LjI3NTI5NCAwek01OTIuNzE1Mjk0IDc1Mi45NDExNzZsNC44MTg4MjQtMTQ5LjM4MzUyOWMtMi40MDk0MTIgMy42MTQxMTgtNi4wMjM1MjkgNi4wMjM1MjktOS42Mzc2NDcgOS42Mzc2NDdsNC44MTg4MjMgMTM5Ljc0NTg4MnpNNTQ0LjUyNzA1OSA4OTAuMjc3NjQ3bDkuNjM3NjQ3LTI2MC4yMTY0NzEtMTguMDcwNTg4IDMuNjE0MTE4IDguNDMyOTQxIDI1Ni42MDIzNTN6IiBwLWlkPSIzNjA0IiBmaWxsPSIjZDgxZTA2Ij48L3BhdGg+PC9zdmc+",
            "scale": 1,
            "alignedAxis": new Cesium.VelocityVectorProperty(property, true)
        };
        // model.viewFrom = new Cesium.Cartesian3.fromDegrees(121.1,31.1,100)
        this.viewer.trackedEntity = model;
        function handeFollowCb(e) {
            function getModelMatrix(entity, time, result) {
                let matrix3Scratch = new Cesium.Matrix3();
                let positionScratch = new Cesium.Cartesian3();
                let orientationScratch = new Cesium.Quaternion();
                let position = Cesium.Property.getValueOrUndefined(entity.position, time, positionScratch);
                if (!Cesium.defined(position)) {
                    return undefined;
                }
                let orientation = Cesium.Property.getValueOrUndefined(entity.orientation, time, orientationScratch);
                if (!Cesium.defined(orientation)) {
                    result = Cesium.Transforms.eastNorthUpToFixedFrame(position, undefined, result);
                }
                else {
                    result = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(orientation, matrix3Scratch), position, result);
                }
                return result;
            }
            let scratch = new Cesium.Matrix4();
            getModelMatrix(model, this.viewer.clock.currentTime, scratch);
            this.viewer.scene.camera.lookAtTransform(scratch, new Cesium.Cartesian3(-50, 0, 10));
        }
        // this.viewer.scene.preRender.addEventListener(handeFollowCb, this)
        setTimeout(() => {
            this.viewer.scene.preRender.removeEventListener(handeFollowCb, this);
            this.viewer.trackedEntity = undefined;
            this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
            this.viewer.trackedEntity = model;
        }, 5 * 1000);
    }
    run1() {
        const model = this.viewer.entities.add({
            id: 'zardcar',
            model: {
                uri: 'assets/models/gltf/Car1120.gltf',
                minimumPixelSize: 200,
                maximumScale: 200,
            },
            point: {
                pixelSize: 1,
                color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
            }
        });
        const dataArr = _track_flyPath__WEBPACK_IMPORTED_MODULE_1__["default"][0].pathPositionArr;
        let tkAnim = new _func_trackAnimation__WEBPACK_IMPORTED_MODULE_2__["TrackAnimation"]({
            viewer: this.viewer,
            pathArr: dataArr,
            entity: model
        });
        tkAnim.play();
    }
}
AddGltfComponent.ɵfac = function AddGltfComponent_Factory(t) { return new (t || AddGltfComponent)(); };
AddGltfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddGltfComponent, selectors: [["app-add-gltf"]], decls: 9, vars: 0, consts: [[2, "margin", "10px"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function AddGltfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGltfComponent_Template_button_click_2_listener() { return ctx.addGltfModel_primitives(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u6DFB\u52A0gltf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGltfComponent_Template_button_click_4_listener() { return ctx.mouseSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u5F00\u542F\u9F20\u6807\u9009\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGltfComponent_Template_button_click_6_listener() { return ctx.run1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u8D34\u5730\u8FD0\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-init-cesium", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function AddGltfComponent_Template_app_init_cesium_mapLoaded_8_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_8__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvYWRkLWdsdGYvYWRkLWdsdGYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddGltfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-gltf',
                templateUrl: './add-gltf.component.html',
                styleUrls: ['./add-gltf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/base-map/base-map.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/welcome/pages/base-map/base-map.component.ts ***!
  \********************************************************************/
/*! exports provided: BaseMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMapComponent", function() { return BaseMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _func_baseMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../func/baseMap */ "./src/app/pages/welcome/func/baseMap.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");







class BaseMapComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
    }
    add(v) {
        Object(_func_baseMap__WEBPACK_IMPORTED_MODULE_1__["default"])(this.viewer, v);
    }
}
BaseMapComponent.ɵfac = function BaseMapComponent_Factory(t) { return new (t || BaseMapComponent)(); };
BaseMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseMapComponent, selectors: [["app-base-map"]], decls: 17, vars: 0, consts: [[2, "margin", "10px"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function BaseMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_2_listener() { return ctx.add("ARCGIS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ArcGIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_4_listener() { return ctx.add("BAIDU"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u767E\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_6_listener() { return ctx.add("GAODE"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u9AD8\u5FB7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_8_listener() { return ctx.add("OSM"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OSM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_10_listener() { return ctx.add("TDT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TDT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_12_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "geoq\u84DD\u9ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseMapComponent_Template_button_click_14_listener() { return ctx.add("IMG"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "IMG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-init-cesium", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function BaseMapComponent_Template_app_init_cesium_mapLoaded_16_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_5__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvYmFzZS1tYXAvYmFzZS1tYXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-map',
                templateUrl: './base-map.component.html',
                styleUrls: ['./base-map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/camera/camera.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/welcome/pages/camera/camera.component.ts ***!
  \****************************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _func_cameraFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../func/cameraFunc */ "./src/app/pages/welcome/func/cameraFunc.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");







class CameraComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
        // 鼠标点击显示位置
        var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
        handler.setInputAction((event) => {
            var pickedPosition = this.viewer.scene.pickPosition(event.position);
            if (Cesium.defined(pickedPosition)) {
                console.log(pickedPosition);
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    getViewerPosition() {
        const res = Object(_func_cameraFunc__WEBPACK_IMPORTED_MODULE_1__["getCameraXyzHpr"])(this.viewer);
        console.log(res);
        // var tfPositoon = tfCoord.xyzTolnglat(position.x,position.y,position.z);
        // console.log(tfPositoon)
        // var demo = {
        //   h: 6.242904348979944,
        //   p: -0.6477582064522922,
        //   r: 0.000004411506062673709,
        //   x: -2976446.6538335704,
        //   y: 4837235.09624852,
        //   z: 3197201.091606608,
        // }
        // initCameraView(this.viewer,demo)
    }
    flyToEntity() {
        var west = -90.0;
        var south = 38.0;
        var east = -87.0;
        var north = 40.0;
        var rectangle = this.viewer.entities.add({
            rectangle: {
                coordinates: Cesium.Rectangle.fromDegrees(west, south, east, north),
            },
        });
        // flyTo 参数可为Entity EntityCollection DataSource Cesium3DTilset
        this.viewer.flyTo(rectangle);
        //绑定
        // this.viewer.trackedEntity = rectangle;
        //解绑
        // this.viewer.trackedEntity = undefined
    }
    flyToPoint() {
        const position = {
            lon: 121.48173529235812,
            lat: 30.283260629907392,
            alt: 56165.85687084427
        };
        this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.alt),
            orientation: {
                heading: Cesium.Math.toRadians(10.0),
                pitch: Cesium.Math.toRadians(-44.0),
                roll: 0
            },
        });
        // 飞行至区域
        // this.viewer.camera.flyTo({
        //   destination: Cesium.Rectangle.fromDegrees(113.683333, 29.966667, 115.083333, 31.366667)
        // });
    }
    lookPoint() {
        const position = {
            lon: 121.1,
            lat: 31.1,
            alt: 2000
        };
        // var center = Cesium.Cartesian3.fromRadians(2.4213211833389243, 0.6171926869414084, 3626.0426275055174);
        var center = Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.alt);
        var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
        this.viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI / 8, 2900));
        this.viewer.clock.onTick.addEventListener((clock) => {
            this.viewer.scene.camera.rotateRight(0.005);
        });
    }
    flyAtoB() {
        var whdxOptions = {
            destination: Cesium.Cartesian3.fromDegrees(114.35231209, 30.53542614, 5000.0),
            duration: 5,
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-90.0),
                roll: Cesium.Math.toRadians(0.0)
            }
        };
        var hzkjdxOptions = {
            destination: Cesium.Cartesian3.fromDegrees(121.40782845, 31.01011682, 5000.0),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-90.0),
                roll: Cesium.Math.toRadians(0.0)
            },
            duration: 5,
        };
        whdxOptions.complete = () => {
            setTimeout(() => {
                this.viewer.camera.flyTo(hzkjdxOptions);
            }, 500);
        };
        this.viewer.camera.flyTo(whdxOptions);
    }
    addCameraFly() {
        const position = {
            lon: 121.1,
            lat: 31.1,
            alt: 2000
        };
        var center = Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.alt);
        let heading = Cesium.Math.toRadians(50.0);
        const pitch = Cesium.Math.toRadians(-20.0);
        const range = 3000.0;
        let x = 0;
        this.viewer.scene.postRender.addEventListener(() => {
            // this.viewer.clock.onTick.addEventListener((clock)=> {
            x += 0.000001;
            position.lat = position.lat + x;
            var ct = Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.alt);
            // heading = Cesium.Math.toRadians(x);
            // this.viewer.camera.lookAt(ct, new Cesium.HeadingPitchRange(heading, pitch, range))
            var transform = Cesium.Transforms.eastNorthUpToFixedFrame(ct);
            this.viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI / 8, 2900));
        });
    }
}
CameraComponent.ɵfac = function CameraComponent_Factory(t) { return new (t || CameraComponent)(); };
CameraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraComponent, selectors: [["app-camera"]], decls: 15, vars: 0, consts: [[2, "margin", "10px"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function CameraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_2_listener() { return ctx.flyToPoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u98DE\u5230\u5750\u6807\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_4_listener() { return ctx.getViewerPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6253\u5370\u5F53\u524Dviewer\u89C6\u89D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_6_listener() { return ctx.flyToEntity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u98DE\u5230\u5B9E\u4F53");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_8_listener() { return ctx.flyAtoB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u4ECEA\u98DE\u5230B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_10_listener() { return ctx.lookPoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u7ED5\u70B9\u65CB\u8F6C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraComponent_Template_button_click_12_listener() { return ctx.addCameraFly(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u7ED5\u70B9\u98DE\u884C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-init-cesium", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function CameraComponent_Template_app_init_cesium_mapLoaded_14_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_5__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-camera',
                templateUrl: './camera.component.html',
                styleUrls: ['./camera.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/cavas/cavas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/welcome/pages/cavas/cavas.component.ts ***!
  \**************************************************************/
/*! exports provided: CavasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CavasComponent", function() { return CavasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CavasComponent {
    constructor() { }
    ngOnInit() {
        let ctx = this.createCavas();
        this.drawText(ctx);
    }
    createCavas() {
        let root = document.querySelector('#root');
        let cavas = document.createElement('canvas');
        root.appendChild(cavas);
        cavas.width = 300;
        cavas.height = 100;
        const ctx = cavas.getContext('2d');
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, cavas.width, cavas.height);
        return ctx;
    }
    drawText(ctx) {
        let W = 300;
        let H = 100;
        let fS = 30;
        let T = '这真的是一句话';
        ctx.font = `${fS}px sans-serif`;
        // 测算文字长度
        let tL = ctx.measureText(T);
        // 起始坐标
        let x = (W - tL.width) / 2;
        let y = H / 2 + W / fS;
        ctx.strokeStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#FFFAFA';
        // ctx.strokeText(T,150,35,50);
        ctx.fillText(T, 150, 80, 50);
    }
    drawText1(ctx) {
        let W = 300;
        let H = 100;
        let T = ['这真的是一句话'];
        let fS = Math.round(Math.max(W / T[0].length, H / T[0].length) / T.length);
        console.log(fS);
        ctx.font = `${fS}px serif`;
        ctx.fillStyle = '#FFFAFA';
        for (let text of T) {
            // 测算文字长度
            let tL = ctx.measureText(T);
            // 起始坐标
            let x = (W - tL.width) / 2;
            let y = (H / (T.length + 1)) + fS / 2;
            ctx.fillText(text, x, y, W);
        }
    }
}
CavasComponent.ɵfac = function CavasComponent_Factory(t) { return new (t || CavasComponent)(); };
CavasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CavasComponent, selectors: [["app-cavas"]], decls: 1, vars: 0, consts: [["id", "root"]], template: function CavasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvY2F2YXMvY2F2YXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CavasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cavas',
                templateUrl: './cavas.component.html',
                styleUrls: ['./cavas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/demo/demo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/welcome/pages/demo/demo.component.ts ***!
  \************************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _func_texiao_City__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../func/texiao/City */ "./src/app/pages/welcome/func/texiao/City.ts");
/* harmony import */ var _func_texiao_GroundScanLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../func/texiao/GroundScanLine */ "./src/app/pages/welcome/func/texiao/GroundScanLine.ts");
/* harmony import */ var _func_trackAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../func/trackAnimation */ "./src/app/pages/welcome/func/trackAnimation.ts");
/* harmony import */ var _func_texiao_Water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../func/texiao/Water */ "./src/app/pages/welcome/func/texiao/Water.ts");
/* harmony import */ var _func_texiao_PolylineTrailLinkMaterialProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../func/texiao/PolylineTrailLinkMaterialProperty */ "./src/app/pages/welcome/func/texiao/PolylineTrailLinkMaterialProperty.ts");
/* harmony import */ var _func_texiao_DynamicWallMaterialProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../func/texiao/DynamicWallMaterialProperty */ "./src/app/pages/welcome/func/texiao/DynamicWallMaterialProperty.ts");
/* harmony import */ var _func_texiao_FlyLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../func/texiao/FlyLine */ "./src/app/pages/welcome/func/texiao/FlyLine.ts");
/* harmony import */ var _func_ClusterPointLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../func/ClusterPointLayer */ "./src/app/pages/welcome/func/ClusterPointLayer.ts");
/* harmony import */ var _func_cameraFunc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../func/cameraFunc */ "./src/app/pages/welcome/func/cameraFunc.ts");
/* harmony import */ var _river__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./river */ "./src/app/pages/welcome/pages/demo/river.ts");
/* harmony import */ var _lu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lu */ "./src/app/pages/welcome/pages/demo/lu.ts");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");














class DemoComponent {
    constructor() { }
    ngOnInit() {
        console.log(_lu__WEBPACK_IMPORTED_MODULE_11__["luData"]);
    }
    mapLoaded(e) {
        this.viewer = e;
        this.gotoView();
        this.clickCoord();
        this.add3Dtiles();
        this.addGroundScanLine();
        this.createCar();
        this.addWater();
        this.addPolyLine();
        this.createFlyLine();
        this.addWall();
        this.addjuhe();
        // setTimeout(() => {
        //   this.lookPoint()      
        // }, 3111);
    }
    gotoView() {
        let pos = {
            h: 0.682652507153108,
            p: -0.573794458816014,
            r: 6.28314780132029,
            x: -2850464.6080041216,
            y: 4660813.714268265,
            z: 3286712.141483263
        };
        Object(_func_cameraFunc__WEBPACK_IMPORTED_MODULE_9__["initCameraView"])(this.viewer, pos);
    }
    addjuhe() {
        let juheLayer = new _func_ClusterPointLayer__WEBPACK_IMPORTED_MODULE_8__["default"](this.viewer);
        console.log(juheLayer.layer);
    }
    addWall() {
        let three = this.viewer.entities.add({
            name: 'Wall',
            wall: {
                positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                    121.46422712558977,
                    31.259559606154212,
                    111,
                    121.46422712558977,
                    31.22492249899973,
                    111,
                    121.51980249637835,
                    31.22492249899973,
                    111,
                    121.51980249637835,
                    31.259559606154212,
                    111,
                    121.46422712558977,
                    31.259559606154,
                    111
                ]),
                // positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                //   121.93770628339514 ,
                //   30.90989525340411 ,
                //   666,
                //   121.94179304137732,
                //    30.909861693589566,
                //    666,
                //    121.94591833644154,
                //    30.90885409927493,
                //    666,
                //    121.94903081429607,
                //    30.907175070796296,
                //    666,
                //    121.95144180168687,
                //    30.90502646120125,
                //    666,
                //    121.95322902361073,
                //    30.902274455081354,
                //    666,
                //    121.95447033047725,
                //    30.898752043613865,
                //    666,
                //    121.95454497797425,
                //    30.895633591542385,
                //    666,
                //    121.95341472305923,
                //    30.892650524496407,
                //    666,
                //    121.95143000951653,
                //    30.889769143047925,
                //    666,
                //    121.94890259964873,
                //    30.88765908612741,
                //    666,
                //    121.94524935785677,
                //    30.885783931027714,
                //    666,
                //    121.94058704020226,
                //    30.88521479153862,
                //    666,
                //    121.93639094306872,
                //    30.885716934595568,
                //    666,
                //    121.93219395692941,
                //    30.88712314673071,
                //    666,
                //    121.9289275019642,
                //    30.890003512749026,
                //    666,
                //    121.92670846518199,
                //    30.893588747457514,
                //    666,
                //    121.92584812345648,
                //    30.8982152905379,
                //    666,
                //    121.92701090380825,
                //    30.902039452712483,
                //    666,
                //    121.92883613978637,
                //    30.905429153718934,
                //    666,
                //    121.93218071226671,
                //    30.90798085793282,
                //    666,
                //    121.93556566796289,
                //    30.90986161530055,
                //    666,
                //    121.93743383238098,
                //    30.910130366791957,
                //    666
                // ]),
                material: new _func_texiao_DynamicWallMaterialProperty__WEBPACK_IMPORTED_MODULE_6__["DynamicWallMaterialProperty"](100, undefined)
            }
        });
    }
    createFlyLine() {
        let point = [121.49182292924358, 31.2437783652702], point2 = [121.47837325058116, 31.25166879436704], point3 = [121.4810178620536, 31.23794843535442], point4 = [121.50914583293753, 31.238222688966253], point5 = [121.47837325058116, 31.25460144813068], h = 5000;
        Object(_func_texiao_FlyLine__WEBPACK_IMPORTED_MODULE_7__["default"])(this.viewer, point, point2, h, 2);
        Object(_func_texiao_FlyLine__WEBPACK_IMPORTED_MODULE_7__["default"])(this.viewer, point, point3, h, 2);
        Object(_func_texiao_FlyLine__WEBPACK_IMPORTED_MODULE_7__["default"])(this.viewer, point, point4, h, 2);
        Object(_func_texiao_FlyLine__WEBPACK_IMPORTED_MODULE_7__["default"])(this.viewer, point, point5, h, 2);
    }
    addPolyLine() {
        for (let item of _lu__WEBPACK_IMPORTED_MODULE_11__["luData"].features) {
            const buildData = [];
            for (let xy of item.geometry.paths[0]) {
                buildData.push(xy[0]);
                buildData.push(xy[1]);
                buildData.push(10);
            }
            let entity = this.viewer.entities.add({
                polyline: {
                    // positions: Cesium.Cartesian3.fromDegreesArray([121.8142, 30.8649, 121.8142, 30.8798]),
                    positions: Cesium.Cartesian3.fromDegreesArrayHeights(buildData),
                    width: 2,
                    material: new _func_texiao_PolylineTrailLinkMaterialProperty__WEBPACK_IMPORTED_MODULE_5__["PolylineTrailLinkMaterialProperty"](1000, Cesium.Color.red)
                }
            });
        }
        return;
        let entity = this.viewer.entities.add({
            polyline: {
                // positions: Cesium.Cartesian3.fromDegreesArray([121.8142, 30.8649, 121.8142, 30.8798]),
                positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                    121.72881292050941,
                    30.88552725737092,
                    10,
                    121.76061292381067,
                    30.885676115772853,
                    10,
                    121.7827129387377,
                    30.88358466647911,
                    10,
                    121.79796665045723,
                    30.881991804362695,
                    10,
                    121.8504135761098,
                    30.883759166283575,
                    10,
                    121.86320964198397,
                    30.886818896419854,
                    10,
                    121.8728227418074,
                    30.89522948969958,
                    10,
                    121.87884732499721,
                    30.941891461472625,
                    10,
                ]),
                // positions: Cesium.Cartesian3.fromDegreesArrayHeights([
                //   121.93770628339514 ,
                //   30.90989525340411 ,
                //   30,
                //   121.94179304137732,
                //    30.909861693589566,
                //    30,
                //    121.94591833644154,
                //    30.90885409927493,
                //    30,
                //    121.94903081429607,
                //    30.907175070796296,
                //    30,
                //    121.95144180168687,
                //    30.90502646120125,
                //    30,
                //    121.95322902361073,
                //    30.902274455081354,
                //    30,
                //    121.95447033047725,
                //    30.898752043613865,
                //    30,
                //    121.95454497797425,
                //    30.895633591542385,
                //    30,
                //    121.95341472305923,
                //    30.892650524496407,
                //    30,
                //    121.95143000951653,
                //    30.889769143047925,
                //    30,
                //    121.94890259964873,
                //    30.88765908612741,
                //    30,
                //    121.94524935785677,
                //    30.885783931027714,
                //    30,
                //    121.94058704020226,
                //    30.88521479153862,
                //    30,
                //    121.93639094306872,
                //    30.885716934595568,
                //    30,
                //    121.93219395692941,
                //    30.88712314673071,
                //    30,
                //    121.9289275019642,
                //    30.890003512749026,
                //    30,
                //    121.92670846518199,
                //    30.893588747457514,
                //    30,
                //    121.92584812345648,
                //    30.8982152905379,
                //    30,
                //    121.92701090380825,
                //    30.902039452712483,
                //    30,
                //    121.92883613978637,
                //    30.905429153718934,
                //    30,
                //    121.93218071226671,
                //    30.90798085793282,
                //    30,
                //    121.93556566796289,
                //    30.90986161530055,
                //    30,
                //    121.93743383238098,
                //    30.910130366791957,
                //    30
                // ]),
                width: 2,
                // material: Cesium.Color.RED
                material: new _func_texiao_PolylineTrailLinkMaterialProperty__WEBPACK_IMPORTED_MODULE_5__["PolylineTrailLinkMaterialProperty"](1000, Cesium.Color.red)
            }
        });
    }
    clickCoord() {
        let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        handler.setInputAction((e) => {
            let ray = this.viewer.camera.getPickRay(e.position);
            let position = this.viewer.scene.globe.pick(ray, this.viewer.scene);
            let cartographic = Cesium.Cartographic.fromCartesian(position);
            let lon = Cesium.Math.toDegrees(cartographic.longitude);
            let lat = Cesium.Math.toDegrees(cartographic.latitude);
            console.log(lon);
            console.log(lat);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    add3Dtiles() {
        var longitude = 121.8252503;
        var latitude = 30.9215641;
        var height = 0;
        var rotation = 0; //旋转度
        // var url = "assets/models/3dtiles/buildings/tileset.json";
        var url = "assets/models/3dtiles/sh150/tileset.json";
        // var url = "assets/models/3dtiles/zhoubian0924/Building02/tileset.json";
        var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(longitude, latitude, height));
        Cesium.Matrix4.multiplyByMatrix3(modelMatrix, Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rotation)), modelMatrix);
        this.tileset = new Cesium.Cesium3DTileset({
            url,
            show: true,
            // modelMatrix: modelMatrix, //模型矩阵
            maximumScreenSpaceError: 16,
            maximumNumberOfLoadedTiles: 100000,
            luminanceAtZenith: 1,
            imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),
            // lightColor: new Cesium.Cartesian3(1, 2, 0),//着色模型时的灯光颜色。当undefined现场的灯光颜色来代替。
            showOutline: true,
            // ellipsoid: new Cesium.Ellipsoid(new Cesium.Ellipsoid.WGS84), // 椭球体
            debugFreezeFrame: false,
            debugColorizeTiles: false,
            debugWireframe: false,
            debugShowUrl: false,
            backFaceCulling: true,
            preloadWhenHidden: false,
            preloadFlightDestinations: true,
            cullWithChildrenBounds: true,
            cullRequestsWhileMoving: true,
            cullRequestsWhileMovingMultiplier: 60.0,
        });
        this.tileset.readyPromise.then((tileset) => {
            this.viewer.scene.primitives.add(tileset);
            //获取3Dtlies的bounds范围
            var boundingSphere = tileset.boundingSphere;
            console.log(boundingSphere);
            //获取3Dtlies的范围中心点的弧度
            var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
            console.log(cartographic);
            this.tileset.style = undefined;
            Object(_func_texiao_City__WEBPACK_IMPORTED_MODULE_1__["numberCity"])(this.viewer, this.tileset);
            // const cartographic = Cesium.Cartographic.fromCartesian(this.tileset.boundingSphere.center);
            const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
            const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 30);
            const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
            this.tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            // this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -0.2, tileset.boundingSphere.radius * 1.0));
        }).otherwise(function (error) {
            console.log(error);
        });
    }
    addGroundScanLine() {
        var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.49182292924358), Cesium.Math.toRadians(31.2437783652702), 300);
        var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 0.1);
        Object(_func_texiao_GroundScanLine__WEBPACK_IMPORTED_MODULE_2__["default"])(this.viewer, CartographicCenter, 1500, scanColor, 10000);
    }
    createCar() {
        const model = this.viewer.entities.add({
            id: 'ZARD_CAR',
            model: {
                uri: 'assets/models/gltf/Car1120.gltf',
                // minimumPixelSize: 88,
                scale: 80,
            },
            point: {
                pixelSize: 1,
                color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
            }
        });
        const startTime = Cesium.JulianDate.fromDate(new Date());
        const time = Cesium.JulianDate.addSeconds(startTime, 4, new Cesium.JulianDate());
        const dataArr1 = [
            { lng: 121.50191055477433,
                lat: 31.225222595931967,
                alt: 1 },
            { lng: 121.49884169805318,
                lat: 31.229080145821484,
                alt: 1 },
            { lng: 121.49479298119923,
                lat: 31.232371582523,
                alt: 1 },
            { lng: 121.49038704320817,
                lat: 31.236026266513868,
                alt: 1 },
            { lng: 121.48856776944044,
                lat: 31.238985494882336,
                alt: 1 },
            { lng: 121.48860929474479,
                lat: 31.241338742122476,
                alt: 1 },
            { lng: 121.4900309043861,
                lat: 31.24376757617907,
                alt: 1 },
            { lng: 121.49440835397662,
                lat: 31.245689628141704,
                alt: 1 },
            { lng: 121.49915122418356,
                lat: 31.24780061149752,
                alt: 1 },
            { lng: 121.50418628502531,
                lat: 31.24903285536835,
                alt: 1 },
            { lng: 121.50984377276203,
                lat: 31.249101633147166,
                alt: 1 },
            { lng: 121.51969211953117,
                lat: 31.248942732081233,
                alt: 1 }
        ];
        this.trackObj = new _func_trackAnimation__WEBPACK_IMPORTED_MODULE_3__["TrackAnimation"]({
            viewer: this.viewer,
            pathArr: dataArr1,
            entity: model,
            runTime: startTime
        });
        this.trackObj.play();
        const model1 = this.viewer.entities.add({
            id: 'ZARD_CAR1',
            model: {
                uri: 'assets/models/gltf/Car1120.gltf',
                // minimumPixelSize: 88,
                scale: 80,
            },
            point: {
                pixelSize: 1,
                color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
            }
        });
        let trackObj1 = new _func_trackAnimation__WEBPACK_IMPORTED_MODULE_3__["TrackAnimation"]({
            viewer: this.viewer,
            pathArr: dataArr1,
            entity: model1,
            runTime: time
        });
        trackObj1.play();
    }
    addWater() {
        for (let item of _river__WEBPACK_IMPORTED_MODULE_10__["riverData"].features) {
            const buildData = [];
            for (let xy of item.geometry.rings[0]) {
                buildData.push(xy[0]);
                buildData.push(xy[1]);
                buildData.push(11);
            }
            Object(_func_texiao_Water__WEBPACK_IMPORTED_MODULE_4__["default"])(this.viewer, buildData);
            let entity = this.viewer.entities.add({
                polyline: {
                    // positions: Cesium.Cartesian3.fromDegreesArray([121.8142, 30.8649, 121.8142, 30.8798]),
                    positions: Cesium.Cartesian3.fromDegreesArrayHeights(buildData),
                    width: 5,
                    material: new Cesium.PolylineGlowMaterialProperty({
                        glowPower: 2.3,
                        color: Cesium.Color.BLUE,
                    })
                }
            });
        }
        // Water(this.viewer
        // [
        //   121.93770628339514 ,
        //   30.90989525340411 ,
        //   0,
        //   121.94179304137732,
        //    30.909861693589566,
        //    0,
        //    121.94591833644154,
        //    30.90885409927493,
        //    0,
        //    121.94903081429607,
        //    30.907175070796296,
        //    0,
        //    121.95144180168687,
        //    30.90502646120125,
        //    0,
        //    121.95322902361073,
        //    30.902274455081354,
        //    0,
        //    121.95447033047725,
        //    30.898752043613865,
        //    0,
        //    121.95454497797425,
        //    30.895633591542385,
        //    0,
        //    121.95341472305923,
        //    30.892650524496407,
        //    0,
        //    121.95143000951653,
        //    30.889769143047925,
        //    0,
        //    121.94890259964873,
        //    30.88765908612741,
        //    0,
        //    121.94524935785677,
        //    30.885783931027714,
        //    0,
        //    121.94058704020226,
        //    30.88521479153862,
        //    0,
        //    121.93639094306872,
        //    30.885716934595568,
        //    0,
        //    121.93219395692941,
        //    30.88712314673071,
        //    0,
        //    121.9289275019642,
        //    30.890003512749026,
        //    0,
        //    121.92670846518199,
        //    30.893588747457514,
        //    0,
        //    121.92584812345648,
        //    30.8982152905379,
        //    0,
        //    121.92701090380825,
        //    30.902039452712483,
        //    0,
        //    121.92883613978637,
        //    30.905429153718934,
        //    0,
        //    121.93218071226671,
        //    30.90798085793282,
        //    0,
        //    121.93556566796289,
        //    30.90986161530055,
        //    0,
        //    121.93743383238098,
        //    30.910130366791957,
        //    0
        // ]
        // )
    }
    lookPoint() {
        const position = {
            lon: 121.49182292924358,
            lat: 31.2437783652702,
            alt: 500
        };
        // var center = Cesium.Cartesian3.fromRadians(2.4213211833389243, 0.6171926869414084, 3626.0426275055174);
        var center = Cesium.Cartesian3.fromDegrees(position.lon, position.lat, position.alt);
        var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
        this.viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI / 8, 290));
        this.viewer.clock.onTick.addEventListener((clock) => {
            this.viewer.scene.camera.rotateRight(0.005);
        });
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 2, vars: 0, consts: [[2, "width", "100%", "height", "100vh", "margin", "0", "padding", "0"], [3, "mapLoaded"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-init-cesium", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function DemoComponent_Template_app_init_cesium_mapLoaded_1_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_12__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvZGVtby9kZW1vLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo',
                templateUrl: './demo.component.html',
                styleUrls: ['./demo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/demo/lu.ts":
/*!************************************************!*\
  !*** ./src/app/pages/welcome/pages/demo/lu.ts ***!
  \************************************************/
/*! exports provided: luData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luData", function() { return luData; });
const luData = { "displayFieldName": "", "fieldAliases": { "FID": "FID", "osm_id": "osm_id", "name": "name", "width": "width", "surface": "surface", "layer": "layer", "smoothness": "smoothness", "highway": "highway", "tunnel": "tunnel", "oneway": "oneway", "bridge": "bridge" }, "geometryType": "esriGeometryPolyline", "spatialReference": { "wkid": 4326, "latestWkid": 4326 }, "fields": [{ "name": "FID", "type": "esriFieldTypeOID", "alias": "FID" }, { "name": "osm_id", "type": "esriFieldTypeDouble", "alias": "osm_id" }, { "name": "name", "type": "esriFieldTypeString", "alias": "name", "length": 80 }, { "name": "width", "type": "esriFieldTypeString", "alias": "width", "length": 80 }, { "name": "surface", "type": "esriFieldTypeString", "alias": "surface", "length": 80 }, { "name": "layer", "type": "esriFieldTypeString", "alias": "layer", "length": 80 }, { "name": "smoothness", "type": "esriFieldTypeString", "alias": "smoothness", "length": 80 }, { "name": "highway", "type": "esriFieldTypeString", "alias": "highway", "length": 80 }, { "name": "tunnel", "type": "esriFieldTypeString", "alias": "tunnel", "length": 80 }, { "name": "oneway", "type": "esriFieldTypeString", "alias": "oneway", "length": 80 }, { "name": "bridge", "type": "esriFieldTypeString", "alias": "bridge", "length": 80 }], "features": [{ "attributes": { "FID": 0, "osm_id": 9198034, "name": "滨江大道", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50456749999999, 31.226346400000001], [121.5024518, 31.2291612]]] } }, { "attributes": { "FID": 1, "osm_id": 10210595, "name": "东城路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5053339, 31.2416068], [121.5035486, 31.240528099999999]]] } }, { "attributes": { "FID": 2, "osm_id": 10211591, "name": "滨江大道", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50147, 31.245694499999999], [121.4999607, 31.2452957]]] } }, { "attributes": { "FID": 3, "osm_id": 10211620, "name": "拾步街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49857900000001, 31.234543899999998], [121.4977566, 31.2337089]]] } }, { "attributes": { "FID": 4, "osm_id": 10211658, "name": "东园路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49740490000001, 31.244120500000001], [121.49854379999999, 31.2428259]]] } }, { "attributes": { "FID": 5, "osm_id": 10632617, "name": "丰和路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49265629999999, 31.2423951], [121.4935617, 31.241768400000002]]] } }, { "attributes": { "FID": 6, "osm_id": 10632619, "name": "丰和路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4935617, 31.241768400000002], [121.4936562, 31.241609]]] } }, { "attributes": { "FID": 7, "osm_id": 10639405, "name": "富城路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4931383, 31.238909199999998], [121.49471629999999, 31.236360099999999], [121.4995047, 31.232173199999998]]] } }, { "attributes": { "FID": 8, "osm_id": 10639424, "name": "启新路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5081282, 31.2298081], [121.5052239, 31.228596400000001]]] } }, { "attributes": { "FID": 9, "osm_id": 11622536, "name": "东门路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49564290000001, 31.227610800000001], [121.49612639999999, 31.227881499999999], [121.4964081, 31.227807800000001], [121.49878440000001, 31.225697199999999], [121.49935217257055, 31.224922498999732]]] } }, { "attributes": { "FID": 10, "osm_id": 11624193, "name": "滇池路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48552770000001, 31.241299099999999], [121.48317369999999, 31.2415439], [121.48165880000001, 31.241091600000001]]] } }, { "attributes": { "FID": 11, "osm_id": 11624195, "name": "圆明园路", "width": " ", "surface": "fine_gravel", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4838152, 31.242700599999999], [121.4835836, 31.241504899999999]]] } }, { "attributes": { "FID": 12, "osm_id": 11624967, "name": "沙市二路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4834788, 31.2400582], [121.4822157, 31.239636000000001]]] } }, { "attributes": { "FID": 13, "osm_id": 11624973, "name": "汉口路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4710178, 31.234862799999998], [121.47307910000001, 31.235565699999999], [121.47579949999999, 31.236216500000001]]] } }, { "attributes": { "FID": 14, "osm_id": 11624990, "name": "江西中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4802061, 31.244849200000001], [121.4810859, 31.242563499999999]]] } }, { "attributes": { "FID": 15, "osm_id": 11762853, "name": "北苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4833687, 31.246599100000001], [121.48215690000001, 31.246587399999999], [121.4812221, 31.246366399999999], [121.4803141, 31.245944600000001], [121.47944510000001, 31.2453337], [121.47796940000001, 31.243877699999999], [121.476314, 31.242524700000001]]] } }, { "attributes": { "FID": 16, "osm_id": 11766892, "name": "青浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4897474, 31.2483252], [121.49016039999999, 31.247558600000001]]] } }, { "attributes": { "FID": 17, "osm_id": 13025704, "name": "乳山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.51980249637835, 31.238328383696633], [121.5153553, 31.236739499999999]]] } }, { "attributes": { "FID": 18, "osm_id": 13909444, "name": "巨鹿路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.225524859264549], [121.4649685, 31.225708600000001]]] } }, { "attributes": { "FID": 19, "osm_id": 15670282, "name": "厦门路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.468587, 31.240753900000001], [121.4707555, 31.241453400000001], [121.47203930000001, 31.241647700000001], [121.473843, 31.242161200000002]]] } }, { "attributes": { "FID": 20, "osm_id": 24577455, "name": "云南中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4719499, 31.235969600000001], [121.4740877, 31.2322396], [121.47488319999999, 31.231261700000001]]] } }, { "attributes": { "FID": 21, "osm_id": 24577522, "name": "北海路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4764711, 31.232989799999999], [121.4760709, 31.232586300000001], [121.4751124, 31.232269899999999], [121.47275879999999, 31.232349899999999]]] } }, { "attributes": { "FID": 22, "osm_id": 30620685, "name": "光复路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.241643747635656], [121.4651741, 31.241482099999999], [121.4657723, 31.2415634]]] } }, { "attributes": { "FID": 23, "osm_id": 33683346, "name": "方浜中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4814229464524, 31.224922498999732], [121.4821135, 31.225211900000001], [121.4822423, 31.225798999999999], [121.483052, 31.2263491], [121.4840293, 31.2263214]]] } }, { "attributes": { "FID": 24, "osm_id": 35422925, "name": "峨眉路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4861358, 31.247798199999998], [121.486289, 31.2485268]]] } }, { "attributes": { "FID": 25, "osm_id": 35422926, "name": "闵行路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48534359999999, 31.249483999999999], [121.4865167, 31.2491916], [121.4870872, 31.248874000000001], [121.4873679, 31.2485374]]] } }, { "attributes": { "FID": 26, "osm_id": 35994116, "name": "宁波路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.482567, 31.2419376], [121.4814866, 31.2415603]]] } }, { "attributes": { "FID": 27, "osm_id": 35994898, "name": "山西南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47781790000001, 31.238969000000001], [121.4764922, 31.2419832]]] } }, { "attributes": { "FID": 28, "osm_id": 35994972, "name": "山东北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4787432, 31.2401324], [121.4781765, 31.2409167], [121.47754810000001, 31.2425526]]] } }, { "attributes": { "FID": 29, "osm_id": 39658148, "name": "吴淞路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4814533, 31.2567573], [121.4823696, 31.2560036]]] } }, { "attributes": { "FID": 30, "osm_id": 39675165, "name": "昆明路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5027736, 31.257071799999999], [121.5055288016017, 31.259559606154212]]] } }, { "attributes": { "FID": 31, "osm_id": 39675328, "name": "扬州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5183846, 31.256028499999999], [121.51980249637835, 31.257012639637139]]] } }, { "attributes": { "FID": 32, "osm_id": 39675357, "name": "通北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51575572752844, 31.259559606154212], [121.5172409, 31.2573796], [121.5186171, 31.255702700000001], [121.51913570000001, 31.254452400000002]]] } }, { "attributes": { "FID": 33, "osm_id": 39675500, "name": "惠民路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5063506, 31.2535393], [121.506291, 31.253464099999999]]] } }, { "attributes": { "FID": 34, "osm_id": 39675625, "name": "汾州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51739566216419, 31.259559606154212], [121.5195214, 31.256813099999999]]] } }, { "attributes": { "FID": 35, "osm_id": 39675629, "name": "榆林路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.51168699999999, 31.255941], [121.5095494, 31.254776499999998]]] } }, { "attributes": { "FID": 36, "osm_id": 39688598, "name": "杨子江路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4882965, 31.246572499999999], [121.4887165, 31.245994700000001], [121.4908892, 31.247389800000001]]] } }, { "attributes": { "FID": 37, "osm_id": 39688727, "name": "九龙路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4844081, 31.256447000000001], [121.4855864, 31.256090799999999]]] } }, { "attributes": { "FID": 38, "osm_id": 39688729, "name": "九龙路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4844081, 31.256447000000001], [121.48334010000001, 31.2573109]]] } }, { "attributes": { "FID": 39, "osm_id": 39688734, "name": "溧阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4908148, 31.248817299999999], [121.4904573, 31.249400300000001], [121.4891427, 31.2503536], [121.4882939, 31.252199900000001], [121.4874696, 31.252873099999999], [121.48741990000001, 31.253400800000001], [121.48781320000001, 31.254825400000001], [121.4876907, 31.255624600000001], [121.4872312, 31.255932900000001], [121.4845756, 31.256683599999999]]] } }, { "attributes": { "FID": 40, "osm_id": 39688840, "name": "西安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48820190000001, 31.252295199999999], [121.4889592, 31.252149899999999], [121.48979559999999, 31.251418699999999], [121.4905187, 31.251470900000001], [121.4908703, 31.251693700000001]]] } }, { "attributes": { "FID": 41, "osm_id": 39688842, "name": "东汉阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4935218, 31.2547122], [121.49192789999999, 31.253705700000001]]] } }, { "attributes": { "FID": 42, "osm_id": 39688861, "name": "旅顺路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4914062, 31.250890099999999], [121.4908703, 31.251693700000001]]] } }, { "attributes": { "FID": 43, "osm_id": 39688890, "name": "商丘路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4931414, 31.251909399999999], [121.4912144, 31.254636000000001], [121.4911987, 31.255297500000001], [121.4910031, 31.255654]]] } }, { "attributes": { "FID": 44, "osm_id": 39688963, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4993137, 31.2507223], [121.4985404, 31.252219199999999]]] } }, { "attributes": { "FID": 45, "osm_id": 39689026, "name": "余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4849617, 31.252295799999999], [121.4871704, 31.253432]]] } }, { "attributes": { "FID": 46, "osm_id": 39689059, "name": "梧州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4882739, 31.259405300000001], [121.4883375, 31.258807999999998], [121.4892054, 31.2566907], [121.4890268, 31.255218800000002], [121.4891212, 31.252807700000002]]] } }, { "attributes": { "FID": 47, "osm_id": 39689094, "name": "通州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4948519, 31.2558255], [121.4937434, 31.257744500000001]]] } }, { "attributes": { "FID": 48, "osm_id": 39689143, "name": "丹徒路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50045679999999, 31.252904600000001], [121.49954839999999, 31.2544222]]] } }, { "attributes": { "FID": 49, "osm_id": 39689392, "name": "公平路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50290459999999, 31.2516596], [121.50201370000001, 31.2534627]]] } }, { "attributes": { "FID": 50, "osm_id": 39692002, "name": "沙泾路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48824089999999, 31.259109299999999], [121.487268, 31.257871699999999], [121.4873448, 31.257100999999999], [121.4872312, 31.255932900000001]]] } }, { "attributes": { "FID": 51, "osm_id": 39692082, "name": "溧阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4845756, 31.256683599999999], [121.4840377, 31.257082400000002]]] } }, { "attributes": { "FID": 52, "osm_id": 39692139, "name": "辽宁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4838566, 31.257314000000001], [121.4853009, 31.258344099999999]]] } }, { "attributes": { "FID": 53, "osm_id": 39692140, "name": "拓皋路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.486271, 31.257323199999998], [121.4870111, 31.257294999999999]]] } }, { "attributes": { "FID": 54, "osm_id": 39692149, "name": "五台路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4853009, 31.258344099999999], [121.484876, 31.258652999999999]]] } }, { "attributes": { "FID": 55, "osm_id": 39692152, "name": "嘉兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.484876, 31.258652999999999], [121.48722530000001, 31.258315199999998]]] } }, { "attributes": { "FID": 56, "osm_id": 39692166, "name": "沙泾港路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48803046743998, 31.259559606154212], [121.4879957, 31.259449199999999]]] } }, { "attributes": { "FID": 57, "osm_id": 39693427, "name": "临潼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50642670000001, 31.257811400000001], [121.50754929999999, 31.256760499999999]]] } }, { "attributes": { "FID": 58, "osm_id": 39693657, "name": "保定路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50842539999999, 31.257525300000001], [121.50647288991486, 31.259559606154212]]] } }, { "attributes": { "FID": 59, "osm_id": 39693695, "name": "舟山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50097878443928, 31.259559606154212], [121.50235259999999, 31.2587583]]] } }, { "attributes": { "FID": 60, "osm_id": 39693774, "name": "安国路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50358591036317, 31.259559606154212], [121.5045365, 31.258665100000002]]] } }, { "attributes": { "FID": 61, "osm_id": 39697220, "name": "福佑路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48156419999999, 31.2295275], [121.4828831, 31.229704000000002]]] } }, { "attributes": { "FID": 62, "osm_id": 39697252, "name": "沉香阁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4848794, 31.228879500000001], [121.48619890000001, 31.229044600000002]]] } }, { "attributes": { "FID": 63, "osm_id": 39697464, "name": "昼锦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48973820000001, 31.226635300000002], [121.48871680000001, 31.226657299999999], [121.4873944, 31.226384100000001], [121.4844909, 31.225484099999999]]] } }, { "attributes": { "FID": 64, "osm_id": 39697507, "name": "光启路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4896897, 31.2276943], [121.48962976449864, 31.224922498999732]]] } }, { "attributes": { "FID": 65, "osm_id": 39697541, "name": "学院路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4879013, 31.225035299999998], [121.4928711, 31.2253215]]] } }, { "attributes": { "FID": 66, "osm_id": 39697652, "name": "东街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4927156, 31.2269823], [121.49290022377895, 31.224922498999732]]] } }, { "attributes": { "FID": 67, "osm_id": 39697683, "name": "老太平弄", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4945331503295, 31.224922498999732], [121.4971103, 31.225785399999999]]] } }, { "attributes": { "FID": 68, "osm_id": 39697701, "name": "外鹹瓜路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4941297, 31.2271483], [121.49552818963286, 31.224922498999732]]] } }, { "attributes": { "FID": 69, "osm_id": 39705367, "name": "四川中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4854953, 31.2344744], [121.48375179999999, 31.239353900000001]]] } }, { "attributes": { "FID": 70, "osm_id": 39705535, "name": "新永安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48976519999999, 31.2330434], [121.4875349, 31.232255200000001]]] } }, { "attributes": { "FID": 71, "osm_id": 39705584, "name": "永安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48704979999999, 31.233520899999998], [121.48778009999999, 31.2314425]]] } }, { "attributes": { "FID": 72, "osm_id": 39705649, "name": "安仁街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4880106, 31.231430799999998], [121.48802449999999, 31.2310892]]] } }, { "attributes": { "FID": 73, "osm_id": 39838630, "name": "重庆北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46572089999999, 31.226969], [121.46569270000001, 31.227721299999999], [121.4650967, 31.229574700000001]]] } }, { "attributes": { "FID": 74, "osm_id": 39838657, "name": "重庆北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4646154, 31.229579399999999], [121.46422712558977, 31.230442399631706]]] } }, { "attributes": { "FID": 75, "osm_id": 39838691, "name": "江阴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.231536676069616], [121.4647736, 31.231706500000001], [121.4651628, 31.2316264], [121.4659997, 31.232063700000001]]] } }, { "attributes": { "FID": 76, "osm_id": 39838751, "name": "大沽路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4681992, 31.2287009], [121.4670876, 31.228446099999999], [121.46565339999999, 31.227847400000002], [121.46422712558977, 31.227703063537668]]] } }, { "attributes": { "FID": 77, "osm_id": 39838854, "name": "新昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.464401, 31.2353217], [121.4648013, 31.234607700000002], [121.4655472, 31.233840000000001]]] } }, { "attributes": { "FID": 78, "osm_id": 39838919, "name": "新昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.236104285023551], [121.4646125, 31.2353992]]] } }, { "attributes": { "FID": 79, "osm_id": 39839919, "name": "牛庄路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4713532, 31.239194000000001], [121.47251780000001, 31.239606599999998], [121.4749654, 31.2400187]]] } }, { "attributes": { "FID": 80, "osm_id": 39840268, "name": "宁波路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4703215, 31.238237300000002], [121.47293620000001, 31.2388783], [121.475114, 31.239655800000001]]] } }, { "attributes": { "FID": 81, "osm_id": 39840341, "name": "六合路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4699225, 31.2395174], [121.4707696, 31.236754600000001]]] } }, { "attributes": { "FID": 82, "osm_id": 39840400, "name": "云南北路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4708589, 31.238334200000001], [121.4705706, 31.239422300000001]]] } }, { "attributes": { "FID": 83, "osm_id": 39840494, "name": "芝罘路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4692854, 31.239744000000002], [121.47050849999999, 31.239416599999998], [121.47231410000001, 31.240005100000001]]] } }, { "attributes": { "FID": 84, "osm_id": 39841492, "name": "汕头路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47410960000001, 31.233704899999999], [121.4722975, 31.232980099999999]]] } }, { "attributes": { "FID": 85, "osm_id": 39841517, "name": "平望街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4742059, 31.2344574], [121.4749223, 31.233301000000001]]] } }, { "attributes": { "FID": 86, "osm_id": 39841890, "name": "昭通路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48008179999999, 31.2357406], [121.48134020000001, 31.2360626]]] } }, { "attributes": { "FID": 87, "osm_id": 39918827, "name": "沙市一路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4830752, 31.239212200000001], [121.4827243, 31.2402944]]] } }, { "attributes": { "FID": 88, "osm_id": 39918858, "name": "永胜路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48499579999999, 31.232893499999999], [121.4851537, 31.232489000000001]]] } }, { "attributes": { "FID": 89, "osm_id": 39919150, "name": "溪口路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4849897, 31.233752800000001], [121.48533430000001, 31.2330398]]] } }, { "attributes": { "FID": 90, "osm_id": 39920011, "name": "盛泽路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4811504, 31.2304359], [121.4797263, 31.232922899999998]]] } }, { "attributes": { "FID": 91, "osm_id": 39920222, "name": "松下路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48155869999999, 31.231789500000001], [121.4812847, 31.232463599999999], [121.4810511, 31.232644700000002]]] } }, { "attributes": { "FID": 92, "osm_id": 39920377, "name": "金门路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48208649999999, 31.2319639], [121.48242740000001, 31.230924999999999]]] } }, { "attributes": { "FID": 93, "osm_id": 39920505, "name": "永寿路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4763347, 31.2317006], [121.47891540000001, 31.228370300000002]]] } }, { "attributes": { "FID": 94, "osm_id": 39920550, "name": "广西南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47802969999999, 31.228501399999999], [121.4757606, 31.231439099999999]]] } }, { "attributes": { "FID": 95, "osm_id": 39920684, "name": "云南南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4750348, 31.231096600000001], [121.477265, 31.228183399999999], [121.47826910000001, 31.2260217]]] } }, { "attributes": { "FID": 96, "osm_id": 39921025, "name": "宁海东路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4745099, 31.229486699999999], [121.4801135, 31.232158900000002], [121.48141440000001, 31.232923799999998]]] } }, { "attributes": { "FID": 97, "osm_id": 39921672, "name": "望亭路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47153590000001, 31.226892100000001], [121.47194469999999, 31.226012600000001]]] } }, { "attributes": { "FID": 98, "osm_id": 39921673, "name": "嵩山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4704658, 31.226445900000002], [121.47112719955358, 31.224922498999732]]] } }, { "attributes": { "FID": 99, "osm_id": 39959308, "name": "山西北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.476314, 31.242524700000001], [121.4757324, 31.245499800000001], [121.4753534, 31.249078000000001]]] } }, { "attributes": { "FID": 100, "osm_id": 39959455, "name": "文安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46797979999999, 31.244295900000001], [121.46813899999999, 31.243608500000001], [121.4685724, 31.243026100000002]]] } }, { "attributes": { "FID": 101, "osm_id": 39959499, "name": "甘肃路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4702633, 31.2436696], [121.4700794, 31.244763200000001]]] } }, { "attributes": { "FID": 102, "osm_id": 39959502, "name": "热河路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4681118, 31.247014799999999], [121.4681992, 31.245570799999999]]] } }, { "attributes": { "FID": 103, "osm_id": 39959527, "name": "七浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4713534, 31.246549900000002], [121.4700016, 31.246490900000001], [121.4681992, 31.245570799999999]]] } }, { "attributes": { "FID": 104, "osm_id": 39959552, "name": "塘沽路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4711168, 31.247105999999999], [121.4730745, 31.247727300000001], [121.4772322, 31.248421199999999]]] } }, { "attributes": { "FID": 105, "osm_id": 39959561, "name": "武昌路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48515980000001, 31.248911100000001], [121.48344659999999, 31.249051900000001], [121.4808785, 31.248750699999999]]] } }, { "attributes": { "FID": 106, "osm_id": 39959696, "name": "崇明路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4809978, 31.247996000000001], [121.4788173, 31.247021199999999]]] } }, { "attributes": { "FID": 107, "osm_id": 39959698, "name": "崇明南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4797227, 31.246923500000001], [121.48105630000001, 31.247603699999999]]] } }, { "attributes": { "FID": 108, "osm_id": 39959700, "name": "崇明支路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47957409999999, 31.247386899999999], [121.4799235, 31.2465443]]] } }, { "attributes": { "FID": 109, "osm_id": 39959733, "name": "昆山路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48052800000001, 31.251155199999999], [121.484779, 31.251643000000001]]] } }, { "attributes": { "FID": 110, "osm_id": 39959761, "name": "昆山花园路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48055890000001, 31.250910099999999], [121.4811462, 31.250704800000001], [121.4819538, 31.251053899999999]]] } }, { "attributes": { "FID": 111, "osm_id": 40034282, "name": "龙谭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4914034, 31.229809700000001], [121.492451, 31.230328499999999]]] } }, { "attributes": { "FID": 112, "osm_id": 40034444, "name": "丹凤路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4909629, 31.227385300000002], [121.490348, 31.2297279]]] } }, { "attributes": { "FID": 113, "osm_id": 40035325, "name": "寿宁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4784709, 31.2260761], [121.47583710000001, 31.2253215]]] } }, { "attributes": { "FID": 114, "osm_id": 40035606, "name": "大境路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4784495, 31.226277499999998], [121.47886389999999, 31.226324300000002], [121.47997479999999, 31.226850899999999], [121.4833716, 31.227640399999999]]] } }, { "attributes": { "FID": 115, "osm_id": 40035904, "name": "露香园路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4817465, 31.225066900000002], [121.4813582, 31.2257183], [121.48068379999999, 31.227805799999999], [121.4799313, 31.229478199999999]]] } }, { "attributes": { "FID": 116, "osm_id": 40035935, "name": "狮子街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4822315, 31.227444800000001], [121.4827602, 31.226172900000002]]] } }, { "attributes": { "FID": 117, "osm_id": 40035992, "name": "旧仓街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48212049999999, 31.227422399999998], [121.48156419999999, 31.2295275], [121.48155989999999, 31.230335]]] } }, { "attributes": { "FID": 118, "osm_id": 40036066, "name": "同庆街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47916350544382, 31.224922498999732], [121.48015460000001, 31.225290600000001]]] } }, { "attributes": { "FID": 119, "osm_id": 40036454, "name": "松雪街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4827602, 31.226172900000002], [121.48337079645448, 31.224922498999732]]] } }, { "attributes": { "FID": 120, "osm_id": 40113010, "name": "福建北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4745954, 31.2425666], [121.4744802, 31.243628900000001], [121.4742564, 31.244093199999998]]] } }, { "attributes": { "FID": 121, "osm_id": 40139708, "name": "柳林路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47600334069169, 31.224922498999732], [121.4751112, 31.227279800000002]]] } }, { "attributes": { "FID": 122, "osm_id": 40778053, "name": "富城路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "no", "bridge": " " }, "geometry": { "paths": [[[121.4931383, 31.238909199999998], [121.492766, 31.239611199999999], [121.4928384, 31.240003900000001]]] } }, { "attributes": { "FID": 123, "osm_id": 40778263, "name": "明珠塔路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.49140989999999, 31.2394575], [121.4928384, 31.240003900000001], [121.4946676, 31.241019099999999]]] } }, { "attributes": { "FID": 124, "osm_id": 40779134, "name": "名商路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4962343, 31.2384421], [121.4953794, 31.238372699999999], [121.49384740000001, 31.237727400000001]]] } }, { "attributes": { "FID": 125, "osm_id": 40784602, "name": "百步街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "no", "bridge": " " }, "geometry": { "paths": [[[121.50066339999999, 31.244215100000002], [121.4999607, 31.2452957]]] } }, { "attributes": { "FID": 126, "osm_id": 40784652, "name": "金洲街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5037774, 31.241924699999998], [121.5053181, 31.239511400000001]]] } }, { "attributes": { "FID": 127, "osm_id": 40784697, "name": "花园石桥路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.49595979999999, 31.2351919], [121.497107, 31.2360945]]] } }, { "attributes": { "FID": 128, "osm_id": 41864574, "name": "川公路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47606260000001, 31.257527899999999], [121.4767774, 31.258721399999999]]] } }, { "attributes": { "FID": 129, "osm_id": 41865964, "name": "蒙古路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.244868308490336], [121.46690529999999, 31.245282100000001]]] } }, { "attributes": { "FID": 130, "osm_id": 41866232, "name": "晋元路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4657723, 31.2415634], [121.4657563, 31.2426067], [121.46502390000001, 31.246540700000001], [121.4648507, 31.2470222], [121.464409, 31.247570499999998]]] } }, { "attributes": { "FID": 131, "osm_id": 41868799, "name": "山西北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4753534, 31.249078000000001], [121.4744705, 31.250425799999999], [121.47389630000001, 31.252064099999998]]] } }, { "attributes": { "FID": 132, "osm_id": 41890514, "name": "武进路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4834149, 31.255101700000001], [121.4855864, 31.256090799999999]]] } }, { "attributes": { "FID": 133, "osm_id": 41890533, "name": "罗浮路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4772141, 31.252658199999999], [121.4757156, 31.2546237]]] } }, { "attributes": { "FID": 134, "osm_id": 41890583, "name": "乍浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48334079999999, 31.2475579], [121.4833563, 31.246504399999999]]] } }, { "attributes": { "FID": 135, "osm_id": 41890784, "name": "新广路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47848399999999, 31.255711600000001], [121.4779333, 31.256322399999998]]] } }, { "attributes": { "FID": 136, "osm_id": 41953293, "name": "衡水路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4803416, 31.2588127], [121.48141080000001, 31.257446399999999], [121.48149739999999, 31.256989699999998], [121.48139810000001, 31.256638899999999], [121.4799854, 31.255258399999999], [121.4781685, 31.2547307]]] } }, { "attributes": { "FID": 137, "osm_id": 43779757, "name": "即墨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.509473, 31.238973300000001], [121.50789349999999, 31.241985400000001], [121.50701840000001, 31.2432862], [121.5068715, 31.244098000000001]]] } }, { "attributes": { "FID": 138, "osm_id": 46975808, "name": "天潼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4869214, 31.247333399999999], [121.4878125, 31.246279900000001]]] } }, { "attributes": { "FID": 139, "osm_id": 47150985, "name": "九江路", "width": " ", "surface": "fine_gravel", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4857093, 31.239875600000001], [121.48562389999999, 31.239859500000001]]] } }, { "attributes": { "FID": 140, "osm_id": 47157277, "name": "西藏路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4670062, 31.2435072], [121.46700180000001, 31.2431351], [121.46733879999999, 31.242351899999999]]] } }, { "attributes": { "FID": 141, "osm_id": 47223733, "name": "淡水路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46753242377233, 31.224922498999732], [121.46734669999999, 31.225611700000002]]] } }, { "attributes": { "FID": 142, "osm_id": 47225054, "name": "宁海西路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4690368, 31.226897300000001], [121.46843269999999, 31.226564], [121.4687612, 31.2260466]]] } }, { "attributes": { "FID": 143, "osm_id": 47268380, "name": "天津路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4733502, 31.238205300000001], [121.4717835, 31.237829399999999]]] } }, { "attributes": { "FID": 144, "osm_id": 47270543, "name": "溧阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4838566, 31.257314000000001], [121.483558, 31.257572199999998]]] } }, { "attributes": { "FID": 145, "osm_id": 47270944, "name": "黄浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49016039999999, 31.247558600000001], [121.4873631, 31.245993500000001], [121.48594199999999, 31.2459913]]] } }, { "attributes": { "FID": 146, "osm_id": 47279966, "name": "南泉北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5107052, 31.2413998], [121.51143279999999, 31.2399953]]] } }, { "attributes": { "FID": 147, "osm_id": 47279967, "name": "崂山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.51159130000001, 31.240056500000001], [121.5108888, 31.241454099999999]]] } }, { "attributes": { "FID": 148, "osm_id": 47279969, "name": "栖霞路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5081624, 31.236759800000002], [121.51649740000001, 31.239889900000001]]] } }, { "attributes": { "FID": 149, "osm_id": 47279979, "name": "商城路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50297380000001, 31.2294397], [121.50594580000001, 31.2310178], [121.5074359, 31.2311613]]] } }, { "attributes": { "FID": 150, "osm_id": 47280145, "name": "小石桥路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5093328, 31.237173200000001], [121.50883930000001, 31.238573299999999], [121.5089225, 31.238713199999999]]] } }, { "attributes": { "FID": 151, "osm_id": 47280146, "name": "招远路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5089225, 31.238713199999999], [121.509473, 31.238973300000001], [121.5111594, 31.2393806]]] } }, { "attributes": { "FID": 152, "osm_id": 47280264, "name": "东方路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5148981, 31.246275199999999], [121.5150144, 31.244689600000001]]] } }, { "attributes": { "FID": 153, "osm_id": 47280337, "name": "会议中心", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4937267, 31.241695100000001], [121.4922351, 31.240892800000001]]] } }, { "attributes": { "FID": 154, "osm_id": 47283778, "name": "银洲街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5047807, 31.240419800000002], [121.5057941, 31.240904], [121.5081271, 31.241551999999999]]] } }, { "attributes": { "FID": 155, "osm_id": 47283779, "name": "银洲街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.50398370000001, 31.239749799999998], [121.50491150000001, 31.240198199999998]]] } }, { "attributes": { "FID": 156, "osm_id": 47405756, "name": "吴淞路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4849001, 31.246224000000002], [121.48514900000001, 31.247768199999999]]] } }, { "attributes": { "FID": 157, "osm_id": 47405950, "name": "吴淞路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4849754, 31.2477293], [121.484776, 31.246256800000001]]] } }, { "attributes": { "FID": 158, "osm_id": 47438461, "name": "北苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4833687, 31.246599100000001], [121.484776, 31.246256800000001]]] } }, { "attributes": { "FID": 159, "osm_id": 49170998, "name": "东新民路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4768734, 31.253165500000001], [121.47468000000001, 31.252262000000002]]] } }, { "attributes": { "FID": 160, "osm_id": 49171002, "name": "宝通路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4751109, 31.255382699999998], [121.47373899999999, 31.2580791], [121.47283880000001, 31.258983799999999]]] } }, { "attributes": { "FID": 161, "osm_id": 49202192, "name": "秦皇岛路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5116173, 31.253675699999999], [121.51208339999999, 31.252698899999999], [121.5120927, 31.251761599999998]]] } }, { "attributes": { "FID": 162, "osm_id": 49208894, "name": "景星路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5134588, 31.2586662], [121.51498719999999, 31.256114100000001]]] } }, { "attributes": { "FID": 163, "osm_id": 49208896, "name": "福禄街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.516091, 31.256686800000001], [121.5169064, 31.2557619], [121.5169657, 31.255407999999999], [121.5177442, 31.254277999999999]]] } }, { "attributes": { "FID": 164, "osm_id": 49208897, "name": "福禄街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5157739, 31.256509600000001], [121.5150165, 31.2578025]]] } }, { "attributes": { "FID": 165, "osm_id": 50258371, "name": "青岛路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4645744, 31.2396387], [121.46422712558977, 31.239508357770205]]] } }, { "attributes": { "FID": 166, "osm_id": 50258372, "name": "温州路", "width": " ", "surface": "paved", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4660263, 31.2382487], [121.4649435, 31.2404039]]] } }, { "attributes": { "FID": 167, "osm_id": 50258373, "name": "牯岭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4691251, 31.238931099999999], [121.46563380000001, 31.2375735]]] } }, { "attributes": { "FID": 168, "osm_id": 50258374, "name": "长沙路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4665875, 31.240134699999999], [121.4673725, 31.238852699999999]]] } }, { "attributes": { "FID": 169, "osm_id": 50258375, "name": "白河路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4675818, 31.2367785], [121.4669524, 31.238067300000001]]] } }, { "attributes": { "FID": 170, "osm_id": 50258394, "name": "定兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4660062, 31.236822700000001], [121.4672944, 31.237317399999998]]] } }, { "attributes": { "FID": 171, "osm_id": 50323384, "name": "西藏路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46760620000001, 31.2424933], [121.4671594, 31.243477800000001]]] } }, { "attributes": { "FID": 172, "osm_id": 50325553, "name": "交通路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4720627, 31.2541051], [121.4718864, 31.253838699999999], [121.4697271, 31.252655699999998], [121.46920160000001, 31.252689100000001]]] } }, { "attributes": { "FID": 173, "osm_id": 50326337, "name": "宝源路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47581087119775, 31.259559606154212], [121.4758329, 31.2589522]]] } }, { "attributes": { "FID": 174, "osm_id": 50326338, "name": "宝昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47091728674224, 31.259559606154212], [121.47242970000001, 31.2580536], [121.47323799999999, 31.256932800000001]]] } }, { "attributes": { "FID": 175, "osm_id": 50326341, "name": "虬江路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4811905, 31.257807499999998], [121.4829701, 31.258252899999999]]] } }, { "attributes": { "FID": 176, "osm_id": 50326343, "name": "乍浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4805518, 31.2557008], [121.4811667, 31.254793800000002], [121.4813328, 31.2542613]]] } }, { "attributes": { "FID": 177, "osm_id": 50512627, "name": "新嘉路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.484876, 31.258652999999999], [121.48386360000001, 31.2592456]]] } }, { "attributes": { "FID": 178, "osm_id": 50512629, "name": "胡家木桥路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4882739, 31.259405300000001], [121.48831233659948, 31.259559606154212]]] } }, { "attributes": { "FID": 179, "osm_id": 50775225, "name": "榆林路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.511932, 31.256099800000001], [121.51795718631467, 31.259559606154212]]] } }, { "attributes": { "FID": 180, "osm_id": 50843164, "name": "天通庵路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46553426710257, 31.259559606154212], [121.46422712558977, 31.258949968414392]]] } }, { "attributes": { "FID": 181, "osm_id": 50843196, "name": "临山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46942679999999, 31.256879900000001], [121.471283, 31.257871099999999], [121.4720143, 31.2585041]]] } }, { "attributes": { "FID": 182, "osm_id": 50843198, "name": "会文路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46920160000001, 31.252689100000001], [121.46832670000001, 31.253627699999999], [121.4671099, 31.255438699999999], [121.4666646, 31.255556500000001], [121.4662775, 31.255868799999998]]] } }, { "attributes": { "FID": 183, "osm_id": 50843199, "name": "止园路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46664149999999, 31.2560641], [121.4664878, 31.2565864], [121.4664891, 31.258084100000001], [121.46566627443484, 31.259559606154212]]] } }, { "attributes": { "FID": 184, "osm_id": 50843201, "name": "川公路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4745166, 31.256510899999999], [121.47516280000001, 31.256814599999998], [121.4758775, 31.257626200000001]]] } }, { "attributes": { "FID": 185, "osm_id": 50843202, "name": "启东路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47606260000001, 31.257527899999999], [121.4752548, 31.2580779]]] } }, { "attributes": { "FID": 186, "osm_id": 50843204, "name": "厚德路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4792839, 31.257561899999999], [121.47896419999999, 31.257699200000001]]] } }, { "attributes": { "FID": 187, "osm_id": 53672341, "name": "西安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4908703, 31.251693700000001], [121.4912369, 31.252277100000001], [121.49248540000001, 31.252888899999999]]] } }, { "attributes": { "FID": 188, "osm_id": 53672359, "name": "旅顺路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49075139999999, 31.253082200000001], [121.490557, 31.252233100000002], [121.4908703, 31.251693700000001]]] } }, { "attributes": { "FID": 189, "osm_id": 62072385, "name": "马园街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4898834, 31.228403499999999], [121.48999139999999, 31.2276965]]] } }, { "attributes": { "FID": 190, "osm_id": 64622647, "name": "百官街", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48180720000001, 31.2524379], [121.4820744, 31.2502724]]] } }, { "attributes": { "FID": 191, "osm_id": 64622654, "name": "东余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": "yes" }, "geometry": { "paths": [[[121.4872642, 31.2534329], [121.4873546, 31.253436199999999]]] } }, { "attributes": { "FID": 192, "osm_id": 70935952, "name": "紫金路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48284649999999, 31.232854199999998], [121.483284, 31.231207999999999]]] } }, { "attributes": { "FID": 193, "osm_id": 71293433, "name": "乍浦路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4822212, 31.253370700000001], [121.4821676, 31.253057299999998], [121.4823102, 31.252701200000001]]] } }, { "attributes": { "FID": 194, "osm_id": 71293439, "name": "乍浦路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4815263, 31.254334], [121.4821769, 31.2536071], [121.4822212, 31.253370700000001]]] } }, { "attributes": { "FID": 195, "osm_id": 71521593, "name": "旅顺路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4914062, 31.250890099999999], [121.492279, 31.249478799999999]]] } }, { "attributes": { "FID": 196, "osm_id": 71521596, "name": "南浔路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48951460000001, 31.247235400000001], [121.4889525, 31.248190600000001]]] } }, { "attributes": { "FID": 197, "osm_id": 71521598, "name": "塘沽路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4900663, 31.248456300000001], [121.4886587, 31.249516100000001]]] } }, { "attributes": { "FID": 198, "osm_id": 71521603, "name": "闵行路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4873679, 31.2485374], [121.4878087, 31.247879699999999]]] } }, { "attributes": { "FID": 199, "osm_id": 71523154, "name": "福德路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48627089999999, 31.247162500000002], [121.4850436, 31.2472587]]] } }, { "attributes": { "FID": 200, "osm_id": 71523514, "name": "南浔路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48772460000001, 31.249859399999998], [121.48810690000001, 31.249308599999999]]] } }, { "attributes": { "FID": 201, "osm_id": 72157794, "name": "普安路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.472982, 31.2264099], [121.47368633214651, 31.224922498999732]]] } }, { "attributes": { "FID": 202, "osm_id": 73897147, "name": "福建中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47429390000001, 31.241918699999999], [121.4745221, 31.241077199999999]]] } }, { "attributes": { "FID": 203, "osm_id": 73897364, "name": "文安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46845279999999, 31.2445159], [121.4681992, 31.245570799999999]]] } }, { "attributes": { "FID": 204, "osm_id": 73897628, "name": "光复路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46733879999999, 31.242351899999999], [121.4657723, 31.2415634]]] } }, { "attributes": { "FID": 205, "osm_id": 73897647, "name": "南苏州路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4681904, 31.2419534], [121.46778980000001, 31.241677500000002]]] } }, { "attributes": { "FID": 206, "osm_id": 73897667, "name": "南苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4681904, 31.2419534], [121.4694851, 31.2427876], [121.47105639999999, 31.243093600000002], [121.47243709999999, 31.242897899999999], [121.47429390000001, 31.241918699999999], [121.4754547, 31.241797999999999], [121.47616069999999, 31.2418853], [121.47754810000001, 31.2425526], [121.4802061, 31.244849200000001], [121.4814071, 31.245343200000001]]] } }, { "attributes": { "FID": 207, "osm_id": 73897746, "name": "河南北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4784313, 31.244351099999999], [121.4778709, 31.245755899999999]]] } }, { "attributes": { "FID": 208, "osm_id": 73897748, "name": "河南北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4777618, 31.245724200000002], [121.47769959999999, 31.2455508], [121.47819339999999, 31.244118799999999]]] } }, { "attributes": { "FID": 209, "osm_id": 73897757, "name": "河南中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4786435, 31.243495500000002], [121.4791855, 31.242469400000001]]] } }, { "attributes": { "FID": 210, "osm_id": 73897762, "name": "河南中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4792789, 31.2424851], [121.4788586, 31.243679400000001]]] } }, { "attributes": { "FID": 211, "osm_id": 73897807, "name": "圆明园路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4838152, 31.242700599999999], [121.4837352, 31.243632000000002]]] } }, { "attributes": { "FID": 212, "osm_id": 73897908, "name": "宁波路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4749654, 31.2400187], [121.4786826, 31.241057600000001], [121.4814866, 31.2415603]]] } }, { "attributes": { "FID": 213, "osm_id": 73897981, "name": "牛庄路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4713532, 31.239194000000001], [121.47014369999999, 31.238784899999999], [121.4694698, 31.238294400000001]]] } }, { "attributes": { "FID": 214, "osm_id": 73898085, "name": "台湾路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4751381, 31.239597700000001], [121.4764675, 31.239807599999999]]] } }, { "attributes": { "FID": 215, "osm_id": 73898394, "name": "贵州路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4717835, 31.237829399999999], [121.47094439999999, 31.240137399999998]]] } }, { "attributes": { "FID": 216, "osm_id": 73898447, "name": "天津路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4799417, 31.240523899999999], [121.4732628, 31.238347300000001]]] } }, { "attributes": { "FID": 217, "osm_id": 73898450, "name": "贵州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4704653, 31.241365800000001], [121.47094439999999, 31.240137399999998]]] } }, { "attributes": { "FID": 218, "osm_id": 73898738, "name": "湖北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4768191, 31.2338895], [121.4775638, 31.232780300000002]]] } }, { "attributes": { "FID": 219, "osm_id": 73898745, "name": "北海路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4764711, 31.232989799999999], [121.4771688, 31.2333754]]] } }, { "attributes": { "FID": 220, "osm_id": 73898795, "name": "靖远街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47940939999999, 31.2332286], [121.47909970000001, 31.234435000000001]]] } }, { "attributes": { "FID": 221, "osm_id": 85796883, "name": "长沙路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4673725, 31.238852699999999], [121.4683059, 31.2372409]]] } }, { "attributes": { "FID": 222, "osm_id": 116783814, "name": "元芳弄", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.486317, 31.2370147], [121.4847048, 31.236513200000001]]] } }, { "attributes": { "FID": 223, "osm_id": 116783847, "name": "高墩街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4817558, 31.228931200000002], [121.48037859999999, 31.228591000000002]]] } }, { "attributes": { "FID": 224, "osm_id": 116982875, "name": "聚奎街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4928105, 31.226078399999999], [121.4918685, 31.225990700000001]]] } }, { "attributes": { "FID": 225, "osm_id": 135723305, "name": "钱仓路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5172245, 31.240154400000002], [121.5164764, 31.242537899999999]]] } }, { "attributes": { "FID": 226, "osm_id": 135838740, "name": "日照路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51039590000001, 31.242896300000002], [121.5099147, 31.2440493]]] } }, { "attributes": { "FID": 227, "osm_id": 135838741, "name": "东城路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.50742750000001, 31.242645499999998], [121.5053339, 31.2416068]]] } }, { "attributes": { "FID": 228, "osm_id": 135838747, "name": "荣成路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5132806, 31.242191099999999], [121.5133472, 31.242397499999999], [121.51290109999999, 31.243608200000001], [121.5127466, 31.243676900000001]]] } }, { "attributes": { "FID": 229, "osm_id": 136014456, "name": "临潼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50859010000001, 31.255739500000001], [121.5095494, 31.254776499999998], [121.5104608, 31.253412099999998]]] } }, { "attributes": { "FID": 230, "osm_id": 136232035, "name": "公兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46875559999999, 31.2578028], [121.47136620000001, 31.254262400000002]]] } }, { "attributes": { "FID": 231, "osm_id": 142741729, "name": "桃源路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47766129999999, 31.227362100000001], [121.4733203, 31.225731199999998]]] } }, { "attributes": { "FID": 232, "osm_id": 143546557, "name": "柳林路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4751112, 31.227279800000002], [121.4747362, 31.228331699999998]]] } }, { "attributes": { "FID": 233, "osm_id": 144960888, "name": "金山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4867789, 31.245936400000001], [121.4869214, 31.247333399999999]]] } }, { "attributes": { "FID": 234, "osm_id": 144965238, "name": "香港路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4829561, 31.2448105], [121.4813649, 31.2445849], [121.4804305, 31.244225499999999]]] } }, { "attributes": { "FID": 235, "osm_id": 144965241, "name": "乍浦路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4823102, 31.252701200000001], [121.48334079999999, 31.2475579]]] } }, { "attributes": { "FID": 236, "osm_id": 144965772, "name": "乍浦路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48322690000001, 31.245788000000001], [121.4830111, 31.245565500000001]]] } }, { "attributes": { "FID": 237, "osm_id": 144965773, "name": "乍浦路桥", "width": " ", "surface": "asphalt", "layer": "1", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": "yes" }, "geometry": { "paths": [[[121.4833563, 31.246504399999999], [121.48322690000001, 31.245788000000001]]] } }, { "attributes": { "FID": 238, "osm_id": 144968543, "name": "武昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.486289, 31.2485268], [121.48682119999999, 31.2480647]]] } }, { "attributes": { "FID": 239, "osm_id": 144970464, "name": "塘沽路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48842430000001, 31.2496297], [121.48772460000001, 31.249859399999998]]] } }, { "attributes": { "FID": 240, "osm_id": 145007005, "name": "东余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.50039680402423, 31.259559606154212], [121.49996400000001, 31.259319300000001], [121.4985976, 31.258041299999999], [121.4961327, 31.257279400000002]]] } }, { "attributes": { "FID": 241, "osm_id": 145007028, "name": "金田路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.491512, 31.2561553], [121.4892799, 31.2574291]]] } }, { "attributes": { "FID": 242, "osm_id": 150369338, "name": "福建中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4747157, 31.2411253], [121.47455549999999, 31.241887800000001]]] } }, { "attributes": { "FID": 243, "osm_id": 150369341, "name": "福建北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4742564, 31.244093199999998], [121.4742602, 31.2427679]]] } }, { "attributes": { "FID": 244, "osm_id": 150941892, "name": "康乐路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4727221, 31.248203199999999], [121.47163569999999, 31.251465400000001]]] } }, { "attributes": { "FID": 245, "osm_id": 150943905, "name": "四川南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48654639999999, 31.2319332], [121.48629990000001, 31.2314635]]] } }, { "attributes": { "FID": 246, "osm_id": 165166862, "name": "滨江大道", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4956054, 31.243987199999999], [121.4936158, 31.243059899999999], [121.491415, 31.241447900000001], [121.49113989999999, 31.240416], [121.4911723, 31.240024200000001], [121.49176439999999, 31.238626499999999], [121.49203540000001, 31.238356400000001]]] } }, { "attributes": { "FID": 247, "osm_id": 165985307, "name": "滨江大道", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4999607, 31.2452957], [121.49888660000001, 31.244980200000001], [121.49751550000001, 31.2441408], [121.49675310000001, 31.244312799999999], [121.4956054, 31.243987199999999]]] } }, { "attributes": { "FID": 248, "osm_id": 168899771, "name": "乳山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.512682, 31.235697200000001], [121.5115564, 31.235219799999999]]] } }, { "attributes": { "FID": 249, "osm_id": 168949177, "name": "丰和路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4937267, 31.241695100000001], [121.4935617, 31.241768400000002]]] } }, { "attributes": { "FID": 250, "osm_id": 168949178, "name": "花园石桥路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4970287, 31.236190199999999], [121.4958717, 31.235278399999999]]] } }, { "attributes": { "FID": 251, "osm_id": 169009260, "name": "东方路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5151649, 31.244718500000001], [121.5149996, 31.246261700000002]]] } }, { "attributes": { "FID": 252, "osm_id": 173444576, "name": "安庆路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47577870000001, 31.250943100000001], [121.4722333, 31.2496014]]] } }, { "attributes": { "FID": 253, "osm_id": 173444577, "name": "安庆路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4722333, 31.2496014], [121.4703921, 31.2489077]]] } }, { "attributes": { "FID": 254, "osm_id": 173471110, "name": "宝昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47323799999999, 31.256932800000001], [121.47424890000001, 31.2552463]]] } }, { "attributes": { "FID": 255, "osm_id": 175289595, "name": "开封路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46690529999999, 31.245282100000001], [121.467575, 31.245428199999999]]] } }, { "attributes": { "FID": 256, "osm_id": 175300780, "name": "七浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.477479, 31.247724099999999], [121.47371680000001, 31.247171099999999]]] } }, { "attributes": { "FID": 257, "osm_id": 175300781, "name": "华兴支路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4686572, 31.249165900000001], [121.468174, 31.249860900000002]]] } }, { "attributes": { "FID": 258, "osm_id": 175300783, "name": "国庆路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.243183897629088], [121.4652806, 31.2425134], [121.46651249999999, 31.242521199999999], [121.4671694, 31.242663700000001]]] } }, { "attributes": { "FID": 259, "osm_id": 175300786, "name": "百禄路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46550310000001, 31.248205500000001], [121.46608639999999, 31.246960000000001]]] } }, { "attributes": { "FID": 260, "osm_id": 175460946, "name": "南天潼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4781797, 31.244897999999999], [121.4787469, 31.245241199999999], [121.4786412, 31.2455748], [121.4791367, 31.246043]]] } }, { "attributes": { "FID": 261, "osm_id": 175468775, "name": "西藏北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46601800000001, 31.248665500000001], [121.46599260000001, 31.2483167], [121.46656710000001, 31.246866600000001]]] } }, { "attributes": { "FID": 262, "osm_id": 175468776, "name": "西藏北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.466686, 31.246892800000001], [121.4667321, 31.2471067], [121.4663058, 31.2484562], [121.46646459999999, 31.248862500000001]]] } }, { "attributes": { "FID": 263, "osm_id": 175468777, "name": "西藏北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4663165, 31.248392500000001], [121.46583990000001, 31.2485526]]] } }, { "attributes": { "FID": 264, "osm_id": 175468778, "name": "西藏北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46565990000001, 31.248311399999999], [121.4660449, 31.248186799999999]]] } }, { "attributes": { "FID": 265, "osm_id": 175468779, "name": "西藏北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4661377, 31.2485137], [121.4659846, 31.248408399999999]]] } }, { "attributes": { "FID": 266, "osm_id": 175473873, "name": "王家宅路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46670880000001, 31.251786899999999], [121.4687515, 31.2531383]]] } }, { "attributes": { "FID": 267, "osm_id": 175473874, "name": "王家宅路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46546530000001, 31.250961400000001], [121.4666886, 31.251809399999999]]] } }, { "attributes": { "FID": 268, "osm_id": 175473875, "name": "民德路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4660468, 31.252528099999999], [121.4673986, 31.251001200000001]]] } }, { "attributes": { "FID": 269, "osm_id": 175621775, "name": "北海宁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4822212, 31.253370700000001], [121.4838185, 31.254360999999999]]] } }, { "attributes": { "FID": 270, "osm_id": 175629805, "name": "塘沽路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47728960000001, 31.248746700000002], [121.4806767, 31.2501468], [121.4827993, 31.250314700000001], [121.4852013, 31.250001099999999]]] } }, { "attributes": { "FID": 271, "osm_id": 175629806, "name": "安庆东路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.477909, 31.251587300000001], [121.4782534, 31.251750099999999]]] } }, { "attributes": { "FID": 272, "osm_id": 175634764, "name": "七浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4787446, 31.2478376], [121.477593, 31.247735800000001]]] } }, { "attributes": { "FID": 273, "osm_id": 175637233, "name": "中州路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47702339999999, 31.255922200000001], [121.4792678, 31.253461300000001]]] } }, { "attributes": { "FID": 274, "osm_id": 175637234, "name": "虬江支路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4764613, 31.255620799999999], [121.4767923, 31.2554528], [121.477341, 31.2555914]]] } }, { "attributes": { "FID": 275, "osm_id": 175637994, "name": "龚家宅路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47535499999999, 31.254277600000002], [121.47566329999999, 31.254588699999999]]] } }, { "attributes": { "FID": 276, "osm_id": 175637995, "name": "龚家宅路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4757156, 31.2546237], [121.4767267, 31.255327399999999], [121.4767453, 31.255460500000002]]] } }, { "attributes": { "FID": 277, "osm_id": 175637996, "name": "龚家宅路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4757156, 31.2546237], [121.47566329999999, 31.254588699999999]]] } }, { "attributes": { "FID": 278, "osm_id": 175638861, "name": "东华路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47360159999999, 31.253411], [121.4748884, 31.2542826], [121.4749831, 31.2541814], [121.47535499999999, 31.254277600000002]]] } }, { "attributes": { "FID": 279, "osm_id": 175755607, "name": "西华路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4739501, 31.2539792], [121.4734022, 31.253625]]] } }, { "attributes": { "FID": 280, "osm_id": 175756854, "name": "西街", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4810909, 31.251215299999998], [121.4809735, 31.252025700000001]]] } }, { "attributes": { "FID": 281, "osm_id": 175759119, "name": "虬江支路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47848399999999, 31.255711600000001], [121.47937229999999, 31.255759900000001]]] } }, { "attributes": { "FID": 282, "osm_id": 175760666, "name": "川公路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4767774, 31.258721399999999], [121.477491, 31.258534399999998], [121.4786654, 31.2586893]]] } }, { "attributes": { "FID": 283, "osm_id": 175957479, "name": "宝源路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4758329, 31.2589522], [121.4758236, 31.2584439], [121.4756306, 31.258270199999998], [121.472227, 31.2563785]]] } }, { "attributes": { "FID": 284, "osm_id": 175957480, "name": "海南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4812285, 31.255583600000001], [121.4821778, 31.254601300000001]]] } }, { "attributes": { "FID": 285, "osm_id": 175957481, "name": "邢家桥南路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4788604, 31.257081800000002], [121.48003850000001, 31.257956700000001]]] } }, { "attributes": { "FID": 286, "osm_id": 175957483, "name": "邢家桥南路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4799672, 31.258068399999999], [121.4788396, 31.257231000000001]]] } }, { "attributes": { "FID": 287, "osm_id": 175957485, "name": "邢家桥南路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4788604, 31.257081800000002], [121.4779333, 31.256322399999998]]] } }, { "attributes": { "FID": 288, "osm_id": 175971818, "name": "邢家桥南路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48003850000001, 31.257956700000001], [121.4799806, 31.2581667], [121.4803416, 31.2588127]]] } }, { "attributes": { "FID": 289, "osm_id": 175978281, "name": "邢家桥北路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4803416, 31.2588127], [121.4805552, 31.259186400000001]]] } }, { "attributes": { "FID": 290, "osm_id": 175985054, "name": "邢家桥北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.480667, 31.259339400000002], [121.48082233036315, 31.259559606154212]]] } }, { "attributes": { "FID": 291, "osm_id": 175985055, "name": "邢家桥北路", "width": " ", "surface": " ", "layer": "1", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": "yes" }, "geometry": { "paths": [[[121.4805552, 31.259186400000001], [121.480667, 31.259339400000002]]] } }, { "attributes": { "FID": 292, "osm_id": 176150319, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": "yes" }, "geometry": { "paths": [[[121.4844458, 31.256500299999999], [121.48454889999999, 31.256646]]] } }, { "attributes": { "FID": 293, "osm_id": 176150320, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": "yes" }, "geometry": { "paths": [[[121.4857403, 31.257815999999998], [121.48562149999999, 31.257730599999999]]] } }, { "attributes": { "FID": 294, "osm_id": 176150321, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48562149999999, 31.257730599999999], [121.4845756, 31.256683599999999]]] } }, { "attributes": { "FID": 295, "osm_id": 176150322, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48624198326844, 31.259559606154212], [121.4859017, 31.258024500000001], [121.4857403, 31.257815999999998]]] } }, { "attributes": { "FID": 296, "osm_id": 176150328, "name": "嘉兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": "yes" }, "geometry": { "paths": [[[121.4872726, 31.2582898], [121.48741339999999, 31.2582141]]] } }, { "attributes": { "FID": 297, "osm_id": 176150331, "name": "辽宁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4853009, 31.258344099999999], [121.486271, 31.257323199999998]]] } }, { "attributes": { "FID": 298, "osm_id": 176150332, "name": "辽宁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4870111, 31.257294999999999], [121.4869707, 31.257836600000001], [121.48722530000001, 31.258315199999998]]] } }, { "attributes": { "FID": 299, "osm_id": 176150333, "name": "溧阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48390139999999, 31.257253200000001], [121.4838566, 31.257314000000001]]] } }, { "attributes": { "FID": 300, "osm_id": 176150334, "name": "溧阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": "yes" }, "geometry": { "paths": [[[121.4840377, 31.257082400000002], [121.48390139999999, 31.257253200000001]]] } }, { "attributes": { "FID": 301, "osm_id": 176150336, "name": "拓皋路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4872596, 31.257285599999999], [121.487326, 31.257283099999999]]] } }, { "attributes": { "FID": 302, "osm_id": 176150337, "name": "拓皋路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": "yes" }, "geometry": { "paths": [[[121.4870847, 31.257292199999998], [121.4872596, 31.257285599999999]]] } }, { "attributes": { "FID": 303, "osm_id": 176150338, "name": "东余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4873546, 31.253436199999999], [121.4914203, 31.254377000000002]]] } }, { "attributes": { "FID": 304, "osm_id": 176150339, "name": "东余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49150590000001, 31.2542738], [121.492656, 31.2550256], [121.4935905, 31.255317300000002]]] } }, { "attributes": { "FID": 305, "osm_id": 176150340, "name": "余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": "yes" }, "geometry": { "paths": [[[121.4871704, 31.253432], [121.4872642, 31.2534329]]] } }, { "attributes": { "FID": 306, "osm_id": 177574808, "name": "吴淞路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48531, 31.2500362], [121.485482, 31.250191099999999], [121.4854673, 31.250492900000001]]] } }, { "attributes": { "FID": 307, "osm_id": 177579659, "name": "北苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4854066, 31.2460968], [121.48594199999999, 31.2459913]]] } }, { "attributes": { "FID": 308, "osm_id": 177579664, "name": "北苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4849001, 31.246224000000002], [121.4854066, 31.2460968]]] } }, { "attributes": { "FID": 309, "osm_id": 177579672, "name": "武昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4869578, 31.247992199999999], [121.4873542, 31.247594500000002]]] } }, { "attributes": { "FID": 310, "osm_id": 177579674, "name": "北苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.484776, 31.246256800000001], [121.4849001, 31.246224000000002]]] } }, { "attributes": { "FID": 311, "osm_id": 177592889, "name": "虎丘路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4830111, 31.245565500000001], [121.4829166, 31.245272400000001], [121.4829889, 31.242709300000001]]] } }, { "attributes": { "FID": 312, "osm_id": 177592890, "name": "峨眉路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.486289, 31.2485268], [121.4869652, 31.249984699999999], [121.48698159999999, 31.2513839], [121.48629579999999, 31.252157100000002], [121.4849979, 31.2542215]]] } }, { "attributes": { "FID": 313, "osm_id": 177594556, "name": "南浔路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4889525, 31.248190600000001], [121.4882851, 31.249101100000001]]] } }, { "attributes": { "FID": 314, "osm_id": 177594559, "name": "武昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4873542, 31.247594500000002], [121.4882965, 31.246572499999999]]] } }, { "attributes": { "FID": 315, "osm_id": 177596646, "name": "塘沽路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48772460000001, 31.249859399999998], [121.4857592, 31.250108099999999], [121.48531, 31.2500362]]] } }, { "attributes": { "FID": 316, "osm_id": 177596647, "name": "南浔路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48760710000001, 31.2518861], [121.48772460000001, 31.249859399999998]]] } }, { "attributes": { "FID": 317, "osm_id": 177597189, "name": "茂林路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4846483, 31.2529918], [121.4855084, 31.253418400000001]]] } }, { "attributes": { "FID": 318, "osm_id": 177600013, "name": "江西北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4797343, 31.2455599], [121.4788602, 31.246739900000001], [121.4786751, 31.249337700000002]]] } }, { "attributes": { "FID": 319, "osm_id": 177705709, "name": "太平路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4914045, 31.249084], [121.4920875, 31.2478567]]] } }, { "attributes": { "FID": 320, "osm_id": 177714711, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4985404, 31.252219199999999], [121.49771730000001, 31.253633600000001]]] } }, { "attributes": { "FID": 321, "osm_id": 177714713, "name": "通州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49365210000001, 31.257881099999999], [121.4932991, 31.258394800000001], [121.49183088583992, 31.259559606154212]]] } }, { "attributes": { "FID": 322, "osm_id": 177714716, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4968435, 31.255324900000002], [121.4961041, 31.256383499999998]]] } }, { "attributes": { "FID": 323, "osm_id": 177714717, "name": "马厂路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4905308, 31.249323], [121.4918479, 31.250140200000001]]] } }, { "attributes": { "FID": 324, "osm_id": 177714718, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4961041, 31.256383499999998], [121.4961327, 31.257279400000002]]] } }, { "attributes": { "FID": 325, "osm_id": 177714725, "name": "丹徒路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4968928, 31.259287799999999], [121.49690409999999, 31.259061500000001], [121.49954839999999, 31.2544222]]] } }, { "attributes": { "FID": 326, "osm_id": 177714727, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49544659999999, 31.2584996], [121.49494063132258, 31.259559606154212]]] } }, { "attributes": { "FID": 327, "osm_id": 177714728, "name": "海平路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4991696, 31.251046200000001], [121.50260849999999, 31.2522628]]] } }, { "attributes": { "FID": 328, "osm_id": 177714730, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4961327, 31.257279400000002], [121.49544659999999, 31.2584996]]] } }, { "attributes": { "FID": 329, "osm_id": 177714731, "name": "高阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49771730000001, 31.253633600000001], [121.4968435, 31.255324900000002]]] } }, { "attributes": { "FID": 330, "osm_id": 177714733, "name": "东余杭路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4961041, 31.256383499999998], [121.4935905, 31.255317300000002]]] } }, { "attributes": { "FID": 331, "osm_id": 177718644, "name": "舟山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5050081, 31.2566956], [121.5062468, 31.255616]]] } }, { "attributes": { "FID": 332, "osm_id": 177724622, "name": "九龙路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4873387, 31.255265300000001], [121.487426, 31.254680700000002], [121.48711110000001, 31.253421500000002], [121.4871551, 31.252754199999998], [121.4880216, 31.2520086], [121.48896019999999, 31.2500164], [121.4901574, 31.249272900000001], [121.4904782, 31.248669799999998]]] } }, { "attributes": { "FID": 333, "osm_id": 177724635, "name": "九龙路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4855864, 31.256090799999999], [121.48699000000001, 31.255648900000001], [121.4873387, 31.255265300000001]]] } }, { "attributes": { "FID": 334, "osm_id": 177741547, "name": "舟山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5036315, 31.257888999999999], [121.5049161, 31.2565326]]] } }, { "attributes": { "FID": 335, "osm_id": 177741587, "name": "舟山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5035239, 31.2577879], [121.50235259999999, 31.2587583]]] } }, { "attributes": { "FID": 336, "osm_id": 177768113, "name": "昆明路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5013577, 31.257080899999998], [121.5014808, 31.256772699999999]]] } }, { "attributes": { "FID": 337, "osm_id": 177768116, "name": "昆明路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5009536, 31.256738200000001], [121.5014808, 31.256772699999999]]] } }, { "attributes": { "FID": 338, "osm_id": 177924164, "name": "临潼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50754929999999, 31.256760499999999], [121.50859010000001, 31.255739500000001]]] } }, { "attributes": { "FID": 339, "osm_id": 178436078, "name": "新菜场路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47506389999999, 31.2418239], [121.4752234, 31.241249400000001]]] } }, { "attributes": { "FID": 340, "osm_id": 178441746, "name": "北海路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4782429, 31.233841099999999], [121.4771688, 31.2333754]]] } }, { "attributes": { "FID": 341, "osm_id": 178441748, "name": "山东南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48065440000001, 31.233022600000002], [121.4815849, 31.230591799999999]]] } }, { "attributes": { "FID": 342, "osm_id": 178441749, "name": "山西南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4786958, 31.237256200000001], [121.4791596, 31.2361304]]] } }, { "attributes": { "FID": 343, "osm_id": 178441750, "name": "泗泾路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4816958, 31.235280199999998], [121.4832596, 31.235605400000001]]] } }, { "attributes": { "FID": 344, "osm_id": 178444040, "name": "昌邑路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5125828, 31.243487099999999], [121.51039590000001, 31.242896300000002], [121.50789349999999, 31.241985400000001]]] } }, { "attributes": { "FID": 345, "osm_id": 178489246, "name": "四川南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4857071, 31.234219], [121.48614240000001, 31.233310800000002], [121.48654639999999, 31.2319332]]] } }, { "attributes": { "FID": 346, "osm_id": 178493002, "name": "江西中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4838166, 31.233837600000001], [121.48261239999999, 31.2378158], [121.48240699999999, 31.239138700000002], [121.4810859, 31.242563499999999]]] } }, { "attributes": { "FID": 347, "osm_id": 178583140, "name": "广西北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4756065, 31.231669799999999], [121.47410960000001, 31.233704899999999], [121.47307910000001, 31.235565699999999], [121.471554, 31.240278400000001]]] } }, { "attributes": { "FID": 348, "osm_id": 226657321, "name": "四川中路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4832481, 31.240455099999998], [121.4827839, 31.241427600000002]]] } }, { "attributes": { "FID": 349, "osm_id": 232920697, "name": "长乐路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46750584807461, 31.224922498999732], [121.4675302, 31.224929199999998]]] } }, { "attributes": { "FID": 350, "osm_id": 237271813, "name": "栖霞路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51672379999999, 31.2399676], [121.51980249637835, 31.241115975799698]]] } }, { "attributes": { "FID": 351, "osm_id": 237271814, "name": "乳山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5153553, 31.236739499999999], [121.512682, 31.235697200000001]]] } }, { "attributes": { "FID": 352, "osm_id": 238219464, "name": "方浜中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4896897, 31.2276943], [121.4918606, 31.227226600000002], [121.4928173, 31.227307799999998]]] } }, { "attributes": { "FID": 353, "osm_id": 238346294, "name": "新永安路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4875349, 31.232255200000001], [121.48654639999999, 31.2319332]]] } }, { "attributes": { "FID": 354, "osm_id": 238478721, "name": "宝通路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47513170000001, 31.255335200000001], [121.4751109, 31.255382699999998]]] } }, { "attributes": { "FID": 355, "osm_id": 238478723, "name": "新广路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47771849999999, 31.256473700000001], [121.47606260000001, 31.257527899999999]]] } }, { "attributes": { "FID": 356, "osm_id": 238479301, "name": "鸿兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46969730000001, 31.258554400000001], [121.4687559, 31.259376]]] } }, { "attributes": { "FID": 357, "osm_id": 238482433, "name": "东宝兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47882785146805, 31.259559606154212], [121.4803416, 31.2588127]]] } }, { "attributes": { "FID": 358, "osm_id": 240640943, "name": "中华新路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.256839464589603], [121.4657718, 31.257761500000001], [121.4674084, 31.258111299999999], [121.46808849999999, 31.258474700000001]]] } }, { "attributes": { "FID": 359, "osm_id": 401226925, "name": "青莲街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48051121557485, 31.224922498999732], [121.48007699999999, 31.225394000000001], [121.4796278, 31.2266993]]] } }, { "attributes": { "FID": 360, "osm_id": 401226926, "name": "青莲街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4796278, 31.2266993], [121.47915930000001, 31.2279348], [121.4787731, 31.228163200000001]]] } }, { "attributes": { "FID": 361, "osm_id": 421846088, "name": "北石皮弄", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4844909, 31.225484099999999], [121.4832177, 31.225235999999999]]] } }, { "attributes": { "FID": 362, "osm_id": 437452571, "name": "风阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46422712558977, 31.235269617027722], [121.4669983, 31.235981200000001], [121.4675818, 31.2367785], [121.4692699, 31.2379192], [121.4694698, 31.238294400000001]]] } }, { "attributes": { "FID": 363, "osm_id": 441752330, "name": "北苏州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.476314, 31.242524700000001], [121.4755992, 31.242318300000001], [121.4750544, 31.242361200000001], [121.47211609999999, 31.2436951], [121.4715128, 31.243748499999999], [121.469683, 31.243522299999999], [121.46733879999999, 31.242351899999999]]] } }, { "attributes": { "FID": 364, "osm_id": 444342365, "name": "四牌楼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.49102685493025, 31.224922498999732], [121.490854, 31.226517900000001], [121.4909629, 31.227385300000002]]] } }, { "attributes": { "FID": 365, "osm_id": 448931479, "name": "九江路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.48562389999999, 31.239859500000001], [121.48375179999999, 31.239353900000001]]] } }, { "attributes": { "FID": 366, "osm_id": 449718777, "name": "天津路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4799417, 31.240523899999999], [121.480053, 31.2405607]]] } }, { "attributes": { "FID": 367, "osm_id": 449718779, "name": "天津路", "width": " ", "surface": "concrete", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.480053, 31.2405607], [121.48165880000001, 31.241091600000001]]] } }, { "attributes": { "FID": 368, "osm_id": 457547879, "name": "滨江大道", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51980249637835, 31.245608979499849], [121.51761329999999, 31.245591900000001], [121.5148981, 31.246275199999999], [121.5123139, 31.2460372]]] } }, { "attributes": { "FID": 369, "osm_id": 460316442, "name": "山西南路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.478272, 31.237952799999999], [121.4785954, 31.237220700000002]]] } }, { "attributes": { "FID": 370, "osm_id": 475446753, "name": "浙江中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47430300000001, 31.2365785], [121.4751625, 31.2343416], [121.4764711, 31.232989799999999]]] } }, { "attributes": { "FID": 371, "osm_id": 478980323, "name": "九联小区小区道", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50288620000001, 31.259454399999999], [121.5037609, 31.258627300000001]]] } }, { "attributes": { "FID": 372, "osm_id": 486791278, "name": "拓皋路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4870111, 31.257294999999999], [121.4870847, 31.257292199999998]]] } }, { "attributes": { "FID": 373, "osm_id": 490271618, "name": "山东中路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4797279, 31.238385399999999], [121.48008179999999, 31.2357406], [121.4806768, 31.233398600000001]]] } }, { "attributes": { "FID": 374, "osm_id": 495101830, "name": "福佑路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4881386, 31.229831900000001], [121.4884742, 31.229781200000001]]] } }, { "attributes": { "FID": 375, "osm_id": 495101838, "name": "陆家宅支路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4918685, 31.225990700000001], [121.49176749999999, 31.226444999999998], [121.49086699999999, 31.226426100000001]]] } }, { "attributes": { "FID": 376, "osm_id": 495101845, "name": "安仁街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4881386, 31.229831900000001], [121.4886704, 31.2273897]]] } }, { "attributes": { "FID": 377, "osm_id": 495187078, "name": "四川中路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.482294, 31.24269], [121.4827839, 31.241427600000002]]] } }, { "attributes": { "FID": 378, "osm_id": 558885215, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4830917, 31.255378499999999], [121.4844081, 31.256447000000001]]] } }, { "attributes": { "FID": 379, "osm_id": 558885217, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4844081, 31.256447000000001], [121.4844458, 31.256500299999999]]] } }, { "attributes": { "FID": 380, "osm_id": 558885218, "name": "哈尔滨路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4845756, 31.256683599999999], [121.48454889999999, 31.256646]]] } }, { "attributes": { "FID": 381, "osm_id": 558885219, "name": "嘉兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48722530000001, 31.258315199999998], [121.4872726, 31.2582898]]] } }, { "attributes": { "FID": 382, "osm_id": 558885221, "name": "辽宁路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4879957, 31.259449199999999], [121.48785340000001, 31.259058899999999], [121.48722530000001, 31.258315199999998]]] } }, { "attributes": { "FID": 383, "osm_id": 694630316, "name": "安仁街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.48802449999999, 31.2310892], [121.4881386, 31.229831900000001]]] } }, { "attributes": { "FID": 384, "osm_id": 730659326, "name": "景星路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51498719999999, 31.256114100000001], [121.51529069999999, 31.255635999999999]]] } }, { "attributes": { "FID": 385, "osm_id": 744278563, "name": "武昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.479772, 31.2489478], [121.4808353, 31.2490025]]] } }, { "attributes": { "FID": 386, "osm_id": 744519076, "name": "福建北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47371680000001, 31.247171099999999], [121.47348150000001, 31.248427499999998]]] } }, { "attributes": { "FID": 387, "osm_id": 744519077, "name": "七浦路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.47371680000001, 31.247171099999999], [121.4712622, 31.246778899999999]]] } }, { "attributes": { "FID": 388, "osm_id": 761486035, "name": "学院路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4859366, 31.225105500000002], [121.4879013, 31.225035299999998]]] } }, { "attributes": { "FID": 389, "osm_id": 761958532, "name": "陆家嘴西路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4931383, 31.238909199999998], [121.49203540000001, 31.238356400000001]]] } }, { "attributes": { "FID": 390, "osm_id": 761958533, "name": "陆家嘴西路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.49203540000001, 31.238356400000001], [121.4931917, 31.238813400000002]]] } }, { "attributes": { "FID": 391, "osm_id": 768805831, "name": "江西北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4786544, 31.250334599999999], [121.4786026, 31.2506801], [121.47711820000001, 31.2526215]]] } }, { "attributes": { "FID": 392, "osm_id": 768805832, "name": "江西北路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4786751, 31.249337700000002], [121.4786544, 31.250334599999999]]] } }, { "attributes": { "FID": 393, "osm_id": 869126013, "name": "荆州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51163056406745, 31.259559606154212], [121.5128495, 31.258146499999999], [121.5140902, 31.257304399999999]]] } }, { "attributes": { "FID": 394, "osm_id": 870436409, "name": "东方路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.51524670000001, 31.243782700000001], [121.5152037, 31.244519199999999]]] } }, { "attributes": { "FID": 395, "osm_id": 870436410, "name": "东方路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.51502600000001, 31.244518899999999], [121.515126, 31.243783100000002]]] } }, { "attributes": { "FID": 396, "osm_id": 870436411, "name": "东方路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5151711, 31.2445016], [121.5152277, 31.2446761], [121.5150144, 31.244689600000001], [121.51499699999999, 31.244547799999999], [121.5151711, 31.2445016]]] } }, { "attributes": { "FID": 397, "osm_id": 871712755, "name": "华兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46990359999999, 31.249743800000001], [121.4686572, 31.249165900000001]]] } }, { "attributes": { "FID": 398, "osm_id": 872814564, "name": "福山路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.51980249637835, 31.243808707436862], [121.5196345, 31.2456049]]] } }, { "attributes": { "FID": 399, "osm_id": 900279893, "name": "汉口路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47579949999999, 31.236216500000001], [121.47657820000001, 31.236523099999999]]] } }, { "attributes": { "FID": 400, "osm_id": 900279894, "name": "汉口路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.47657820000001, 31.236523099999999], [121.47988049999999, 31.237644199999998], [121.4858309, 31.238929200000001]]] } }, { "attributes": { "FID": 401, "osm_id": 950267226, "name": "海门路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5027736, 31.257071799999999], [121.5035747, 31.256050699999999]]] } }, { "attributes": { "FID": 402, "osm_id": 950267227, "name": "临潼路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.50642670000001, 31.257811400000001], [121.5063676, 31.257865299999999]]] } }, { "attributes": { "FID": 403, "osm_id": 950267230, "name": "辽阳路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.51425460501949, 31.259559606154212], [121.5145158, 31.259215399999999]]] } }, { "attributes": { "FID": 404, "osm_id": 961322851, "name": "东昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.50024310000001, 31.232678100000001], [121.4993599, 31.232324500000001]]] } }, { "attributes": { "FID": 405, "osm_id": 961322853, "name": "东昌路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4995047, 31.232173199999998], [121.5003603, 31.2324977]]] } }, { "attributes": { "FID": 406, "osm_id": 964420117, "name": "商城路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.5024518, 31.2291612], [121.50297380000001, 31.2294397]]] } }, { "attributes": { "FID": 407, "osm_id": 964420118, "name": "张杨路", "width": " ", "surface": "asphalt", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "no", "bridge": " " }, "geometry": { "paths": [[[121.50456749999999, 31.226346400000001], [121.5065216, 31.227049699999998]]] } }, { "attributes": { "FID": 408, "osm_id": 964446752, "name": "富城路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.4922351, 31.240892800000001], [121.4928384, 31.240003900000001]]] } }, { "attributes": { "FID": 409, "osm_id": 965047388, "name": "金洲街", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5029117, 31.243032599999999], [121.5037774, 31.241924699999998]]] } }, { "attributes": { "FID": 410, "osm_id": 986834724, "name": "昆明路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.5014808, 31.256772699999999], [121.5022852, 31.256818800000001], [121.5027736, 31.257071799999999]]] } }, { "attributes": { "FID": 411, "osm_id": 989909252, "name": "岳州路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4933499, 31.258346299999999], [121.4937049, 31.259259100000001], [121.49401526793677, 31.259559606154212]]] } }, { "attributes": { "FID": 412, "osm_id": 1002650436, "name": "中华新路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.46808849999999, 31.258474700000001], [121.4689375568617, 31.259559606154212]]] } }, { "attributes": { "FID": 413, "osm_id": 1002650437, "name": "公兴路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": "yes", "bridge": " " }, "geometry": { "paths": [[[121.46808849999999, 31.258474700000001], [121.46838440000001, 31.2583573], [121.46875559999999, 31.2578028]]] } }, { "attributes": { "FID": 414, "osm_id": 1007651592, "name": "开封路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": " ", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.4678025, 31.245477000000001], [121.4681992, 31.245570799999999]]] } }, { "attributes": { "FID": 415, "osm_id": 1007651593, "name": "开封路", "width": " ", "surface": " ", "layer": " ", "smoothness": " ", "highway": "residential", "tunnel": "building_passage", "oneway": " ", "bridge": " " }, "geometry": { "paths": [[[121.467575, 31.245428199999999], [121.4678025, 31.245477000000001]]] } }] };


/***/ }),

/***/ "./src/app/pages/welcome/pages/demo/river.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/welcome/pages/demo/river.ts ***!
  \***************************************************/
/*! exports provided: riverData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverData", function() { return riverData; });
const riverData = { "displayFieldName": "", "fieldAliases": { "FID": "FID", "osm_id": "osm_id", "waterway": "waterway", "name": "name", "water": "water", "addrstreet": "addrstreet", "addrhousen": "addrhousen", "buildingma": "buildingma", "natural": "natural", "roofmateri": "roofmateri", "accessroof": "accessroof", "building": "building" }, "geometryType": "esriGeometryPolygon", "spatialReference": { "wkid": 4326, "latestWkid": 4326 }, "fields": [{ "name": "FID", "type": "esriFieldTypeOID", "alias": "FID" }, { "name": "osm_id", "type": "esriFieldTypeDouble", "alias": "osm_id" }, { "name": "waterway", "type": "esriFieldTypeString", "alias": "waterway", "length": 80 }, { "name": "name", "type": "esriFieldTypeString", "alias": "name", "length": 80 }, { "name": "water", "type": "esriFieldTypeString", "alias": "water", "length": 80 }, { "name": "addrstreet", "type": "esriFieldTypeString", "alias": "addrstreet", "length": 80 }, { "name": "addrhousen", "type": "esriFieldTypeString", "alias": "addrhousen", "length": 80 }, { "name": "buildingma", "type": "esriFieldTypeString", "alias": "buildingma", "length": 80 }, { "name": "natural", "type": "esriFieldTypeString", "alias": "natural", "length": 80 }, { "name": "roofmateri", "type": "esriFieldTypeString", "alias": "roofmateri", "length": 80 }, { "name": "accessroof", "type": "esriFieldTypeString", "alias": "accessroof", "length": 80 }, { "name": "building", "type": "esriFieldTypeString", "alias": "building", "length": 80 }], "features": [{ "attributes": { "FID": 0, "osm_id": 8002009, "waterway": " ", "name": " ", "water": "river", "addrstreet": " ", "addrhousen": " ", "buildingma": " ", "natural": "water", "roofmateri": " ", "accessroof": " ", "building": " " }, "geometry": { "rings": [[[121.46422712558977, 31.241114359603479], [121.46422712558977, 31.241538697533571], [121.4653936, 31.241371000000001], [121.465694, 31.241398499999999], [121.4664557, 31.241710399999999], [121.4671105, 31.242131000000001], [121.46893009999999, 31.243158399999999], [121.47000300000001, 31.243591299999999], [121.47052890000001, 31.2436504], [121.47104160000001, 31.243672100000001], [121.4721488, 31.243576699999998], [121.47317870000001, 31.243114299999998], [121.4746201, 31.2424547], [121.4749602, 31.2423097], [121.47515660000001, 31.242250200000001], [121.47530279999999, 31.242222099999999], [121.4754725, 31.242218699999999], [121.47567650000001, 31.242242999999998], [121.47585549999999, 31.242279100000001], [121.47603460000001, 31.242327199999998], [121.476287, 31.2423991], [121.47649269999999, 31.242482899999999], [121.4766678, 31.242585299999998], [121.4769893, 31.2428004], [121.4773381, 31.2430749], [121.4776146, 31.243323400000001], [121.478071, 31.243790199999999], [121.4785285, 31.244250900000001], [121.4792917, 31.2450376], [121.4794572, 31.245189499999999], [121.4798177, 31.2454763], [121.48019840000001, 31.2457365], [121.4805848, 31.245966800000001], [121.4810464, 31.2461968], [121.4810927, 31.246226499999999], [121.4813339, 31.246296000000001], [121.48138710000001, 31.246314900000002], [121.481843, 31.246445600000001], [121.4821195, 31.2465142], [121.48228709999999, 31.246528000000001], [121.4824539, 31.2465297], [121.48270410000001, 31.246534799999999], [121.483046, 31.246518399999999], [121.4836121, 31.246457299999999], [121.4835933, 31.2464133], [121.4835588, 31.246417600000001], [121.48353659999999, 31.246360599999999], [121.48407760000001, 31.246204500000001], [121.4840883, 31.246229799999998], [121.48412740000001, 31.2462187], [121.4841328, 31.246240499999999], [121.4841588, 31.2462318], [121.4841677, 31.246253100000001], [121.4842127, 31.246239899999999], [121.4842745, 31.246175900000001], [121.48434810000001, 31.246115199999998], [121.484443, 31.246053799999999], [121.4845888, 31.245988499999999], [121.48501280000001, 31.245879899999998], [121.48519, 31.245852299999999], [121.4853358, 31.245843900000001], [121.4854733, 31.245855200000001], [121.48559280000001, 31.245891499999999], [121.4857717, 31.245821299999999], [121.4857585, 31.245790499999998], [121.48607939999999, 31.245692300000002], [121.48604090000001, 31.245615099999998], [121.4865813, 31.245457900000002], [121.4866784, 31.245465899999999], [121.4868355, 31.245422399999999], [121.4866645, 31.2450543], [121.48645329999999, 31.244599399999998], [121.4864082, 31.244616099999998], [121.4858584, 31.2448199], [121.48584529999999, 31.2447667], [121.4856587, 31.244838699999999], [121.48551329999999, 31.244894800000001], [121.48545180000001, 31.244933199999998], [121.4853378, 31.244989499999999], [121.4852538, 31.2451033], [121.4851587, 31.2451936], [121.48501160000001, 31.245273300000001], [121.4847942, 31.245349099999999], [121.4843673, 31.2454918], [121.48430759999999, 31.245509599999998], [121.48393539999999, 31.245614], [121.4839205, 31.2455836], [121.4833555, 31.245808100000001], [121.483321, 31.245820800000001], [121.48303199999999, 31.245851399999999], [121.48280219999999, 31.2458746], [121.4826674, 31.245886899999999], [121.482328, 31.2458843], [121.4820563, 31.245855899999999], [121.48165849999999, 31.245783899999999], [121.4810274, 31.245566499999999], [121.4807149, 31.2454179], [121.4802826, 31.245172100000001], [121.4798014, 31.244842299999998], [121.4787367, 31.2438228], [121.4784458, 31.243404399999999], [121.478308, 31.2432798], [121.4779693, 31.2429576], [121.4775667, 31.242639400000002], [121.4772459, 31.242417], [121.4769591, 31.242255700000001], [121.4766025, 31.242078200000002], [121.4763603, 31.241977899999998], [121.476062, 31.2419096], [121.4758271, 31.241867299999999], [121.47558290000001, 31.241847], [121.47528, 31.241851499999999], [121.47480950000001, 31.241925500000001], [121.4744462, 31.241979300000001], [121.4741879, 31.242055199999999], [121.47384409999999, 31.242260399999999], [121.4731644, 31.242652400000001], [121.4724609, 31.242955500000001], [121.4720432, 31.243092399999998], [121.4714204, 31.243161700000002], [121.4708904, 31.243159899999998], [121.4704347, 31.243121299999999], [121.4697043, 31.242919300000001], [121.4692173, 31.2427131], [121.4688493, 31.242515699999998], [121.4684206, 31.242227], [121.46824789999999, 31.242074899999999], [121.46771200000001, 31.241751600000001], [121.4674052, 31.2415871], [121.4665845, 31.241242499999998], [121.4659729, 31.241013200000001], [121.46529700000001, 31.2409307], [121.46476060000001, 31.240967399999999], [121.46422712558977, 31.241114359603479]]] } }, { "attributes": { "FID": 1, "osm_id": 39089117, "waterway": " ", "name": "黄浦江", "water": "river", "addrstreet": " ", "addrhousen": " ", "buildingma": " ", "natural": "water", "roofmateri": " ", "accessroof": " ", "building": " " }, "geometry": { "rings": [[[121.51980249637835, 31.251051295166725], [121.51980249637835, 31.246910686707082], [121.51919789999999, 31.246888899999998], [121.5192041, 31.246753699999999], [121.5180519, 31.246729899999998], [121.5172087, 31.2467124], [121.5172041, 31.246844599999999], [121.5157217, 31.2468422], [121.51572229999999, 31.246856300000001], [121.51517440000001, 31.246858899999999], [121.5151765, 31.246931199999999], [121.51491420000001, 31.246935199999999], [121.514912, 31.246851899999999], [121.5147151, 31.246860000000002], [121.513987, 31.246890100000002], [121.5130956, 31.246928799999999], [121.512742, 31.2469237], [121.511, 31.246995299999998], [121.5099398, 31.2470453], [121.50865829999999, 31.247052100000001], [121.5090723, 31.251256699999999], [121.51233809999999, 31.251174500000001], [121.51402, 31.2511321], [121.5142981, 31.2511242], [121.5142953, 31.2511534], [121.5143314, 31.251152600000001], [121.5151568, 31.2511355], [121.5159384, 31.251119200000002], [121.515964, 31.251079799999999], [121.5159962, 31.251132599999998], [121.51616780000001, 31.251141700000002], [121.51638509999999, 31.251131399999998], [121.51639710000001, 31.251083300000001], [121.5164159, 31.2510592], [121.51644949999999, 31.251047700000001], [121.5165701, 31.2510534], [121.5165822, 31.2510741], [121.51659429999999, 31.251086699999998], [121.51662779999999, 31.251093600000001], [121.5170516, 31.251075199999999], [121.5170851, 31.251051199999999], [121.51712670000001, 31.251046599999999], [121.5172367, 31.251045399999999], [121.51980249637835, 31.251051295166725]]] } }, { "attributes": { "FID": 2, "osm_id": 71118583, "waterway": " ", "name": "黄浦江", "water": "river", "addrstreet": " ", "addrhousen": " ", "buildingma": " ", "natural": "water", "roofmateri": " ", "accessroof": " ", "building": " " }, "geometry": { "rings": [[[121.50500817639734, 31.224922498999732], [121.49968410918946, 31.224922498999732], [121.4996008, 31.2250193], [121.49933059999999, 31.2253331], [121.4986497, 31.226091700000001], [121.49772470000001, 31.227157900000002], [121.49711619999999, 31.227713699999999], [121.49685839999999, 31.227966200000001], [121.4964528, 31.228345300000001], [121.4963628, 31.228356399999999], [121.49614819999999, 31.228535600000001], [121.4960871, 31.228584600000001], [121.4960291, 31.2286413], [121.4959343, 31.228719000000002], [121.4958462, 31.2287617], [121.4957575, 31.228831700000001], [121.49570900000001, 31.228882500000001], [121.4956737, 31.2289213], [121.4956419, 31.228959], [121.4956043, 31.2290052], [121.49559240000001, 31.229013800000001], [121.4955779, 31.229021700000001], [121.4955653, 31.2290256], [121.49555100000001, 31.229027299999998], [121.4955569, 31.2290092], [121.4955598, 31.228993299999999], [121.49556010000001, 31.228980700000001], [121.4955569, 31.228970400000001], [121.4955497, 31.228966499999999], [121.4955406, 31.228966], [121.4955186, 31.2289666], [121.49548919999999, 31.2289748], [121.4954383, 31.2289934], [121.49540450000001, 31.229020500000001], [121.49537239999999, 31.2290505], [121.4953537, 31.229075999999999], [121.49532689999999, 31.229109900000001], [121.4953026, 31.229144399999999], [121.49527740000001, 31.229180499999998], [121.495248, 31.229218100000001], [121.4952042, 31.2292591], [121.49515700000001, 31.229295100000002], [121.4951296, 31.2293162], [121.4951049, 31.229335299999999], [121.49504779999999, 31.229374799999999], [121.49499299999999, 31.2294038], [121.49492480000001, 31.229431399999999], [121.4948663, 31.229460199999998], [121.4948064, 31.2295014], [121.4947633, 31.229530400000002], [121.4947433, 31.2295467], [121.49472780000001, 31.229563599999999], [121.49471680000001, 31.229578799999999], [121.4947106, 31.229590900000002], [121.49470580000001, 31.229607399999999], [121.4947076, 31.229616700000001], [121.4947162, 31.2296242], [121.494731, 31.229626400000001], [121.4947492, 31.2296242], [121.4947791, 31.2296187], [121.4947974, 31.2296178], [121.49481, 31.229622299999999], [121.4947559, 31.229656500000001], [121.49470030000001, 31.2296871], [121.49462560000001, 31.229724099999999], [121.49457099999999, 31.229762000000001], [121.49450659999999, 31.229820499999999], [121.4944131, 31.2298899], [121.4942951, 31.229966300000001], [121.49426819999999, 31.229984600000002], [121.4942258, 31.230024799999999], [121.49414419999999, 31.230104300000001], [121.4940746, 31.230183199999999], [121.4940328, 31.2302404], [121.4940063, 31.230295600000002], [121.4939775, 31.2303608], [121.4939444, 31.2304183], [121.493886, 31.2304931], [121.4938156, 31.230560700000002], [121.4937414, 31.2306168], [121.4936536, 31.2306591], [121.4935352, 31.230694799999998], [121.4934445, 31.230714500000001], [121.4933443, 31.230749100000001], [121.4932065, 31.2308165], [121.4930835, 31.230898700000001], [121.4929796, 31.230982600000001], [121.4928877, 31.231076300000002], [121.4928704, 31.231090500000001], [121.49280570000001, 31.231143700000001], [121.4927064, 31.231193099999999], [121.4926315, 31.231219500000002], [121.4925623, 31.231259000000001], [121.4925094, 31.231301699999999], [121.4924501, 31.231370800000001], [121.4923855, 31.2314297], [121.4923034, 31.231480999999999], [121.49222039999999, 31.231523800000002], [121.4921452, 31.231571500000001], [121.4920759, 31.231633899999999], [121.4920008, 31.231714499999999], [121.49197580000001, 31.231737899999999], [121.4919381, 31.231774699999999], [121.491905, 31.231811700000002], [121.4918784, 31.231839000000001], [121.49184769999999, 31.2318651], [121.49179599999999, 31.2319095], [121.4917635, 31.231934500000001], [121.49173519999999, 31.231949], [121.4916904, 31.231967000000001], [121.4916334, 31.231992999999999], [121.4915957, 31.232030600000002], [121.4914991, 31.232111], [121.4913885, 31.232202399999998], [121.49068800000001, 31.232734499999999], [121.48978580000001, 31.233467000000001], [121.48966660000001, 31.233582299999998], [121.4890942, 31.234117000000001], [121.48912489999999, 31.234138000000002], [121.4889373, 31.234333700000001], [121.48880459999999, 31.234459900000001], [121.4887238, 31.234545900000001], [121.4886738, 31.234593400000001], [121.4886183, 31.234648700000001], [121.4885745, 31.234690400000002], [121.4885161, 31.2347465], [121.4885488, 31.2347711], [121.4884414, 31.234891000000001], [121.4880642, 31.235375399999999], [121.4875028, 31.236234199999998], [121.48720969999999, 31.236765299999998], [121.4868628, 31.237460899999999], [121.4866062, 31.238081099999999], [121.4864225, 31.238736899999999], [121.4863232, 31.239449700000002], [121.4862682, 31.240284899999999], [121.4862844, 31.2407465], [121.48631399999999, 31.2412323], [121.4863471, 31.241576299999998], [121.48636930000001, 31.241706900000001], [121.4864412, 31.2421294], [121.48660219999999, 31.2426934], [121.4866482, 31.2428831], [121.4867319, 31.243134000000001], [121.4869566, 31.243744100000001], [121.48690759999999, 31.243764800000001], [121.4869478, 31.243839300000001], [121.4869767, 31.2438869], [121.4868345, 31.243937899999999], [121.4867634, 31.243983799999999], [121.48680040000001, 31.244039900000001], [121.4868919, 31.244023599999998], [121.4869784, 31.244017500000002], [121.4870501, 31.2440316], [121.4871555, 31.244098300000001], [121.4871921, 31.244140399999999], [121.487218, 31.244196800000001], [121.4872326, 31.244268900000002], [121.4872245, 31.244338800000001], [121.48718909999999, 31.244406300000001], [121.48713960000001, 31.244460499999999], [121.4870753, 31.244501899999999], [121.4870105, 31.2445229], [121.4869334, 31.244531500000001], [121.4868563, 31.244527099999999], [121.4867855, 31.244494899999999], [121.4867186, 31.244458099999999], [121.48668000000001, 31.2444101], [121.4866494, 31.244360100000002], [121.486638, 31.244314599999999], [121.4865696, 31.2443232], [121.486581, 31.244405199999999], [121.4865985, 31.244458999999999], [121.486628, 31.2445387], [121.4865989, 31.244548200000001], [121.48645329999999, 31.244599399999998], [121.4866645, 31.2450543], [121.4868355, 31.245422399999999], [121.486965, 31.245375800000001], [121.4870743, 31.245367900000002], [121.4872723, 31.2453957], [121.4876309, 31.245446099999999], [121.4877039, 31.2454407], [121.4882928, 31.24558], [121.48872919999999, 31.245823000000001], [121.49043450000001, 31.2468717], [121.49087660000001, 31.247162100000001], [121.49093310000001, 31.247250099999999], [121.4909426, 31.247359400000001], [121.49113319999999, 31.247422], [121.4911773, 31.247411700000001], [121.4915496, 31.2475685], [121.4916235, 31.2473916], [121.49324420000001, 31.2480212], [121.4941436, 31.248370600000001], [121.4957655, 31.249049500000002], [121.49668130000001, 31.249405899999999], [121.49732729999999, 31.249695200000001], [121.4975567, 31.249789700000001], [121.49800430000001, 31.2499112], [121.4993424, 31.250255299999999], [121.4995466, 31.250316600000001], [121.5001658, 31.250502600000001], [121.5002339, 31.2505144], [121.5003535, 31.250535200000002], [121.5030967, 31.251010900000001], [121.5041647, 31.251140899999999], [121.50447389999999, 31.251163099999999], [121.5045549, 31.251214600000001], [121.5045133, 31.251649799999999], [121.5046904, 31.2516611], [121.50475, 31.2512273], [121.504846, 31.251191500000001], [121.50542799999999, 31.251234700000001], [121.5074879, 31.251295800000001], [121.50832010000001, 31.2512753], [121.5083348, 31.251393199999999], [121.5085313, 31.251399899999999], [121.5085376, 31.251814799999998], [121.5087022, 31.251812999999999], [121.5086963, 31.251399599999999], [121.50906430000001, 31.2514082], [121.5090723, 31.251256699999999], [121.50865829999999, 31.247052100000001], [121.5066921, 31.247077699999998], [121.5061074, 31.247066799999999], [121.50525500000001, 31.247038100000001], [121.5042134, 31.246981600000002], [121.5042844, 31.246720100000001], [121.50430059999999, 31.246661700000001], [121.50433940000001, 31.246535000000002], [121.5040123, 31.2464753], [121.5039776, 31.246597699999999], [121.5039728, 31.246617799999999], [121.5039609, 31.246660500000001], [121.5038153, 31.246631099999998], [121.503827, 31.246588899999999], [121.5038325, 31.246569399999998], [121.5038697, 31.246435399999999], [121.5038804, 31.246397000000002], [121.50369860000001, 31.246363500000001], [121.50346089999999, 31.246319700000001], [121.5034022, 31.2465443], [121.50333449999999, 31.246792500000002], [121.5024617, 31.2466185], [121.50193179999999, 31.246512899999999], [121.5013726, 31.2464014], [121.5013952, 31.2463187], [121.50139660000001, 31.246237600000001], [121.5012765, 31.246210099999999], [121.5012016, 31.246193000000002], [121.5011219, 31.246174799999999], [121.50104140000001, 31.2461564], [121.5009415, 31.246133499999999], [121.5009137, 31.246219400000001], [121.5008819, 31.2463178], [121.5001814, 31.246142299999999], [121.49927599999999, 31.245884799999999], [121.49923459999999, 31.245871000000001], [121.49736780000001, 31.245250599999999], [121.4964385, 31.244909799999999], [121.4964603, 31.2448686], [121.4965437, 31.2447105], [121.4965771, 31.244647400000002], [121.496439, 31.244591400000001], [121.4963923, 31.244572399999999], [121.4962764, 31.244525400000001], [121.4962135, 31.244499900000001], [121.4960868, 31.2444484], [121.49604119999999, 31.244476200000001], [121.4959898, 31.244465399999999], [121.4956973, 31.244359599999999], [121.49525730000001, 31.244206299999998], [121.494868, 31.244077799999999], [121.4943968, 31.243882899999999], [121.4940474, 31.243707700000002], [121.4939492, 31.243659399999999], [121.4935919, 31.243483900000001], [121.4935768, 31.2435063], [121.4933126, 31.243381500000002], [121.4930184, 31.2432135], [121.4927033, 31.243021500000001], [121.49236089999999, 31.2427767], [121.4923105, 31.242742100000001], [121.4922904, 31.2427283], [121.4922141, 31.242733900000001], [121.4920496, 31.2425997], [121.491798, 31.242389599999999], [121.49161100000001, 31.242234799999999], [121.4914386, 31.241974500000001], [121.4911039, 31.241327900000002], [121.4910184, 31.241346199999999], [121.49083779999999, 31.2409344], [121.4907924, 31.240942100000002], [121.4907389, 31.240760900000001], [121.4906988, 31.240544100000001], [121.49074520000001, 31.2405337], [121.4907206, 31.2403467], [121.4907043, 31.2400159], [121.490731, 31.239637699999999], [121.4908317, 31.239207499999999], [121.4908089, 31.239171899999999], [121.4908607, 31.2389762], [121.490996, 31.238721000000002], [121.49123229999999, 31.238807399999999], [121.49135459999999, 31.238583899999998], [121.4910306, 31.238428200000001], [121.4910837, 31.238356599999999], [121.49136129999999, 31.2384798], [121.4914117, 31.238391], [121.4913311, 31.238357000000001], [121.491573, 31.2379377], [121.4916197, 31.237957399999999], [121.4917044, 31.237993199999998], [121.4918488, 31.237729399999999], [121.4917609, 31.237803599999999], [121.4916276, 31.2377234], [121.4915542, 31.2376793], [121.49260630000001, 31.236554999999999], [121.4928452, 31.2367341], [121.4932877, 31.236360300000001], [121.4933479, 31.236251299999999], [121.4934737, 31.236185500000001], [121.4938444, 31.235863200000001], [121.4943322, 31.235448000000002], [121.4943865, 31.235490599999999], [121.4944485, 31.2355448], [121.4945912, 31.235434900000001], [121.4946594, 31.235377100000001], [121.49457940000001, 31.235307500000001], [121.4945299, 31.2353439], [121.4944449, 31.2352721], [121.4945218, 31.235209099999999], [121.49473570000001, 31.235400200000001], [121.4949086, 31.235254300000001], [121.49589450000001, 31.234440500000002], [121.4957182, 31.2342865], [121.49546960000001, 31.2344945], [121.4953708, 31.234403700000001], [121.495949, 31.233947100000002], [121.4960375, 31.234030600000001], [121.49578630000001, 31.234234300000001], [121.4959604, 31.234387099999999], [121.496414, 31.2340193], [121.4971022, 31.233439199999999], [121.4970735, 31.2334143], [121.4970521, 31.233395900000001], [121.49710949999999, 31.2333435], [121.4970809, 31.233317199999998], [121.49716239999999, 31.233249300000001], [121.497489, 31.232985100000001], [121.4977172, 31.232802499999998], [121.4977581, 31.2327695], [121.4978115, 31.232812800000001], [121.4978528, 31.2327789], [121.49826880000001, 31.2324363], [121.4986019, 31.232179500000001], [121.4986304, 31.232200899999999], [121.4986644, 31.2321724], [121.49876310000001, 31.232089899999998], [121.4987927, 31.232065899999998], [121.4988032, 31.232057300000001], [121.4989935, 31.2318924], [121.49901060000001, 31.231878500000001], [121.49902899999999, 31.231863499999999], [121.4990588, 31.2318383], [121.4990955, 31.231808399999998], [121.49924179999999, 31.231687600000001], [121.49908309999999, 31.231550299999999], [121.49965880000001, 31.2310455], [121.4997675, 31.2311288], [121.4998508, 31.231049200000001], [121.50033740000001, 31.230584799999999], [121.5002341, 31.230505699999998], [121.5002945, 31.230442400000001], [121.5005926, 31.230129999999999], [121.50109, 31.2296266], [121.5018032, 31.228867699999999], [121.5021618, 31.228480699999999], [121.5026998, 31.227781400000001], [121.5030331, 31.227366799999999], [121.5035737, 31.2266011], [121.50396000000001, 31.226059899999999], [121.50417849999999, 31.226142899999999], [121.5041962, 31.226122499999999], [121.5042239, 31.2260806], [121.5043165, 31.225933399999999], [121.50440589999999, 31.2259624], [121.50465440000001, 31.225557299999998], [121.50500817639734, 31.224922498999732]]] } }, { "attributes": { "FID": 3, "osm_id": 511382730, "waterway": " ", "name": " ", "water": " ", "addrstreet": " ", "addrhousen": " ", "buildingma": " ", "natural": "water", "roofmateri": " ", "accessroof": " ", "building": " " }, "geometry": { "rings": [[[121.4803331594225, 31.259559606154212], [121.48053146395581, 31.259559606154212], [121.48062109999999, 31.259377300000001], [121.4806916, 31.259263300000001], [121.4809357, 31.258926200000001], [121.48102280000001, 31.258850599999999], [121.48129779999999, 31.258656800000001], [121.4814305, 31.258586900000001], [121.48161829999999, 31.258498599999999], [121.4817618, 31.258478], [121.4818624, 31.258482600000001], [121.4819401, 31.258526100000001], [121.4819925, 31.258576600000001], [121.4822379, 31.258749699999999], [121.48231699999999, 31.2588173], [121.48265499999999, 31.259097000000001], [121.48268710000001, 31.259125699999998], [121.4827327, 31.259141799999998], [121.482769, 31.2591544], [121.4828306, 31.259164699999999], [121.48290369999999, 31.259166400000002], [121.4829641, 31.2591544], [121.483013, 31.259136600000001], [121.483064, 31.259119399999999], [121.4831123, 31.259091900000001], [121.4831532, 31.2590529], [121.48316989999999, 31.259024199999999], [121.48327860000001, 31.258911300000001], [121.4833429, 31.258839099999999], [121.4833644, 31.2588185], [121.4833792, 31.258774899999999], [121.48337239999999, 31.258730199999999], [121.4832732, 31.258410300000001], [121.48327190000001, 31.258354199999999], [121.48336980000001, 31.257708699999998], [121.4833805, 31.257635400000002], [121.4833939, 31.257566600000001], [121.4834261, 31.257500100000001], [121.4835092, 31.257440500000001], [121.48364340000001, 31.257364800000001], [121.483807, 31.2572616], [121.48387940000001, 31.257183699999999], [121.4840296, 31.2570002], [121.48415970000001, 31.2568661], [121.4843018, 31.256732], [121.48444670000001, 31.2566609], [121.48468939999999, 31.256593200000001], [121.48512119999999, 31.256463700000001], [121.486626, 31.256037200000002], [121.48728850000001, 31.255817100000002], [121.48735550000001, 31.255778100000001], [121.48746010000001, 31.255736800000001], [121.48753790000001, 31.255679499999999], [121.4875808, 31.255622200000001], [121.4876103, 31.2555947], [121.4877149, 31.255195700000002], [121.4877243, 31.255051300000002], [121.4877176, 31.2548724], [121.4876854, 31.254670600000001], [121.48762910000001, 31.2543565], [121.4875031, 31.2540114], [121.4874722, 31.253966699999999], [121.4874506, 31.253881400000001], [121.48735689999999, 31.253511499999998], [121.48732870000001, 31.253345299999999], [121.4873314, 31.253062100000001], [121.48734880000001, 31.2529188], [121.48741320000001, 31.252814499999999], [121.4875419, 31.252690699999999], [121.487731, 31.252550800000002], [121.4878987, 31.252445300000002], [121.4880167, 31.252355900000001], [121.4882393, 31.2521059], [121.4883627, 31.2519156], [121.4884539, 31.2517058], [121.4885773, 31.251419200000001], [121.4887087, 31.251086699999998], [121.48892189999999, 31.2505639], [121.4890829, 31.2502864], [121.4894611, 31.249963099999999], [121.4900257, 31.249593900000001], [121.490196, 31.249487299999998], [121.49030329999999, 31.249393300000001], [121.4903985, 31.2493096], [121.4904682, 31.249246500000002], [121.4905728, 31.249096300000001], [121.49066139999999, 31.248922100000001], [121.49073780000001, 31.248660600000001], [121.49086920000001, 31.248092], [121.4909497, 31.247731900000002], [121.4910543, 31.247532400000001], [121.49113319999999, 31.247422], [121.4909426, 31.247359400000001], [121.490943, 31.2473983], [121.4909323, 31.2474384], [121.49091749999999, 31.247474], [121.4908987, 31.247510699999999], [121.49083570000001, 31.247635599999999], [121.4907955, 31.247760599999999], [121.4907432, 31.247964700000001], [121.4907673, 31.247972699999998], [121.49075120000001, 31.248039200000001], [121.4906694, 31.2483304], [121.4906479, 31.248323599999999], [121.49058359999999, 31.248556300000001], [121.4905152, 31.248786800000001], [121.4904749, 31.248896800000001], [121.4904334, 31.248981700000002], [121.49040119999999, 31.249048200000001], [121.4903422, 31.249136499999999], [121.49027510000001, 31.249224699999999], [121.4901879, 31.249301599999999], [121.4900914, 31.249373800000001], [121.48993040000001, 31.249469000000001], [121.48981240000001, 31.249543500000001], [121.4896126, 31.2496616], [121.4894919, 31.249737199999998], [121.4892545, 31.2498714], [121.4889434, 31.250148800000002], [121.48881059999999, 31.250444600000002], [121.4886269, 31.250844799999999], [121.48837880000001, 31.251420299999999], [121.48822989999999, 31.251753999999998], [121.48812, 31.251942], [121.4880569, 31.2520326], [121.48785169999999, 31.252274499999999], [121.4877793, 31.252337499999999], [121.48767340000001, 31.252408599999999], [121.4874186, 31.252600099999999], [121.4873327, 31.252666600000001], [121.4872845, 31.252721600000001], [121.4872348, 31.2527893], [121.4871959, 31.252864899999999], [121.48716779999999, 31.2529681], [121.4871638, 31.253082800000001], [121.48715439999999, 31.2533487], [121.48718650000001, 31.253506999999999], [121.48723080000001, 31.253618199999998], [121.4872845, 31.253748900000001], [121.4873716, 31.2539862], [121.4874239, 31.254137499999999], [121.4874722, 31.254332399999999], [121.48750440000001, 31.254519299999998], [121.4875258, 31.254687799999999], [121.4875218, 31.2549125], [121.4875071, 31.255185399999998], [121.4874119, 31.255567200000002], [121.4873274, 31.255619899999999], [121.4872429, 31.255656599999998], [121.4870377, 31.255740299999999], [121.4868419, 31.255807900000001], [121.48630679999999, 31.255970699999999], [121.4857382, 31.256131199999999], [121.4852607, 31.256282599999999], [121.4845553, 31.2564797], [121.48433, 31.2565439], [121.4842147, 31.2566104], [121.4841235, 31.256682699999999], [121.48402419999999, 31.256779000000002], [121.48386600000001, 31.2569567], [121.4837064, 31.2571309], [121.48361920000001, 31.257219200000002], [121.4834985, 31.257293700000002], [121.48335640000001, 31.257379700000001], [121.4832866, 31.257399199999998], [121.48316060000001, 31.258236100000001], [121.4831485, 31.258393099999999], [121.48316459999999, 31.258475700000002], [121.4831954, 31.2585731], [121.48324239999999, 31.258716400000001], [121.4832464, 31.258730199999999], [121.4831954, 31.258777200000001], [121.4829889, 31.258987000000001], [121.4829232, 31.259020199999998], [121.4828534, 31.259021400000002], [121.4828052, 31.2590076], [121.4824887, 31.258745099999999], [121.482439, 31.258701500000001], [121.48232369999999, 31.258610999999998], [121.4821427, 31.258450499999999], [121.4820555, 31.258380500000001], [121.4819844, 31.258340400000002], [121.4818664, 31.2583117], [121.4817537, 31.2582968], [121.4816572, 31.258309499999999], [121.4815284, 31.258369099999999], [121.4812361, 31.2585376], [121.4809746, 31.258676300000001], [121.4807962, 31.258810499999999], [121.480709, 31.258914699999998], [121.48065, 31.259031700000001], [121.4805923, 31.2591486], [121.4805266, 31.259262100000001], [121.4803331594225, 31.259559606154212]]] } }] };


/***/ }),

/***/ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts ***!
  \**************************************************************************/
/*! exports provided: InitCesiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCesiumComponent", function() { return InitCesiumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _func_baseMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../func/baseMap */ "./src/app/pages/welcome/func/baseMap.ts");
/*
 * @Author: your name
 * @Date: 2021-10-12 17:09:01
 * @LastEditTime: 2021-10-13 18:04:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ngcesium\src\app\pages\welcome\pages\init-cesium\init-cesium.component.ts
 */



class InitCesiumComponent {
    constructor() {
        this.mapLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.initCesium();
    }
    initCesium() {
        const controlConf = {
            geocoder: false,
            homeButton: false,
            sceneModePicker: false,
            baseLayerPicker: false,
            navigationHelpButton: false,
            animation: false,
            CreditsDisplay: false,
            timeline: false,
            fullscreenButton: false,
            vrButton: false,
            infoBox: false,
            selectionIndicator: false,
            shouldAnimate: false,
        };
        this.viewer = new Cesium.Viewer('appCesium', controlConf);
        // fps
        this.viewer.scene.debugShowFramesPerSecond = true;
        // logo
        this.viewer.cesiumWidget.creditContainer.style.display = "none";
        // 相机是否允许进入地下
        this.viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
        // 光照
        this.viewer.scene.globe.enableLighting = false;
        // 阴影
        this.viewer.shadows = false;
        Object(_func_baseMap__WEBPACK_IMPORTED_MODULE_1__["default"])(this.viewer);
        this.mapLoaded.emit(this.viewer);
        // this.setImgBg()
        // this.addLayer();
        // setTimeout(() => {
        //    this.flyToSH();
        //    this.viewer.scene.globe.enableLighting = false;
        //    this.viewer.scene.globe.depthTestAgainstTerrain = true;
        //    this.viewer.scene.globe.showGroundAtmosphere = false;
        //    var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.16), Cesium.Math.toRadians(31.11), 0);
        //    var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1);
        //    this.addRedMoveLine(this.viewer, CartographicCenter, 11500, scanColor, 4000);
        // }, 2000);
    }
    flyToSH() {
        this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(121.16, 31.11, 375000.0),
        });
    }
    /*
      添加扫描线 depth关闭   lon:-74.01296152309055 lat:40.70524201566827 height:129.14366696393927
      viewer
      cartographicCenter 扫描中心
      maxRadius 最大半径 米
      scanColor 扫描颜色
      duration 持续时间 毫秒
    */
    addRedMoveLine(viewer, cartographicCenter, maxRadius, scanColor, duration) {
        var ScanSegmentShader = "uniform sampler2D colorTexture;\n" +
            "uniform sampler2D depthTexture;\n" +
            "varying vec2 v_textureCoordinates;\n" +
            "uniform vec4 u_scanCenterEC;\n" +
            "uniform vec3 u_scanPlaneNormalEC;\n" +
            "uniform float u_radius;\n" +
            "uniform vec4 u_scanColor;\n" +
            "vec4 toEye(in vec2 uv, in float depth)\n" +
            " {\n" +
            " vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n" +
            " vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n" +
            " posInCamera =posInCamera / posInCamera.w;\n" +
            " return posInCamera;\n" +
            " }\n" +
            "vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n" +
            "{\n" +
            "vec3 v01 = point -planeOrigin;\n" +
            "float d = dot(planeNormal, v01) ;\n" +
            "return (point - planeNormal * d);\n" +
            "}\n" +
            "float getDepth(in vec4 depth)\n" +
            "{\n" +
            "float z_window = czm_unpackDepth(depth);\n" +
            "z_window = czm_reverseLogDepth(z_window);\n" +
            "float n_range = czm_depthRange.near;\n" +
            "float f_range = czm_depthRange.far;\n" +
            "return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n" +
            "}\n" +
            "void main()\n" +
            "{\n" +
            "gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n" +
            "float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n" +
            "vec4 viewPos = toEye(v_textureCoordinates, depth);\n" +
            "vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n" +
            "float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n" +
            "if(dis < u_radius)\n" +
            "{\n" +
            "float f = 1.0 -abs(u_radius - dis) / u_radius;\n" +
            "f = pow(f, 4.0);\n" +
            "gl_FragColor = mix(gl_FragColor, u_scanColor, f);\n" +
            "}\n" +
            "}\n";
        var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter);
        var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1);
        var _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500);
        var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1);
        var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1);
        var _time = (new Date()).getTime();
        var _scratchCartesian4Center = new Cesium.Cartesian4();
        var _scratchCartesian4Center1 = new Cesium.Cartesian4();
        var _scratchCartesian3Normal = new Cesium.Cartesian3();
        var ScanPostStage = new Cesium.PostProcessStage({
            fragmentShader: ScanSegmentShader,
            uniforms: {
                u_scanCenterEC: function () {
                    return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                },
                u_scanPlaneNormalEC: function () {
                    var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                    var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1);
                    _scratchCartesian3Normal.x = temp1.x - temp.x;
                    _scratchCartesian3Normal.y = temp1.y - temp.y;
                    _scratchCartesian3Normal.z = temp1.z - temp.z;
                    Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal);
                    return _scratchCartesian3Normal;
                },
                u_radius: function () {
                    return maxRadius * (((new Date()).getTime() - _time) % duration) / duration;
                },
                u_scanColor: scanColor
            }
        });
        viewer.scene.postProcessStages.add(ScanPostStage);
    }
    // 添加立方体
    addLFT() {
        var redBox = this.viewer.entities.add({
            id: 'entityid',
            name: 'Red box with black outline',
            position: Cesium.Cartesian3.fromDegrees(121.0, 31.0, 0.0),
            box: {
                // 尺寸
                dimensions: new Cesium.Cartesian3(300000.0, 300000.0, 200000.0),
                // 材质
                material: new Cesium.ImageMaterialProperty({
                    color: Cesium.Color.BLUE,
                    repeat: new Cesium.Cartesian2(1, 1)
                }),
                outline: true,
                outlineColor: Cesium.Color.BLACK
            },
            description: '描述信息',
            label: {
                text: 'Citizens Bank Park',
                font: '14pt monospace',
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, 1)
            }
        });
        this.viewer.zoomTo(this.viewer.entities);
        setTimeout(() => {
            // var entity = this.viewer.entities.getById('entityid');
            // this.viewer.entities.remove(entity) 
        }, 7000);
    }
    // 设置材质
    setImgBg() {
        var imgMaterial = new Cesium.ImageMaterialProperty({
            image: '/assets/IMG/aa.jpg',
            color: Cesium.Color.BLUE,
            repeat: new Cesium.Cartesian2(1, 1)
        });
        var entity = this.viewer.entities.add({
            id: 'ceshi1',
            name: 'haha',
            type: '23333',
            position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
            ellipse: {
                semiMinorAxis: 250000.0,
                semiMajorAxis: 400000.0,
                // material : Cesium.Color.BLUE.withAlpha(0.5)//可设置不同的MaterialProperty
                material: imgMaterial
            }
        });
        // this.viewer.zoomTo(this.viewer.entities);
    }
    addLayer() {
        // 加载底图
        var image_Source = new Cesium.UrlTemplateImageryProvider({
            //url: 'http://mt0.google.cn/vt/lyrs=t,r&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
            //url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            //tilingScheme : new Cesium.GeographicTilingScheme(),
            credit: ''
        });
        // 加载arcgis wms
        var provider = new Cesium.ArcGisMapServerImageryProvider({
            // url : 'https://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer',
            url: 'http://tilemap.smart-sdc.com/arcgis/rest/services/YC_DSFHQ_Wastewater_Area_GCJ02/MapServer',
            layers: '0',
            proxy: new Cesium.DefaultProxy('/proxy/')
        });
        this.viewer.imageryLayers.addImageryProvider(provider);
        // 加载geoserver wms
        var geoserverUrl = 'http://localhost:8080/geoserver/WebGIS';
        var wms = new Cesium.WebMapServiceImageryProvider({
            url: geoserverUrl + '/wms',
            layers: 'WebGIS:testLayer',
            parameters: {
                service: 'WMS',
                format: 'image/png',
                transparent: true,
            }
        });
        // this.viewer.imageryLayers.addImageryProvider(wms);
    }
}
InitCesiumComponent.ɵfac = function InitCesiumComponent_Factory(t) { return new (t || InitCesiumComponent)(); };
InitCesiumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitCesiumComponent, selectors: [["app-init-cesium"]], outputs: { mapLoaded: "mapLoaded" }, decls: 1, vars: 0, consts: [["id", "appCesium"]], template: function InitCesiumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#appCesium[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS9wYWdlcy9pbml0LWNlc2l1bS9pbml0LWNlc2l1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWxjb21lL3BhZ2VzL2luaXQtY2VzaXVtL2luaXQtY2VzaXVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwQ2VzaXVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitCesiumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-init-cesium',
                templateUrl: './init-cesium.component.html',
                styleUrls: ['./init-cesium.component.css']
            }]
    }], function () { return []; }, { mapLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/model-material/model-material.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/welcome/pages/model-material/model-material.component.ts ***!
  \********************************************************************************/
/*! exports provided: ModelMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelMaterialComponent", function() { return ModelMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");






class ModelMaterialComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
    }
    addModel() {
        var modelMatrix1 = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(102.73, 25.04, 16));
        var model = this.viewer.scene.primitives.add(Cesium.Model.fromGltf({
            url: 'assets/models/gltf/model1.gltf',
            // url:'assets/models/gltf/board_t0_s2_3.gltf',
            modelMatrix: modelMatrix1,
            scale: 10.0,
            minimumPixelSize: 256,
            maximumScreenSpaceError: 16 // default value
        }));
        this.viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(102.73, 25.04, 2631.082799425431)
        });
        return;
        const position = Cesium.Cartesian3.fromDegrees(121.62898254394531, 31.02804946899414, 1000);
        // const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position)
        const _h = Cesium.Math.toRadians(150.0);
        const _p = Cesium.Math.toRadians(0.0);
        const _r = Cesium.Math.toRadians(0.0);
        const hpr = new Cesium.HeadingPitchRoll(_h, _p, _r);
        const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(position, hpr);
        this.model = this.viewer.scene.primitives.add(Cesium.Model.fromGltf({
            // url: 'assets/models/gltf/cdd.gltf',
            // url:'assets/models/gltf/board_t0_s2_3.gltf',
            url: 'assets/models/gltf/model.gltf',
            modelMatrix,
            minimumPixelSize: 256,
            maximumScale: 20000,
            incrementallyLoadTextures: true
        }));
        this.model.readyPromise.then((model) => {
            // let pos = {
            //   h: 1.6893926057801423,
            //   p: -0.12650622795107025,
            //   r: 6.282761840558771,
            //   x: -2845549.171487844,
            //   y: 4678327.718380809,
            //   z: 3274117.9875054574
            // }
            // initCameraView(this.viewer,pos)
            // return
            var camera = this.viewer.camera;
            var controller = this.viewer.scene.screenSpaceCameraController;
            var r = 2.0 * Math.max(model.boundingSphere.radius, camera.frustum.near);
            controller.minimumZoomDistance = r * 0.5;
            var center = Cesium.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center, new Cesium.Cartesian3());
            var heading = Cesium.Math.toRadians(230.0);
            var pitch = Cesium.Math.toRadians(-20.0);
            camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, r * 5.0));
        });
    }
    updateModelMaterial() {
        Cesium.when(this.model.readyPromise).then((model) => {
            let materialName1 = 'board_t0_s2_5_j';
            this.changeModelMaterial(model, materialName1);
            let materialName = 'FONT_BOTTOM_256_128';
            this.changeModelMaterial1(model, materialName);
        });
    }
    changeModelMaterial(model, materialName) {
        const materia = model.getMaterial(materialName);
        //红 Cesium.Cartesian3.UNIT_X
        //绿 Cesium.Cartesian3.UNIT_Y
        //黄 new Cesium.Cartesian3(1.0, 1.0, 0.0)
        materia.setValue('emissiveFactor', Cesium.Cartesian3.UNIT_Y);
    }
    changeModelMaterial1(model, materialName) {
        let cavas = this.createCavas();
        let texture = model.getMaterial(materialName).getValue('baseColorTexture');
        console.log(texture);
        texture._hasMipmap = true;
        console.log(texture);
        setTimeout(() => {
            texture.copyFrom(cavas);
            texture.generateMipmap();
        }, 1000);
    }
    createCavas() {
        const cavas = document.createElement('canvas');
        cavas.width = 256;
        cavas.height = 128;
        const ctx = cavas.getContext('2d');
        ctx.fillStyle = "#33ccff";
        ctx.fillRect(0, 0, cavas.width, cavas.height);
        ctx.strokeStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#FFFAFA';
        ctx.fillText('Zard', 150, 80, 50);
        return cavas;
    }
    lo() {
        let s = 'LaneControlLight_1af223af_de80_46dd_8668_86fd9df5985a4';
        Cesium.when(this.model.readyPromise).then(function (model) {
            Cesium.Resource.fetchImage({
                url: 'assets/IMG/deng_r.jpg'
            }).then(function (image) {
                console.log(model._rendererResources.textures);
                let texture = model._rendererResources.textures[0];
                texture.copyFrom(image);
                texture.generateMipmap();
            }).otherwise(function (error) {
                console.log('错误：' + error);
            });
        });
        console.log(this.model);
        return;
        this.model.readyPromise.then((model) => {
            // const materialName = 'LaneControlLight_1af223af_de80_46dd_8668_86fd9df5985a1';
            const materialName = 'LaneControlLight_1af223af_de80_46dd_8668_86fd9df5985a4';
            const getMateria = this.model.getMaterial(materialName);
            const textures = this.model._rendererResources.textures;
            const getID = getMateria._uniformMap.values.u_baseColorTexture.value.id;
            let resMateria = null;
            // 在纹理图片数组中通过id找到目标纹理图片
            for (const key in textures) {
                if (Object.hasOwnProperty.call(textures, key)) {
                    const element = textures[key];
                    if (getID === element.id) {
                        resMateria = element;
                    }
                }
            }
            console.log(resMateria);
            Cesium.when(this.model.readyPromise).then(function () {
                // 默认替换第一张
                let texture = resMateria;
                Cesium.Resource.fetchImage({
                    url: 'assets/IMG/deng_r.jpg'
                }).then(function (image) {
                    texture.copyFrom(image);
                    texture.generateMipmap();
                }).otherwise(function (error) {
                    console.log('错误：' + error);
                });
            });
        });
    }
}
ModelMaterialComponent.ɵfac = function ModelMaterialComponent_Factory(t) { return new (t || ModelMaterialComponent)(); };
ModelMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelMaterialComponent, selectors: [["app-model-material"]], decls: 7, vars: 0, consts: [[2, "margin", "10px"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function ModelMaterialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelMaterialComponent_Template_button_click_2_listener() { return ctx.addModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u6DFB\u52A0model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelMaterialComponent_Template_button_click_4_listener() { return ctx.updateModelMaterial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "lo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-init-cesium", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function ModelMaterialComponent_Template_app_init_cesium_mapLoaded_6_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_4__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvbW9kZWwtbWF0ZXJpYWwvbW9kZWwtbWF0ZXJpYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-model-material',
                templateUrl: './model-material.component.html',
                styleUrls: ['./model-material.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/tiles3d/tiles3d.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/welcome/pages/tiles3d/tiles3d.component.ts ***!
  \******************************************************************/
/*! exports provided: Tiles3dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tiles3dComponent", function() { return Tiles3dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _func_numberCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../func/numberCity */ "./src/app/pages/welcome/func/numberCity.ts");
/* harmony import */ var _func_texiao_GroundScanLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../func/texiao/GroundScanLine */ "./src/app/pages/welcome/func/texiao/GroundScanLine.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");








class Tiles3dComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
        // this.add3dTiles();
        this.nameOverlay = document.createElement("div");
        this.viewer.container.appendChild(this.nameOverlay);
        this.nameOverlay.className = "backdrop";
        this.nameOverlay.style.display = "none";
        this.nameOverlay.style.position = "absolute";
        this.nameOverlay.style.bottom = "0";
        this.nameOverlay.style.left = "0";
        this.nameOverlay.style["pointer-events"] = "none";
        this.nameOverlay.style.padding = "4px";
        this.nameOverlay.style.color = "red";
        this.nameOverlay.style.backgroundColor = "black";
    }
    add3dTiles() {
        var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.8252503), Cesium.Math.toRadians(30.9215641), 1000);
        var scanColor = new Cesium.Color(1.0, 1.0, 0.0, 1);
        Object(_func_texiao_GroundScanLine__WEBPACK_IMPORTED_MODULE_2__["default"])(this.viewer, CartographicCenter, 11500, scanColor, 10000);
        var longitude = 121.8252503;
        var latitude = 30.9215641;
        var height = -50;
        var rotation = 0; //旋转度
        var url = "assets/models/3dtiles/buildings/tileset.json";
        // var url = "assets/models/3dtiles/zhoubian0924/Building02/tileset.json";
        var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(longitude, latitude, height));
        Cesium.Matrix4.multiplyByMatrix3(modelMatrix, Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rotation)), modelMatrix);
        this.tileset = new Cesium.Cesium3DTileset({
            url,
            show: true,
            // modelMatrix: modelMatrix, //模型矩阵
            maximumScreenSpaceError: 16,
            maximumNumberOfLoadedTiles: 100000,
            luminanceAtZenith: 1,
            imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),
            // lightColor: new Cesium.Cartesian3(1, 2, 0),//着色模型时的灯光颜色。当undefined现场的灯光颜色来代替。
            showOutline: true,
            // ellipsoid: new Cesium.Ellipsoid(new Cesium.Ellipsoid.WGS84), // 椭球体
            debugFreezeFrame: false,
            debugColorizeTiles: false,
            debugWireframe: false,
            debugShowUrl: false,
            backFaceCulling: true,
            preloadWhenHidden: false,
            preloadFlightDestinations: true,
            cullWithChildrenBounds: true,
            cullRequestsWhileMoving: true,
            cullRequestsWhileMovingMultiplier: 60.0,
        });
        this.tileset.readyPromise.then((tileset) => {
            this.viewer.scene.primitives.add(tileset);
            //获取3Dtlies的bounds范围
            var boundingSphere = tileset.boundingSphere;
            console.log(boundingSphere);
            //获取3Dtlies的范围中心点的弧度
            var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
            console.log(cartographic);
            this.zoomTo3dTiles(tileset);
        }).otherwise(function (error) {
            console.log(error);
        });
        this.tileset.allTilesLoaded.addEventListener(() => {
            console.log('tileset loaded');
        });
    }
    setColorByAttr() {
        // this.tileset.style = new Cesium.Cesium3DTileStyle({
        //   color: {
        //       conditions: [
        //           ['${id} >= 300', 'rgba(45, 0, 75, 0.5)'],
        //           ['${id} >= 200', 'rgb(102, 71, 151)'],
        //           ['${id} >= 100', 'rgb(170, 162, 204)'],
        //           ['${id} >= 50', 'rgb(224, 226, 238)'],
        //           ['${id} >= 25', 'rgb(252, 230, 200)'],
        //           ['${id} >= 10', 'rgb(248, 176, 87)'],
        //           ['${id} >= 5', 'rgb(198, 106, 11)'],
        //           ['true', 'rgb(127, 59, 8)']
        //       ]
        //   }
        // });
        this.tileset.style = new Cesium.Cesium3DTileStyle({
            color: "(regExp('3').test(String(${id}))) ? color('cyan', 0.9) : color('purple', 0.5)"
        });
        // this.tileset.style = new Cesium.Cesium3DTileStyle({
        //   show : '${height} > 200'
        // });
        // this.tileset.style = new Cesium.Cesium3DTileStyle({
        //  color: "rgba(255, 255, 255, 0.5)",
        //   show : true
        // });
    }
    selectFeatrue() {
        // 边缘检测
        var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
        silhouetteBlue.enabled = true;
        silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
        silhouetteBlue.uniforms.length = 0.01;
        silhouetteBlue.selected = [];
        this.viewer.scene.postProcessStages.add(Cesium.PostProcessStageLibrary.createSilhouetteStage([
            silhouetteBlue
        ]));
        // Cesium.ScreenSpaceEventType.LEFT_CLICK //鼠标左击事件
        // Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK //鼠标左键双击事件
        // Cesium.ScreenSpaceEventType.LEFT_DOWN //左键鼠标按下事件
        // Cesium.ScreenSpaceEventType.LEFT_UP //左键鼠标抬起事件
        // Cesium.ScreenSpaceEventType.MIDDLE_CLICK //中键单机
        // Cesium.ScreenSpaceEventType.MIDDLE_DOWN //中键按下
        // Cesium.ScreenSpaceEventType.MIDDLE_UP //中键抬起
        // Cesium.ScreenSpaceEventType.MOUSE_MOVE //鼠标移动
        // Cesium.ScreenSpaceEventType.PINCH_END //表示两指事件在触摸面上的结束。
        // Cesium.ScreenSpaceEventType.PINCH_MOVE //两指移动
        // Cesium.ScreenSpaceEventType.PINCH_START //表示在触摸面上发生两指事件的开始。
        // Cesium.ScreenSpaceEventType.RIGHT_CLICK //鼠标右击事件
        // Cesium.ScreenSpaceEventType.RIGHT_DOWN  //鼠标右键按下
        // Cesium.ScreenSpaceEventType.RIGHT_UP    //鼠标右键抬起
        // Cesium.ScreenSpaceEventType.WHEEL //鼠标滚轮事件
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction((movement) => {
            silhouetteBlue.selected = [];
            const picked = this.viewer.scene.pick(movement.endPosition);
            if (!Cesium.defined(picked)) {
                this.nameOverlay.style.display = "none";
                return;
            }
            this.changeOverlay(movement, picked);
            silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
            silhouetteBlue.selected = [picked];
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.setInputAction((movement) => {
            silhouetteBlue.selected = [];
            const picked = this.viewer.scene.pick(movement.position);
            if (!Cesium.defined(picked)) {
                return;
            }
            console.log(picked);
            console.log(picked.getPropertyNames());
            silhouetteBlue.uniforms.color = Cesium.Color.RED;
            silhouetteBlue.selected = [picked];
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    removeEvent() {
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    changeOverlay(movement, picked) {
        this.nameOverlay.style.display = "block";
        this.nameOverlay.style.bottom = this.viewer.canvas.clientHeight - movement.endPosition.y + "px";
        this.nameOverlay.style.left = movement.endPosition.x + 300 + "px";
        // var name = picked.getProperty("id");
        var name = picked.pickId.key;
        this.nameOverlay.textContent = name.toString();
    }
    zoomTo3dTiles(tileset) {
        // this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0, -0.5, 0));
        this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -0.2, tileset.boundingSphere.radius * 1.0));
        // this.viewer.camera.viewBoundingSphere(tileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));
    }
    updateSym() {
        this.tileset.style = undefined;
        Object(_func_numberCity__WEBPACK_IMPORTED_MODULE_1__["numberCity"])(this.viewer, this.tileset);
    }
    updateHeight() {
        const cartographic = Cesium.Cartographic.fromCartesian(this.tileset.boundingSphere.center);
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 500);
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
        this.tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    }
}
Tiles3dComponent.ɵfac = function Tiles3dComponent_Factory(t) { return new (t || Tiles3dComponent)(); };
Tiles3dComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Tiles3dComponent, selectors: [["app-tiles3d"]], decls: 15, vars: 0, consts: [[2, "margin", "10px"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function Tiles3dComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tiles3dComponent_Template_button_click_2_listener() { return ctx.add3dTiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u6DFB\u52A03dTiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tiles3dComponent_Template_button_click_4_listener() { return ctx.setColorByAttr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u8BBE\u7F6E\u989C\u8272");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tiles3dComponent_Template_button_click_6_listener() { return ctx.updateSym(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u6DFB\u52A0\u7279\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tiles3dComponent_Template_button_click_8_listener() { return ctx.updateHeight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u8BBE\u7F6E\u9AD8\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tiles3dComponent_Template_button_click_10_listener() { return ctx.selectFeatrue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u6DFB\u52A0\u9F20\u6807\u6355\u6349");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Tiles3dComponent_Template_button_click_12_listener() { return ctx.removeEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5173\u95ED\u9F20\u6807\u6355\u6349");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-init-cesium", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function Tiles3dComponent_Template_app_init_cesium_mapLoaded_14_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_6__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvdGlsZXMzZC90aWxlczNkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Tiles3dComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tiles3d',
                templateUrl: './tiles3d.component.html',
                styleUrls: ['./tiles3d.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/pages/track/flyPath.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/pages/track/flyPath.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Date: 2021-06-17 14:33:57
 * @LastEditors: qinbo
 * @LastEditTime: 2021-09-28 10:14:26
 * @FilePath: \lgdd0926\public\local\config\flyPath\flyPath.js
 * @Description: 描述：
 */
let height = 1;
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        pathPositionArr: [{ 'lng': 121.73584007025329, 'lat': 30.88262548999319, 'alt': height }, { 'lng': 121.73601422419887, 'lat': 30.88261995533968, 'alt': height }, { 'lng': 121.73618837814445, 'lat': 30.882614420686178, 'alt': height }, { 'lng': 121.73636253209003, 'lat': 30.88260888603267, 'alt': height }, { 'lng': 121.7365366860356, 'lat': 30.882603351379164, 'alt': height }, { 'lng': 121.73671083998119, 'lat': 30.88259781672566, 'alt': height }, { 'lng': 121.73688499392676, 'lat': 30.882592282072153, 'alt': height }, { 'lng': 121.73706284854244, 'lat': 30.88258964460865, 'alt': height }, { 'lng': 121.73724070315811, 'lat': 30.882587007145148, 'alt': height }, { 'lng': 121.73741855777378, 'lat': 30.882584369681645, 'alt': height }, { 'lng': 121.73759641238945, 'lat': 30.882581732218142, 'alt': height }, { 'lng': 121.73777426700512, 'lat': 30.88257909475464, 'alt': height }, { 'lng': 121.7379521216208, 'lat': 30.882576457291137, 'alt': height }, { 'lng': 121.73812997623646, 'lat': 30.882573819827634, 'alt': height }, { 'lng': 121.73830783085214, 'lat': 30.88257118236413, 'alt': height }, { 'lng': 121.73848568546781, 'lat': 30.88256854490063, 'alt': height }, { 'lng': 121.73866354008348, 'lat': 30.882565907437126, 'alt': height }, { 'lng': 121.73884139469915, 'lat': 30.882563269973623, 'alt': height }, { 'lng': 121.73901924931482, 'lat': 30.88256063251012, 'alt': height }, { 'lng': 121.7391971039305, 'lat': 30.882557995046618, 'alt': height }, { 'lng': 121.73937495854616, 'lat': 30.882555357583115, 'alt': height }, { 'lng': 121.73955281316184, 'lat': 30.882552720119612, 'alt': height }, { 'lng': 121.73973066777751, 'lat': 30.88255008265611, 'alt': height }, { 'lng': 121.73990272013242, 'lat': 30.88255131813655, 'alt': height }, { 'lng': 121.74007477248735, 'lat': 30.882552553616993, 'alt': height }, { 'lng': 121.74024682484226, 'lat': 30.882553789097432, 'alt': height }, { 'lng': 121.74041887719719, 'lat': 30.882555024577876, 'alt': height }, { 'lng': 121.7405909295521, 'lat': 30.882556260058315, 'alt': height }, { 'lng': 121.74076298190703, 'lat': 30.88255749553876, 'alt': height }, { 'lng': 121.74093503426194, 'lat': 30.8825587310192, 'alt': height }, { 'lng': 121.74110708661686, 'lat': 30.88255996649964, 'alt': height }, { 'lng': 121.74127913897178, 'lat': 30.88256120198008, 'alt': height }, { 'lng': 121.74145284128389, 'lat': 30.88256362351983, 'alt': height }, { 'lng': 121.74162654359601, 'lat': 30.88256604505958, 'alt': height }, { 'lng': 121.74180024590812, 'lat': 30.882568466599327, 'alt': height }, { 'lng': 121.74197394822025, 'lat': 30.882570888139078, 'alt': height }, { 'lng': 121.74214765053236, 'lat': 30.882573309678826, 'alt': height }, { 'lng': 121.74232135284448, 'lat': 30.882575731218576, 'alt': height }, { 'lng': 121.7424950551566, 'lat': 30.882578152758324, 'alt': height }, { 'lng': 121.74266875746872, 'lat': 30.882580574298075, 'alt': height }, { 'lng': 121.74284245978083, 'lat': 30.882582995837822, 'alt': height }, { 'lng': 121.74301616209294, 'lat': 30.88258541737757, 'alt': height }, { 'lng': 121.74318986440507, 'lat': 30.88258783891732, 'alt': height }, { 'lng': 121.74336356671718, 'lat': 30.882590260457068, 'alt': height }, { 'lng': 121.7435372690293, 'lat': 30.88259268199682, 'alt': height }, { 'lng': 121.74371097134141, 'lat': 30.882595103536566, 'alt': height }, { 'lng': 121.74388467365354, 'lat': 30.882597525076317, 'alt': height }, { 'lng': 121.74405837596565, 'lat': 30.882599946616065, 'alt': height }, { 'lng': 121.74423207827778, 'lat': 30.882602368155815, 'alt': height }, { 'lng': 121.74440578058989, 'lat': 30.882604789695563, 'alt': height }, { 'lng': 121.74458108383665, 'lat': 30.882607238038656, 'alt': height }, { 'lng': 121.7447563870834, 'lat': 30.88260968638175, 'alt': height }, { 'lng': 121.74493169033016, 'lat': 30.882612134724837, 'alt': height }, { 'lng': 121.74510699357691, 'lat': 30.88261458306793, 'alt': height }, { 'lng': 121.74528229682367, 'lat': 30.882617031411023, 'alt': height }, { 'lng': 121.74545760007042, 'lat': 30.882619479754116, 'alt': height }, { 'lng': 121.74563290331719, 'lat': 30.882621928097205, 'alt': height }, { 'lng': 121.74580820656394, 'lat': 30.882624376440297, 'alt': height }, { 'lng': 121.7459835098107, 'lat': 30.88262682478339, 'alt': height }, { 'lng': 121.74615881305745, 'lat': 30.882629273126483, 'alt': height }, { 'lng': 121.74633411630421, 'lat': 30.882631721469576, 'alt': height }, { 'lng': 121.74650941955096, 'lat': 30.882634169812665, 'alt': height }, { 'lng': 121.74668472279772, 'lat': 30.882636618155757, 'alt': height }, { 'lng': 121.74686002604447, 'lat': 30.88263906649885, 'alt': height }, { 'lng': 121.74703532929124, 'lat': 30.882641514841943, 'alt': height }, { 'lng': 121.74721063253799, 'lat': 30.882643963185036, 'alt': height }, { 'lng': 121.74738593578475, 'lat': 30.882646411528125, 'alt': height }, { 'lng': 121.7475612390315, 'lat': 30.882648859871217, 'alt': height }, { 'lng': 121.74773654227826, 'lat': 30.88265130821431, 'alt': height }, { 'lng': 121.74791184552501, 'lat': 30.882653756557403, 'alt': height }, { 'lng': 121.74808714877177, 'lat': 30.882656204900492, 'alt': height }, { 'lng': 121.74826245201852, 'lat': 30.882658653243585, 'alt': height }, { 'lng': 121.74843775526529, 'lat': 30.882661101586677, 'alt': height }, { 'lng': 121.74861149468552, 'lat': 30.882663613412387, 'alt': height }, { 'lng': 121.74878523410575, 'lat': 30.882666125238096, 'alt': height }, { 'lng': 121.74895897352599, 'lat': 30.88266863706381, 'alt': height }, { 'lng': 121.74913271294622, 'lat': 30.882671148889518, 'alt': height }, { 'lng': 121.74930645236645, 'lat': 30.882673660715227, 'alt': height }, { 'lng': 121.74948019178669, 'lat': 30.882676172540936, 'alt': height }, { 'lng': 121.74965393120692, 'lat': 30.882678684366645, 'alt': height }, { 'lng': 121.74982767062716, 'lat': 30.882681196192358, 'alt': height }, { 'lng': 121.75000141004739, 'lat': 30.882683708018067, 'alt': height }, { 'lng': 121.75017514946762, 'lat': 30.882686219843777, 'alt': height }, { 'lng': 121.75034888888786, 'lat': 30.882688731669486, 'alt': height }, { 'lng': 121.75052262830809, 'lat': 30.882691243495195, 'alt': height }, { 'lng': 121.75069636772832, 'lat': 30.882693755320908, 'alt': height }, { 'lng': 121.75087010714856, 'lat': 30.882696267146617, 'alt': height }, { 'lng': 121.75104384656879, 'lat': 30.882698778972326, 'alt': height }, { 'lng': 121.75121256559565, 'lat': 30.882701105307167, 'alt': height }, { 'lng': 121.75138128462251, 'lat': 30.882703431642003, 'alt': height }, { 'lng': 121.75155000364937, 'lat': 30.882705757976844, 'alt': height }, { 'lng': 121.75171872267622, 'lat': 30.88270808431168, 'alt': height }, { 'lng': 121.75188744170308, 'lat': 30.88271041064652, 'alt': height }, { 'lng': 121.75205616072994, 'lat': 30.882712736981357, 'alt': height }, { 'lng': 121.7522248797568, 'lat': 30.882715063316198, 'alt': height }, { 'lng': 121.75239363546811, 'lat': 30.88271741139016, 'alt': height }, { 'lng': 121.75256239117941, 'lat': 30.882719759464123, 'alt': height }, { 'lng': 121.75273114689072, 'lat': 30.882722107538086, 'alt': height }, { 'lng': 121.75289990260202, 'lat': 30.88272445561205, 'alt': height }, { 'lng': 121.75306865831334, 'lat': 30.882726803686012, 'alt': height }, { 'lng': 121.75323741402465, 'lat': 30.882729151759975, 'alt': height }, { 'lng': 121.75340616973595, 'lat': 30.882731499833938, 'alt': height }, { 'lng': 121.75357492544727, 'lat': 30.8827338479079, 'alt': height }, { 'lng': 121.75374368115857, 'lat': 30.882736195981863, 'alt': height }, { 'lng': 121.75391243686988, 'lat': 30.882738544055826, 'alt': height }, { 'lng': 121.75407120761925, 'lat': 30.882740771586978, 'alt': height }, { 'lng': 121.7542299783686, 'lat': 30.88274299911813, 'alt': height }, { 'lng': 121.75438874911796, 'lat': 30.88274522664928, 'alt': height }, { 'lng': 121.75454751986732, 'lat': 30.88274745418043, 'alt': height }, { 'lng': 121.75470629061668, 'lat': 30.88274968171158, 'alt': height }, { 'lng': 121.75486506136603, 'lat': 30.88275190924273, 'alt': height }, { 'lng': 121.7550238321154, 'lat': 30.882754136773883, 'alt': height }, { 'lng': 121.75518747942048, 'lat': 30.88275630087496, 'alt': height }, { 'lng': 121.75535112672557, 'lat': 30.882758464976035, 'alt': height }, { 'lng': 121.75551477403066, 'lat': 30.88276062907711, 'alt': height }, { 'lng': 121.75567842133574, 'lat': 30.882762793178188, 'alt': height }, { 'lng': 121.75584206864083, 'lat': 30.882764957279264, 'alt': height }, { 'lng': 121.75600571594592, 'lat': 30.88276712138034, 'alt': height }, { 'lng': 121.756169363251, 'lat': 30.882769285481416, 'alt': height }, { 'lng': 121.75633301055609, 'lat': 30.882771449582492, 'alt': height }, { 'lng': 121.75650587687888, 'lat': 30.882772107118853, 'alt': height }, { 'lng': 121.75667874320168, 'lat': 30.882772764655215, 'alt': height }, { 'lng': 121.75685160952446, 'lat': 30.882773422191576, 'alt': height }, { 'lng': 121.7570214485411, 'lat': 30.882770877793444, 'alt': height }, { 'lng': 121.75719128755773, 'lat': 30.882768333395312, 'alt': height }, { 'lng': 121.75736112657435, 'lat': 30.882765788997183, 'alt': height }, { 'lng': 121.75753096559099, 'lat': 30.88276324459905, 'alt': height }, { 'lng': 121.75770080460762, 'lat': 30.88276070020092, 'alt': height }, { 'lng': 121.75787064362426, 'lat': 30.882758155802787, 'alt': height }, { 'lng': 121.7580404826409, 'lat': 30.882755611404654, 'alt': height }, { 'lng': 121.75821032165751, 'lat': 30.882753067006526, 'alt': height }, { 'lng': 121.75838016067415, 'lat': 30.882750522608394, 'alt': height }, { 'lng': 121.75854999969079, 'lat': 30.88274797821026, 'alt': height }, { 'lng': 121.75870472882654, 'lat': 30.882741652800235, 'alt': height }, { 'lng': 121.7588594579623, 'lat': 30.882735327390208, 'alt': height }, { 'lng': 121.75901418709807, 'lat': 30.88272900198018, 'alt': height }, { 'lng': 121.75916891623383, 'lat': 30.882722676570154, 'alt': height }, { 'lng': 121.75932364536959, 'lat': 30.882716351160127, 'alt': height }, { 'lng': 121.75948988813755, 'lat': 30.88270679942771, 'alt': height }, { 'lng': 121.75965613090551, 'lat': 30.88269724769529, 'alt': height }, { 'lng': 121.75982237367347, 'lat': 30.882687695962872, 'alt': height }, { 'lng': 121.75998861644143, 'lat': 30.882678144230454, 'alt': height }, { 'lng': 121.76011831595054, 'lat': 30.88267069200549, 'alt': height }, { 'lng': 121.7602201165904, 'lat': 30.88266316987466, 'alt': height }, { 'lng': 121.76039591782617, 'lat': 30.882649727460432, 'alt': height }, { 'lng': 121.76057171906193, 'lat': 30.882636285046203, 'alt': height }, { 'lng': 121.7607475202977, 'lat': 30.882622842631974, 'alt': height }, { 'lng': 121.76092332153345, 'lat': 30.882609400217746, 'alt': height }, { 'lng': 121.76109912276922, 'lat': 30.882595957803517, 'alt': height }, { 'lng': 121.76127740047761, 'lat': 30.88258107791104, 'alt': height }, { 'lng': 121.761455678186, 'lat': 30.882566198018566, 'alt': height }, { 'lng': 121.76163395589438, 'lat': 30.88255131812609, 'alt': height }, { 'lng': 121.76181223360277, 'lat': 30.882536438233615, 'alt': height }, { 'lng': 121.76197353177022, 'lat': 30.882522683614912, 'alt': height }, { 'lng': 121.76213482993766, 'lat': 30.88250892899621, 'alt': height }, { 'lng': 121.76229612810512, 'lat': 30.882495174377503, 'alt': height }, { 'lng': 121.76245742627256, 'lat': 30.8824814197588, 'alt': height }, { 'lng': 121.76261872444002, 'lat': 30.882467665140098, 'alt': height }, { 'lng': 121.76276826032013, 'lat': 30.882455074349753, 'alt': height }, { 'lng': 121.76291779620024, 'lat': 30.88244248355941, 'alt': height }, { 'lng': 121.76306733208034, 'lat': 30.88242989276906, 'alt': height }, { 'lng': 121.76321686796045, 'lat': 30.882417301978716, 'alt': height }, { 'lng': 121.76336640384056, 'lat': 30.88240471118837, 'alt': height }, { 'lng': 121.76346374652445, 'lat': 30.882396437235116, 'alt': height }, { 'lng': 121.76356108920834, 'lat': 30.88238816328186, 'alt': height }, { 'lng': 121.76373191709096, 'lat': 30.88237392508131, 'alt': height }, { 'lng': 121.76390274497358, 'lat': 30.88235968688076, 'alt': height }, { 'lng': 121.7640735728562, 'lat': 30.882345448680212, 'alt': height }, { 'lng': 121.76424440073883, 'lat': 30.882331210479663, 'alt': height }, { 'lng': 121.76441522862144, 'lat': 30.882316972279114, 'alt': height }, { 'lng': 121.76458605650407, 'lat': 30.882302734078564, 'alt': height }, { 'lng': 121.76476520168448, 'lat': 30.882295910309224, 'alt': height }, { 'lng': 121.76494434686488, 'lat': 30.88228908653988, 'alt': height }, { 'lng': 121.76512349204529, 'lat': 30.88228226277054, 'alt': height }, { 'lng': 121.76530263722569, 'lat': 30.8822754390012, 'alt': height }, { 'lng': 121.7654817824061, 'lat': 30.88226861523186, 'alt': height }, { 'lng': 121.7656609275865, 'lat': 30.88226179146252, 'alt': height }, { 'lng': 121.7658400727669, 'lat': 30.88225496769318, 'alt': height }, { 'lng': 121.7660192179473, 'lat': 30.88224814392384, 'alt': height }, { 'lng': 121.76619836312771, 'lat': 30.8822413201545, 'alt': height }, { 'lng': 121.76637750830811, 'lat': 30.882234496385156, 'alt': height }, { 'lng': 121.76655665348852, 'lat': 30.882227672615816, 'alt': height }, { 'lng': 121.76673579866893, 'lat': 30.882220848846476, 'alt': height }, { 'lng': 121.76691494384933, 'lat': 30.882214025077136, 'alt': height }, { 'lng': 121.76709408902974, 'lat': 30.882207201307793, 'alt': height }, { 'lng': 121.76727323421014, 'lat': 30.882200377538453, 'alt': height }, { 'lng': 121.76745237939055, 'lat': 30.882193553769113, 'alt': height }, { 'lng': 121.76763152457094, 'lat': 30.882186729999773, 'alt': height }, { 'lng': 121.76781066975136, 'lat': 30.88217990623043, 'alt': height }, { 'lng': 121.76798981493175, 'lat': 30.88217308246109, 'alt': height }, { 'lng': 121.76816896011216, 'lat': 30.88216625869175, 'alt': height }, { 'lng': 121.76834810529256, 'lat': 30.88215943492241, 'alt': height }, { 'lng': 121.76852725047297, 'lat': 30.882152611153067, 'alt': height }, { 'lng': 121.76870639565337, 'lat': 30.882145787383728, 'alt': height }, { 'lng': 121.76888554083378, 'lat': 30.882138963614388, 'alt': height }, { 'lng': 121.76906468601419, 'lat': 30.882132139845044, 'alt': height }, { 'lng': 121.76924383119459, 'lat': 30.882125316075705, 'alt': height }, { 'lng': 121.769422976375, 'lat': 30.882118492306365, 'alt': height }, { 'lng': 121.7696021215554, 'lat': 30.882111668537025, 'alt': height }, { 'lng': 121.7697812667358, 'lat': 30.88210484476768, 'alt': height }, { 'lng': 121.7699604119162, 'lat': 30.882098020998342, 'alt': height }, { 'lng': 121.77013955709661, 'lat': 30.882091197229002, 'alt': height }, { 'lng': 121.77031870227701, 'lat': 30.882084373459662, 'alt': height }, { 'lng': 121.77049784745742, 'lat': 30.88207754969032, 'alt': height }, { 'lng': 121.77067699263782, 'lat': 30.88207072592098, 'alt': height }, { 'lng': 121.77085613781823, 'lat': 30.88206390215164, 'alt': height }, { 'lng': 121.77103528299864, 'lat': 30.8820570783823, 'alt': height }, { 'lng': 121.77121442817904, 'lat': 30.882050254612956, 'alt': height }, { 'lng': 121.77139357335945, 'lat': 30.882043430843616, 'alt': height }, { 'lng': 121.77157271853984, 'lat': 30.882036607074276, 'alt': height }, { 'lng': 121.77175186372025, 'lat': 30.882029783304937, 'alt': height }, { 'lng': 121.77193100890065, 'lat': 30.882022959535593, 'alt': height }, { 'lng': 121.77211015408106, 'lat': 30.882016135766253, 'alt': height }, { 'lng': 121.77228929926146, 'lat': 30.882009311996914, 'alt': height }, { 'lng': 121.77246844444187, 'lat': 30.88200248822757, 'alt': height }, { 'lng': 121.77264758962227, 'lat': 30.88199566445823, 'alt': height }, { 'lng': 121.77282673480268, 'lat': 30.88198884068889, 'alt': height }, { 'lng': 121.77300587998307, 'lat': 30.88198201691955, 'alt': height }, { 'lng': 121.77318502516349, 'lat': 30.881975193150208, 'alt': height }, { 'lng': 121.7733641703439, 'lat': 30.881968369380868, 'alt': height }, { 'lng': 121.7735433155243, 'lat': 30.881961545611528, 'alt': height }, { 'lng': 121.7737224607047, 'lat': 30.881954721842188, 'alt': height }, { 'lng': 121.7739016058851, 'lat': 30.881947898072845, 'alt': height }, { 'lng': 121.77408075106551, 'lat': 30.881941074303505, 'alt': height }, { 'lng': 121.77425989624591, 'lat': 30.881934250534165, 'alt': height }, { 'lng': 121.77443904142632, 'lat': 30.881927426764825, 'alt': height }, { 'lng': 121.77461818660672, 'lat': 30.881920602995482, 'alt': height }, { 'lng': 121.77479733178713, 'lat': 30.881913779226142, 'alt': height }, { 'lng': 121.77497647696752, 'lat': 30.881906955456802, 'alt': height }, { 'lng': 121.77515562214793, 'lat': 30.881900131687463, 'alt': height }, { 'lng': 121.77533476732835, 'lat': 30.88189330791812, 'alt': height }, { 'lng': 121.77551391250874, 'lat': 30.88188648414878, 'alt': height }, { 'lng': 121.77569305768915, 'lat': 30.88187966037944, 'alt': height }, { 'lng': 121.77587220286955, 'lat': 30.8818728366101, 'alt': height }, { 'lng': 121.77605134804996, 'lat': 30.881866012840756, 'alt': height }, { 'lng': 121.77623049323036, 'lat': 30.881859189071417, 'alt': height }, { 'lng': 121.77640963841077, 'lat': 30.881852365302077, 'alt': height }, { 'lng': 121.77658878359117, 'lat': 30.881845541532734, 'alt': height }, { 'lng': 121.77676792877158, 'lat': 30.881838717763394, 'alt': height }, { 'lng': 121.77694707395197, 'lat': 30.881831893994054, 'alt': height }, { 'lng': 121.77712621913238, 'lat': 30.881825070224714, 'alt': height }, { 'lng': 121.77730536431278, 'lat': 30.88181824645537, 'alt': height }, { 'lng': 121.77748450949319, 'lat': 30.88181142268603, 'alt': height }, { 'lng': 121.7776636546736, 'lat': 30.88180459891669, 'alt': height }, { 'lng': 121.777842799854, 'lat': 30.88179777514735, 'alt': height }, { 'lng': 121.77802194503441, 'lat': 30.881790951378008, 'alt': height }, { 'lng': 121.77820109021481, 'lat': 30.881784127608668, 'alt': height }, { 'lng': 121.77838023539522, 'lat': 30.88177730383933, 'alt': height }, { 'lng': 121.77855938057562, 'lat': 30.88177048006999, 'alt': height }, { 'lng': 121.77873852575603, 'lat': 30.881763656300645, 'alt': height }, { 'lng': 121.77891767093642, 'lat': 30.881756832531305, 'alt': height }, { 'lng': 121.77909681611683, 'lat': 30.881750008761966, 'alt': height }, { 'lng': 121.77927596129723, 'lat': 30.881743184992626, 'alt': height }, { 'lng': 121.77945510647764, 'lat': 30.881736361223282, 'alt': height }, { 'lng': 121.77963425165805, 'lat': 30.881729537453943, 'alt': height }, { 'lng': 121.77981339683845, 'lat': 30.881722713684603, 'alt': height }, { 'lng': 121.77999254201886, 'lat': 30.88171588991526, 'alt': height }, { 'lng': 121.78017168719926, 'lat': 30.88170906614592, 'alt': height }, { 'lng': 121.78035083237967, 'lat': 30.88170224237658, 'alt': height }, { 'lng': 121.78052997756006, 'lat': 30.88169541860724, 'alt': height }, { 'lng': 121.78070912274048, 'lat': 30.881688594837897, 'alt': height }, { 'lng': 121.78088826792087, 'lat': 30.881681771068557, 'alt': height }, { 'lng': 121.78106741310128, 'lat': 30.881674947299217, 'alt': height }, { 'lng': 121.78124655828168, 'lat': 30.881668123529877, 'alt': height }, { 'lng': 121.78142570346209, 'lat': 30.881661299760534, 'alt': height }, { 'lng': 121.78160484864249, 'lat': 30.881654475991194, 'alt': height }, { 'lng': 121.7817839938229, 'lat': 30.881647652221854, 'alt': height }, { 'lng': 121.78196313900331, 'lat': 30.881640828452515, 'alt': height }, { 'lng': 121.7821422841837, 'lat': 30.88163400468317, 'alt': height }, { 'lng': 121.78232142936412, 'lat': 30.88162718091383, 'alt': height }, { 'lng': 121.78250057454451, 'lat': 30.88162035714449, 'alt': height }, { 'lng': 121.78267971972492, 'lat': 30.881613533375152, 'alt': height }, { 'lng': 121.78285886490532, 'lat': 30.88160670960581, 'alt': height }, { 'lng': 121.78303801008573, 'lat': 30.88159988583647, 'alt': height }, { 'lng': 121.78321715526613, 'lat': 30.88159306206713, 'alt': height }, { 'lng': 121.78339630044654, 'lat': 30.88158623829779, 'alt': height }, { 'lng': 121.78357544562694, 'lat': 30.881579414528446, 'alt': height }, { 'lng': 121.78375459080735, 'lat': 30.881572590759106, 'alt': height }, { 'lng': 121.78386287082719, 'lat': 30.881567481006982, 'alt': height }, { 'lng': 121.78403023949754, 'lat': 30.881559066054706, 'alt': height }, { 'lng': 121.78419760816787, 'lat': 30.88155065110243, 'alt': height }, { 'lng': 121.78436497683822, 'lat': 30.881542236150153, 'alt': height }, { 'lng': 121.78453234550857, 'lat': 30.881533821197877, 'alt': height }, { 'lng': 121.7846997141789, 'lat': 30.8815254062456, 'alt': height }, { 'lng': 121.78486708284925, 'lat': 30.881516991293324, 'alt': height }, { 'lng': 121.78503445151959, 'lat': 30.881508576341048, 'alt': height }, { 'lng': 121.78520182018993, 'lat': 30.88150016138877, 'alt': height }, { 'lng': 121.78536918886027, 'lat': 30.881491746436495, 'alt': height }, { 'lng': 121.78553655753062, 'lat': 30.88148333148422, 'alt': height }, { 'lng': 121.78570392620095, 'lat': 30.881474916531943, 'alt': height }, { 'lng': 121.7858712948713, 'lat': 30.881466501579666, 'alt': height }, { 'lng': 121.78604958549055, 'lat': 30.881458522762216, 'alt': height }, { 'lng': 121.78622787610979, 'lat': 30.881450543944766, 'alt': height }, { 'lng': 121.78640616672904, 'lat': 30.881442565127315, 'alt': height }, { 'lng': 121.78658445734828, 'lat': 30.881434586309865, 'alt': height }, { 'lng': 121.78676274796753, 'lat': 30.881426607492415, 'alt': height }, { 'lng': 121.78694103858678, 'lat': 30.881418628674965, 'alt': height }, { 'lng': 121.78711932920602, 'lat': 30.881410649857514, 'alt': height }, { 'lng': 121.78729761982527, 'lat': 30.881402671040064, 'alt': height }, { 'lng': 121.78746976286698, 'lat': 30.88139678211983, 'alt': height }, { 'lng': 121.78764190590869, 'lat': 30.881390893199594, 'alt': height }, { 'lng': 121.7878140489504, 'lat': 30.88138500427936, 'alt': height }, { 'lng': 121.7879861919921, 'lat': 30.881379115359124, 'alt': height }, { 'lng': 121.78815833503381, 'lat': 30.88137322643889, 'alt': height }, { 'lng': 121.78833047807552, 'lat': 30.881367337518654, 'alt': height }, { 'lng': 121.78850262111723, 'lat': 30.88136144859842, 'alt': height }, { 'lng': 121.78867476415894, 'lat': 30.881355559678184, 'alt': height }, { 'lng': 121.78883930308122, 'lat': 30.881351155859008, 'alt': height }, { 'lng': 121.78900384200351, 'lat': 30.88134675203983, 'alt': height }, { 'lng': 121.78916838092579, 'lat': 30.881342348220652, 'alt': height }, { 'lng': 121.78933291984808, 'lat': 30.881337944401476, 'alt': height }, { 'lng': 121.78949745877036, 'lat': 30.881333540582297, 'alt': height }, { 'lng': 121.78966199769265, 'lat': 30.88132913676312, 'alt': height }, { 'lng': 121.78982653661492, 'lat': 30.88132473294394, 'alt': height }, { 'lng': 121.78999107553722, 'lat': 30.881320329124765, 'alt': height }, { 'lng': 121.7901556144595, 'lat': 30.88131592530559, 'alt': height }, { 'lng': 121.79032015338178, 'lat': 30.88131152148641, 'alt': height }, { 'lng': 121.79048469230406, 'lat': 30.881307117667234, 'alt': height }, { 'lng': 121.79065304220114, 'lat': 30.881303296178714, 'alt': height }, { 'lng': 121.79082139209822, 'lat': 30.881299474690195, 'alt': height }, { 'lng': 121.7909897419953, 'lat': 30.881295653201676, 'alt': height }, { 'lng': 121.79115809189238, 'lat': 30.881291831713156, 'alt': height }, { 'lng': 121.79132644178947, 'lat': 30.881288010224637, 'alt': height }, { 'lng': 121.79149479168655, 'lat': 30.881284188736117, 'alt': height }, { 'lng': 121.7916696125208, 'lat': 30.88128183715502, 'alt': height }, { 'lng': 121.79184443335505, 'lat': 30.881279485573923, 'alt': height }, { 'lng': 121.79201925418931, 'lat': 30.881277133992825, 'alt': height }, { 'lng': 121.79219407502357, 'lat': 30.881274782411726, 'alt': height }, { 'lng': 121.79236889585782, 'lat': 30.88127243083063, 'alt': height }, { 'lng': 121.79254371669208, 'lat': 30.881270079249532, 'alt': height }, { 'lng': 121.79269911515554, 'lat': 30.881268684011527, 'alt': height }, { 'lng': 121.792854513619, 'lat': 30.881267288773522, 'alt': height }, { 'lng': 121.79300991208247, 'lat': 30.881265893535517, 'alt': height }, { 'lng': 121.79316531054594, 'lat': 30.881264498297508, 'alt': height }, { 'lng': 121.79332070900941, 'lat': 30.881263103059503, 'alt': height }, { 'lng': 121.79347610747287, 'lat': 30.881261707821498, 'alt': height }, { 'lng': 121.79363150593633, 'lat': 30.881260312583493, 'alt': height }, { 'lng': 121.79380655957254, 'lat': 30.88126029320189, 'alt': height }, { 'lng': 121.79398161320876, 'lat': 30.881260273820292, 'alt': height }, { 'lng': 121.79415666684497, 'lat': 30.88126025443869, 'alt': height }, { 'lng': 121.79433172048118, 'lat': 30.881260235057088, 'alt': height }, { 'lng': 121.7945067741174, 'lat': 30.88126021567549, 'alt': height }, { 'lng': 121.7946818277536, 'lat': 30.881260196293887, 'alt': height }, { 'lng': 121.79485688138982, 'lat': 30.88126017691229, 'alt': height }, { 'lng': 121.79503193502603, 'lat': 30.881260157530686, 'alt': height }, { 'lng': 121.79520698866224, 'lat': 30.881260138149084, 'alt': height }, { 'lng': 121.79538204229846, 'lat': 30.881260118767486, 'alt': height }, { 'lng': 121.79555709593467, 'lat': 30.881260099385884, 'alt': height }, { 'lng': 121.79570877083756, 'lat': 30.88126081418102, 'alt': height }, { 'lng': 121.79586044574046, 'lat': 30.881261528976154, 'alt': height }, { 'lng': 121.79603779260282, 'lat': 30.881262363077813, 'alt': height }, { 'lng': 121.79621513946516, 'lat': 30.88126319717947, 'alt': height }, { 'lng': 121.79639248632752, 'lat': 30.88126403128113, 'alt': height }, { 'lng': 121.79656983318986, 'lat': 30.88126486538279, 'alt': height }, { 'lng': 121.79674718005222, 'lat': 30.881265699484445, 'alt': height }, { 'lng': 121.79692452691457, 'lat': 30.881266533586103, 'alt': height }, { 'lng': 121.79710187377692, 'lat': 30.881267367687762, 'alt': height }, { 'lng': 121.79727922063927, 'lat': 30.88126820178942, 'alt': height }, { 'lng': 121.79745656750163, 'lat': 30.88126903589108, 'alt': height }, { 'lng': 121.7976097218882, 'lat': 30.88126965752349, 'alt': height }, { 'lng': 121.79776287627476, 'lat': 30.8812702791559, 'alt': height }, { 'lng': 121.79791603066133, 'lat': 30.88127090078831, 'alt': height }, { 'lng': 121.7980691850479, 'lat': 30.881271522420718, 'alt': height }, { 'lng': 121.79822233943446, 'lat': 30.881272144053128, 'alt': height }, { 'lng': 121.79837549382103, 'lat': 30.881272765685537, 'alt': height }, { 'lng': 121.79855078173782, 'lat': 30.881273600328644, 'alt': height }, { 'lng': 121.79872606965462, 'lat': 30.88127443497175, 'alt': height }, { 'lng': 121.79890135757141, 'lat': 30.881275269614854, 'alt': height }, { 'lng': 121.79907664548821, 'lat': 30.88127610425796, 'alt': height }, { 'lng': 121.799251933405, 'lat': 30.881276938901067, 'alt': height }, { 'lng': 121.79943112906356, 'lat': 30.88127751012116, 'alt': height }, { 'lng': 121.79961032472212, 'lat': 30.88127808134125, 'alt': height }, { 'lng': 121.79978952038068, 'lat': 30.881278652561342, 'alt': height }, { 'lng': 121.79996871603925, 'lat': 30.881279223781434, 'alt': height }, { 'lng': 121.8001479116978, 'lat': 30.881279795001525, 'alt': height }, { 'lng': 121.80032710735637, 'lat': 30.881280366221617, 'alt': height }, { 'lng': 121.80050630301493, 'lat': 30.88128093744171, 'alt': height }, { 'lng': 121.80068549867349, 'lat': 30.8812815086618, 'alt': height }, { 'lng': 121.80085599111786, 'lat': 30.88128255710983, 'alt': height }, { 'lng': 121.80102648356224, 'lat': 30.88128360555786, 'alt': height }, { 'lng': 121.80119697600661, 'lat': 30.88128465400589, 'alt': height }, { 'lng': 121.80136746845099, 'lat': 30.88128570245392, 'alt': height }, { 'lng': 121.80153796089536, 'lat': 30.88128675090195, 'alt': height }, { 'lng': 121.80170845333973, 'lat': 30.88128779934998, 'alt': height }, { 'lng': 121.80187894578411, 'lat': 30.88128884779801, 'alt': height }, { 'lng': 121.80204943822848, 'lat': 30.881289896246038, 'alt': height }, { 'lng': 121.80221993067286, 'lat': 30.88129094469407, 'alt': height }, { 'lng': 121.80239042311723, 'lat': 30.8812919931421, 'alt': height }, { 'lng': 121.80256971442782, 'lat': 30.881292762007725, 'alt': height }, { 'lng': 121.8027490057384, 'lat': 30.88129353087335, 'alt': height }, { 'lng': 121.802928297049, 'lat': 30.881294299738972, 'alt': height }, { 'lng': 121.80310758835958, 'lat': 30.881295068604597, 'alt': height }, { 'lng': 121.80328687967017, 'lat': 30.881295837470223, 'alt': height }, { 'lng': 121.80346617098076, 'lat': 30.881296606335848, 'alt': height }, { 'lng': 121.80364546229134, 'lat': 30.88129737520147, 'alt': height }, { 'lng': 121.80382475360193, 'lat': 30.881298144067095, 'alt': height }, { 'lng': 121.80400404491252, 'lat': 30.88129891293272, 'alt': height }, { 'lng': 121.80416403461626, 'lat': 30.881299567569165, 'alt': height }, { 'lng': 121.80432402432, 'lat': 30.881300222205613, 'alt': height }, { 'lng': 121.80448401402374, 'lat': 30.881300876842058, 'alt': height }, { 'lng': 121.80464400372749, 'lat': 30.881301531478503, 'alt': height }, { 'lng': 121.80480399343124, 'lat': 30.881302186114947, 'alt': height }, { 'lng': 121.80496398313497, 'lat': 30.881302840751395, 'alt': height }, { 'lng': 121.80512397283871, 'lat': 30.88130349538784, 'alt': height }, { 'lng': 121.80530096588534, 'lat': 30.88130456807254, 'alt': height }, { 'lng': 121.80547795893195, 'lat': 30.881305640757244, 'alt': height }, { 'lng': 121.80565495197857, 'lat': 30.881306713441944, 'alt': height }, { 'lng': 121.80583194502519, 'lat': 30.881307786126644, 'alt': height }, { 'lng': 121.8060089380718, 'lat': 30.881308858811348, 'alt': height }, { 'lng': 121.80618593111842, 'lat': 30.881309931496048, 'alt': height }, { 'lng': 121.80634753462193, 'lat': 30.881310205601128, 'alt': height }, { 'lng': 121.80650913812543, 'lat': 30.881310479706208, 'alt': height }, { 'lng': 121.80667074162895, 'lat': 30.881310753811288, 'alt': height }, { 'lng': 121.80683234513245, 'lat': 30.88131102791637, 'alt': height }, { 'lng': 121.80699394863596, 'lat': 30.88131130202145, 'alt': height }, { 'lng': 121.80715555213946, 'lat': 30.88131157612653, 'alt': height }, { 'lng': 121.80731715564298, 'lat': 30.88131185023161, 'alt': height }, { 'lng': 121.80748864106403, 'lat': 30.881312664316322, 'alt': height }, { 'lng': 121.80766012648508, 'lat': 30.88131347840103, 'alt': height }, { 'lng': 121.80783161190612, 'lat': 30.88131429248574, 'alt': height }, { 'lng': 121.80800309732717, 'lat': 30.88131510657045, 'alt': height }, { 'lng': 121.80817458274822, 'lat': 30.881315920655158, 'alt': height }, { 'lng': 121.80834606816927, 'lat': 30.88131673473987, 'alt': height }, { 'lng': 121.80851755359032, 'lat': 30.88131754882458, 'alt': height }, { 'lng': 121.80868903901137, 'lat': 30.881318362909287, 'alt': height }, { 'lng': 121.80886052443242, 'lat': 30.881319176993998, 'alt': height }, { 'lng': 121.80903200985347, 'lat': 30.88131999107871, 'alt': height }, { 'lng': 121.80920349527452, 'lat': 30.881320805163416, 'alt': height }, { 'lng': 121.80937498069557, 'lat': 30.881321619248126, 'alt': height }, { 'lng': 121.80955119487196, 'lat': 30.881322401167566, 'alt': height }, { 'lng': 121.80972740904834, 'lat': 30.881323183087, 'alt': height }, { 'lng': 121.80990362322473, 'lat': 30.88132396500644, 'alt': height }, { 'lng': 121.81007983740112, 'lat': 30.881324746925877, 'alt': height }, { 'lng': 121.8102560515775, 'lat': 30.881325528845316, 'alt': height }, { 'lng': 121.81043226575389, 'lat': 30.881326310764752, 'alt': height }, { 'lng': 121.81060847993028, 'lat': 30.88132709268419, 'alt': height }, { 'lng': 121.81078469410666, 'lat': 30.881327874603627, 'alt': height }, { 'lng': 121.81096090828305, 'lat': 30.881328656523067, 'alt': height }, { 'lng': 121.81112847104653, 'lat': 30.881329479851914, 'alt': height }, { 'lng': 121.81129603381002, 'lat': 30.881330303180757, 'alt': height }, { 'lng': 121.8114635965735, 'lat': 30.881331126509604, 'alt': height }, { 'lng': 121.81163115933698, 'lat': 30.881331949838447, 'alt': height }, { 'lng': 121.81179872210048, 'lat': 30.881332773167294, 'alt': height }, { 'lng': 121.81196628486396, 'lat': 30.881333596496138, 'alt': height }, { 'lng': 121.81213384762744, 'lat': 30.881334419824984, 'alt': height }, { 'lng': 121.81230141039093, 'lat': 30.881335243153828, 'alt': height }, { 'lng': 121.81246897315441, 'lat': 30.881336066482675, 'alt': height }, { 'lng': 121.81264085370795, 'lat': 30.88133678096769, 'alt': height }, { 'lng': 121.81281273426148, 'lat': 30.881337495452705, 'alt': height }, { 'lng': 121.81298461481502, 'lat': 30.88133820993772, 'alt': height }, { 'lng': 121.81315649536856, 'lat': 30.881338924422735, 'alt': height }, { 'lng': 121.8133283759221, 'lat': 30.88133963890775, 'alt': height }, { 'lng': 121.81350025647563, 'lat': 30.881340353392766, 'alt': height }, { 'lng': 121.81367213702916, 'lat': 30.881341067877777, 'alt': height }, { 'lng': 121.8138440175827, 'lat': 30.881341782362792, 'alt': height }, { 'lng': 121.81401589813623, 'lat': 30.881342496847807, 'alt': height }, { 'lng': 121.81418777868977, 'lat': 30.881343211332823, 'alt': height }, { 'lng': 121.81435965924331, 'lat': 30.881343925817838, 'alt': height }, { 'lng': 121.81453153979685, 'lat': 30.881344640302853, 'alt': height }, { 'lng': 121.81470342035038, 'lat': 30.881345354787868, 'alt': height }, { 'lng': 121.8148774591234, 'lat': 30.881346225517742, 'alt': height }, { 'lng': 121.8150514978964, 'lat': 30.881347096247616, 'alt': height }, { 'lng': 121.81522553666942, 'lat': 30.88134796697749, 'alt': height }, { 'lng': 121.81539957544243, 'lat': 30.881348837707364, 'alt': height }, { 'lng': 121.81557361421544, 'lat': 30.881349708437238, 'alt': height }, { 'lng': 121.81574765298845, 'lat': 30.881350579167112, 'alt': height }, { 'lng': 121.81592169176146, 'lat': 30.881351449896986, 'alt': height }, { 'lng': 121.81609573053447, 'lat': 30.88135232062686, 'alt': height }, { 'lng': 121.8162697693075, 'lat': 30.881353191356737, 'alt': height }, { 'lng': 121.8164438080805, 'lat': 30.88135406208661, 'alt': height }, { 'lng': 121.81661784685352, 'lat': 30.881354932816485, 'alt': height }, { 'lng': 121.81679188562653, 'lat': 30.88135580354636, 'alt': height }, { 'lng': 121.81696592439954, 'lat': 30.881356674276233, 'alt': height }, { 'lng': 121.81713996317255, 'lat': 30.881357545006107, 'alt': height }, { 'lng': 121.81731400194556, 'lat': 30.88135841573598, 'alt': height }, { 'lng': 121.81748804071857, 'lat': 30.881359286465855, 'alt': height }, { 'lng': 121.81766207949158, 'lat': 30.88136015719573, 'alt': height }, { 'lng': 121.81783414940809, 'lat': 30.881360799659827, 'alt': height }, { 'lng': 121.81800621932459, 'lat': 30.881361442123925, 'alt': height }, { 'lng': 121.81817828924109, 'lat': 30.881362084588023, 'alt': height }, { 'lng': 121.81835035915759, 'lat': 30.88136272705212, 'alt': height }, { 'lng': 121.8185224290741, 'lat': 30.88136336951622, 'alt': height }, { 'lng': 121.8186944989906, 'lat': 30.881364011980317, 'alt': height }, { 'lng': 121.8188665689071, 'lat': 30.881364654444415, 'alt': height }, { 'lng': 121.81903863882359, 'lat': 30.88136529690851, 'alt': height }, { 'lng': 121.81921070874009, 'lat': 30.881365939372607, 'alt': height }, { 'lng': 121.81938277865659, 'lat': 30.881366581836705, 'alt': height }, { 'lng': 121.81955484857309, 'lat': 30.881367224300803, 'alt': height }, { 'lng': 121.8197269184896, 'lat': 30.8813678667649, 'alt': height }, { 'lng': 121.8198989884061, 'lat': 30.881368509229, 'alt': height }, { 'lng': 121.8200710583226, 'lat': 30.881369151693097, 'alt': height }, { 'lng': 121.8202431282391, 'lat': 30.881369794157195, 'alt': height }, { 'lng': 121.82041555390045, 'lat': 30.881370630023408, 'alt': height }, { 'lng': 121.8205879795618, 'lat': 30.88137146588962, 'alt': height }, { 'lng': 121.82076040522314, 'lat': 30.88137230175583, 'alt': height }, { 'lng': 121.82093283088449, 'lat': 30.881373137622045, 'alt': height }, { 'lng': 121.82110525654583, 'lat': 30.88137397348826, 'alt': height }, { 'lng': 121.82127768220718, 'lat': 30.881374809354472, 'alt': height }, { 'lng': 121.82145010786851, 'lat': 30.881375645220682, 'alt': height }, { 'lng': 121.82162253352986, 'lat': 30.881376481086896, 'alt': height }, { 'lng': 121.82179495919121, 'lat': 30.88137731695311, 'alt': height }, { 'lng': 121.82196738485256, 'lat': 30.881378152819323, 'alt': height }, { 'lng': 121.8221398105139, 'lat': 30.881378988685533, 'alt': height }, { 'lng': 121.82231223617525, 'lat': 30.881379824551747, 'alt': height }, { 'lng': 121.8224846618366, 'lat': 30.88138066041796, 'alt': height }, { 'lng': 121.82266400456511, 'lat': 30.881381459056858, 'alt': height }, { 'lng': 121.82284334729364, 'lat': 30.881382257695755, 'alt': height }, { 'lng': 121.82302269002216, 'lat': 30.881383056334656, 'alt': height }, { 'lng': 121.82320203275069, 'lat': 30.881383854973553, 'alt': height }, { 'lng': 121.8233813754792, 'lat': 30.88138465361245, 'alt': height }, { 'lng': 121.82356071820772, 'lat': 30.881385452251347, 'alt': height }, { 'lng': 121.82374006093625, 'lat': 30.881386250890248, 'alt': height }, { 'lng': 121.82391940366476, 'lat': 30.881387049529145, 'alt': height }, { 'lng': 121.82409874639328, 'lat': 30.881387848168043, 'alt': height }, { 'lng': 121.8242780891218, 'lat': 30.88138864680694, 'alt': height }, { 'lng': 121.82445743185032, 'lat': 30.88138944544584, 'alt': height }, { 'lng': 121.82463677457885, 'lat': 30.881390244084738, 'alt': height }, { 'lng': 121.82481611730736, 'lat': 30.881391042723635, 'alt': height }, { 'lng': 121.82499420791076, 'lat': 30.88139192030118, 'alt': height }, { 'lng': 121.82517229851418, 'lat': 30.88139279787873, 'alt': height }, { 'lng': 121.82535038911757, 'lat': 30.881393675456273, 'alt': height }, { 'lng': 121.82552847972099, 'lat': 30.88139455303382, 'alt': height }, { 'lng': 121.82570657032439, 'lat': 30.881395430611366, 'alt': height }, { 'lng': 121.82588466092778, 'lat': 30.88139630818891, 'alt': height }, { 'lng': 121.8260627515312, 'lat': 30.88139718576646, 'alt': height }, { 'lng': 121.8262408421346, 'lat': 30.881398063344005, 'alt': height }, { 'lng': 121.826418932738, 'lat': 30.88139894092155, 'alt': height }, { 'lng': 121.8265970233414, 'lat': 30.881399818499098, 'alt': height }, { 'lng': 121.8267751139448, 'lat': 30.881400696076643, 'alt': height }, { 'lng': 121.82695320454822, 'lat': 30.88140157365419, 'alt': height }, { 'lng': 121.82713129515162, 'lat': 30.881402451231736, 'alt': height }, { 'lng': 121.82730594887606, 'lat': 30.8814030404408, 'alt': height }, { 'lng': 121.82748060260052, 'lat': 30.881403629649867, 'alt': height }, { 'lng': 121.82765525632496, 'lat': 30.881404218858933, 'alt': height }, { 'lng': 121.8278299100494, 'lat': 30.881404808067998, 'alt': height }, { 'lng': 121.82800456377386, 'lat': 30.881405397277064, 'alt': height }, { 'lng': 121.8281792174983, 'lat': 30.88140598648613, 'alt': height }, { 'lng': 121.82835387122275, 'lat': 30.881406575695195, 'alt': height }, { 'lng': 121.8285285249472, 'lat': 30.88140716490426, 'alt': height }, { 'lng': 121.82870317867165, 'lat': 30.881407754113326, 'alt': height }, { 'lng': 121.82887783239609, 'lat': 30.88140834332239, 'alt': height }, { 'lng': 121.82905248612055, 'lat': 30.881408932531457, 'alt': height }, { 'lng': 121.82922713984499, 'lat': 30.881409521740522, 'alt': height }, { 'lng': 121.82939817284624, 'lat': 30.881410422800666, 'alt': height }, { 'lng': 121.82956920584748, 'lat': 30.881411323860807, 'alt': height }, { 'lng': 121.82974023884873, 'lat': 30.88141222492095, 'alt': height }, { 'lng': 121.82991127184998, 'lat': 30.881413125981094, 'alt': height }, { 'lng': 121.83008230485122, 'lat': 30.881414027041235, 'alt': height }, { 'lng': 121.83025333785247, 'lat': 30.88141492810138, 'alt': height }, { 'lng': 121.83041907275238, 'lat': 30.881415575560393, 'alt': height }, { 'lng': 121.8305848076523, 'lat': 30.881416223019407, 'alt': height }, { 'lng': 121.83075054255221, 'lat': 30.88141687047842, 'alt': height }, { 'lng': 121.83091627745212, 'lat': 30.881417517937436, 'alt': height }, { 'lng': 121.83108201235204, 'lat': 30.881418165396454, 'alt': height }, { 'lng': 121.83124774725195, 'lat': 30.88141881285547, 'alt': height }, { 'lng': 121.83141348215186, 'lat': 30.881419460314483, 'alt': height }, { 'lng': 121.83157921705178, 'lat': 30.881420107773497, 'alt': height }, { 'lng': 121.83174495195169, 'lat': 30.88142075523251, 'alt': height }, { 'lng': 121.83191872173491, 'lat': 30.88142146170295, 'alt': height }, { 'lng': 121.83209249151813, 'lat': 30.88142216817339, 'alt': height }, { 'lng': 121.83226626130133, 'lat': 30.881422874643828, 'alt': height }, { 'lng': 121.83244003108454, 'lat': 30.88142358111427, 'alt': height }, { 'lng': 121.83261380086776, 'lat': 30.881424287584707, 'alt': height }, { 'lng': 121.83277568490887, 'lat': 30.881425102481394, 'alt': height }, { 'lng': 121.83293756894997, 'lat': 30.88142591737808, 'alt': height }, { 'lng': 121.83309945299108, 'lat': 30.881426732274768, 'alt': height }, { 'lng': 121.83326133703218, 'lat': 30.881427547171455, 'alt': height }, { 'lng': 121.83342322107329, 'lat': 30.881428362068142, 'alt': height }, { 'lng': 121.8335851051144, 'lat': 30.88142917696483, 'alt': height }, { 'lng': 121.8337469891555, 'lat': 30.881429991861516, 'alt': height }, { 'lng': 121.8339088731966, 'lat': 30.881430806758203, 'alt': height }, { 'lng': 121.83408543208101, 'lat': 30.8814316118698, 'alt': height }, { 'lng': 121.83426199096542, 'lat': 30.881432416981397, 'alt': height }, { 'lng': 121.83443854984982, 'lat': 30.881433222092994, 'alt': height }, { 'lng': 121.83461510873423, 'lat': 30.88143402720459, 'alt': height }, { 'lng': 121.83479166761863, 'lat': 30.881434832316188, 'alt': height }, { 'lng': 121.83496822650304, 'lat': 30.881435637427785, 'alt': height }, { 'lng': 121.83514478538744, 'lat': 30.881436442539382, 'alt': height }, { 'lng': 121.83532134427185, 'lat': 30.88143724765098, 'alt': height }, { 'lng': 121.83548421010858, 'lat': 30.88143798578652, 'alt': height }, { 'lng': 121.8356470759453, 'lat': 30.881438723922063, 'alt': height }, { 'lng': 121.83580994178203, 'lat': 30.881439462057603, 'alt': height }, { 'lng': 121.83597280761876, 'lat': 30.881440200193147, 'alt': height }, { 'lng': 121.83613567345549, 'lat': 30.881440938328687, 'alt': height }, { 'lng': 121.83629853929222, 'lat': 30.88144167646423, 'alt': height }, { 'lng': 121.83646140512894, 'lat': 30.88144241459977, 'alt': height }, { 'lng': 121.83662427096567, 'lat': 30.881443152735315, 'alt': height }, { 'lng': 121.8367871368024, 'lat': 30.881443890870855, 'alt': height }, { 'lng': 121.83693647882399, 'lat': 30.88144441736779, 'alt': height }, { 'lng': 121.83708582084557, 'lat': 30.88144494386472, 'alt': height }, { 'lng': 121.83723516286716, 'lat': 30.881445470361655, 'alt': height }, { 'lng': 121.83738450488875, 'lat': 30.881445996858588, 'alt': height }, { 'lng': 121.83753443684182, 'lat': 30.881446611075567, 'alt': height }, { 'lng': 121.83768436879488, 'lat': 30.88144722529255, 'alt': height }, { 'lng': 121.83783430074796, 'lat': 30.88144783950953, 'alt': height }, { 'lng': 121.83798423270102, 'lat': 30.881448453726513, 'alt': height }, { 'lng': 121.8381341646541, 'lat': 30.881449067943493, 'alt': height }, { 'lng': 121.83830642395242, 'lat': 30.88144976665643, 'alt': height }, { 'lng': 121.83847868325074, 'lat': 30.88145046536937, 'alt': height }, { 'lng': 121.83865094254907, 'lat': 30.881451164082307, 'alt': height }, { 'lng': 121.83882320184739, 'lat': 30.881451862795245, 'alt': height }, { 'lng': 121.83899546114571, 'lat': 30.881452561508183, 'alt': height }, { 'lng': 121.83916772044404, 'lat': 30.88145326022112, 'alt': height }, { 'lng': 121.83933758826743, 'lat': 30.881453978330313, 'alt': height }, { 'lng': 121.83950745609081, 'lat': 30.8814546964395, 'alt': height }, { 'lng': 121.8396773239142, 'lat': 30.881455414548693, 'alt': height }, { 'lng': 121.83984719173759, 'lat': 30.88145613265788, 'alt': height }, { 'lng': 121.84001705956098, 'lat': 30.881456850767073, 'alt': height }, { 'lng': 121.84018692738437, 'lat': 30.88145756887626, 'alt': height }, { 'lng': 121.84035679520775, 'lat': 30.881458286985453, 'alt': height }, { 'lng': 121.84052666303114, 'lat': 30.88145900509464, 'alt': height }, { 'lng': 121.84069653085453, 'lat': 30.881459723203832, 'alt': height }, { 'lng': 121.84086639867792, 'lat': 30.88146044131302, 'alt': height }, { 'lng': 121.8410362665013, 'lat': 30.881461159422212, 'alt': height }, { 'lng': 121.8412061343247, 'lat': 30.8814618775314, 'alt': height }, { 'lng': 121.84137600214808, 'lat': 30.881462595640592, 'alt': height }, { 'lng': 121.84154586997147, 'lat': 30.88146331374978, 'alt': height }, { 'lng': 121.84171573779486, 'lat': 30.88146403185897, 'alt': height }, { 'lng': 121.84188560561824, 'lat': 30.88146474996816, 'alt': height }, { 'lng': 121.84205547344163, 'lat': 30.88146546807735, 'alt': height }, { 'lng': 121.84222264198345, 'lat': 30.881466253192855, 'alt': height }, { 'lng': 121.84238981052526, 'lat': 30.881467038308358, 'alt': height }, { 'lng': 121.84255697906708, 'lat': 30.88146782342386, 'alt': height }, { 'lng': 121.84272414760889, 'lat': 30.881468608539365, 'alt': height }, { 'lng': 121.84289131615071, 'lat': 30.881469393654868, 'alt': height }, { 'lng': 121.84306912167163, 'lat': 30.88147115325601, 'alt': height }, { 'lng': 121.84324692719257, 'lat': 30.881472912857152, 'alt': height }, { 'lng': 121.84342473271349, 'lat': 30.881474672458296, 'alt': height }, { 'lng': 121.84360253823442, 'lat': 30.88147643205944, 'alt': height }, { 'lng': 121.84378034375534, 'lat': 30.88147819166058, 'alt': height }, { 'lng': 121.84395814927628, 'lat': 30.881479951261724, 'alt': height }, { 'lng': 121.8441359547972, 'lat': 30.881481710862868, 'alt': height }, { 'lng': 121.84431376031813, 'lat': 30.88148347046401, 'alt': height }, { 'lng': 121.84449156583905, 'lat': 30.881485230065152, 'alt': height }, { 'lng': 121.84466937135998, 'lat': 30.881486989666296, 'alt': height }, { 'lng': 121.8448471768809, 'lat': 30.881488749267437, 'alt': height }, { 'lng': 121.84502498240184, 'lat': 30.88149050886858, 'alt': height }, { 'lng': 121.84520278792276, 'lat': 30.881492268469724, 'alt': height }, { 'lng': 121.84538059344369, 'lat': 30.881494028070865, 'alt': height }, { 'lng': 121.84555839896461, 'lat': 30.88149578767201, 'alt': height }, { 'lng': 121.84560769153961, 'lat': 30.881496992195764, 'alt': height }, { 'lng': 121.84565697655307, 'lat': 30.881498391441653, 'alt': height }, { 'lng': 121.8457062539942, 'lat': 30.881499986311667, 'alt': height }, { 'lng': 121.84575552178296, 'lat': 30.881501775885113, 'alt': height }, { 'lng': 121.84580477991994, 'lat': 30.88150376016239, 'alt': height }, { 'lng': 121.84585402735968, 'lat': 30.881505939133888, 'alt': height }, { 'lng': 121.84590326201135, 'lat': 30.881508312780966, 'alt': height }, { 'lng': 121.8459524838645, 'lat': 30.881510882005614, 'alt': height }, { 'lng': 121.84600169188468, 'lat': 30.881513645896746, 'alt': height }, { 'lng': 121.84605088399167, 'lat': 30.881516603533726, 'alt': height }, { 'lng': 121.8461017264865, 'lat': 30.881519885216562, 'alt': height }, { 'lng': 121.84615254619064, 'lat': 30.88152341108878, 'alt': height }, { 'lng': 121.84620334311501, 'lat': 30.881527180248554, 'alt': height }, { 'lng': 121.8462541151581, 'lat': 30.881531193579008, 'alt': height }, { 'lng': 121.84630485918342, 'lat': 30.881535451052287, 'alt': height }, { 'lng': 121.84635557624813, 'lat': 30.881539951776006, 'alt': height }, { 'lng': 121.84640626321561, 'lat': 30.881544695722027, 'alt': height }, { 'lng': 121.84645691798414, 'lat': 30.881549683773812, 'alt': height }, { 'lng': 121.84650754056531, 'lat': 30.881554915029596, 'alt': height }, { 'lng': 121.846558128879, 'lat': 30.881560388568744, 'alt': height }, { 'lng': 121.84660867976709, 'lat': 30.881566106167213, 'alt': height }, { 'lng': 121.84665919429744, 'lat': 30.881572066030742, 'alt': height }, { 'lng': 121.84670966933322, 'lat': 30.88157826813125, 'alt': height }, { 'lng': 121.84676010278429, 'lat': 30.881584712450092, 'alt': height }, { 'lng': 121.84681049465041, 'lat': 30.881591398987837, 'alt': height }, { 'lng': 121.84686084179577, 'lat': 30.881598327716006, 'alt': height }, { 'lng': 121.84691114423117, 'lat': 30.88160549773329, 'alt': height }, { 'lng': 121.84696139880964, 'lat': 30.881612909913315, 'alt': height }, { 'lng': 121.84700871621737, 'lat': 30.881620135368223, 'alt': height }, { 'lng': 121.84705598148844, 'lat': 30.881627611067245, 'alt': height }, { 'lng': 121.84710319251053, 'lat': 30.881635338795377, 'alt': height }, { 'lng': 121.84715034721432, 'lat': 30.881643316730276, 'alt': height }, { 'lng': 121.84720146292011, 'lat': 30.88165225978298, 'alt': height }, { 'lng': 121.8472525081886, 'lat': 30.88166149710679, 'alt': height }, { 'lng': 121.84730348092853, 'lat': 30.88167102868283, 'alt': height }, { 'lng': 121.84735437906033, 'lat': 30.881680853591035, 'alt': height }, { 'lng': 121.84740519943705, 'lat': 30.881690972704916, 'alt': height }, { 'lng': 121.847455939989, 'lat': 30.881701384203097, 'alt': height }, { 'lng': 121.84750659863698, 'lat': 30.88171208716443, 'alt': height }, { 'lng': 121.847557173268, 'lat': 30.881723083374595, 'alt': height }, { 'lng': 121.84760766182433, 'lat': 30.88173437010971, 'alt': height }, { 'lng': 121.847658062204, 'lat': 30.881745948252615, 'alt': height }, { 'lng': 121.84770837128167, 'lat': 30.881757816873915, 'alt': height }, { 'lng': 121.84775858697742, 'lat': 30.88176997505343, 'alt': height }, { 'lng': 121.84780870720056, 'lat': 30.881782422772346, 'alt': height }, { 'lng': 121.84785872987084, 'lat': 30.881795159110766, 'alt': height }, { 'lng': 121.84790865290881, 'lat': 30.881808183148223, 'alt': height }, { 'lng': 121.84795847421253, 'lat': 30.881821495767895, 'alt': height }, { 'lng': 121.84800819066743, 'lat': 30.88183509513857, 'alt': height }, { 'lng': 121.84805780123929, 'lat': 30.88184898034922, 'alt': height }, { 'lng': 121.84810730279116, 'lat': 30.881863151371988, 'alt': height }, { 'lng': 121.84815669323291, 'lat': 30.881877608188518, 'alt': height }, { 'lng': 121.8482059704952, 'lat': 30.88189234897669, 'alt': height }, { 'lng': 121.84825513144165, 'lat': 30.881907373708714, 'alt': height }, { 'lng': 121.84830417607236, 'lat': 30.88192268238464, 'alt': height }, { 'lng': 121.84835310023811, 'lat': 30.88193827226229, 'alt': height }, { 'lng': 121.84840190287184, 'lat': 30.881954145135637, 'alt': height }, { 'lng': 121.84845058191536, 'lat': 30.881970298281317, 'alt': height }, { 'lng': 121.84849913423238, 'lat': 30.881986731671248, 'alt': height }, { 'lng': 121.84854755773176, 'lat': 30.882003445286955, 'alt': height }, { 'lng': 121.8485949676109, 'lat': 30.882020102066008, 'alt': height }, { 'lng': 121.84864226702996, 'lat': 30.88203699053321, 'alt': height }, { 'lng': 121.8486894549651, 'lat': 30.88205410887548, 'alt': height }, { 'lng': 121.84873652931446, 'lat': 30.882071457976508, 'alt': height }, { 'lng': 121.84878349010012, 'lat': 30.882089036032482, 'alt': height }, { 'lng': 121.84883033417486, 'lat': 30.882106843917597, 'alt': height }, { 'lng': 121.8488770605145, 'lat': 30.88212487981906, 'alt': height }, { 'lng': 121.84892366807424, 'lat': 30.882143143727887, 'alt': height }, { 'lng': 121.84897015477384, 'lat': 30.882161634723616, 'alt': height }, { 'lng': 121.84901651957853, 'lat': 30.882180351895272, 'alt': height }, { 'lng': 121.84906276144329, 'lat': 30.882199295233704, 'alt': height }, { 'lng': 121.8491088772314, 'lat': 30.882218464711286, 'alt': height }, { 'lng': 121.84915486696445, 'lat': 30.882237858524434, 'alt': height }, { 'lng': 121.84920072855209, 'lat': 30.882257476654843, 'alt': height }, { 'lng': 121.84924646095931, 'lat': 30.882277318191257, 'alt': height }, { 'lng': 121.84929206209551, 'lat': 30.882297383115542, 'alt': height }, { 'lng': 121.84933753092582, 'lat': 30.882317670516613, 'alt': height }, { 'lng': 121.8493828653809, 'lat': 30.882338178572297, 'alt': height }, { 'lng': 121.84942806545018, 'lat': 30.882358908184813, 'alt': height }, { 'lng': 121.84947121671803, 'lat': 30.882378963891426, 'alt': height }, { 'lng': 121.84951424116582, 'lat': 30.88239922048018, 'alt': height }, { 'lng': 121.84955713773729, 'lat': 30.882419678843576, 'alt': height }, { 'lng': 121.84959990541961, 'lat': 30.882440336266882, 'alt': height }, { 'lng': 121.84964254210013, 'lat': 30.88246119453561, 'alt': height }, { 'lng': 121.84968504781148, 'lat': 30.882482250944122, 'alt': height }, { 'lng': 121.8497274194167, 'lat': 30.882503505464967, 'alt': height }, { 'lng': 121.84976965795113, 'lat': 30.882524959009288, 'alt': height }, { 'lng': 121.84981176031044, 'lat': 30.88254660884394, 'alt': height }, { 'lng': 121.84985372649476, 'lat': 30.88256845496886, 'alt': height }, { 'lng': 121.84989555545849, 'lat': 30.882590497375134, 'alt': height }, { 'lng': 121.84993724408673, 'lat': 30.8826127342316, 'alt': height }, { 'lng': 121.84998081291769, 'lat': 30.882636281997804, 'alt': height }, { 'lng': 121.85002420743979, 'lat': 30.88266006720187, 'alt': height }, { 'lng': 121.85006742451617, 'lat': 30.882684089816166, 'alt': height }, { 'lng': 121.85011046520356, 'lat': 30.882708348948086, 'alt': height }, { 'lng': 121.85015332531975, 'lat': 30.882732844560906, 'alt': height }, { 'lng': 121.85019600385158, 'lat': 30.88275757394001, 'alt': height }, { 'lng': 121.85023849976449, 'lat': 30.88278253617443, 'alt': height }, { 'lng': 121.85028081095675, 'lat': 30.88280773214774, 'alt': height }, { 'lng': 121.85032293536938, 'lat': 30.882833159136055, 'alt': height }, { 'lng': 121.85036487092236, 'lat': 30.882858816219255, 'alt': height }, { 'lng': 121.85040661762639, 'lat': 30.882884702495687, 'alt': height }, { 'lng': 121.85044817234495, 'lat': 30.882910817937557, 'alt': height }, { 'lng': 121.85048953300861, 'lat': 30.882937160722975, 'alt': height }, { 'lng': 121.85053069963897, 'lat': 30.88296372904864, 'alt': height }, { 'lng': 121.85057166909951, 'lat': 30.8829905228867, 'alt': height }, { 'lng': 121.85061244035535, 'lat': 30.883017541326467, 'alt': height }, { 'lng': 121.85065301134762, 'lat': 30.883044781643832, 'alt': height }, { 'lng': 121.85069338102016, 'lat': 30.883072244731807, 'alt': height }, { 'lng': 121.85073354730366, 'lat': 30.883099928768388, 'alt': height }, { 'lng': 121.8507735091739, 'lat': 30.883127831940783, 'alt': height }, { 'lng': 121.85081326349416, 'lat': 30.88315595422131, 'alt': height }, { 'lng': 121.85085281134252, 'lat': 30.88318429291411, 'alt': height }, { 'lng': 121.85089214852599, 'lat': 30.883212848883943, 'alt': height }, { 'lng': 121.85093127403127, 'lat': 30.883241619416594, 'alt': height }, { 'lng': 121.85097018785814, 'lat': 30.88327060451178, 'alt': height }, { 'lng': 121.85100888585725, 'lat': 30.883299801427825, 'alt': height }, { 'lng': 121.85104736907351, 'lat': 30.883329210173486, 'alt': height }, { 'lng': 121.85108563438132, 'lat': 30.88335882981994, 'alt': height }, { 'lng': 121.8511236807567, 'lat': 30.883388658553883, 'alt': height }, { 'lng': 121.85116150611907, 'lat': 30.88341869545576, 'alt': height }, { 'lng': 121.85119910944445, 'lat': 30.883448938712547, 'alt': height }, { 'lng': 121.85133468117833, 'lat': 30.883558671757424, 'alt': height }, { 'lng': 121.8514702529122, 'lat': 30.883668404802297, 'alt': height }, { 'lng': 121.85160582464607, 'lat': 30.883778137847173, 'alt': height }, { 'lng': 121.85170905821423, 'lat': 30.883866190297653, 'alt': height }, { 'lng': 121.85181229178238, 'lat': 30.883954242748132, 'alt': height }, { 'lng': 121.85191552535053, 'lat': 30.88404229519861, 'alt': height }, { 'lng': 121.85201875891869, 'lat': 30.88413034764909, 'alt': height }, { 'lng': 121.85213693072855, 'lat': 30.884231365523924, 'alt': height }, { 'lng': 121.85225510253841, 'lat': 30.884332383398753, 'alt': height }, { 'lng': 121.85237327434827, 'lat': 30.884433401273586, 'alt': height }, { 'lng': 121.85249144615814, 'lat': 30.88453441914842, 'alt': height }, { 'lng': 121.852609617968, 'lat': 30.884635437023253, 'alt': height }, { 'lng': 121.85272778977786, 'lat': 30.884736454898082, 'alt': height }, { 'lng': 121.85284596158772, 'lat': 30.884837472772915, 'alt': height }, { 'lng': 121.85297320929541, 'lat': 30.884946323493118, 'alt': height }, { 'lng': 121.8531004570031, 'lat': 30.885055174213324, 'alt': height }, { 'lng': 121.85322770471079, 'lat': 30.885164024933527, 'alt': height }, { 'lng': 121.85335495241847, 'lat': 30.885272875653733, 'alt': height }, { 'lng': 121.85348220012617, 'lat': 30.885381726373936, 'alt': height }, { 'lng': 121.85360944783386, 'lat': 30.88549057709414, 'alt': height }, { 'lng': 121.85373669554154, 'lat': 30.885599427814345, 'alt': height }, { 'lng': 121.85386394324924, 'lat': 30.885708278534548, 'alt': height }, { 'lng': 121.85399119095692, 'lat': 30.885817129254754, 'alt': height }, { 'lng': 121.85411843866461, 'lat': 30.885925979974957, 'alt': height }, { 'lng': 121.8542371780713, 'lat': 30.88602764631155, 'alt': height }, { 'lng': 121.854355917478, 'lat': 30.886129312648148, 'alt': height }, { 'lng': 121.85447465688469, 'lat': 30.88623097898474, 'alt': height }, { 'lng': 121.85459339629138, 'lat': 30.886332645321335, 'alt': height }, { 'lng': 121.85471213569808, 'lat': 30.886434311657933, 'alt': height }, { 'lng': 121.85483087510477, 'lat': 30.886535977994527, 'alt': height }, { 'lng': 121.854965097084, 'lat': 30.8866510787608, 'alt': height }, { 'lng': 121.85509931906324, 'lat': 30.886766179527072, 'alt': height }, { 'lng': 121.85523354104248, 'lat': 30.88688128029334, 'alt': height }, { 'lng': 121.85536776302172, 'lat': 30.886996381059614, 'alt': height }, { 'lng': 121.85550198500096, 'lat': 30.887111481825887, 'alt': height }, { 'lng': 121.8556362069802, 'lat': 30.88722658259216, 'alt': height }, { 'lng': 121.85577042895943, 'lat': 30.88734168335843, 'alt': height }, { 'lng': 121.85590465093867, 'lat': 30.8874567841247, 'alt': height }, { 'lng': 121.8560388729179, 'lat': 30.887571884890974, 'alt': height }, { 'lng': 121.8561701494495, 'lat': 30.887684082832163, 'alt': height }, { 'lng': 121.85630142598109, 'lat': 30.887796280773347, 'alt': height }, { 'lng': 121.85643270251268, 'lat': 30.887908478714536, 'alt': height }, { 'lng': 121.85656397904427, 'lat': 30.888020676655724, 'alt': height }, { 'lng': 121.85669525557586, 'lat': 30.88813287459691, 'alt': height }, { 'lng': 121.85682653210745, 'lat': 30.888245072538098, 'alt': height }, { 'lng': 121.85695468840316, 'lat': 30.888354814151857, 'alt': height }, { 'lng': 121.85708284469887, 'lat': 30.88846455576562, 'alt': height }, { 'lng': 121.85721100099458, 'lat': 30.888574297379378, 'alt': height }, { 'lng': 121.8573391572903, 'lat': 30.88868403899314, 'alt': height }, { 'lng': 121.857467313586, 'lat': 30.8887937806069, 'alt': height }, { 'lng': 121.85759546988172, 'lat': 30.888903522220662, 'alt': height }, { 'lng': 121.85772362617742, 'lat': 30.88901326383442, 'alt': height }, { 'lng': 121.85785178247313, 'lat': 30.889123005448184, 'alt': height }, { 'lng': 121.85797993876885, 'lat': 30.889232747061943, 'alt': height }, { 'lng': 121.85810809506455, 'lat': 30.889342488675705, 'alt': height }, { 'lng': 121.85823625136027, 'lat': 30.889452230289464, 'alt': height }, { 'lng': 121.85837118448794, 'lat': 30.889567968092116, 'alt': height }, { 'lng': 121.85850611761562, 'lat': 30.889683705894765, 'alt': height }, { 'lng': 121.85864105074329, 'lat': 30.889799443697417, 'alt': height }, { 'lng': 121.85877598387097, 'lat': 30.889915181500065, 'alt': height }, { 'lng': 121.85891091699864, 'lat': 30.890030919302717, 'alt': height }, { 'lng': 121.85904585012631, 'lat': 30.89014665710537, 'alt': height }, { 'lng': 121.85918078325399, 'lat': 30.890262394908017, 'alt': height }, { 'lng': 121.85931571638166, 'lat': 30.89037813271067, 'alt': height }, { 'lng': 121.85945064950934, 'lat': 30.890493870513318, 'alt': height }, { 'lng': 121.85958558263701, 'lat': 30.89060960831597, 'alt': height }, { 'lng': 121.85971626925793, 'lat': 30.890721663495857, 'alt': height }, { 'lng': 121.85984695587885, 'lat': 30.890833718675744, 'alt': height }, { 'lng': 121.85997764249979, 'lat': 30.890945773855627, 'alt': height }, { 'lng': 121.8601083291207, 'lat': 30.891057829035514, 'alt': height }, { 'lng': 121.86023901574163, 'lat': 30.8911698842154, 'alt': height }, { 'lng': 121.860358755375, 'lat': 30.891272070649496, 'alt': height }, { 'lng': 121.8604784950084, 'lat': 30.891374257083594, 'alt': height }, { 'lng': 121.86059823464177, 'lat': 30.89147644351769, 'alt': height }, { 'lng': 121.86071797427515, 'lat': 30.891578629951784, 'alt': height }, { 'lng': 121.86083771390854, 'lat': 30.891680816385882, 'alt': height }, { 'lng': 121.86095745354191, 'lat': 30.891783002819977, 'alt': height }, { 'lng': 121.8610402422895, 'lat': 30.891853654392605, 'alt': height }, { 'lng': 121.86116560879566, 'lat': 30.89196083135862, 'alt': height }, { 'lng': 121.86129097530181, 'lat': 30.892068008324635, 'alt': height }, { 'lng': 121.86141634180797, 'lat': 30.89217518529065, 'alt': height }, { 'lng': 121.86154170831412, 'lat': 30.892282362256665, 'alt': height }, { 'lng': 121.86166707482028, 'lat': 30.89238953922268, 'alt': height }, { 'lng': 121.86179244132643, 'lat': 30.8924967161887, 'alt': height }, { 'lng': 121.86191780783258, 'lat': 30.892603893154714, 'alt': height }, { 'lng': 121.86204317433874, 'lat': 30.89271107012073, 'alt': height }, { 'lng': 121.86216854084489, 'lat': 30.892818247086744, 'alt': height }, { 'lng': 121.86229390735105, 'lat': 30.89292542405276, 'alt': height }, { 'lng': 121.8624192738572, 'lat': 30.893032601018774, 'alt': height }, { 'lng': 121.86254900992276, 'lat': 30.89314365552569, 'alt': height }, { 'lng': 121.8626787459883, 'lat': 30.893254710032604, 'alt': height }, { 'lng': 121.86280848205386, 'lat': 30.89336576453952, 'alt': height }, { 'lng': 121.86293821811941, 'lat': 30.893476819046434, 'alt': height }, { 'lng': 121.86306795418497, 'lat': 30.89358787355335, 'alt': height }, { 'lng': 121.86319769025052, 'lat': 30.893698928060264, 'alt': height }, { 'lng': 121.86332742631608, 'lat': 30.89380998256718, 'alt': height }, { 'lng': 121.86345716238162, 'lat': 30.893921037074094, 'alt': height }, { 'lng': 121.86358689844718, 'lat': 30.89403209158101, 'alt': height }, { 'lng': 121.86371663451274, 'lat': 30.894143146087927, 'alt': height }, { 'lng': 121.86384637057829, 'lat': 30.89425420059484, 'alt': height }, { 'lng': 121.86397610664385, 'lat': 30.894365255101757, 'alt': height }, { 'lng': 121.86410584270939, 'lat': 30.89447630960867, 'alt': height }, { 'lng': 121.86423557877495, 'lat': 30.894587364115587, 'alt': height }, { 'lng': 121.8643653148405, 'lat': 30.8946984186225, 'alt': height }, { 'lng': 121.86449505090606, 'lat': 30.894809473129417, 'alt': height }, { 'lng': 121.8646247869716, 'lat': 30.89492052763633, 'alt': height }, { 'lng': 121.86475452303716, 'lat': 30.895031582143247, 'alt': height }, { 'lng': 121.8648798187734, 'lat': 30.895139140760406, 'alt': height }, { 'lng': 121.86500511450964, 'lat': 30.89524669937757, 'alt': height }, { 'lng': 121.86513041024587, 'lat': 30.89535425799473, 'alt': height }, { 'lng': 121.86525570598211, 'lat': 30.895461816611892, 'alt': height }, { 'lng': 121.86538100171835, 'lat': 30.89556937522905, 'alt': height }, { 'lng': 121.86550629745459, 'lat': 30.895676933846214, 'alt': height }, { 'lng': 121.86563159319081, 'lat': 30.895784492463374, 'alt': height }, { 'lng': 121.86575688892705, 'lat': 30.895892051080537, 'alt': height }, { 'lng': 121.86588218466329, 'lat': 30.895999609697697, 'alt': height }, { 'lng': 121.86600885011251, 'lat': 30.89610786178002, 'alt': height }, { 'lng': 121.86613551556172, 'lat': 30.89621611386234, 'alt': height }, { 'lng': 121.86626218101094, 'lat': 30.896324365944665, 'alt': height }, { 'lng': 121.86638884646015, 'lat': 30.896432618026985, 'alt': height }, { 'lng': 121.86651551190937, 'lat': 30.89654087010931, 'alt': height }, { 'lng': 121.86664217735859, 'lat': 30.89664912219163, 'alt': height }, { 'lng': 121.8667688428078, 'lat': 30.896757374273953, 'alt': height }, { 'lng': 121.86689550825702, 'lat': 30.896865626356274, 'alt': height }, { 'lng': 121.86702217370623, 'lat': 30.896973878438597, 'alt': height }, { 'lng': 121.86714883915545, 'lat': 30.897082130520918, 'alt': height }, { 'lng': 121.86727550460466, 'lat': 30.89719038260324, 'alt': height }, { 'lng': 121.8674100722902, 'lat': 30.897306074851276, 'alt': height }, { 'lng': 121.86754463997572, 'lat': 30.897421767099306, 'alt': height }, { 'lng': 121.86767920766125, 'lat': 30.89753745934734, 'alt': height }, { 'lng': 121.86781377534679, 'lat': 30.89765315159537, 'alt': height }, { 'lng': 121.86794834303232, 'lat': 30.897768843843405, 'alt': height }, { 'lng': 121.86808291071785, 'lat': 30.897884536091436, 'alt': height }, { 'lng': 121.86821747840338, 'lat': 30.89800022833947, 'alt': height }, { 'lng': 121.86834667320358, 'lat': 30.89811152055977, 'alt': height }, { 'lng': 121.86847586800377, 'lat': 30.898222812780073, 'alt': height }, { 'lng': 121.86860506280397, 'lat': 30.898334105000373, 'alt': height }, { 'lng': 121.86873425760416, 'lat': 30.898445397220673, 'alt': height }, { 'lng': 121.86886345240436, 'lat': 30.898556689440976, 'alt': height }, { 'lng': 121.86899264720455, 'lat': 30.898667981661276, 'alt': height }, { 'lng': 121.86911229505746, 'lat': 30.898770406541228, 'alt': height }, { 'lng': 121.86923194291037, 'lat': 30.898872831421183, 'alt': height }, { 'lng': 121.86935159076329, 'lat': 30.898975256301135, 'alt': height }, { 'lng': 121.86947123861621, 'lat': 30.89907768118109, 'alt': height }, { 'lng': 121.86959088646913, 'lat': 30.899180106061042, 'alt': height }, { 'lng': 121.86971053432204, 'lat': 30.899282530940997, 'alt': height }, { 'lng': 121.86983018217495, 'lat': 30.89938495582095, 'alt': height }, { 'lng': 121.86995202361975, 'lat': 30.899489135366, 'alt': height }, { 'lng': 121.87007386506453, 'lat': 30.89959331491105, 'alt': height }, { 'lng': 121.87019570650932, 'lat': 30.899697494456102, 'alt': height }, { 'lng': 121.87031754795412, 'lat': 30.899801674001154, 'alt': height }, { 'lng': 121.8704393893989, 'lat': 30.8999058535462, 'alt': height }, { 'lng': 121.87056123084369, 'lat': 30.900010033091252, 'alt': height }, { 'lng': 121.87068307228849, 'lat': 30.900114212636304, 'alt': height }, { 'lng': 121.87080491373327, 'lat': 30.900218392181355, 'alt': height }, { 'lng': 121.87092675517806, 'lat': 30.900322571726406, 'alt': height }, { 'lng': 121.87105310349733, 'lat': 30.900434257114703, 'alt': height }, { 'lng': 121.8711794518166, 'lat': 30.900545942503005, 'alt': height }, { 'lng': 121.87130580013587, 'lat': 30.900657627891302, 'alt': height }, { 'lng': 121.87143214845514, 'lat': 30.900769313279604, 'alt': height }, { 'lng': 121.87155849677441, 'lat': 30.9008809986679, 'alt': height }, { 'lng': 121.87168484509368, 'lat': 30.9009926840562, 'alt': height }, { 'lng': 121.87181119341295, 'lat': 30.9011043694445, 'alt': height }, { 'lng': 121.87193754173222, 'lat': 30.901216054832798, 'alt': height }, { 'lng': 121.87206389005149, 'lat': 30.9013277402211, 'alt': height }, { 'lng': 121.87219023837076, 'lat': 30.901439425609396, 'alt': height }, { 'lng': 121.87231653505789, 'lat': 30.901556356557805, 'alt': height }, { 'lng': 121.87244283174502, 'lat': 30.901673287506213, 'alt': height }, { 'lng': 121.87256912843215, 'lat': 30.90179021845462, 'alt': height }, { 'lng': 121.87269542511928, 'lat': 30.90190714940303, 'alt': height }, { 'lng': 121.8728217218064, 'lat': 30.90202408035144, 'alt': height }, { 'lng': 121.87294801849353, 'lat': 30.902141011299847, 'alt': height }, { 'lng': 121.87307431518066, 'lat': 30.902257942248255, 'alt': height }, { 'lng': 121.87320061186779, 'lat': 30.902374873196663, 'alt': height }, { 'lng': 121.8733165677012, 'lat': 30.90249560099863, 'alt': height }, { 'lng': 121.87343252353462, 'lat': 30.902616328800594, 'alt': height }, { 'lng': 121.87354847936803, 'lat': 30.90273705660256, 'alt': height }, { 'lng': 121.87366443520143, 'lat': 30.902857784404528, 'alt': height }, { 'lng': 121.87378039103486, 'lat': 30.90297851220649, 'alt': height }, { 'lng': 121.87389634686826, 'lat': 30.90309924000846, 'alt': height }, { 'lng': 121.87401230270167, 'lat': 30.903219967810426, 'alt': height }, { 'lng': 121.8741282585351, 'lat': 30.90334069561239, 'alt': height }, { 'lng': 121.8742442143685, 'lat': 30.903461423414356, 'alt': height }, { 'lng': 121.87436017020191, 'lat': 30.903582151216323, 'alt': height }, { 'lng': 121.87447612603533, 'lat': 30.903702879018287, 'alt': height }, { 'lng': 121.87459208186874, 'lat': 30.903823606820254, 'alt': height }, { 'lng': 121.87470499998307, 'lat': 30.903948071943972, 'alt': height }, { 'lng': 121.87481791809739, 'lat': 30.90407253706769, 'alt': height }, { 'lng': 121.87493083621172, 'lat': 30.90419700219141, 'alt': height }, { 'lng': 121.87504375432604, 'lat': 30.90432146731513, 'alt': height }, { 'lng': 121.87515667244037, 'lat': 30.904445932438847, 'alt': height }, { 'lng': 121.8752695905547, 'lat': 30.904570397562566, 'alt': height }, { 'lng': 121.87537536717639, 'lat': 30.904698281905393, 'alt': height }, { 'lng': 121.87548114379808, 'lat': 30.90482616624822, 'alt': height }, { 'lng': 121.87558692041978, 'lat': 30.90495405059105, 'alt': height }, { 'lng': 121.87569269704147, 'lat': 30.90508193493388, 'alt': height }, { 'lng': 121.87579847366317, 'lat': 30.905209819276706, 'alt': height }, { 'lng': 121.87590425028486, 'lat': 30.905337703619534, 'alt': height }, { 'lng': 121.87601002690656, 'lat': 30.90546558796236, 'alt': height }, { 'lng': 121.87611580352825, 'lat': 30.905593472305192, 'alt': height }, { 'lng': 121.87622158014995, 'lat': 30.90572135664802, 'alt': height }, { 'lng': 121.87632735677164, 'lat': 30.905849240990847, 'alt': height }, { 'lng': 121.8764205863174, 'lat': 30.905970017515802, 'alt': height }, { 'lng': 121.87651381586313, 'lat': 30.90609079404076, 'alt': height }, { 'lng': 121.87660704540889, 'lat': 30.906211570565716, 'alt': height }, { 'lng': 121.87670027495464, 'lat': 30.90633234709067, 'alt': height }, { 'lng': 121.87679350450038, 'lat': 30.90645312361563, 'alt': height }, { 'lng': 121.87688673404614, 'lat': 30.906573900140586, 'alt': height }, { 'lng': 121.87699299971504, 'lat': 30.906715555841913, 'alt': height }, { 'lng': 121.87709926538396, 'lat': 30.90685721154324, 'alt': height }, { 'lng': 121.87720553105287, 'lat': 30.906998867244567, 'alt': height }, { 'lng': 121.87731179672178, 'lat': 30.907140522945895, 'alt': height }, { 'lng': 121.87741806239069, 'lat': 30.907282178647222, 'alt': height }, { 'lng': 121.87750874804101, 'lat': 30.907414205329605, 'alt': height }, { 'lng': 121.87759943369133, 'lat': 30.907546232011992, 'alt': height }, { 'lng': 121.87769011934165, 'lat': 30.907678258694375, 'alt': height }, { 'lng': 121.87778419198037, 'lat': 30.90782244498635, 'alt': height }, { 'lng': 121.87787826461908, 'lat': 30.907966631278327, 'alt': height }, { 'lng': 121.8779723372578, 'lat': 30.908110817570304, 'alt': height }, { 'lng': 121.87806640989652, 'lat': 30.90825500386228, 'alt': height }, { 'lng': 121.87815331444445, 'lat': 30.908391837592838, 'alt': height }, { 'lng': 121.87824021899239, 'lat': 30.908528671323396, 'alt': height }, { 'lng': 121.87832712354032, 'lat': 30.90866550505395, 'alt': height }, { 'lng': 121.87841402808824, 'lat': 30.908802338784508, 'alt': height }, { 'lng': 121.87850093263619, 'lat': 30.908939172515066, 'alt': height }, { 'lng': 121.87858783718411, 'lat': 30.909076006245623, 'alt': height }, { 'lng': 121.87867474173204, 'lat': 30.909212839976178, 'alt': height }, { 'lng': 121.87876164627998, 'lat': 30.909349673706735, 'alt': height }, { 'lng': 121.87884855082791, 'lat': 30.909486507437293, 'alt': height }, { 'lng': 121.87892863208997, 'lat': 30.909624227316726, 'alt': height }, { 'lng': 121.87900871335202, 'lat': 30.90976194719616, 'alt': height }, { 'lng': 121.87908879461408, 'lat': 30.909899667075592, 'alt': height }, { 'lng': 121.87916887587613, 'lat': 30.910037386955025, 'alt': height }, { 'lng': 121.87924895713819, 'lat': 30.91017510683446, 'alt': height }, { 'lng': 121.87932903840024, 'lat': 30.91031282671389, 'alt': height }, { 'lng': 121.8794091196623, 'lat': 30.910450546593324, 'alt': height }, { 'lng': 121.87948920092435, 'lat': 30.910588266472757, 'alt': height }, { 'lng': 121.87957012697815, 'lat': 30.910740812939302, 'alt': height }, { 'lng': 121.87965105303195, 'lat': 30.910893359405847, 'alt': height }, { 'lng': 121.87973197908575, 'lat': 30.911045905872392, 'alt': height }, { 'lng': 121.87981290513954, 'lat': 30.911198452338937, 'alt': height }, { 'lng': 121.87989383119334, 'lat': 30.91135099880548, 'alt': height }, { 'lng': 121.87997475724714, 'lat': 30.911503545272026, 'alt': height }, { 'lng': 121.88005568330094, 'lat': 30.91165609173857, 'alt': height }, { 'lng': 121.88013660935474, 'lat': 30.911808638205116, 'alt': height }, { 'lng': 121.88020770905415, 'lat': 30.911957487946452, 'alt': height }, { 'lng': 121.88027880875356, 'lat': 30.91210633768779, 'alt': height }, { 'lng': 121.88034990845297, 'lat': 30.912255187429125, 'alt': height }, { 'lng': 121.88042100815238, 'lat': 30.91240403717046, 'alt': height }, { 'lng': 121.8804921078518, 'lat': 30.912552886911797, 'alt': height }, { 'lng': 121.8805632075512, 'lat': 30.912701736653133, 'alt': height }, { 'lng': 121.88063430725062, 'lat': 30.91285058639447, 'alt': height }, { 'lng': 121.88070540695003, 'lat': 30.912999436135806, 'alt': height }, { 'lng': 121.8807750525475, 'lat': 30.913159240104328, 'alt': height }, { 'lng': 121.88084469814498, 'lat': 30.91331904407285, 'alt': height }, { 'lng': 121.88091434374246, 'lat': 30.913478848041372, 'alt': height }, { 'lng': 121.88098398933994, 'lat': 30.913638652009894, 'alt': height }, { 'lng': 121.88105363493742, 'lat': 30.913798455978416, 'alt': height }, { 'lng': 121.8811232805349, 'lat': 30.913958259946938, 'alt': height }, { 'lng': 121.88119292613237, 'lat': 30.91411806391546, 'alt': height }, { 'lng': 121.88126257172985, 'lat': 30.914277867883982, 'alt': height }, { 'lng': 121.88131865231718, 'lat': 30.914427359390956, 'alt': height }, { 'lng': 121.8813747329045, 'lat': 30.91457685089793, 'alt': height }, { 'lng': 121.88143081349183, 'lat': 30.914726342404904, 'alt': height }, { 'lng': 121.88148689407916, 'lat': 30.91487583391188, 'alt': height }, { 'lng': 121.88154297466649, 'lat': 30.915025325418853, 'alt': height }, { 'lng': 121.88159905525382, 'lat': 30.915174816925827, 'alt': height }, { 'lng': 121.88165513584114, 'lat': 30.9153243084328, 'alt': height }, { 'lng': 121.88171121642847, 'lat': 30.915473799939775, 'alt': height }, { 'lng': 121.88176318165716, 'lat': 30.915628454403965, 'alt': height }, { 'lng': 121.88181514688586, 'lat': 30.915783108868155, 'alt': height }, { 'lng': 121.88186711211455, 'lat': 30.915937763332344, 'alt': height }, { 'lng': 121.88191907734324, 'lat': 30.916092417796534, 'alt': height }, { 'lng': 121.88197104257193, 'lat': 30.916247072260724, 'alt': height }, { 'lng': 121.88202300780063, 'lat': 30.916401726724914, 'alt': height }, { 'lng': 121.88207497302932, 'lat': 30.916556381189103, 'alt': height }, { 'lng': 121.88212693825801, 'lat': 30.916711035653293, 'alt': height }, { 'lng': 121.88217715856403, 'lat': 30.916883333695797, 'alt': height }, { 'lng': 121.88222737887004, 'lat': 30.917055631738304, 'alt': height }, { 'lng': 121.88227759917606, 'lat': 30.917227929780807, 'alt': height }, { 'lng': 121.88232781948209, 'lat': 30.91740022782331, 'alt': height }, { 'lng': 121.8823780397881, 'lat': 30.91757252586582, 'alt': height }, { 'lng': 121.88242826009412, 'lat': 30.917744823908322, 'alt': height }, { 'lng': 121.88247383409923, 'lat': 30.91791366155935, 'alt': height }, { 'lng': 121.88251940810433, 'lat': 30.918082499210374, 'alt': height }, { 'lng': 121.88256498210944, 'lat': 30.918251336861402, 'alt': height }, { 'lng': 121.88261055611456, 'lat': 30.91842017451243, 'alt': height }, { 'lng': 121.88265613011966, 'lat': 30.918589012163455, 'alt': height }, { 'lng': 121.88270170412477, 'lat': 30.918757849814483, 'alt': height }, { 'lng': 121.88273694592185, 'lat': 30.918914477279813, 'alt': height }, { 'lng': 121.88277218771893, 'lat': 30.919071104745143, 'alt': height }, { 'lng': 121.882807429516, 'lat': 30.919227732210473, 'alt': height }, { 'lng': 121.88284267131309, 'lat': 30.919384359675803, 'alt': height }, { 'lng': 121.88287791311016, 'lat': 30.919540987141133, 'alt': height }, { 'lng': 121.88291315490724, 'lat': 30.919697614606463, 'alt': height }, { 'lng': 121.88294839670432, 'lat': 30.919854242071793, 'alt': height }, { 'lng': 121.8829836385014, 'lat': 30.920010869537123, 'alt': height }, { 'lng': 121.88301156592273, 'lat': 30.92017344789219, 'alt': height }, { 'lng': 121.88303949334406, 'lat': 30.920336026247256, 'alt': height }, { 'lng': 121.88306742076539, 'lat': 30.920498604602322, 'alt': height }, { 'lng': 121.88309534818671, 'lat': 30.92066118295739, 'alt': height }, { 'lng': 121.88312327560804, 'lat': 30.920823761312455, 'alt': height }, { 'lng': 121.88315120302937, 'lat': 30.92098633966752, 'alt': height }, { 'lng': 121.8831791304507, 'lat': 30.92114891802259, 'alt': height }, { 'lng': 121.88320705787203, 'lat': 30.921311496377655, 'alt': height }, { 'lng': 121.88323191309662, 'lat': 30.92146785633501, 'alt': height }, { 'lng': 121.88325676832123, 'lat': 30.92162421629236, 'alt': height }, { 'lng': 121.88328162354583, 'lat': 30.921780576249716, 'alt': height }, { 'lng': 121.88330400824145, 'lat': 30.921935097087527, 'alt': height }, { 'lng': 121.88332639293708, 'lat': 30.922089617925337, 'alt': height }, { 'lng': 121.8833487776327, 'lat': 30.922244138763148, 'alt': height }, { 'lng': 121.88337116232833, 'lat': 30.922398659600958, 'alt': height }, { 'lng': 121.88338687017163, 'lat': 30.922576585660472, 'alt': height }, { 'lng': 121.88340257801494, 'lat': 30.922754511719987, 'alt': height }, { 'lng': 121.88341828585823, 'lat': 30.9229324377795, 'alt': height }, { 'lng': 121.88343399370153, 'lat': 30.92311036383901, 'alt': height }, { 'lng': 121.88344970154483, 'lat': 30.923288289898526, 'alt': height }, { 'lng': 121.88346540938812, 'lat': 30.92346621595804, 'alt': height }, { 'lng': 121.88348111723143, 'lat': 30.923644142017555, 'alt': height }, { 'lng': 121.88349682507473, 'lat': 30.92382206807707, 'alt': height }, { 'lng': 121.88351253291803, 'lat': 30.92399999413658, 'alt': height }, { 'lng': 121.88352824076134, 'lat': 30.924177920196094, 'alt': height }, { 'lng': 121.88354394860463, 'lat': 30.924355846255608, 'alt': height }, { 'lng': 121.88355965644793, 'lat': 30.924533772315122, 'alt': height }, { 'lng': 121.88357536429123, 'lat': 30.924711698374637, 'alt': height }, { 'lng': 121.88359107213452, 'lat': 30.92488962443415, 'alt': height }, { 'lng': 121.88360677997782, 'lat': 30.925067550493665, 'alt': height }, { 'lng': 121.88362248782113, 'lat': 30.925245476553176, 'alt': height }, { 'lng': 121.88363819566443, 'lat': 30.92542340261269, 'alt': height }, { 'lng': 121.88365390350774, 'lat': 30.925601328672204, 'alt': height }, { 'lng': 121.88366961135102, 'lat': 30.92577925473172, 'alt': height }, { 'lng': 121.88368531919433, 'lat': 30.925957180791233, 'alt': height }, { 'lng': 121.88370102703763, 'lat': 30.926135106850744, 'alt': height }, { 'lng': 121.88371673488093, 'lat': 30.926313032910258, 'alt': height }, { 'lng': 121.88373244272422, 'lat': 30.926490958969772, 'alt': height }, { 'lng': 121.88374815056753, 'lat': 30.926668885029287, 'alt': height }, { 'lng': 121.88376385841083, 'lat': 30.9268468110888, 'alt': height }, { 'lng': 121.88377956625413, 'lat': 30.927024737148315, 'alt': height }, { 'lng': 121.88379527409742, 'lat': 30.92720266320783, 'alt': height }, { 'lng': 121.88381098194073, 'lat': 30.92738058926734, 'alt': height }, { 'lng': 121.88382668978403, 'lat': 30.927558515326854, 'alt': height }, { 'lng': 121.88384239762732, 'lat': 30.92773644138637, 'alt': height }, { 'lng': 121.88385810547062, 'lat': 30.927914367445883, 'alt': height }, { 'lng': 121.88387381331393, 'lat': 30.928092293505397, 'alt': height }, { 'lng': 121.88388952115723, 'lat': 30.928270219564908, 'alt': height }, { 'lng': 121.88390522900053, 'lat': 30.928448145624422, 'alt': height }, { 'lng': 121.88392093684382, 'lat': 30.928626071683937, 'alt': height }, { 'lng': 121.88393664468713, 'lat': 30.92880399774345, 'alt': height }, { 'lng': 121.88395235253043, 'lat': 30.928981923802965, 'alt': height }, { 'lng': 121.88396806037373, 'lat': 30.92915984986248, 'alt': height }, { 'lng': 121.88398376821702, 'lat': 30.929337775921994, 'alt': height }, { 'lng': 121.88399947606032, 'lat': 30.929515701981504, 'alt': height }, { 'lng': 121.88401518390363, 'lat': 30.92969362804102, 'alt': height }, { 'lng': 121.88403089174693, 'lat': 30.929871554100533, 'alt': height }, { 'lng': 121.88404659959022, 'lat': 30.930049480160047, 'alt': height }, { 'lng': 121.88406230743352, 'lat': 30.93022740621956, 'alt': height }, { 'lng': 121.88407801527683, 'lat': 30.930405332279072, 'alt': height }, { 'lng': 121.88409372312013, 'lat': 30.930583258338586, 'alt': height }, { 'lng': 121.88410943096342, 'lat': 30.9307611843981, 'alt': height }, { 'lng': 121.88412513880672, 'lat': 30.930939110457615, 'alt': height }, { 'lng': 121.88414084665003, 'lat': 30.93111703651713, 'alt': height }, { 'lng': 121.88415655449333, 'lat': 30.931294962576644, 'alt': height }, { 'lng': 121.88417226233662, 'lat': 30.931472888636158, 'alt': height }, { 'lng': 121.88418797017992, 'lat': 30.93165081469567, 'alt': height }, { 'lng': 121.88420367802323, 'lat': 30.931828740755183, 'alt': height }, { 'lng': 121.88421938586652, 'lat': 30.932006666814697, 'alt': height }, { 'lng': 121.88423509370982, 'lat': 30.93218459287421, 'alt': height }, { 'lng': 121.88425080155312, 'lat': 30.932362518933726, 'alt': height }, { 'lng': 121.88426650939643, 'lat': 30.932540444993236, 'alt': height }, { 'lng': 121.88428221723973, 'lat': 30.93271837105275, 'alt': height }, { 'lng': 121.88429792508302, 'lat': 30.932896297112265, 'alt': height }, { 'lng': 121.88431363292632, 'lat': 30.93307422317178, 'alt': height }, { 'lng': 121.88432934076963, 'lat': 30.933252149231294, 'alt': height }, { 'lng': 121.88434504861293, 'lat': 30.933430075290808, 'alt': height }, { 'lng': 121.88436075645622, 'lat': 30.933608001350322, 'alt': height }, { 'lng': 121.88437646429952, 'lat': 30.933785927409833, 'alt': height }, { 'lng': 121.88439217214282, 'lat': 30.933963853469347, 'alt': height }, { 'lng': 121.88440787998613, 'lat': 30.93414177952886, 'alt': height }, { 'lng': 121.88442358782942, 'lat': 30.934319705588376, 'alt': height }, { 'lng': 121.88443929567272, 'lat': 30.93449763164789, 'alt': height }, { 'lng': 121.88445500351602, 'lat': 30.9346755577074, 'alt': height }, { 'lng': 121.88447071135933, 'lat': 30.934853483766915, 'alt': height }, { 'lng': 121.88448641920262, 'lat': 30.93503140982643, 'alt': height }, { 'lng': 121.88450212704592, 'lat': 30.935209335885943, 'alt': height }, { 'lng': 121.88451783488922, 'lat': 30.935387261945458, 'alt': height }, { 'lng': 121.88453354273253, 'lat': 30.935565188004972, 'alt': height }, { 'lng': 121.88454925057582, 'lat': 30.935743114064486, 'alt': height }, { 'lng': 121.88456495841912, 'lat': 30.935921040123997, 'alt': height }, { 'lng': 121.88458066626242, 'lat': 30.93609896618351, 'alt': height }, { 'lng': 121.88459637410571, 'lat': 30.936276892243026, 'alt': height }, { 'lng': 121.88461208194902, 'lat': 30.93645481830254, 'alt': height }, { 'lng': 121.88462778979232, 'lat': 30.936632744362054, 'alt': height }, { 'lng': 121.88464349763562, 'lat': 30.936810670421565, 'alt': height }, { 'lng': 121.88465920547893, 'lat': 30.93698859648108, 'alt': height }, { 'lng': 121.88467491332221, 'lat': 30.937166522540593, 'alt': height }, { 'lng': 121.88469062116552, 'lat': 30.937344448600108, 'alt': height }, { 'lng': 121.88470632900882, 'lat': 30.937522374659622, 'alt': height }, { 'lng': 121.88472203685212, 'lat': 30.937700300719136, 'alt': height }, { 'lng': 121.88473774469541, 'lat': 30.93787822677865, 'alt': height }, { 'lng': 121.88475345253872, 'lat': 30.93805615283816, 'alt': height }, { 'lng': 121.88476916038202, 'lat': 30.938234078897676, 'alt': height }, { 'lng': 121.88478486822532, 'lat': 30.93841200495719, 'alt': height }, { 'lng': 121.88480057606861, 'lat': 30.938589931016704, 'alt': height }, { 'lng': 121.88481628391192, 'lat': 30.93876785707622, 'alt': height }, { 'lng': 121.88483199175522, 'lat': 30.93894578313573, 'alt': height }, { 'lng': 121.88484769959851, 'lat': 30.939123709195243, 'alt': height }, { 'lng': 121.88486340744181, 'lat': 30.939301635254758, 'alt': height }, { 'lng': 121.88487911528512, 'lat': 30.939479561314272, 'alt': height }, { 'lng': 121.88489285716658, 'lat': 30.939639125085744, 'alt': height }, { 'lng': 121.88490659904805, 'lat': 30.939798688857213, 'alt': height }, { 'lng': 121.88492034092951, 'lat': 30.939958252628685, 'alt': height }, { 'lng': 121.88493408281097, 'lat': 30.940117816400157, 'alt': height }, { 'lng': 121.88494782469245, 'lat': 30.940277380171626, 'alt': height }, { 'lng': 121.8849615665739, 'lat': 30.940436943943098, 'alt': height }, { 'lng': 121.88497675573579, 'lat': 30.940615752466837, 'alt': height }, { 'lng': 121.88499194489766, 'lat': 30.940794560990575, 'alt': height }, { 'lng': 121.88500713405955, 'lat': 30.940973369514314, 'alt': height }, { 'lng': 121.88502232322143, 'lat': 30.941152178038056, 'alt': height }, { 'lng': 121.88503751238332, 'lat': 30.941330986561795, 'alt': height }, { 'lng': 121.88505270154519, 'lat': 30.941509795085533, 'alt': height }, { 'lng': 121.88506789070708, 'lat': 30.941688603609272, 'alt': height }, { 'lng': 121.88508307986896, 'lat': 30.94186741213301, 'alt': height }, { 'lng': 121.88509826903085, 'lat': 30.94204622065675, 'alt': height }, { 'lng': 121.88511345819272, 'lat': 30.94222502918049, 'alt': height }, { 'lng': 121.8851286473546, 'lat': 30.94240383770423, 'alt': height }, { 'lng': 121.88514383651649, 'lat': 30.94258264622797, 'alt': height }, { 'lng': 121.88515902567838, 'lat': 30.942761454751707, 'alt': height }, { 'lng': 121.88517421484025, 'lat': 30.942940263275446, 'alt': height }, { 'lng': 121.88518940400213, 'lat': 30.943119071799185, 'alt': height }, { 'lng': 121.88520459316402, 'lat': 30.943297880322927, 'alt': height }, { 'lng': 121.8852197823259, 'lat': 30.943476688846665, 'alt': height }, { 'lng': 121.88523497148778, 'lat': 30.943655497370404, 'alt': height }, { 'lng': 121.88525016064966, 'lat': 30.943834305894143, 'alt': height }, { 'lng': 121.88526526329126, 'lat': 30.944007388212842, 'alt': height }, { 'lng': 121.88528036593287, 'lat': 30.944180470531542, 'alt': height }, { 'lng': 121.88529546857447, 'lat': 30.94435355285024, 'alt': height }, { 'lng': 121.88531057121608, 'lat': 30.944526635168945, 'alt': height }, { 'lng': 121.88532567385768, 'lat': 30.944699717487644, 'alt': height }, { 'lng': 121.88534077649929, 'lat': 30.944872799806344, 'alt': height }, { 'lng': 121.88535587914089, 'lat': 30.945045882125044, 'alt': height }, { 'lng': 121.88537098178249, 'lat': 30.945218964443743, 'alt': height }, { 'lng': 121.8853860844241, 'lat': 30.945392046762443, 'alt': height }, { 'lng': 121.8854011870657, 'lat': 30.945565129081142, 'alt': height }, { 'lng': 121.88541628970731, 'lat': 30.945738211399846, 'alt': height }, { 'lng': 121.8854313923489, 'lat': 30.945911293718545, 'alt': height }, { 'lng': 121.88544649499052, 'lat': 30.946084376037245, 'alt': height }, { 'lng': 121.88546159763212, 'lat': 30.946257458355944, 'alt': height }, { 'lng': 121.88547372642378, 'lat': 30.946436261144555, 'alt': height }, { 'lng': 121.88548585521546, 'lat': 30.946615063933166, 'alt': height }, { 'lng': 121.88549798400713, 'lat': 30.946793866721777, 'alt': height }, { 'lng': 121.8855101127988, 'lat': 30.946972669510387, 'alt': height }, { 'lng': 121.88552224159046, 'lat': 30.947151472298998, 'alt': height }, { 'lng': 121.88553437038215, 'lat': 30.94733027508761, 'alt': height }, { 'lng': 121.88554649917381, 'lat': 30.94750907787622, 'alt': height }, { 'lng': 121.88555862796548, 'lat': 30.94768788066483, 'alt': height }, { 'lng': 121.88557075675716, 'lat': 30.94786668345344, 'alt': height }, { 'lng': 121.88558288554883, 'lat': 30.94804548624205, 'alt': height }, { 'lng': 121.8855950143405, 'lat': 30.948224289030662, 'alt': height }, { 'lng': 121.88560714313216, 'lat': 30.948403091819273, 'alt': height }, { 'lng': 121.88561927192384, 'lat': 30.948581894607884, 'alt': height }, { 'lng': 121.88563140071551, 'lat': 30.948760697396494, 'alt': height }, { 'lng': 121.88563938391341, 'lat': 30.94891908179094, 'alt': height }, { 'lng': 121.88564736711132, 'lat': 30.949077466185386, 'alt': height }, { 'lng': 121.88565535030922, 'lat': 30.949235850579832, 'alt': height }, { 'lng': 121.88566333350713, 'lat': 30.949394234974278, 'alt': height }, { 'lng': 121.88567131670503, 'lat': 30.949552619368724, 'alt': height }, { 'lng': 121.88567929990293, 'lat': 30.94971100376317, 'alt': height }, { 'lng': 121.88568728310084, 'lat': 30.949869388157616, 'alt': height }, { 'lng': 121.88569526629874, 'lat': 30.950027772552062, 'alt': height }, { 'lng': 121.88570012058501, 'lat': 30.9501917939702, 'alt': height }, { 'lng': 121.88570497487129, 'lat': 30.95035581538833, 'alt': height }, { 'lng': 121.88570982915755, 'lat': 30.950519836806468, 'alt': height }, { 'lng': 121.88571468344382, 'lat': 30.9506838582246, 'alt': height }, { 'lng': 121.8857195377301, 'lat': 30.950847879642737, 'alt': height }, { 'lng': 121.88572439201637, 'lat': 30.951011901060873, 'alt': height }, { 'lng': 121.88572924630265, 'lat': 30.951175922479006, 'alt': height }, { 'lng': 121.8857341005889, 'lat': 30.951339943897143, 'alt': height }, { 'lng': 121.88573895487518, 'lat': 30.951503965315275, 'alt': height }, { 'lng': 121.88574380916145, 'lat': 30.951667986733412, 'alt': height }, { 'lng': 121.8857479980412, 'lat': 30.951844227095716, 'alt': height }, { 'lng': 121.88575218692094, 'lat': 30.95202046745802, 'alt': height }, { 'lng': 121.8857563758007, 'lat': 30.952196707820328, 'alt': height }, { 'lng': 121.88576056468044, 'lat': 30.95237294818263, 'alt': height }, { 'lng': 121.88576475356018, 'lat': 30.952549188544936, 'alt': height }, { 'lng': 121.88576894243992, 'lat': 30.95272542890724, 'alt': height }, { 'lng': 121.88577313131967, 'lat': 30.952901669269544, 'alt': height }, { 'lng': 121.88577732019942, 'lat': 30.95307790963185, 'alt': height }, { 'lng': 121.88578150907917, 'lat': 30.953254149994155, 'alt': height }, { 'lng': 121.88578569795891, 'lat': 30.95343039035646, 'alt': height }, { 'lng': 121.88578476416116, 'lat': 30.953603790250025, 'alt': height }, { 'lng': 121.88578383036341, 'lat': 30.953777190143594, 'alt': height }, { 'lng': 121.88578289656566, 'lat': 30.95395059003716, 'alt': height }, { 'lng': 121.88578196276792, 'lat': 30.95412398993073, 'alt': height }, { 'lng': 121.88578102897017, 'lat': 30.954297389824294, 'alt': height }, { 'lng': 121.88578009517242, 'lat': 30.954470789717863, 'alt': height }, { 'lng': 121.88577916137467, 'lat': 30.95464418961143, 'alt': height }, { 'lng': 121.88577822757692, 'lat': 30.954817589504994, 'alt': height }, { 'lng': 121.88577729377917, 'lat': 30.954990989398564, 'alt': height }, { 'lng': 121.88577635998142, 'lat': 30.95516438929213, 'alt': height }, { 'lng': 121.88577542618368, 'lat': 30.9553377891857, 'alt': height }, { 'lng': 121.88577449238593, 'lat': 30.955511189079264, 'alt': height }, { 'lng': 121.88577355858818, 'lat': 30.955684588972833, 'alt': height }, { 'lng': 121.88577262479043, 'lat': 30.9558579888664, 'alt': height }, { 'lng': 121.88576845902675, 'lat': 30.95602373190371, 'alt': height }, { 'lng': 121.88576429326305, 'lat': 30.956189474941016, 'alt': height }, { 'lng': 121.88576012749937, 'lat': 30.956355217978327, 'alt': height }, { 'lng': 121.88575596173568, 'lat': 30.956520961015638, 'alt': height }, { 'lng': 121.88575179597198, 'lat': 30.956686704052945, 'alt': height }, { 'lng': 121.8857476302083, 'lat': 30.956852447090256, 'alt': height }, { 'lng': 121.88574346444462, 'lat': 30.957018190127567, 'alt': height }, { 'lng': 121.88573929868092, 'lat': 30.957183933164874, 'alt': height }, { 'lng': 121.88573513291723, 'lat': 30.957349676202185, 'alt': height }, { 'lng': 121.88573096715355, 'lat': 30.957515419239495, 'alt': height }, { 'lng': 121.88572680138985, 'lat': 30.957681162276803, 'alt': height }, { 'lng': 121.88572263562617, 'lat': 30.957846905314113, 'alt': height }, { 'lng': 121.88571423769743, 'lat': 30.958025814777322, 'alt': height }, { 'lng': 121.8857058397687, 'lat': 30.95820472424053, 'alt': height }, { 'lng': 121.88569744183997, 'lat': 30.95838363370374, 'alt': height }, { 'lng': 121.88568904391123, 'lat': 30.958562543166945, 'alt': height }, { 'lng': 121.8856806459825, 'lat': 30.958741452630154, 'alt': height }, { 'lng': 121.88567224805377, 'lat': 30.958920362093362, 'alt': height }, { 'lng': 121.88566385012503, 'lat': 30.95909927155657, 'alt': height }, { 'lng': 121.8856554521963, 'lat': 30.95927818101978, 'alt': height }, { 'lng': 121.88564705426757, 'lat': 30.95945709048299, 'alt': height }, { 'lng': 121.88563865633883, 'lat': 30.959635999946197, 'alt': height }, { 'lng': 121.8856302584101, 'lat': 30.959814909409406, 'alt': height }, { 'lng': 121.88562186048136, 'lat': 30.95999381887261, 'alt': height }, { 'lng': 121.88561346255263, 'lat': 30.96017272833582, 'alt': height }, { 'lng': 121.8856050646239, 'lat': 30.96035163779903, 'alt': height }, { 'lng': 121.88559666669516, 'lat': 30.960530547262238, 'alt': height }, { 'lng': 121.88558777818412, 'lat': 30.9606614166636, 'alt': height }, { 'lng': 121.88557888967307, 'lat': 30.96079228606497, 'alt': height }, { 'lng': 121.88557000116202, 'lat': 30.960923155466332, 'alt': height }, { 'lng': 121.88554991637919, 'lat': 30.96110129972506, 'alt': height }, { 'lng': 121.88552983159634, 'lat': 30.96127944398378, 'alt': height }, { 'lng': 121.88550974681351, 'lat': 30.961457588242506, 'alt': height }, { 'lng': 121.88548966203068, 'lat': 30.96163573250123, 'alt': height }, { 'lng': 121.88546957724783, 'lat': 30.961813876759955, 'alt': height }, { 'lng': 121.885449492465, 'lat': 30.96199202101868, 'alt': height }, { 'lng': 121.88542940768215, 'lat': 30.962170165277403, 'alt': height }, { 'lng': 121.88540932289932, 'lat': 30.96234830953613, 'alt': height }, { 'lng': 121.88538923811649, 'lat': 30.962526453794855, 'alt': height }, { 'lng': 121.88536915333364, 'lat': 30.962704598053577, 'alt': height }, { 'lng': 121.88534906855081, 'lat': 30.962882742312303, 'alt': height }, { 'lng': 121.88532898376798, 'lat': 30.963060886571025, 'alt': height }, { 'lng': 121.88530889898513, 'lat': 30.96323903082975, 'alt': height }, { 'lng': 121.8852888142023, 'lat': 30.963417175088477, 'alt': height }, { 'lng': 121.88526872941947, 'lat': 30.9635953193472, 'alt': height }, { 'lng': 121.88524864463662, 'lat': 30.963773463605925, 'alt': height }, { 'lng': 121.88522855985379, 'lat': 30.96395160786465, 'alt': height }, { 'lng': 121.88520847507095, 'lat': 30.964129752123373, 'alt': height }, { 'lng': 121.8851883902881, 'lat': 30.9643078963821, 'alt': height }, { 'lng': 121.88516830550527, 'lat': 30.96448604064082, 'alt': height }, { 'lng': 121.88514822072243, 'lat': 30.964664184899547, 'alt': height }, { 'lng': 121.8851281359396, 'lat': 30.964842329158273, 'alt': height }, { 'lng': 121.88510805115676, 'lat': 30.965020473416995, 'alt': height }, { 'lng': 121.88508796637392, 'lat': 30.96519861767572, 'alt': height }, { 'lng': 121.88506788159108, 'lat': 30.965376761934447, 'alt': height }, { 'lng': 121.88504779680825, 'lat': 30.96555490619317, 'alt': height }, { 'lng': 121.8850277120254, 'lat': 30.965733050451895, 'alt': height }, { 'lng': 121.88500762724257, 'lat': 30.965911194710618, 'alt': height }, { 'lng': 121.88498754245974, 'lat': 30.966089338969343, 'alt': height }, { 'lng': 121.8849674576769, 'lat': 30.96626748322807, 'alt': height }, { 'lng': 121.88494737289406, 'lat': 30.96644562748679, 'alt': height }, { 'lng': 121.88492728811123, 'lat': 30.966623771745518, 'alt': height }, { 'lng': 121.88490720332838, 'lat': 30.966801916004243, 'alt': height }, { 'lng': 121.88488711854555, 'lat': 30.966980060262966, 'alt': height }, { 'lng': 121.8848670337627, 'lat': 30.96715820452169, 'alt': height }, { 'lng': 121.88484694897987, 'lat': 30.967336348780414, 'alt': height }, { 'lng': 121.88482686419704, 'lat': 30.96751449303914, 'alt': height }, { 'lng': 121.88480677941419, 'lat': 30.967692637297866, 'alt': height }, { 'lng': 121.88478669463136, 'lat': 30.967870781556588, 'alt': height }, { 'lng': 121.88476660984853, 'lat': 30.968048925815314, 'alt': height }, { 'lng': 121.88474652506568, 'lat': 30.96822707007404, 'alt': height }, { 'lng': 121.88472644028285, 'lat': 30.968405214332762, 'alt': height }, { 'lng': 121.88470635550001, 'lat': 30.968583358591488, 'alt': height }, { 'lng': 121.88468627071717, 'lat': 30.96876150285021, 'alt': height }, { 'lng': 121.88466618593434, 'lat': 30.968939647108936, 'alt': height }, { 'lng': 121.8846461011515, 'lat': 30.969117791367662, 'alt': height }, { 'lng': 121.88462601636866, 'lat': 30.969295935626384, 'alt': height }, { 'lng': 121.88460593158582, 'lat': 30.96947407988511, 'alt': height }, { 'lng': 121.88458584680298, 'lat': 30.969652224143836, 'alt': height }, { 'lng': 121.88456576202015, 'lat': 30.969830368402558, 'alt': height }, { 'lng': 121.88454567723731, 'lat': 30.970008512661284, 'alt': height }, { 'lng': 121.88452559245447, 'lat': 30.970186656920006, 'alt': height }, { 'lng': 121.88450550767163, 'lat': 30.970364801178732, 'alt': height }, { 'lng': 121.88447713932722, 'lat': 30.97053118504778, 'alt': height }, { 'lng': 121.8844487709828, 'lat': 30.970697568916826, 'alt': height }, { 'lng': 121.88442040263838, 'lat': 30.970863952785873, 'alt': height }, { 'lng': 121.88439203429397, 'lat': 30.97103033665492, 'alt': height }, { 'lng': 121.88436366594955, 'lat': 30.971196720523967, 'alt': height }, { 'lng': 121.88433529760513, 'lat': 30.971363104393014, 'alt': height }, { 'lng': 121.88430692926072, 'lat': 30.97152948826206, 'alt': height }, { 'lng': 121.8842785609163, 'lat': 30.971695872131107, 'alt': height }, { 'lng': 121.88425019257188, 'lat': 30.971862256000154, 'alt': height }, { 'lng': 121.88422182422747, 'lat': 30.9720286398692, 'alt': height }, { 'lng': 121.88419345588305, 'lat': 30.972195023738248, 'alt': height }, { 'lng': 121.88416508753863, 'lat': 30.972361407607295, 'alt': height }, { 'lng': 121.88413671919422, 'lat': 30.97252779147634, 'alt': height }, { 'lng': 121.8841083508498, 'lat': 30.97269417534539, 'alt': height }, { 'lng': 121.88407998250538, 'lat': 30.972860559214435, 'alt': height }, { 'lng': 121.88405161416097, 'lat': 30.973026943083482, 'alt': height }, { 'lng': 121.88401809839806, 'lat': 30.973196346147702, 'alt': height }, { 'lng': 121.88398458263515, 'lat': 30.97336574921192, 'alt': height }, { 'lng': 121.88395106687226, 'lat': 30.97353515227614, 'alt': height }, { 'lng': 121.88391755110935, 'lat': 30.973704555340355, 'alt': height }, { 'lng': 121.88388403534644, 'lat': 30.973873958404575, 'alt': height }, { 'lng': 121.88385051958353, 'lat': 30.97404336146879, 'alt': height }, { 'lng': 121.88381700382064, 'lat': 30.97421276453301, 'alt': height }, { 'lng': 121.88378348805773, 'lat': 30.974382167597227, 'alt': height }, { 'lng': 121.88374997229482, 'lat': 30.974551570661447, 'alt': height }, { 'lng': 121.88371356841289, 'lat': 30.974724818446212, 'alt': height }, { 'lng': 121.88367716453095, 'lat': 30.974898066230978, 'alt': height }, { 'lng': 121.88364076064902, 'lat': 30.975071314015743, 'alt': height }, { 'lng': 121.88360435676708, 'lat': 30.97524456180051, 'alt': height }, { 'lng': 121.88356795288514, 'lat': 30.975417809585274, 'alt': height }, { 'lng': 121.88353154900321, 'lat': 30.97559105737004, 'alt': height }, { 'lng': 121.88349514512127, 'lat': 30.975764305154804, 'alt': height }, { 'lng': 121.88345874123934, 'lat': 30.97593755293957, 'alt': height }, { 'lng': 121.88342174846406, 'lat': 30.976096983184036, 'alt': height }, { 'lng': 121.88338475568878, 'lat': 30.9762564134285, 'alt': height }, { 'lng': 121.8833477629135, 'lat': 30.976415843672967, 'alt': height }, { 'lng': 121.88331077013822, 'lat': 30.976575273917433, 'alt': height }, { 'lng': 121.8832885036835, 'lat': 30.97667123621838, 'alt': height }, { 'lng': 121.88326623722878, 'lat': 30.976767198519326, 'alt': height }, { 'lng': 121.88323617696665, 'lat': 30.976902627945588, 'alt': height }, { 'lng': 121.88320611670451, 'lat': 30.977038057371846, 'alt': height }, { 'lng': 121.88317605644238, 'lat': 30.977173486798108, 'alt': height }, { 'lng': 121.8831124643599, 'lat': 30.977341405117464, 'alt': height }, { 'lng': 121.88304887227741, 'lat': 30.97750932343682, 'alt': height }, { 'lng': 121.88298528019493, 'lat': 30.977677241756176, 'alt': height }, { 'lng': 121.88292168811245, 'lat': 30.97784516007553, 'alt': height }, { 'lng': 121.88285809602998, 'lat': 30.978013078394884, 'alt': height }, { 'lng': 121.8827945039475, 'lat': 30.97818099671424, 'alt': height }, { 'lng': 121.88273091186501, 'lat': 30.978348915033596, 'alt': height }, { 'lng': 121.88266731978253, 'lat': 30.978516833352952, 'alt': height }, { 'lng': 121.88260372770004, 'lat': 30.978684751672308, 'alt': height }, { 'lng': 121.88254013561756, 'lat': 30.97885266999166, 'alt': height }, { 'lng': 121.88247654353508, 'lat': 30.979020588311016, 'alt': height }, { 'lng': 121.8824129514526, 'lat': 30.979188506630372, 'alt': height }, { 'lng': 121.88234935937011, 'lat': 30.979356424949728, 'alt': height }, { 'lng': 121.88228576728763, 'lat': 30.979524343269084, 'alt': height }, { 'lng': 121.88222217520516, 'lat': 30.97969226158844, 'alt': height }, { 'lng': 121.88215858312267, 'lat': 30.979860179907792, 'alt': height }, { 'lng': 121.88209499104019, 'lat': 30.980028098227148, 'alt': height }, { 'lng': 121.88203139895771, 'lat': 30.980196016546504, 'alt': height }, { 'lng': 121.88196780687522, 'lat': 30.98036393486586, 'alt': height }, { 'lng': 121.88190421479274, 'lat': 30.980531853185216, 'alt': height }, { 'lng': 121.88184062271026, 'lat': 30.98069977150457, 'alt': height }, { 'lng': 121.88177703062777, 'lat': 30.980867689823924, 'alt': height }, { 'lng': 121.88171343854529, 'lat': 30.98103560814328, 'alt': height }, { 'lng': 121.8816498464628, 'lat': 30.981203526462636, 'alt': height }, { 'lng': 121.88158625438034, 'lat': 30.981371444781992, 'alt': height }, { 'lng': 121.88152266229785, 'lat': 30.981539363101348, 'alt': height }, { 'lng': 121.88145907021537, 'lat': 30.981707281420704, 'alt': height }, { 'lng': 121.88139547813289, 'lat': 30.981875199740056, 'alt': height }, { 'lng': 121.8813318860504, 'lat': 30.982043118059412, 'alt': height }, { 'lng': 121.88126829396792, 'lat': 30.982211036378768, 'alt': height }, { 'lng': 121.88120470188544, 'lat': 30.982378954698124, 'alt': height }, { 'lng': 121.88114110980295, 'lat': 30.98254687301748, 'alt': height }, { 'lng': 121.88107751772047, 'lat': 30.982714791336836, 'alt': height }, { 'lng': 121.88101392563799, 'lat': 30.982882709656188, 'alt': height }, { 'lng': 121.88095033355552, 'lat': 30.983050627975544, 'alt': height }, { 'lng': 121.88088674147303, 'lat': 30.9832185462949, 'alt': height }, { 'lng': 121.88082314939055, 'lat': 30.983386464614256, 'alt': height }, { 'lng': 121.88075955730807, 'lat': 30.98355438293361, 'alt': height }, { 'lng': 121.88069596522558, 'lat': 30.983722301252968, 'alt': height }, { 'lng': 121.8806323731431, 'lat': 30.98389021957232, 'alt': height }, { 'lng': 121.88056878106062, 'lat': 30.984058137891676, 'alt': height }, { 'lng': 121.88050518897813, 'lat': 30.984226056211032, 'alt': height }, { 'lng': 121.88044159689565, 'lat': 30.984393974530388, 'alt': height }, { 'lng': 121.88037800481317, 'lat': 30.984561892849744, 'alt': height }, { 'lng': 121.8803144127307, 'lat': 30.9847298111691, 'alt': height }, { 'lng': 121.88025082064821, 'lat': 30.984897729488452, 'alt': height }, { 'lng': 121.88018722856573, 'lat': 30.985065647807808, 'alt': height }, { 'lng': 121.88012363648325, 'lat': 30.985233566127164, 'alt': height }, { 'lng': 121.88006004440076, 'lat': 30.98540148444652, 'alt': height }, { 'lng': 121.87999645231828, 'lat': 30.985569402765876, 'alt': height }, { 'lng': 121.8799328602358, 'lat': 30.98573732108523, 'alt': height }, { 'lng': 121.87986926815331, 'lat': 30.985905239404584, 'alt': height }, { 'lng': 121.87980567607083, 'lat': 30.98607315772394, 'alt': height }, { 'lng': 121.87974208398835, 'lat': 30.986241076043296, 'alt': height }, { 'lng': 121.87967849190588, 'lat': 30.98640899436265, 'alt': height }, { 'lng': 121.8796148998234, 'lat': 30.986576912682008, 'alt': height }, { 'lng': 121.87955130774091, 'lat': 30.986744831001364, 'alt': height }, { 'lng': 121.87948771565843, 'lat': 30.98691274932072, 'alt': height }, { 'lng': 121.87942412357594, 'lat': 30.987080667640072, 'alt': height }, { 'lng': 121.87936053149346, 'lat': 30.987248585959428, 'alt': height }, { 'lng': 121.87929693941098, 'lat': 30.987416504278784, 'alt': height }, { 'lng': 121.8792333473285, 'lat': 30.98758442259814, 'alt': height }, { 'lng': 121.87916975524601, 'lat': 30.987752340917496, 'alt': height }, { 'lng': 121.87910616316353, 'lat': 30.98792025923685, 'alt': height }, { 'lng': 121.87904257108106, 'lat': 30.988088177556204, 'alt': height }, { 'lng': 121.87897897899857, 'lat': 30.98825609587556, 'alt': height }, { 'lng': 121.87891538691609, 'lat': 30.988424014194916, 'alt': height }, { 'lng': 121.87885179483361, 'lat': 30.98859193251427, 'alt': height }, { 'lng': 121.87878820275112, 'lat': 30.988759850833627, 'alt': height }, { 'lng': 121.87872461066864, 'lat': 30.988927769152983, 'alt': height }, { 'lng': 121.87866101858616, 'lat': 30.989095687472336, 'alt': height }, { 'lng': 121.87859742650367, 'lat': 30.98926360579169, 'alt': height }, { 'lng': 121.87853383442119, 'lat': 30.989431524111048, 'alt': height }, { 'lng': 121.87847024233871, 'lat': 30.989599442430404, 'alt': height }, { 'lng': 121.87840665025624, 'lat': 30.98976736074976, 'alt': height }, { 'lng': 121.87834305817375, 'lat': 30.989935279069115, 'alt': height }, { 'lng': 121.87827946609127, 'lat': 30.990103197388468, 'alt': height }, { 'lng': 121.87821587400879, 'lat': 30.990271115707824, 'alt': height }, { 'lng': 121.8781522819263, 'lat': 30.99043903402718, 'alt': height }, { 'lng': 121.87808868984382, 'lat': 30.990606952346536, 'alt': height }, { 'lng': 121.87802509776134, 'lat': 30.99077487066589, 'alt': height }, { 'lng': 121.87796150567885, 'lat': 30.990942788985247, 'alt': height }, { 'lng': 121.87789791359637, 'lat': 30.9911107073046, 'alt': height }, { 'lng': 121.87783432151389, 'lat': 30.991278625623956, 'alt': height }, { 'lng': 121.87777072943142, 'lat': 30.99144654394331, 'alt': height }, { 'lng': 121.87770713734893, 'lat': 30.991614462262667, 'alt': height }, { 'lng': 121.87764354526645, 'lat': 30.991782380582023, 'alt': height }, { 'lng': 121.87757995318397, 'lat': 30.99195029890138, 'alt': height }, { 'lng': 121.87751636110148, 'lat': 30.99211821722073, 'alt': height }, { 'lng': 121.877452769019, 'lat': 30.992286135540088, 'alt': height }, { 'lng': 121.87738917693652, 'lat': 30.992454053859444, 'alt': height }, { 'lng': 121.87732558485403, 'lat': 30.9926219721788, 'alt': height }, { 'lng': 121.87726199277155, 'lat': 30.992789890498155, 'alt': height }, { 'lng': 121.87719840068907, 'lat': 30.99295780881751, 'alt': height }, { 'lng': 121.8771348086066, 'lat': 30.993125727136864, 'alt': height }, { 'lng': 121.87707121652412, 'lat': 30.99329364545622, 'alt': height }, { 'lng': 121.87700762444163, 'lat': 30.993461563775575, 'alt': height }, { 'lng': 121.87694403235915, 'lat': 30.99362948209493, 'alt': height }, { 'lng': 121.87688044027666, 'lat': 30.993797400414287, 'alt': height }, { 'lng': 121.87681684819418, 'lat': 30.993965318733643, 'alt': height }, { 'lng': 121.8767532561117, 'lat': 30.994133237052996, 'alt': height }, { 'lng': 121.87668966402921, 'lat': 30.99430115537235, 'alt': height }, { 'lng': 121.87662607194673, 'lat': 30.994469073691707, 'alt': height }, { 'lng': 121.87656247986425, 'lat': 30.994636992011063, 'alt': height }, { 'lng': 121.87649888778178, 'lat': 30.99480491033042, 'alt': height }, { 'lng': 121.8764352956993, 'lat': 30.994972828649775, 'alt': height }, { 'lng': 121.87637170361681, 'lat': 30.99514074696913, 'alt': height }, { 'lng': 121.87630811153433, 'lat': 30.995308665288483, 'alt': height }, { 'lng': 121.87624451945184, 'lat': 30.99547658360784, 'alt': height }, { 'lng': 121.87618092736936, 'lat': 30.995644501927195, 'alt': height }, { 'lng': 121.87611733528688, 'lat': 30.99581242024655, 'alt': height }, { 'lng': 121.8760537432044, 'lat': 30.995980338565907, 'alt': height }, { 'lng': 121.87599015112191, 'lat': 30.996148256885263, 'alt': height }, { 'lng': 121.87592655903943, 'lat': 30.996316175204615, 'alt': height }, { 'lng': 121.87586296695696, 'lat': 30.99648409352397, 'alt': height }, { 'lng': 121.87579937487448, 'lat': 30.996652011843327, 'alt': height }, { 'lng': 121.87573578279199, 'lat': 30.996819930162683, 'alt': height }, { 'lng': 121.87567219070951, 'lat': 30.99698784848204, 'alt': height }, { 'lng': 121.87560859862703, 'lat': 30.997155766801395, 'alt': height }, { 'lng': 121.87554500654454, 'lat': 30.997323685120747, 'alt': height }, { 'lng': 121.87548141446206, 'lat': 30.997491603440103, 'alt': height }, { 'lng': 121.87541782237957, 'lat': 30.99765952175946, 'alt': height }, { 'lng': 121.87535423029709, 'lat': 30.997827440078815, 'alt': height }, { 'lng': 121.87529063821461, 'lat': 30.99799535839817, 'alt': height }, { 'lng': 121.87522704613214, 'lat': 30.998163276717527, 'alt': height }, { 'lng': 121.87516345404966, 'lat': 30.99833119503688, 'alt': height }, { 'lng': 121.87509986196717, 'lat': 30.998499113356235, 'alt': height }, { 'lng': 121.87503626988469, 'lat': 30.99866703167559, 'alt': height }, { 'lng': 121.8749726778022, 'lat': 30.998834949994947, 'alt': height }, { 'lng': 121.87490908571972, 'lat': 30.999002868314303, 'alt': height }, { 'lng': 121.87484549363724, 'lat': 30.99917078663366, 'alt': height }, { 'lng': 121.87478190155475, 'lat': 30.99933870495301, 'alt': height }, { 'lng': 121.87471830947227, 'lat': 30.999506623272367, 'alt': height }, { 'lng': 121.87465471738979, 'lat': 30.999674541591723, 'alt': height }, { 'lng': 121.87459112530732, 'lat': 30.99984245991108, 'alt': height }, { 'lng': 121.87452753322484, 'lat': 31.000010378230435, 'alt': height }, { 'lng': 121.87446394114235, 'lat': 31.00017829654979, 'alt': height }, { 'lng': 121.87440034905987, 'lat': 31.000346214869143, 'alt': height }, { 'lng': 121.87433675697739, 'lat': 31.0005141331885, 'alt': height }, { 'lng': 121.8742731648949, 'lat': 31.000682051507855, 'alt': height }, { 'lng': 121.87420957281242, 'lat': 31.00084996982721, 'alt': height }, { 'lng': 121.87414598072993, 'lat': 31.001017888146567, 'alt': height }, { 'lng': 121.87408238864745, 'lat': 31.001185806465923, 'alt': height }, { 'lng': 121.87401879656497, 'lat': 31.001353724785275, 'alt': height }, { 'lng': 121.8739552044825, 'lat': 31.00152164310463, 'alt': height }, { 'lng': 121.87389161240002, 'lat': 31.001689561423987, 'alt': height }, { 'lng': 121.87382802031753, 'lat': 31.001857479743343, 'alt': height }, { 'lng': 121.87376442823505, 'lat': 31.0020253980627, 'alt': height }, { 'lng': 121.87370083615257, 'lat': 31.002193316382055, 'alt': height }, { 'lng': 121.87363724407008, 'lat': 31.002361234701407, 'alt': height }, { 'lng': 121.8735736519876, 'lat': 31.002529153020763, 'alt': height }, { 'lng': 121.87351005990512, 'lat': 31.00269707134012, 'alt': height }, { 'lng': 121.87344646782263, 'lat': 31.002864989659475, 'alt': height }, { 'lng': 121.87338287574015, 'lat': 31.00303290797883, 'alt': height }, { 'lng': 121.87331928365768, 'lat': 31.003200826298187, 'alt': height }, { 'lng': 121.8732556915752, 'lat': 31.00336874461754, 'alt': height }, { 'lng': 121.87319209949271, 'lat': 31.003536662936895, 'alt': height }, { 'lng': 121.87312850741023, 'lat': 31.00370458125625, 'alt': height }, { 'lng': 121.87306491532775, 'lat': 31.003872499575607, 'alt': height }, { 'lng': 121.87298604666171, 'lat': 31.004025267585202, 'alt': height }, { 'lng': 121.87290717799567, 'lat': 31.004178035594798, 'alt': height }, { 'lng': 121.87282830932963, 'lat': 31.004330803604393, 'alt': height }, { 'lng': 121.8727494406636, 'lat': 31.004483571613985, 'alt': height }, { 'lng': 121.87267057199756, 'lat': 31.00463633962358, 'alt': height }, { 'lng': 121.87259170333152, 'lat': 31.004789107633176, 'alt': height }, { 'lng': 121.87251283466549, 'lat': 31.00494187564277, 'alt': height }, { 'lng': 121.87243359678646, 'lat': 31.00509570129031, 'alt': height }, { 'lng': 121.87235435890746, 'lat': 31.005249526937842, 'alt': height }, { 'lng': 121.87227512102844, 'lat': 31.00540335258538, 'alt': height }, { 'lng': 121.87219588314942, 'lat': 31.005557178232916, 'alt': height }, { 'lng': 121.8721166452704, 'lat': 31.005711003880453, 'alt': height }, { 'lng': 121.87203740739139, 'lat': 31.005864829527987, 'alt': height }, { 'lng': 121.87195816951237, 'lat': 31.006018655175524, 'alt': height }, { 'lng': 121.87188388486977, 'lat': 31.006164180994222, 'alt': height }, { 'lng': 121.87180960022718, 'lat': 31.00630970681292, 'alt': height }, { 'lng': 121.87173531558457, 'lat': 31.006455232631616, 'alt': height }, { 'lng': 121.87166103094198, 'lat': 31.006600758450315, 'alt': height }, { 'lng': 121.87158674629939, 'lat': 31.006746284269013, 'alt': height }, { 'lng': 121.87152535376872, 'lat': 31.006865759049788, 'alt': height }, { 'lng': 121.87146396123804, 'lat': 31.006985233830562, 'alt': height }, { 'lng': 121.87140256870737, 'lat': 31.007104708611337, 'alt': height }, { 'lng': 121.87132648775162, 'lat': 31.00725226229248, 'alt': height }, { 'lng': 121.87125040679587, 'lat': 31.007399815973617, 'alt': height }, { 'lng': 121.87117432584012, 'lat': 31.00754736965476, 'alt': height }, { 'lng': 121.87109824488437, 'lat': 31.0076949233359, 'alt': height }, { 'lng': 121.87102216392861, 'lat': 31.00784247701704, 'alt': height }, { 'lng': 121.87094608297286, 'lat': 31.00799003069818, 'alt': height }, { 'lng': 121.87087000201711, 'lat': 31.008137584379323, 'alt': height }, { 'lng': 121.87079392106136, 'lat': 31.00828513806046, 'alt': height }, { 'lng': 121.87071784010561, 'lat': 31.008432691741604, 'alt': height }, { 'lng': 121.87064175914986, 'lat': 31.008580245422745, 'alt': height }, { 'lng': 121.87056567819411, 'lat': 31.008727799103884, 'alt': height }, { 'lng': 121.87048959723836, 'lat': 31.008875352785026, 'alt': height }, { 'lng': 121.87041818466254, 'lat': 31.00901428657044, 'alt': height }, { 'lng': 121.87034677208672, 'lat': 31.009153220355852, 'alt': height }, { 'lng': 121.8702753595109, 'lat': 31.009292154141267, 'alt': height }, { 'lng': 121.87020394693509, 'lat': 31.009431087926682, 'alt': height }, { 'lng': 121.87013253435927, 'lat': 31.009570021712097, 'alt': height }, { 'lng': 121.87006112178345, 'lat': 31.00970895549751, 'alt': height }, { 'lng': 121.86998970920763, 'lat': 31.009847889282923, 'alt': height }, { 'lng': 121.86991558051913, 'lat': 31.00999191140717, 'alt': height }, { 'lng': 121.86984145183064, 'lat': 31.010135933531416, 'alt': height }, { 'lng': 121.86976732314214, 'lat': 31.010279955655662, 'alt': height }, { 'lng': 121.86969319445365, 'lat': 31.010423977779908, 'alt': height }, { 'lng': 121.86961906576515, 'lat': 31.010567999904154, 'alt': height }, { 'lng': 121.86954493707665, 'lat': 31.0107120220284, 'alt': height }, { 'lng': 121.86947080838816, 'lat': 31.010856044152646, 'alt': height }, { 'lng': 121.86939667969966, 'lat': 31.011000066276893, 'alt': height }]
    }
]);


/***/ }),

/***/ "./src/app/pages/welcome/pages/track/track.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/welcome/pages/track/track.component.ts ***!
  \**************************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _flyPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flyPath */ "./src/app/pages/welcome/pages/track/flyPath.ts");
/* harmony import */ var _func_trackAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../func/trackAnimation */ "./src/app/pages/welcome/func/trackAnimation.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");
/*
 * @Author: your name
 * @Date: 2021-11-10 20:17:00
 * @LastEditTime: 2021-11-14 00:22:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ngcesium\src\app\pages\welcome\pages\track\track.component.ts
 */








class TrackComponent {
    constructor() { }
    ngOnInit() {
    }
    mapLoaded(e) {
        this.viewer = e;
    }
    julianDateFunc() {
        // 天文朱利安日期 与js Date() 相差8h，朱利安时间=UTC=GMT 北京时间=UTC+8=GMT+8
        let str = '2000-01-01 12:00:00';
        let julianDate = Cesium.JulianDate.fromDate(new Date(str), new Cesium.JulianDate());
        let fmJulian = julianDate.toString().replace(/T/, ' ').replace(/Z/, '').replace(/\.\d+/g, '');
        console.log(julianDate);
        // 添加时间
        let addDays = Cesium.JulianDate.addDays(julianDate, 1, new Cesium.JulianDate());
        console.log("添加天数：", addDays.dayNumber, addDays.secondsOfDay);
        let addHours = Cesium.JulianDate.addHours(julianDate, 1, new Cesium.JulianDate());
        console.log("添加小时：", addHours.dayNumber, addHours.secondsOfDay);
        let addSeconds = Cesium.JulianDate.addSeconds(julianDate, 1, new Cesium.JulianDate());
        console.log("添加秒数：", addSeconds.dayNumber, addSeconds.secondsOfDay);
        // 时间差
        let diffDays = Cesium.JulianDate.daysDifference(addDays, addHours);
        console.log("相差天数：", diffDays);
        let diffSeconds = Cesium.JulianDate.secondsDifference(addHours, addSeconds);
        console.log("相差秒数：", diffSeconds);
    }
    scanLine() {
        this.viewer.scene.globe.enableLighting = true; // 光照
        this.viewer.scene.globe.depthTestAgainstTerrain = true; // 深度检测
        this.viewer.scene.globe.showGroundAtmosphere = false; // 地球大气
        var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.73584007025329), Cesium.Math.toRadians(30.88262548999319), 1000);
        var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1);
        this.addRedMoveLine(this.viewer, CartographicCenter, 100, scanColor, 1000);
    }
    /*
    添加扫描线 depth关闭   lon:-74.01296152309055 lat:40.70524201566827 height:129.14366696393927
    viewer
    cartographicCenter 扫描中心
    maxRadius 最大半径 米
    scanColor 扫描颜色
    duration 持续时间 毫秒
  */
    addRedMoveLine(viewer, cartographicCenter, maxRadius, scanColor, duration) {
        var ScanSegmentShader = "uniform sampler2D colorTexture;\n" +
            "uniform sampler2D depthTexture;\n" +
            "varying vec2 v_textureCoordinates;\n" +
            "uniform vec4 u_scanCenterEC;\n" +
            "uniform vec3 u_scanPlaneNormalEC;\n" +
            "uniform float u_radius;\n" +
            "uniform vec4 u_scanColor;\n" +
            "vec4 toEye(in vec2 uv, in float depth)\n" +
            " {\n" +
            " vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n" +
            " vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n" +
            " posInCamera =posInCamera / posInCamera.w;\n" +
            " return posInCamera;\n" +
            " }\n" +
            "vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n" +
            "{\n" +
            "vec3 v01 = point -planeOrigin;\n" +
            "float d = dot(planeNormal, v01) ;\n" +
            "return (point - planeNormal * d);\n" +
            "}\n" +
            "float getDepth(in vec4 depth)\n" +
            "{\n" +
            "float z_window = czm_unpackDepth(depth);\n" +
            "z_window = czm_reverseLogDepth(z_window);\n" +
            "float n_range = czm_depthRange.near;\n" +
            "float f_range = czm_depthRange.far;\n" +
            "return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n" +
            "}\n" +
            "void main()\n" +
            "{\n" +
            "gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n" +
            "float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n" +
            "vec4 viewPos = toEye(v_textureCoordinates, depth);\n" +
            "vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n" +
            "float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n" +
            "if(dis < u_radius)\n" +
            "{\n" +
            "float f = 1.0 -abs(u_radius - dis) / u_radius;\n" +
            "f = pow(f, 4.0);\n" +
            "gl_FragColor = mix(gl_FragColor, u_scanColor, f);\n" +
            "}\n" +
            "}\n";
        var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter);
        var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1);
        var _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500);
        var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1);
        var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1);
        var _time = (new Date()).getTime();
        var _scratchCartesian4Center = new Cesium.Cartesian4();
        var _scratchCartesian4Center1 = new Cesium.Cartesian4();
        var _scratchCartesian3Normal = new Cesium.Cartesian3();
        var ScanPostStage = new Cesium.PostProcessStage({
            fragmentShader: ScanSegmentShader,
            uniforms: {
                u_scanCenterEC: function () {
                    return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                },
                u_scanPlaneNormalEC: function () {
                    var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                    var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1);
                    _scratchCartesian3Normal.x = temp1.x - temp.x;
                    _scratchCartesian3Normal.y = temp1.y - temp.y;
                    _scratchCartesian3Normal.z = temp1.z - temp.z;
                    Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal);
                    return _scratchCartesian3Normal;
                },
                u_radius: function () {
                    return maxRadius * (((new Date()).getTime() - _time) % duration) / duration;
                },
                u_scanColor: scanColor
            }
        });
        viewer.scene.postProcessStages.add(ScanPostStage);
    }
    createObj1() {
        this.julianDateFunc();
        const model = this.viewer.entities.add({
            id: 'zardcar',
            model: {
                uri: 'assets/models/gltf/Car1120.gltf',
                minimumPixelSize: 64,
            },
            point: {
                pixelSize: 1,
                color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
            }
        });
        const model1 = this.viewer.entities.add({
            id: 'zardcar1',
            model: {
                uri: 'assets/models/gltf/Car1120.gltf',
                minimumPixelSize: 64,
            },
            point: {
                pixelSize: 1,
                color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
            }
        });
        const startTime = Cesium.JulianDate.fromDate(new Date());
        const time = Cesium.JulianDate.addSeconds(startTime, 1, new Cesium.JulianDate());
        const dataArr = _flyPath__WEBPACK_IMPORTED_MODULE_1__["default"][0].pathPositionArr;
        const dataArr1 = [
            { lng: 121.1, lat: 31.1, alt: 100 },
            { lng: 121.2, lat: 31.2, alt: 100 },
            { lng: 121.2, lat: 31.1, alt: 100 },
            { lng: 121.1, lat: 31.3, alt: 100 },
            { lng: 121.16, lat: 31.39, alt: 100 },
            { lng: 121.21, lat: 31.13, alt: 200 },
            { lng: 121.29, lat: 31.31, alt: 200 },
        ];
        this.trackObj = new _func_trackAnimation__WEBPACK_IMPORTED_MODULE_2__["TrackAnimation"]({
            viewer: this.viewer,
            pathArr: dataArr1,
            entity: model,
            runTime: startTime
        });
        let trackObj1 = new _func_trackAnimation__WEBPACK_IMPORTED_MODULE_2__["TrackAnimation"]({
            viewer: this.viewer,
            pathArr: dataArr1,
            entity: model1,
            runTime: time
        });
    }
    createObj() {
        var pathPosition = new Cesium.SampledPositionProperty();
        var entityPath = this.viewer.entities.add({
            position: pathPosition,
            name: 'path',
            path: {
                show: true,
                leadTime: 0,
                trailTime: 60,
                width: 10,
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.3,
                    color: Cesium.Color.PALEGOLDENROD
                })
            }
        });
        let lng = 121.1;
        let lat = 31.1;
        let alt = 1;
        this.viewer.trackedEntity = entityPath;
        this.viewer.clock.shouldAnimate = true;
        // setInterval(()=>{
        //   const position = Cesium.Cartesian3.fromDegrees(lng, lat,alt);
        //   entityPath.position.addSample(Cesium.JulianDate.now(), position);
        //   lng+= 0.001;
        //   lat+= 0.001;
        //   alt+= 0.001;
        // },100)
        // lng = 121.2;
        // lat = 31.2;
        // alt =11;
        // let addSeconds= Cesium.JulianDate.addSeconds(Cesium.JulianDate.now(),3,new Cesium.JulianDate());
        // const position = Cesium.Cartesian3.fromDegrees(lng, lat,alt);
        // entityPath.position.addSample(addSeconds, position);
        // this.viewer.scene.preUpdate.addEventListener((scene, time)=>{
        //   // let speedVector = Cesium.Cartesian3.multiplyByScalar(Cesium.Cartesian3.UNIT_X, speed / 10, speedVector);
        //   // let position = Cesium.Matrix4.multiplyByPoint(planePrimitive.modelMatrix, speedVector, position);
        //   const position = Cesium.Cartesian3.fromDegrees(lng, lat,alt);
        //   entityPath.position.addSample(Cesium.JulianDate.now(), position);
        //   // Cesium.Transforms.headingPitchRollToFixedFrame(position, hpRoll, Cesium.Ellipsoid.WGS84, fixedFrameTransform, planePrimitive.modelMatrix);
        //   lng+= 0.001;
        //   lat+= 0.001;
        //   alt+= 0.001;
        // });
    }
    play() {
        this.viewer.clock.shouldAnimate = true;
    }
    pause() {
        this.viewer.clock.shouldAnimate = false;
    }
    firstPerson() {
        this.trackObj.firstPerson();
    }
    thirdPerson() {
        this.trackObj.thirdPerson();
    }
    removeFollowCamera() {
        this.trackObj.removeFollowCamera();
    }
}
TrackComponent.ɵfac = function TrackComponent_Factory(t) { return new (t || TrackComponent)(); };
TrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackComponent, selectors: [["app-track"]], decls: 15, vars: 0, consts: [[2, "margin", "10px"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "mapLoaded"]], template: function TrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_2_listener() { return ctx.createObj(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u521B\u5EFA\u8F66\u8F86");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_4_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u64AD\u653E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_6_listener() { return ctx.pause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u6682\u505C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_8_listener() { return ctx.thirdPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u7B2C\u4E09\u4EBA\u79F0\u81EA\u7531\u89C6\u89D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_10_listener() { return ctx.firstPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u7B2C\u4E00\u4EBA\u79F0\u89C6\u89D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackComponent_Template_button_click_12_listener() { return ctx.removeFollowCamera(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u89E3\u9664\u89C6\u89D2\u8DDF\u968F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-init-cesium", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapLoaded", function TrackComponent_Template_app_init_cesium_mapLoaded_14_listener($event) { return ctx.mapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_6__["InitCesiumComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvcGFnZXMvdHJhY2svdHJhY2suY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-track',
                templateUrl: './track.component.html',
                styleUrls: ['./track.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/add-entity/add-entity.component */ "./src/app/pages/welcome/pages/add-entity/add-entity.component.ts");
/* harmony import */ var _pages_add_gltf_add_gltf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-gltf/add-gltf.component */ "./src/app/pages/welcome/pages/add-gltf/add-gltf.component.ts");
/* harmony import */ var _pages_tiles3d_tiles3d_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tiles3d/tiles3d.component */ "./src/app/pages/welcome/pages/tiles3d/tiles3d.component.ts");
/* harmony import */ var _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/camera/camera.component */ "./src/app/pages/welcome/pages/camera/camera.component.ts");
/* harmony import */ var _pages_track_track_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/track/track.component */ "./src/app/pages/welcome/pages/track/track.component.ts");
/* harmony import */ var _pages_base_map_base_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/base-map/base-map.component */ "./src/app/pages/welcome/pages/base-map/base-map.component.ts");
/* harmony import */ var _pages_cavas_cavas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/cavas/cavas.component */ "./src/app/pages/welcome/pages/cavas/cavas.component.ts");
/* harmony import */ var _pages_model_material_model_material_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/model-material/model-material.component */ "./src/app/pages/welcome/pages/model-material/model-material.component.ts");
/* harmony import */ var _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/demo/demo.component */ "./src/app/pages/welcome/pages/demo/demo.component.ts");
/*
 * @Author: your name
 * @Date: 2021-10-12 17:02:58
 * @LastEditTime: 2021-10-12 17:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ngcesium\src\app\pages\welcome\welcome-routing.module.ts
 */














const routes = [
    {
        path: '',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
        children: [{
                path: '', redirectTo: 'demo',
            },
            {
                path: 'AddEntity', component: _pages_add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_3__["AddEntityComponent"],
                data: {
                    breadcrumb: '添加实体'
                },
            },
            {
                path: 'AddGltf', component: _pages_add_gltf_add_gltf_component__WEBPACK_IMPORTED_MODULE_4__["AddGltfComponent"],
                data: {
                    breadcrumb: '添加Gltf'
                },
            },
            {
                path: 'Add3Dtiles', component: _pages_tiles3d_tiles3d_component__WEBPACK_IMPORTED_MODULE_5__["Tiles3dComponent"],
                data: {
                    breadcrumb: '添加3Dtiles'
                },
            },
            {
                path: 'track', component: _pages_track_track_component__WEBPACK_IMPORTED_MODULE_7__["TrackComponent"],
                data: {
                    breadcrumb: '轨迹运动'
                },
            },
            {
                path: 'Camera', component: _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_6__["CameraComponent"],
                data: {
                    breadcrumb: '相机'
                },
            },
            {
                path: 'baseMap', component: _pages_base_map_base_map_component__WEBPACK_IMPORTED_MODULE_8__["BaseMapComponent"],
                data: {
                    breadcrumb: '底图'
                },
            },
            {
                path: 'ModelMaterial', component: _pages_model_material_model_material_component__WEBPACK_IMPORTED_MODULE_10__["ModelMaterialComponent"],
                data: {
                    breadcrumb: '模型材质'
                },
            },
            {
                path: 'cavas', component: _pages_cavas_cavas_component__WEBPACK_IMPORTED_MODULE_9__["CavasComponent"],
                data: {
                    breadcrumb: 'cavas'
                },
            },
            {
                path: 'demo', component: _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["DemoComponent"],
                data: {
                    breadcrumb: 'demo'
                },
            }
        ]
    }
];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 2, vars: 0, consts: [[1, "inner-content"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/init-cesium/init-cesium.component */ "./src/app/pages/welcome/pages/init-cesium/init-cesium.component.ts");
/* harmony import */ var _pages_add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-entity/add-entity.component */ "./src/app/pages/welcome/pages/add-entity/add-entity.component.ts");
/* harmony import */ var _pages_add_gltf_add_gltf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add-gltf/add-gltf.component */ "./src/app/pages/welcome/pages/add-gltf/add-gltf.component.ts");
/* harmony import */ var _pages_tiles3d_tiles3d_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tiles3d/tiles3d.component */ "./src/app/pages/welcome/pages/tiles3d/tiles3d.component.ts");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/camera/camera.component */ "./src/app/pages/welcome/pages/camera/camera.component.ts");
/* harmony import */ var _pages_track_track_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/track/track.component */ "./src/app/pages/welcome/pages/track/track.component.ts");
/* harmony import */ var _pages_base_map_base_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/base-map/base-map.component */ "./src/app/pages/welcome/pages/base-map/base-map.component.ts");
/* harmony import */ var _pages_cavas_cavas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/cavas/cavas.component */ "./src/app/pages/welcome/pages/cavas/cavas.component.ts");
/* harmony import */ var _pages_model_material_model_material_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/model-material/model-material.component */ "./src/app/pages/welcome/pages/model-material/model-material.component.ts");
/* harmony import */ var _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/demo/demo.component */ "./src/app/pages/welcome/pages/demo/demo.component.ts");


















class WelcomeModule {
}
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"], _pages_init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_3__["InitCesiumComponent"], _pages_add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_4__["AddEntityComponent"], _pages_add_gltf_add_gltf_component__WEBPACK_IMPORTED_MODULE_5__["AddGltfComponent"], _pages_tiles3d_tiles3d_component__WEBPACK_IMPORTED_MODULE_6__["Tiles3dComponent"], _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_11__["CameraComponent"], _pages_track_track_component__WEBPACK_IMPORTED_MODULE_12__["TrackComponent"], _pages_base_map_base_map_component__WEBPACK_IMPORTED_MODULE_13__["BaseMapComponent"], _pages_cavas_cavas_component__WEBPACK_IMPORTED_MODULE_14__["CavasComponent"], _pages_model_material_model_material_component__WEBPACK_IMPORTED_MODULE_15__["ModelMaterialComponent"], _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["DemoComponent"]], imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                ],
                declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"], _pages_init_cesium_init_cesium_component__WEBPACK_IMPORTED_MODULE_3__["InitCesiumComponent"], _pages_add_entity_add_entity_component__WEBPACK_IMPORTED_MODULE_4__["AddEntityComponent"], _pages_add_gltf_add_gltf_component__WEBPACK_IMPORTED_MODULE_5__["AddGltfComponent"], _pages_tiles3d_tiles3d_component__WEBPACK_IMPORTED_MODULE_6__["Tiles3dComponent"], _pages_camera_camera_component__WEBPACK_IMPORTED_MODULE_11__["CameraComponent"], _pages_track_track_component__WEBPACK_IMPORTED_MODULE_12__["TrackComponent"], _pages_base_map_base_map_component__WEBPACK_IMPORTED_MODULE_13__["BaseMapComponent"], _pages_cavas_cavas_component__WEBPACK_IMPORTED_MODULE_14__["CavasComponent"], _pages_model_material_model_material_component__WEBPACK_IMPORTED_MODULE_15__["ModelMaterialComponent"], _pages_demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["DemoComponent"]],
                exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map