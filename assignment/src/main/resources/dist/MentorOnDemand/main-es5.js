(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addarticle/addarticle.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addarticle/addarticle.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-5 ml-5 mr-5 mb-5\">\n    <div class=\"col-6\">\n        <button type=\"submit\" class=\"btn buttonColor text-light\"\n         (click)=\"articles()\"  >ARTICLES</button>\n    </div>\n  </div>\n\n\n\n<div class=\"row\">\n\n    <div class=\"col mt-5 shadow\" *ngIf=\"!newarticleAdded\">\n\n        <div class=\"alert-success col-12 px-auto py-3\" *ngIf=\"articleAdded\">\n            Article added Sucessfully!!\n        </div>\n        <div class=\"alert-danger col-12 px-auto py-5\" *ngIf=\"signupErrorMessage\">\n            title already exists!!\n        </div>\n    </div>\n\n\n    <div class=\"col\" *ngIf=\"newarticleAdded\">\n            <h1 class=\"mt-5 ml-5\" >Add Article</h1>\n            <form [formGroup]=\"addArticle\" (submit)=\"addArticles(addArticle.value)\">\n                <div class=\"row mt-5 ml-5 mr-5\">\n                    <div class=\"col-sm-12\">\n                        <label for=\"title\">Title</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\"\n                            id=\"title\" required>\n                        <div class=\"text-danger\"\n                            *ngIf=\"title.touched && title.invalid && title.errors.required\">Title is\n                            required</div>\n                    </div>\n                </div>\n                \n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-12 mt-5\">\n                        <label for=\"body\">Body</label>\n                        <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter Body\"\n                            formControlName=\"body\" id=\"body\" required></textarea>\n                        <div class=\"text-danger\"\n                            *ngIf=\"body.touched && body.invalid && body.errors.required\">body is\n                            required</div>\n                    </div>\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-12 mt-5\">\n                        <label for=\"author\">author</label>\n                        <input type=\"text\" class=\"form-control\"\n                            formControlName=\"author\" id=\"author\" value={{name}}>\n                    </div>\n                </div>\n\n                <div class=\"row mt-5 ml-5 mr-5 mb-5\">\n                    <div class=\"col-6\">\n                        <button type=\"submit\" class=\"btn buttonColor text-light\"\n                            [disabled]=\"!addArticle.valid\">Add Article</button>\n                    </div>\n                </div>\n\n\n\n            </form>\n       \n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-dark text-light navbar_top\">\n    <h2>\n        <i class=\"material-icons\">\n            school\n        </i> Articles\n    </h2>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent1\">\n        <ul class=\"navbar-nav  ml-auto bg-dark\">\n            <li class=\"nav-item active\" *ngIf=\"this.authService.loggedIn\">\n                <i class=\"material-icons other_icon\">person </i> {{this.authService.username}}\n            </li>\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"login\" *ngIf=\"this.authService.loggedIn\" (click)=\"logout()\">Logout</a>\n            </li>\n\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"login\" *ngIf=\"!this.authService.loggedIn\">Login</a>\n            </li>\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"signup\" *ngIf=\"!this.authService.loggedIn\">Signup</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div *ngIf=\"showLoadingIndicator\" class=\"spinner\"></div>\n<router-outlet></router-outlet>\n\n\n\n<nav class=\"navbar navbar-expand-sm navbar-dark text-light navbar_bottom\">\n    Copyright 2019\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" <div class=\"row mt-5 ml-5 mr-5 mb-5\">\r\n  <div class=\"col-6\">\r\n      <button type=\"submit\" class=\"btn buttonColor text-light\"\r\n       (click)=\"addarticle()\"  >ADD ARTICLE</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n      <div class=\"container card mx-auto shadow\" *ngFor=\"let articles of articleslist\">\r\n        <h4>title:{{articles.title}}</h4>\r\n        <div>\r\n           {{articles.body}}\r\n      </div>\r\n      <div>\r\n        author: {{articles.author}}\r\n    </div>\r\n    </div>\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/user-login/user-login.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site/user-login/user-login.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pb-5\">\n    <div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n        <div class=\"card mt-5 shadow\">\n            <h1 class=\"mt-5 ml-5\">Login</h1>\n\n\n            <div class=\"alert alert-danger ml-5 mr-5\" *ngIf=\"this.authService.isLoggedInValid\">Invalid Username /\n                Password</div>\n            <form [formGroup]=\"loginForm\" (submit)=\"this.authService.authenticateUser(loginForm.value)\">\n                <div class=\"row mt-5 ml-5 mr-5\">\n                    <div class=\"col-12\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" formControlName=\"username\"\n                            id=\"username\" required>\n                        <div class=\"text-danger\"\n                            *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is\n                            required</div>\n                    </div>\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-12 mt-5\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                            formControlName=\"password\" id=\"password\" required>\n                        <div class=\"text-danger\"\n                            *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is\n                            required</div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"row mt-5 ml-5 mr-5 mb-5\">\n                    <div class=\"col-6\">\n                        <button type=\"submit\" class=\"btn buttonColor text-light\"\n                            [disabled]=\"!loginForm.valid\">Login</button>\n                    </div>\n                    <div class=\"col\">\n                        <div>\n                            New Here? <a class=\"text-primary \" (click)=\"toSignup()\">Signup</a>\n                        </div>\n                    </div>\n                </div>\n\n\n\n            </form>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/user-signup/user-signup.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/site/user-signup/user-signup.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pb-5 px-0 py-0 mx-0\">\n    <div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n\n        <div class=\"card mt-5 shadow\" *ngIf=\"!newUserAdded\">\n\n            <div class=\"alert-success col-12 px-auto py-3\" *ngIf=\"userAdded\">\n                User added Sucessfully!!\n            </div>\n            <div class=\"alert-success col-12 px-auto py-3\" *ngIf=\"mentorAdded\">\n                Mentor added Sucessfully!!\n            </div>\n\n            <div class=\"alert-danger col-12 px-auto py-5\" *ngIf=\"signupErrorMessage\">\n                UserName already exists!!\n            </div>\n        </div>\n\n\n        <div class=\"card mt-5 shadow\" *ngIf=\"newUserAdded\">\n            <form [formGroup]=\"signUpForm\" (submit)=\"addUser(signUpForm.value)\">\n                <div class=\"row mt-1 ml-5 mr-5\">\n\n                    <div class=\"col-md-6 col-xs-12  mt-5\">\n                        <label for=\"email\">User Email</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" formControlName=\"email\"\n                            id=\"email\" [class.is-invalid]=\"email.invalid && email.touched\">\n                        <div *ngIf=\"email.errors\">\n                            <small class=\"text text-danger\" *ngIf=\"email.errors.required && email.touched\">User\n                                Email Id is required</small>\n                        </div>\n\n                        <div class=\"validation-error text-danger\"\n                            *ngIf=\"signUpForm.get('email').touched && signUpForm.get('email').hasError('pattern')\">\n                            Email Format should be followed\n                        </div>\n\n                    </div>\n\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-md-6 col-xs-12 mt-5\">\n                        <label for=\"username\">User Name</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                            formControlName=\"username\" id=\"username\"\n                            [class.is-invalid]=\"username.invalid && username.touched\">\n                        <div *ngIf=\"username.errors\">\n                            <small class=\"text text-danger\"\n                                *ngIf=\"username.errors.required && username.touched\">username is required</small>\n                            <small class=\"text text-danger\" *ngIf=\"username.errors.maxlength\">username too\n                                long</small>\n                        </div>\n                        <div class=\"validation-error text-danger\"\n                            *ngIf=\"signUpForm.get('username').touched && signUpForm.get('username').hasError('pattern')\">\n                            First name should not contain digits.\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-md-6 col-xs-12 mt-5\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                            formControlName=\"password\" id=\"password\"\n                            [class.is-invalid]=\"password.invalid && password.touched\">\n                        <div *ngIf=\"password.errors\">\n                            <small class=\"text text-danger\"\n                                *ngIf=\"password.errors.required && password.touched\">Password is required</small>\n                            <small class=\"text text-danger\" *ngIf=\"password.errors.maxlength\">Password too long</small>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-6 col-xs-12 mt-5\">\n                        <label for=\"confirmPassword\">Confirm Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                            formControlName=\"confirmPassword\" id=\"confirmPassword\"\n                            [class.is-invalid]=\"confirmPassword.invalid && confirmPassword.touched\">\n                        <div class=\"text-danger\"\n                            *ngIf=\"confirmPassword.invalid && confirmPassword.errors.required && confirmPassword.touched\">\n                            Confirm the Password</div>\n                        <div class=\"text-danger\" *ngIf=\"signUpForm.get('confirmPassword').hasError('nomatch')\">Password\n                            and Confirm Password do not match</div>\n                    </div>\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-md-6 col-xs-12 mt-5\">\n                        <label for=\"address\">address</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter address\" formControlName=\"address\"\n                            id=\"address\" [class.is-invalid]=\"address.invalid && address.touched\">\n                        <div *ngIf=\"address.errors\">\n                            <small class=\"text text-danger\" *ngIf=\"address.errors.required && address.touched\">address\n                                is required</small>\n\n                        </div>\n\n\n                    </div>\n                </div>\n\n\n                <div class=\"row mt-5 ml-5 mr-5 mb-5\">\n                    <div class=\"col-12\">\n                        <button type=\"submit\" class=\"btn buttonColor text-light\">Signup</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/addarticle/addarticle.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/addarticle/addarticle.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkYXJ0aWNsZS9hZGRhcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hZGRhcnRpY2xlL2FkZGFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25Db2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/addarticle/addarticle.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/addarticle/addarticle.component.ts ***!
          \****************************************************/
        /*! exports provided: AddarticleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddarticleComponent", function () { return AddarticleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddarticleComponent = /** @class */ (function () {
                function AddarticleComponent(router, formBuild, authService, _userService) {
                    this.router = router;
                    this.formBuild = formBuild;
                    this.authService = authService;
                    this._userService = _userService;
                    this.name = this.authService.username;
                    this.articleAdded = false;
                    this.newarticleAdded = true;
                }
                AddarticleComponent.prototype.ngOnInit = function () {
                    this.addArticle = this.formBuild.group({
                        title: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                            ]],
                        body: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                            ]],
                        author: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                            ]],
                    });
                };
                Object.defineProperty(AddarticleComponent.prototype, "title", {
                    get: function () {
                        return this.addArticle.get('title');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddarticleComponent.prototype, "body", {
                    get: function () {
                        return this.addArticle.get('body');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddarticleComponent.prototype, "author", {
                    get: function () {
                        return this.addArticle.get('author');
                    },
                    enumerable: true,
                    configurable: true
                });
                AddarticleComponent.prototype.addArticles = function (addArticle) {
                    var _this = this;
                    var article = {
                        "id": 0,
                        "title": addArticle.title,
                        "body": addArticle.body,
                        "author": this.authService.username,
                    };
                    this._userService.addArticle(article).subscribe(function (response) {
                        _this.articleAdded = true;
                        _this.ErrorMessage = null;
                        _this.newarticleAdded = false;
                    }, function (error) {
                        _this.ErrorMessage = error.message;
                        if (error instanceof Error) {
                        }
                        else {
                        }
                    });
                };
                AddarticleComponent.prototype.articles = function () {
                    this.router.navigate(['article']);
                };
                return AddarticleComponent;
            }());
            AddarticleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            AddarticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-addarticle',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addarticle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addarticle/addarticle.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addarticle.component.css */ "./src/app/addarticle/addarticle.component.css")).default]
                })
            ], AddarticleComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _site_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site/user-login/user-login.component */ "./src/app/site/user-login/user-login.component.ts");
            /* harmony import */ var _site_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site/user-signup/user-signup.component */ "./src/app/site/user-signup/user-signup.component.ts");
            /* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
            /* harmony import */ var _addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addarticle/addarticle.component */ "./src/app/addarticle/addarticle.component.ts");
            var routes = [
                { path: "login", component: _site_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
                { path: "signup", component: _site_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_4__["UserSignupComponent"] },
                { path: "article", component: _article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"] },
                { path: "addarticle", component: _addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_6__["AddarticleComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* include stylesheet for truYum */\r\n.material-icons.md-36 {\r\n\tfont-size: 35px;\r\n\tline-height: 1.5;\r\n\tvertical-align: middle;\r\n}\r\n.material-icons.other_icon {\r\n\tline-height: 1.75;\r\n\tvertical-align: middle;\r\n}\r\n.navbar_top {\r\n\t/* background-image:linear-gradient(to right, #6054a5,#362e63,#0b0531 ); */\r\n\tbackground-color: blue;\r\n\theight: 55px;\r\n}\r\n.navbar_bottom { \r\n\tbackground-color: blue;\r\n\tposition: absolute;\r\n\tfont-size:20px;\r\n\theight: 55px;\r\n\twidth: 100%;\r\n\tbottom: 0;\r\n}\r\n.spinner {\r\n\tborder: 16px solid silver;\r\n\tborder-top: 16px solid rgb(183, 51, 58);\r\n\tborder-radius: 60%;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\t-webkit-animation: spin 700ms linear infinite;\r\n\t        animation: spin 700ms linear infinite;\r\n\ttop:50%;\r\n\tleft:50%;\r\n\tposition: absolute;\r\n  }\r\n@-webkit-keyframes spin {\r\n\t0% { transform: rotate(0deg) }\r\n\t100% { transform: rotate(360deg) }\r\n  }\r\n@keyframes spin {\r\n\t0% { transform: rotate(0deg) }\r\n\t100% { transform: rotate(360deg) }\r\n  }\r\na:hover { \r\n    text-decoration: none; \r\n} \r\n\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLDBFQUEwRTtDQUMxRSxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osV0FBVztDQUNYLFNBQVM7QUFDVjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHVDQUF1QztDQUN2QyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWiw2Q0FBcUM7U0FBckMscUNBQXFDO0NBQ3JDLE9BQU87Q0FDUCxRQUFRO0NBQ1Isa0JBQWtCO0VBQ2pCO0FBQ0E7Q0FDRCxLQUFLLHdCQUF3QjtDQUM3QixPQUFPLDBCQUEwQjtFQUNoQztBQUhBO0NBQ0QsS0FBSyx3QkFBd0I7Q0FDN0IsT0FBTywwQkFBMEI7RUFDaEM7QUFFRjtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW5jbHVkZSBzdHlsZXNoZWV0IGZvciB0cnVZdW0gKi9cclxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHtcclxuXHRmb250LXNpemU6IDM1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMub3RoZXJfaWNvbiB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNzU7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm5hdmJhcl90b3Age1xyXG5cdC8qIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjA1NGE1LCMzNjJlNjMsIzBiMDUzMSApOyAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4ubmF2YmFyX2JvdHRvbSB7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGZvbnQtc2l6ZToyMHB4O1xyXG5cdGhlaWdodDogNTVweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3R0b206IDA7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuXHRib3JkZXI6IDE2cHggc29saWQgc2lsdmVyO1xyXG5cdGJvcmRlci10b3A6IDE2cHggc29saWQgcmdiKDE4MywgNTEsIDU4KTtcclxuXHRib3JkZXItcmFkaXVzOiA2MCU7XHJcblx0d2lkdGg6IDgwcHg7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdGFuaW1hdGlvbjogc3BpbiA3MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcblx0dG9wOjUwJTtcclxuXHRsZWZ0OjUwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcblx0MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB9XHJcblx0MTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgfVxyXG4gIH1cclxuXHJcbmE6aG92ZXIgeyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXHJcbn0gXHJcblxyXG4gIFxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService, router) {
                    var _this = this;
                    this.authService = authService;
                    this.router = router;
                    this.showLoadingIndicator = true;
                    this.title = 'mentor-on-demand';
                    this.router.events.subscribe(function (routerEvent) {
                        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                            _this.showLoadingIndicator = true;
                        }
                        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] ||
                            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] ||
                            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                            _this.showLoadingIndicator = false;
                        }
                    });
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['login']);
                };
                AppComponent.prototype.loggedIn = function () {
                    if (this.authService.isLoggedIn == true)
                        return true;
                    else
                        return false;
                };
                AppComponent.prototype.logout = function () {
                    this.authService.accessToken = null;
                    this.authService.loggedIn = false;
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _site_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site/user-login/user-login.component */ "./src/app/site/user-login/user-login.component.ts");
            /* harmony import */ var _site_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site/user-signup/user-signup.component */ "./src/app/site/user-signup/user-signup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
            /* harmony import */ var _addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addarticle/addarticle.component */ "./src/app/addarticle/addarticle.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _site_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
                        _site_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_6__["UserSignupComponent"],
                        _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"],
                        _addarticle_addarticle_component__WEBPACK_IMPORTED_MODULE_12__["AddarticleComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ],
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/article/article.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/article/article.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25Db2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/article/article.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/article/article.component.ts ***!
          \**********************************************/
        /*! exports provided: ArticleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () { return ArticleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ArticleComponent = /** @class */ (function () {
                function ArticleComponent(router, _userService) {
                    this.router = router;
                    this._userService = _userService;
                }
                ArticleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getarticles().subscribe(function (data) {
                        _this.articleslist = data;
                    });
                };
                ArticleComponent.prototype.addarticle = function () {
                    this.router.navigate(['addarticle']);
                };
                return ArticleComponent;
            }());
            ArticleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-article',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")).default]
                })
            ], ArticleComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(_authService, router) {
                    this._authService = _authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var _this = this;
                    this._authService.redirectUrl = state.url;
                    console.log('URL', state.url);
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                        if (_this._authService.LoggedIn) {
                            console.log('Logged in');
                            observer.next(true);
                        }
                        else {
                            console.log('Not Logged in');
                            _this.router.navigate(['login'], { queryParams: { from: state.url.substr(1) } });
                        }
                    });
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/authentication.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/services/authentication.service.ts ***!
          \****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(router, httpClient) {
                    this.router = router;
                    this.httpClient = httpClient;
                    this.loggedInUser = { loggedOut: true };
                    this.validCredentials = false;
                    this.redirectUrl = '/';
                    this.loggedIn = false;
                    this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authUrl;
                    this.isLoggedInValid = false;
                }
                AuthenticationService.prototype.authenticateUser = function (user) {
                    var _this = this;
                    this.isLoggedIn = true;
                    // alert(JSON.stringify(user))
                    this.authenticateSpring(user.username, user.password).subscribe(function (data) {
                        _this.username = user.username;
                        _this.loggedInUser = user;
                        _this.validCredentials = true;
                        _this.loggedIn = true;
                        _this.setToken(data.token);
                        //alert(data.token)
                        _this.name = user.username;
                        if (data.role == "ROLE_u") {
                            _this.router.navigate(['article']);
                        }
                        else {
                            _this.router.navigate(['login']);
                        }
                    }, function (error) {
                        _this.validCredentials = false;
                        _this.isLoggedInValid = true;
                        _this.error = error.error.message;
                        if (error.error.errors != null) {
                            _this.error = error.error.errors[0];
                        }
                    });
                };
                AuthenticationService.prototype.setToken = function (token) {
                    this.token = token;
                };
                AuthenticationService.prototype.getToken = function () {
                    return this.token;
                };
                AuthenticationService.prototype.authenticateSpring = function (user, password) {
                    var newUser = user;
                    //alert(JSON.stringify(newUser))
                    var credentials = btoa(newUser + ':' + password);
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers = headers.set('Authorization', 'Basic ' + credentials);
                    return this.httpClient.get(this.authUrl, { headers: headers });
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
            var UserService = /** @class */ (function () {
                function UserService(_httpClient, _authService) {
                    this._httpClient = _httpClient;
                    this._authService = _authService;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.adduserUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].addUserUrl;
                    this.articleurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].articleurl;
                    this.addarticleUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].addarticleUrl;
                }
                UserService.prototype.getarticles = function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
                    return this._httpClient.get(this.articleurl, { headers: headers });
                };
                UserService.prototype.userSignUp = function (userSignUpData) {
                    //alert(JSON.stringify(userSignUpData))
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
                    return this._httpClient.post(this.adduserUrl + '/addUser', userSignUpData, { headers: headers });
                };
                UserService.prototype.addArticle = function (article) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
                    // alert(JSON.stringify(article))
                    return this._httpClient.post(this.addarticleUrl, article, { headers: headers });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/site/user-login/user-login.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/site/user-login/user-login.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zaXRlL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idXR0b25Db2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/site/user-login/user-login.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/site/user-login/user-login.component.ts ***!
          \*********************************************************/
        /*! exports provided: UserLoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () { return UserLoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
            var UserLoginComponent = /** @class */ (function () {
                function UserLoginComponent(formBuild, authService, router) {
                    this.formBuild = formBuild;
                    this.authService = authService;
                    this.router = router;
                }
                UserLoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuild.group({
                        username: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                            ]],
                        password: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                            ]],
                    });
                };
                Object.defineProperty(UserLoginComponent.prototype, "username", {
                    get: function () {
                        return this.loginForm.get('username');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserLoginComponent.prototype, "password", {
                    get: function () {
                        return this.loginForm.get('password');
                    },
                    enumerable: true,
                    configurable: true
                });
                UserLoginComponent.prototype.toSignup = function () {
                    this.router.navigate(['signup']);
                };
                return UserLoginComponent;
            }());
            UserLoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/user-login/user-login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login.component.css */ "./src/app/site/user-login/user-login.component.css")).default]
                })
            ], UserLoginComponent);
            /***/ 
        }),
        /***/ "./src/app/site/user-signup/user-signup.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/site/user-signup/user-signup.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l0ZS91c2VyLXNpZ251cC91c2VyLXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NpdGUvdXNlci1zaWdudXAvdXNlci1zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnV0dG9uQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/site/user-signup/user-signup.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/site/user-signup/user-signup.component.ts ***!
          \***********************************************************/
        /*! exports provided: UserSignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignupComponent", function () { return UserSignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var UserSignupComponent = /** @class */ (function () {
                function UserSignupComponent(formBuilder, _authService, _userService, _datepipe) {
                    this.formBuilder = formBuilder;
                    this._authService = _authService;
                    this._userService = _userService;
                    this._datepipe = _datepipe;
                    this.userType = false;
                    this.userAdded = false;
                    this.mentorAdded = false;
                    this.newUserAdded = true;
                }
                UserSignupComponent.prototype.ngOnInit = function () {
                    this.signUpForm = this.formBuilder.group({
                        email: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*"),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                            ]],
                        username: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]+$'),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                            ]],
                        password: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)
                            ]],
                        confirmPassword: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                this.matchConfirmPassword.bind(this)
                            ]],
                        address: ['', [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            ]],
                    });
                };
                Object.defineProperty(UserSignupComponent.prototype, "email", {
                    get: function () {
                        return this.signUpForm.get('email');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserSignupComponent.prototype, "username", {
                    get: function () {
                        return this.signUpForm.get('username');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserSignupComponent.prototype, "password", {
                    get: function () {
                        return this.signUpForm.get('password');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserSignupComponent.prototype, "confirmPassword", {
                    get: function () {
                        return this.signUpForm.get('confirmPassword');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserSignupComponent.prototype, "address", {
                    get: function () {
                        return this.signUpForm.get('address');
                    },
                    enumerable: true,
                    configurable: true
                });
                UserSignupComponent.prototype.matchConfirmPassword = function (formControl) {
                    if (this.signUpForm) {
                        if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
                            return { 'nomatch': true };
                        }
                    }
                    return null;
                };
                UserSignupComponent.prototype.userSignUp = function () {
                    this.userType = !this.userType;
                };
                UserSignupComponent.prototype.addUser = function (signUpForm) {
                    var _this = this;
                    var user = {
                        "id": 0,
                        "username": signUpForm.username,
                        "password": signUpForm.password,
                        "email": signUpForm.email,
                        "address": signUpForm.address
                    };
                    // alert(JSON.stringify(user))
                    this._userService.userSignUp(user).subscribe(function (response) {
                        _this.userAdded = true;
                        _this.signupErrorMessage = null;
                        _this.newUserAdded = false;
                    }, function (error) {
                        _this.signupErrorMessage = error.message;
                        if (error instanceof Error) {
                        }
                        else {
                        }
                    });
                };
                return UserSignupComponent;
            }());
            UserSignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
            ]; };
            UserSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/site/user-signup/user-signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-signup.component.css */ "./src/app/site/user-signup/user-signup.component.css")).default]
                })
            ], UserSignupComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                authUrl: 'http://localhost:9083/authenticate',
                articleurl: 'http://localhost:9083/article/all',
                addarticleUrl: 'http://localhost:9083/article/newarticle',
                addUserUrl: 'http://localhost:9083/user',
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\user\Desktop\assignment\assignmentangular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map