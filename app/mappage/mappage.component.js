"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("nativescript-angular/router");
var core_2 = require("@angular/core");
var utils = require("utils/utils");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "mappage", loadChildren: "./mappage/mappage.module#MappageModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var MappageComponent = /** @class */ (function () {
    function MappageComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    MappageComponent.prototype.onMapReady = function (args) {
        this.mapbox.nativeElement.addMarkers([
            {
                id: 1,
                lat: 22.6235724,
                lng: 88.44127200000003,
                title: "Chinnarpark",
                subtitle: "this is my location",
                selected: false,
                onTap: function (marker) { console.log("marker 1 was tapped"); },
                onCalloutTap: function () {
                    utils.openUrl("");
                }
            },
            {
                id: 2,
                lat: 22.6234,
                lng: 88.45,
                title: "Chinnarpark2",
                subtitle: "this is my location",
                onTap: function (marker) { console.log("marker 2 was tapped"); },
                onCalloutTap: function () {
                    utils.openUrl("");
                }
            }
        ]);
    };
    MappageComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    MappageComponent.prototype.goBackPage = function () {
        this.routerExtensions.back();
    };
    MappageComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    __decorate([
        core_2.ViewChild("map"),
        __metadata("design:type", core_2.ElementRef)
    ], MappageComponent.prototype, "mapbox", void 0);
    MappageComponent = __decorate([
        core_1.Component({
            selector: "Mappage",
            moduleId: module.id,
            templateUrl: "./mappage.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MappageComponent);
    return MappageComponent;
}());
exports.MappageComponent = MappageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXBwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsc0RBQStEO0FBQy9ELHNDQUFzRDtBQUN0RCxtQ0FBcUM7QUFDckM7Ozs7OzhEQUs4RDtBQU85RDtJQThCSSwwQkFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakQ7O3NFQUU4RDtJQUNsRSxDQUFDO0lBL0JNLHFDQUFVLEdBQWpCLFVBQWtCLElBQVM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQ2pDO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEdBQUcsRUFBRSxpQkFBaUI7Z0JBQ3RCLEtBQUssRUFBRSxhQUFhO2dCQUNwQixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsS0FBSztnQkFDZixLQUFLLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsWUFBWSxFQUFFO29CQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFDSjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxjQUFjO2dCQUNyQixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixLQUFLLEVBQUUsVUFBVSxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsWUFBWSxFQUFFO29CQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFNRCw0Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ00scUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUE5Q2lCO1FBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDO2tDQUFnQixpQkFBVTtvREFBQztJQURuQyxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBK0J1Qyx5QkFBZ0I7T0E5QjVDLGdCQUFnQixDQWdENUI7SUFBRCx1QkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBCZWZvcmUgeW91IGNhbiBuYXZpZ2F0ZSB0byB0aGlzIHBhZ2UgZnJvbSB5b3VyIGFwcCwgeW91IG5lZWQgdG8gcmVmZXJlbmNlIHRoaXMgcGFnZSdzIG1vZHVsZSBpbiB0aGVcbiogZ2xvYmFsIGFwcCByb3V0ZXIgbW9kdWxlLiBBZGQgdGhlIGZvbGxvd2luZyBvYmplY3QgdG8gdGhlIGdsb2JhbCBhcnJheSBvZiByb3V0ZXM6XG4qIHsgcGF0aDogXCJtYXBwYWdlXCIsIGxvYWRDaGlsZHJlbjogXCIuL21hcHBhZ2UvbWFwcGFnZS5tb2R1bGUjTWFwcGFnZU1vZHVsZVwiIH1cbiogTm90ZSB0aGF0IHRoaXMgc2ltcGx5IHBvaW50cyB0aGUgcGF0aCB0byB0aGUgcGFnZSBtb2R1bGUgZmlsZS4gSWYgeW91IG1vdmUgdGhlIHBhZ2UsIHlvdSBuZWVkIHRvIHVwZGF0ZSB0aGUgcm91dGUgdG9vLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTWFwcGFnZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tYXBwYWdlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTWFwcGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcIm1hcFwiKSBwdWJsaWMgbWFwYm94OiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIG9uTWFwUmVhZHkoYXJnczogYW55KSB7XG4gICAgICAgIHRoaXMubWFwYm94Lm5hdGl2ZUVsZW1lbnQuYWRkTWFya2VycyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbGF0OiAyMi42MjM1NzI0LFxuICAgICAgICAgICAgICAgIGxuZzogODguNDQxMjcyMDAwMDAwMDMsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2hpbm5hcnBhcmtcIixcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogXCJ0aGlzIGlzIG15IGxvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uVGFwOiBmdW5jdGlvbiAobWFya2VyKSB7IGNvbnNvbGUubG9nKFwibWFya2VyIDEgd2FzIHRhcHBlZFwiKTsgfSxcbiAgICAgICAgICAgICAgICBvbkNhbGxvdXRUYXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMub3BlblVybChcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIGxhdDogMjIuNjIzNCxcbiAgICAgICAgICAgICAgICBsbmc6IDg4LjQ1LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNoaW5uYXJwYXJrMlwiLFxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiBcInRoaXMgaXMgbXkgbG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICBvblRhcDogZnVuY3Rpb24gKG1hcmtlcikgeyBjb25zb2xlLmxvZyhcIm1hcmtlciAyIHdhcyB0YXBwZWRcIik7IH0sXG4gICAgICAgICAgICAgICAgb25DYWxsb3V0VGFwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLm9wZW5VcmwoXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBhcHAgc2VydmljZXMgdGhhdCB5b3UgbmVlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnb0JhY2tQYWdlKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG59XG4iXX0=