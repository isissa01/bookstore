webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/\">BookStore</a>\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"/\">Home</a></li>\n                <li><a routerLink=\"/genres\">Genres</a></li>\n                <li><a routerLink=\"/books/add\">Add Book</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_genres_service__ = __webpack_require__("../../../../../src/app/services/genres.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_books_books_component__ = __webpack_require__("../../../../../src/app/components/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_genres_genres_component__ = __webpack_require__("../../../../../src/app/components/genres/genres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_books_details_details_component__ = __webpack_require__("../../../../../src/app/components/books/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_books_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/books/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_books_add_add_component__ = __webpack_require__("../../../../../src/app/components/books/add/add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_8__components_books_books_component__["a" /* BooksComponent */] },
    { path: "books", component: __WEBPACK_IMPORTED_MODULE_8__components_books_books_component__["a" /* BooksComponent */] },
    { path: "books/details/:id", component: __WEBPACK_IMPORTED_MODULE_10__components_books_details_details_component__["a" /* DetailsComponent */] },
    { path: "books/add", component: __WEBPACK_IMPORTED_MODULE_12__components_books_add_add_component__["a" /* AddComponent */] },
    { path: "books/edit/:id", component: __WEBPACK_IMPORTED_MODULE_11__components_books_edit_edit_component__["a" /* EditComponent */] },
    { path: "genres", component: __WEBPACK_IMPORTED_MODULE_9__components_genres_genres_component__["a" /* GenresComponent */] },
    { path: "genres/details/:id", component: __WEBPACK_IMPORTED_MODULE_9__components_genres_genres_component__["a" /* GenresComponent */] },
    { path: "genres/add", component: __WEBPACK_IMPORTED_MODULE_9__components_genres_genres_component__["a" /* GenresComponent */] },
    { path: "genres/edit/:id", component: __WEBPACK_IMPORTED_MODULE_9__components_genres_genres_component__["a" /* GenresComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_genres_genres_component__["a" /* GenresComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_books_details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_books_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_books_add_add_component__["a" /* AddComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_books_service__["a" /* BooksService */], __WEBPACK_IMPORTED_MODULE_5__services_genres_service__["a" /* GenresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/books/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Add New Book</h1>\n    <hr>\n    <form #bookForm=\"ngForm\" (submit)=\"addBook(bookForm)\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Title:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" name=\"title\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"author\">Author:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"author\" name=\"author\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"genre\">Genre:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"genre\" name=\"genre\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"publisher\">Publisher:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"publisher\" name=\"publisher\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"pages\">Pages:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"pages\" name=\"pages\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"buy_url\">Buy Url:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"buy_url\" name=\"buy_url\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <img src=\"{{image_url}}\" alt=\"{{title}} cover\" class=\"image-responsive\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"image_url\">Image Url:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"image_url\" name=\"image_url\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <label for=\"description\">Description</label>\n                    <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" rows=\"5\"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-success form-control\">ADD</button>\n\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/books/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = (function () {
    function AddComponent(bookServices, router) {
        this.bookServices = bookServices;
        this.router = router;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addBook = function (bookForm) {
        var _this = this;
        this.bookServices.addBook(bookForm.value).subscribe(function (book) {
            _this.book = book;
            _this.router.navigate(["books/details/" + _this.book._id]);
        });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/components/books/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/books/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddComponent);

var _a, _b;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    max-height: 300px;\n}\n\n.row>.col-md-6:first-child {\n    border-right: 2px dashed #eee;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Books</h1>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let book of books\">\n            <a href=\"/books/details/{{book._id}}\">\n                <h3>{{book.title}}</h3>\n            </a>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <img class=\"image-responsive\" src=\"{{book.image_url}}\" alt=\"\">\n                </div>\n                <div class=\"col-sm-6\">\n\n                    <h4>{{book.author}}</h4>\n                    <p>{{book.description}}</p>\n                    <hr>\n                    <p>{{book._id}}</p>\n\n                    <a href=\"/books/details/{{book._id}}\" class=\"btn btn-info\">Show Details</a>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(booksService) {
        this.booksService = booksService;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBooks().subscribe(function (books) {
            _this.books = books;
            console.log(_this.books);
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-books',
        template: __webpack_require__("../../../../../src/app/components/books/books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/books/books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_books_service__["a" /* BooksService */]) === "function" && _a || Object])
], BooksComponent);

