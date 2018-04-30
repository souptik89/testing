"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var Listing_routing_module_1 = require("./Listing-routing.module");
var Listing_component_1 = require("./Listing.component");
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                Listing_routing_module_1.ListingRoutingModule
            ],
            declarations: [
                Listing_component_1.ListingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ListingModule);
    return ListingModule;
}());
exports.ListingModule = ListingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaXN0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFDdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQWV2RDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWJ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBRUwsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBMaXN0aW5nUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL0xpc3Rpbmctcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExpc3RpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9MaXN0aW5nLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcblxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIExpc3RpbmdSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTGlzdGluZ0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHsgfVxuIl19