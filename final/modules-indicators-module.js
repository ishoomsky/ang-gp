(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-indicators-module"],{

/***/ "E+m4":
/*!***************************************************!*\
  !*** ./src/app/services/indicators.datasource.ts ***!
  \***************************************************/
/*! exports provided: IndicatorsDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsDatasource", function() { return IndicatorsDatasource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class IndicatorsDatasource {
    constructor(http) {
        this.http = http;
    }
    getIndicatorsData() {
        return (this.http.get('assets/json/indicators.json'));
    }
}
IndicatorsDatasource.ɵfac = function IndicatorsDatasource_Factory(t) { return new (t || IndicatorsDatasource)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IndicatorsDatasource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndicatorsDatasource, factory: IndicatorsDatasource.ɵfac });


/***/ }),

/***/ "Hc/9":
/*!************************************************************************!*\
  !*** ./src/app/components/indicators/indicator/indicator.component.ts ***!
  \************************************************************************/
/*! exports provided: IndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorComponent", function() { return IndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function IndicatorComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorComponent_div_11_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const parameter_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.setActiveParameterId(parameter_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("group-name-unit--normal", parameter_r2.state === "normal")("group-name-unit--danger", parameter_r2.state === "danger")("group-name-unit--active", ctx_r1.activeParameterId === parameter_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("group-name-unit__item_name--normal", parameter_r2.state === "normal")("group-name-unit__item_name--good", parameter_r2.state === "good")("group-name-unit__item_name--danger", parameter_r2.state === "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r2 == null ? null : parameter_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r2 == null ? null : parameter_r2.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item__fact--normal", parameter_r2.state === "normal")("item__fact--danger", parameter_r2.state === "danger")("item__fact--active", ctx_r1.activeParameterId === parameter_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r2 == null ? null : parameter_r2.fact.toLocaleString("ru-RU"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item__model--normal", parameter_r2.state === "normal")("item__model--active", ctx_r1.activeParameterId === parameter_r2.id)("item__model--danger", parameter_r2.state === "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r2 == null ? null : parameter_r2.model.toLocaleString("ru-RU"), " ");
} }
function IndicatorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorComponent_div_11_div_1_Template, 10, 28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.props == null ? null : ctx_r0.props.parameters);
} }
const _c0 = function (a0, a1) { return { "parameter-icon__svg-element--normal": a0, "parameter-icon__svg-element--active": a1 }; };
class IndicatorComponent {
    constructor() {
        this.toggleIndicator = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeParameterIdOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setActiveParameterId(id) {
        if (this.activeParameterId === id) {
            this.activeParameterIdOutput.emit(null);
            return;
        }
        this.activeParameterIdOutput.emit(id);
    }
    getDeviation() {
        let deviation = 0;
        this.props.parameters.forEach(({ fact, model }) => {
            if (fact > model) {
                deviation++;
            }
        });
        return deviation;
    }
}
IndicatorComponent.ɵfac = function IndicatorComponent_Factory(t) { return new (t || IndicatorComponent)(); };
IndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorComponent, selectors: [["app-indicator"]], inputs: { props: "props", isOpen: "isOpen", activeParameterId: "activeParameterId" }, outputs: { toggleIndicator: "toggleIndicator", activeParameterIdOutput: "activeParameterIdChange" }, decls: 12, vars: 9, consts: [[1, "indicator-container"], [1, "indicator-container__header", 3, "click"], [1, "header__parameter-icon"], ["width", "22", "height", "22", "viewBox", "0 0 22 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "ngClass"], ["d", "M15.9489 15.9497C13.2123 18.6863 8.78586 18.6863 6.04936 15.9497C3.31285 13.2132 3.31285 8.78676 6.04936 6.05025C8.78586 3.31375 13.2123 3.31375 15.9489 6.05025C18.6854 8.78676 18.6854 13.2132 15.9489 15.9497Z", "stroke", "#606580", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.9991 7.78975L10.9991 14.2103", "stroke", "#606580", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.78882 11L14.2093 11", "stroke", "#606580", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "header__parameter-title"], [1, "header__parameter-deviance"], ["class", "indicator-container__content", 4, "ngIf"], [1, "indicator-container__content"], ["class", "content__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "content__item", 3, "click"], [1, "item__group-name-unit"], [1, "group-name-unit__item_name"], [1, "group-name-unit__item__unit"], [1, "item__fact"], [1, "item__model"]], template: function IndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorComponent_Template_div_click_1_listener() { return ctx.toggleIndicator.emit(ctx.props.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IndicatorComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.isOpen === false, ctx.isOpen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("title--active", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.props == null ? null : ctx.props.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0439: ", ctx.getDeviation(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".indicator-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #8c99b2;\n  font-family: inherit;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.indicator-container__header[_ngcontent-%COMP%] {\n  height: 30px;\n  position: relative;\n  padding-right: 17px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: #272a38;\n  border-left: 2px solid #606580;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.header__parameter-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.parameter-icon__svg-element--normal[_ngcontent-%COMP%] {\n  transition: transform 0.1s linear;\n  transform: rotate(0deg);\n}\n\n.parameter-icon__svg-element--active[_ngcontent-%COMP%] {\n  transition: transform 0.1s linear;\n  transform: rotate(135deg);\n}\n\n.header__parameter-title[_ngcontent-%COMP%] {\n  margin-left: 35px;\n}\n\n.title--active[_ngcontent-%COMP%] {\n  color: #d7e2f2;\n}\n\n.header__parameter-deviance[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.indicator-container__content[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  font-family: inherit;\n}\n\n.indicator-container__content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.indicator-container__content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n.content__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.item--normal[_ngcontent-%COMP%] {\n  border-left: 2px solid #606580;\n}\n\n.item--danger[_ngcontent-%COMP%] {\n  border-left: 2px solid #f7931e;\n}\n\n.item--active[_ngcontent-%COMP%] {\n  border-left: 2px solid #0089ff;\n}\n\n.content__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #272a38;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  min-height: 32px;\n  margin-right: 2px;\n}\n\n.item__group-name-unit[_ngcontent-%COMP%] {\n  flex: 3;\n  display: flex;\n  flex-direction: row;\n}\n\n.group-name-unit--normal[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-left: 2px solid #606580;\n  border-right: none;\n}\n\n.group-name-unit--danger[_ngcontent-%COMP%] {\n  border: 1px solid #f7931e;\n  border-left: 2px solid #f7931e;\n  border-right: none;\n}\n\n.group-name-unit--active[_ngcontent-%COMP%] {\n  border: 1px solid #0089ff;\n  border-left: 2px solid #0089ff;\n  border-right: none;\n}\n\n.group-name-unit__item_name[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  flex: 3;\n}\n\n.group-name-unit__item_name--active[_ngcontent-%COMP%] {\n  color: #d7e2f2;\n}\n\n.group-name-unit__item__unit[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.item__fact[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid transparent;\n}\n\n\n\n.item__fact--danger[_ngcontent-%COMP%] {\n  border-top: 1px solid #f7931e;\n  border-bottom: 1px solid #f7931e;\n}\n\n.item__fact--active[_ngcontent-%COMP%] {\n  border-top: 1px solid #0089ff;\n  border-bottom: 1px solid #0089ff;\n}\n\n.item__model[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.item__model--normal[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-left: none;\n}\n\n.item__model--danger[_ngcontent-%COMP%] {\n  border: 1px solid #f7931e;\n  border-left: none;\n}\n\n.item__model--active[_ngcontent-%COMP%] {\n  border: 1px solid #0089ff;\n  border-left: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7O0VBRXpCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUNBOzs7R0FHRzs7QUFFSDtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImluZGljYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGljYXRvci1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzhjOTliMjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaW5kaWNhdG9yLWNvbnRhaW5lcl9faGVhZGVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJhMzg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzYwNjU4MDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyX19wYXJhbWV0ZXItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhcmFtZXRlci1pY29uX19zdmctZWxlbWVudC0tbm9ybWFsIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgbGluZWFyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi5wYXJhbWV0ZXItaWNvbl9fc3ZnLWVsZW1lbnQtLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuLmhlYWRlcl9fcGFyYW1ldGVyLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG4udGl0bGUtLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZDdlMmYyO1xufVxuXG4uaGVhZGVyX19wYXJhbWV0ZXItZGV2aWFuY2Uge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmluZGljYXRvci1jb250YWluZXJfX2NvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuLmluZGljYXRvci1jb250YWluZXJfX2NvbnRlbnQgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaW5kaWNhdG9yLWNvbnRhaW5lcl9fY29udGVudCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY29udGVudF9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS0tbm9ybWFsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjA2NTgwO1xufVxuXG4uaXRlbS0tZGFuZ2VyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZjc5MzFlO1xufVxuXG4uaXRlbS0tYWN0aXZlIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA4OWZmO1xufVxuXG4uY29udGVudF9faXRlbSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJhMzg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLml0ZW1fX2dyb3VwLW5hbWUtdW5pdCB7XG4gIGZsZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5ncm91cC1uYW1lLXVuaXQtLW5vcm1hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2MDY1ODA7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmdyb3VwLW5hbWUtdW5pdC0tZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3OTMxZTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZjc5MzFlO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5ncm91cC1uYW1lLXVuaXQtLWFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg5ZmY7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODlmZjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uZ3JvdXAtbmFtZS11bml0X19pdGVtX25hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgZmxleDogMztcbn1cbi5ncm91cC1uYW1lLXVuaXRfX2l0ZW1fbmFtZS0tYWN0aXZlIHtcbiAgY29sb3I6ICNkN2UyZjI7XG59XG5cbi5ncm91cC1uYW1lLXVuaXRfX2l0ZW1fX3VuaXQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pdGVtX19mYWN0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLyogLml0ZW1fX2ZhY3QtLWdvb2Qge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn0gKi9cblxuLml0ZW1fX2ZhY3QtLWRhbmdlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjc5MzFlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y3OTMxZTtcbn1cblxuLml0ZW1fX2ZhY3QtLWFjdGl2ZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA4OWZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwODlmZjtcbn1cblxuLml0ZW1fX21vZGVsIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbV9fbW9kZWwtLW5vcm1hbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5pdGVtX19tb2RlbC0tZGFuZ2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3OTMxZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5pdGVtX19tb2RlbC0tYWN0aXZlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwODlmZjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "slcZ":
/*!***************************************************************!*\
  !*** ./src/app/components/indicators/indicators.component.ts ***!
  \***************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_indicators_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/indicators.datasource */ "E+m4");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _indicator_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicator/indicator.component */ "Hc/9");