var _a;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/books/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>{{book.title}}</h1>\n    <hr>\n    <div class=\"row\">\n\n        <div class=\"col-sm-6\">\n            <img class=\"image-responsive\" src=\"{{book.image_url}}\" alt=\"\">\n        </div>\n        <div class=\"col-sm-6\">\n\n            <h4>{{book.author}}</h4>\n            <p>{{book.description}}</p>\n            <hr>\n            <p>{{book._id}}</p>\n            <p><strong>Genre:</strong> {{book.genre}}</p>\n            <p><strong>Pages:</strong> {{book.pages}}</p>\n            <p><strong>Publisher:</strong> {{book.publisher}}</p>\n\n            <a href=\"{{book.buy_url}}\" target=\"_blank\" class=\"btn btn-info\">Buy book</a>\n            <a href=\"/books/edit/{{book._id}}\" class=\"btn btn-success\">Edit Details</a>\n            <button (click)=\"deleteBook()\" class=\"btn btn-danger\">Delete Book</button>\n\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/books/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = (function () {
    function DetailsComponent(bookServices, route, router) {
        this.bookServices = bookServices;
        this.route = route;
        this.router = router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(params);
        });
        this.bookServices.getBookDetails(this.id).subscribe(function (book) {
            _this.book = book;
        });
    };
    DetailsComponent.prototype.deleteBook = function () {
        var _this = this;
        this.bookServices.deleteBook(this.id).subscribe(function (book) {
            _this.router.navigate([""]);
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/components/books/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/books/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/books/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    max-height: 200px;\n}\n\nform {\n    margin-bottom: 60px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>{{book.title}}</h1>\n    <hr>\n    <form #bookForm=\"ngForm\" (submit)=\"updateBook(bookForm)\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Title:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"author\">Author:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"genre\">Genre:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.genre\" name=\"genre\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"publisher\">Publisher:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"pages\">Pages:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.pages\" name=\"pages\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"buy_url\">Buy Url:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.buy_url\" name=\"buy_url\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <img src=\"{{book.image_url}}\" alt=\"{{book.title}} cover\" class=\"image-responsive\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"image_url\">Image Url:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.image_url\" name=\"image_url\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <label for=\"description\">Description</label>\n                    <textarea class=\"form-control\" [(ngModel)]=\"book.description\" name=\"description\" rows=\"5\"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-success form-control\">UPDATE</button>\n\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/books/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(bookServices, route) {
        this.bookServices = bookServices;
        this.route = route;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.bookServices.getBookDetails(this.id).subscribe(function (book) {
            _this.book = book;
        });
    };
    EditComponent.prototype.updateBook = function (bookForm) {
        var _this = this;
        this.bookServices.updateBook(this.id, bookForm.value).subscribe(function (book) {
            _this.book = book;
        });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/components/books/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/books/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/genres/genres.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/genres/genres.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  genres works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/genres/genres.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GenresComponent = (function () {
    function GenresComponent() {
    }
    GenresComponent.prototype.ngOnInit = function () {
    };
    return GenresComponent;
}());
GenresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-genres',
        template: __webpack_require__("../../../../../src/app/components/genres/genres.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/genres/genres.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GenresComponent);

//# sourceMappingURL=genres.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        console.log("Book Service Connected");
    }
    BooksService.prototype.getBooks = function () {
        return this.http.get("http://localhost:3000/api/books")
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.getBookDetails = function (id) {
        return this.http.get("http://localhost:3000/api/books/" + id)
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.updateBook = function (id, book) {
        this.book = book;
        return this.http.put("http://localhost:3000/api/books/" + id, JSON.stringify(this.book), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.addBook = function (book) {
        return this.http.post("http://localhost:3000/api/books", JSON.stringify(book), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BooksService.prototype.deleteBook = function (id) {
        return this.http.delete("http://localhost:3000/api/books/" + id)
            .map(function (res) { return res.json(); });
    };
    return BooksService;
}());
BooksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/genres.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GenresService = (function () {
    function GenresService() {
    }
    return GenresService;
}());
GenresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GenresService);

//# sourceMappingURL=genres.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map