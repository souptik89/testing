import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { ViewChild, ElementRef } from "@angular/core";
import * as utils from "utils/utils";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "mappage", loadChildren: "./mappage/mappage.module#MappageModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Mappage",
    moduleId: module.id,
    templateUrl: "./mappage.component.html"
})
export class MappageComponent implements OnInit {
    @ViewChild("map") public mapbox: ElementRef;

    public onMapReady(args: any) {
        this.mapbox.nativeElement.addMarkers([
            {
                id: 1,
                lat: 22.6235724,
                lng: 88.44127200000003,
                title: "Chinnarpark",
                subtitle: "this is my location",
                selected: false,
                onTap: function (marker) { console.log("marker 1 was tapped"); },
                onCalloutTap: () => {
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
                onCalloutTap: () => {
                    utils.openUrl("");
                }
            }
        ]);
    }
    constructor(public routerExtensions: RouterExtensions) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    public goBackPage() {
        this.routerExtensions.back();
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
}