function IndicatorsComponent_app_indicator_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-indicator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleIndicator", function IndicatorsComponent_app_indicator_24_Template_app_indicator_toggleIndicator_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.useIndicator($event); })("activeParameterIdChange", function IndicatorsComponent_app_indicator_24_Template_app_indicator_activeParameterIdChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activeParameterId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", indicator_r1)("isOpen", ctx_r0.isOpenedIndicator(indicator_r1.id))("activeParameterId", ctx_r0.activeParameterId);
} }
class IndicatorsComponent {
    constructor(indicatorsDatasource) {
        this.indicatorsDatasource = indicatorsDatasource;
        this.subscription = null;
        this.indicators = null;
        this.openedIndicators = [];
        this._activeParameterId = null;
        this.subscription = indicatorsDatasource
            .getIndicatorsData()
            .subscribe((data) => {
            this.indicators = data;
        });
    }
    //banana box
    set activeParameterId(id) {
        this._activeParameterId = id;
    }
    get activeParameterId() {
        return this._activeParameterId;
    }
    useIndicator(id) {
        let findId = this.openedIndicators.findIndex((i) => i === id);
        if (findId !== -1) {
            this.openedIndicators.splice(findId, 1);
            return;
        }
        this.openedIndicators.push(id);
    }
    isOpenedIndicator(id) {
        return this.openedIndicators.includes(id);
    }
    ngOnDestroy() {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}
IndicatorsComponent.ɵfac = function IndicatorsComponent_Factory(t) { return new (t || IndicatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_indicators_datasource__WEBPACK_IMPORTED_MODULE_1__["IndicatorsDatasource"])); };
IndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorsComponent, selectors: [["app-indicators"]], decls: 25, vars: 1, consts: [[1, "page-container"], [1, "indicators-container"], [1, "indicators-container__header"], [1, "header__icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.5 7.2H13.5C13.7 8.2 14.6 8.9 15.6 8.9C16.6 8.9 17.5 8.2 17.7 7.2H19.4C19.7 7.2 19.9 7 19.9 6.7C19.9 6.4 19.7 6.2 19.4 6.2H17.7C17.5 5.2 16.6 4.5 15.6 4.5C14.6 4.5 13.7 5.2 13.5 6.2H4.5C4.2 6.2 4 6.4 4 6.7C4 7 4.3 7.2 4.5 7.2ZM15.7 5.5C16.4 5.5 16.9 6 16.9 6.7C16.9 7.4 16.4 7.9 15.7 7.9C15 7.9 14.5 7.4 14.5 6.7C14.5 6 15 5.5 15.7 5.5Z", "fill", "#606580"], ["d", "M19.5001 16.8001H15.9001C15.7001 15.8001 14.8001 15.1001 13.8001 15.1001C12.8001 15.1001 11.9001 15.8001 11.7001 16.8001H4.6001C4.3001 16.8001 4.1001 17.0001 4.1001 17.3001C4.1001 17.6001 4.3001 17.8001 4.6001 17.8001H11.7001C11.9001 18.8001 12.8001 19.5001 13.8001 19.5001C14.8001 19.5001 15.7001 18.8001 15.9001 17.8001H19.5001C19.8001 17.8001 20.0001 17.6001 20.0001 17.3001C20.0001 17.0001 19.8001 16.8001 19.5001 16.8001ZM13.8001 18.4001C13.1001 18.4001 12.6001 17.9001 12.6001 17.2001C12.6001 16.5001 13.1001 16.0001 13.8001 16.0001C14.5001 16.0001 15.0001 16.5001 15.0001 17.2001C15.0001 17.9001 14.4001 18.4001 13.8001 18.4001Z", "fill", "#606580"], ["d", "M19.5 11.4998H10.5C10.3 10.4998 9.4 9.7998 8.4 9.7998C7.4 9.7998 6.5 10.4998 6.3 11.4998H4.5C4.2 11.4998 4 11.6998 4 11.9998C4 12.2998 4.2 12.4998 4.5 12.4998H6.3C6.5 13.4998 7.4 14.1998 8.4 14.1998C9.4 14.1998 10.3 13.4998 10.5 12.4998H19.5C19.8 12.4998 20 12.2998 20 11.9998C20 11.6998 19.8 11.4998 19.5 11.4998ZM8.5 13.0998C7.8 13.0998 7.3 12.5998 7.3 11.8998C7.3 11.1998 7.8 10.6998 8.5 10.6998C9.2 10.6998 9.7 11.1998 9.7 11.8998C9.7 12.5998 9.1 13.0998 8.5 13.0998Z", "fill", "#606580"], [1, "header__title"], [1, "header__more"], ["width", "4", "height", "14", "viewBox", "0 0 4 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.99995 2.8002C2.69995 2.8002 3.29995 2.20019 3.29995 1.50019C3.29995 0.800195 2.69995 0.200195 1.99995 0.200195C1.29995 0.200195 0.699951 0.800195 0.699951 1.50019C0.699951 2.20019 1.29995 2.8002 1.99995 2.8002Z", "fill", "#606580"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.99995 8.3002C2.69995 8.3002 3.29995 7.70019 3.29995 7.00019C3.29995 6.30019 2.69995 5.7002 1.99995 5.7002C1.29995 5.7002 0.699951 6.30019 0.699951 7.00019C0.699951 7.70019 1.29995 8.3002 1.99995 8.3002Z", "fill", "#606580"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.99995 13.8002C2.69995 13.8002 3.29995 13.2002 3.29995 12.5002C3.29995 11.8002 2.69995 11.2002 1.99995 11.2002C1.29995 11.2002 0.699951 11.8002 0.699951 12.5002C0.699951 13.2002 1.29995 13.8002 1.99995 13.8002Z", "fill", "#606580"], [1, "indicators-container__table-headers"], [1, "table-headers__parameter-title"], [1, "table-headers__fact-title"], [1, "table-headers__model-title"], [1, "indicators-container_content-container"], [3, "props", "isOpen", "activeParameterId", "toggleIndicator", "activeParameterIdChange", 4, "ngFor", "ngForOf"], [3, "props", "isOpen", "activeParameterId", "toggleIndicator", "activeParameterIdChange"]], template: function IndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0424\u0430\u043A\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041C\u043E\u0434\u0435\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IndicatorsComponent_app_indicator_24_Template, 1, 3, "app-indicator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indicators);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _indicator_indicator_component__WEBPACK_IMPORTED_MODULE_4__["IndicatorComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-family: Tahoma;\n  background-color: #1c1e27;\n}\n\n.indicators-container[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-top: 15vh;\n  display: flex;\n  flex-direction: column;\n  width: 379px;\n  height: 512px;\n  border: 1px solid #282a38;\n  border-radius: 3px;\n}\n\n.indicators-container__header[_ngcontent-%COMP%] {\n  background-color: #272a38;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  color: #d7e2f2;\n  padding: 0;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.indicators-container__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-right: 13px;\n}\n\n.indicators-container__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.header__icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header__title[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 12px;\n}\n\n.header__more[_ngcontent-%COMP%] {\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.indicators-container__table-headers[_ngcontent-%COMP%] {\n  background-color: #1d1f2b;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  color: #8c99b2;\n  padding: 0;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  font-family: inherit;\n  font-size: 12px;\n}\n\n.table-headers__parameter-title[_ngcontent-%COMP%] {\n  flex: 3;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.table-headers__fact-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.table-headers__model-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.indicators-container_content-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 433px;\n  background-color: #1c1f2b;\n  padding-top: 10px;\n  padding-left: 9px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  box-shadow: inset 0px 11px 8px -10px #131313;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: transparent;\n  border-left: 1px solid #272a38;\n  border-right: 1px solid #272a38;\n  background-clip: padding-box;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #272a38;\n  border: 3px solid transparent;\n  border-radius: 9px;\n  background-clip: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNENBQTRDO0FBQzlDOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6ImluZGljYXRvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZm9udC1mYW1pbHk6IFRhaG9tYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyNztcbn1cblxuLmluZGljYXRvcnMtY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzc5cHg7XG4gIGhlaWdodDogNTEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyODJhMzg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmluZGljYXRvcnMtY29udGFpbmVyX19oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYTM4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAjZDdlMmYyO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5pbmRpY2F0b3JzLWNvbnRhaW5lcl9faGVhZGVyID4gZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufVxuLmluZGljYXRvcnMtY29udGFpbmVyX19oZWFkZXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmhlYWRlcl9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZWFkZXJfX21vcmUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5kaWNhdG9ycy1jb250YWluZXJfX3RhYmxlLWhlYWRlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZjJiO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAjOGM5OWIyO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50YWJsZS1oZWFkZXJzX19wYXJhbWV0ZXItdGl0bGUge1xuICBmbGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4udGFibGUtaGVhZGVyc19fZmFjdC10aXRsZSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRhYmxlLWhlYWRlcnNfX21vZGVsLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmluZGljYXRvcnMtY29udGFpbmVyX2NvbnRlbnQtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDQzM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjJiO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDExcHggOHB4IC0xMHB4ICMxMzEzMTM7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjcyYTM4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjcyYTM4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJhMzg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ytJs":
/*!**********************************************!*\
  !*** ./src/app/modules/indicators.module.ts ***!
  \**********************************************/
/*! exports provided: IndicatorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsModule", function() { return IndicatorsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.module */ "MemO");
/* harmony import */ var _components_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/indicators/indicators.component */ "slcZ");
/* harmony import */ var _components_indicators_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/indicators/indicator/indicator.component */ "Hc/9");
/* harmony import */ var _services_indicators_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/indicators.datasource */ "E+m4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _components_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_3__["IndicatorsComponent"],
    },
];
class IndicatorsModule {
}
IndicatorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: IndicatorsModule });
IndicatorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function IndicatorsModule_Factory(t) { return new (t || IndicatorsModule)(); }, providers: [_services_indicators_datasource__WEBPACK_IMPORTED_MODULE_5__["IndicatorsDatasource"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _navbar_module__WEBPACK_IMPORTED_MODULE_2__["NavbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](IndicatorsModule, { declarations: [_components_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_3__["IndicatorsComponent"], _components_indicators_indicator_indicator_component__WEBPACK_IMPORTED_MODULE_4__["IndicatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _navbar_module__WEBPACK_IMPORTED_MODULE_2__["NavbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-indicators-module.js.map