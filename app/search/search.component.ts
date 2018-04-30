import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ViewChild, ElementRef } from "@angular/core";
import * as utils from "utils/utils";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    latitude: number;
    longitude: number;
    mapAnimationsEnabled: boolean = true;
    zoom: 12;
    bearing: 10;
    tilt: 60;
    @ViewChild("MapView") mapView: ElementRef;

    //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
        this.latitude = 22.6235724;
        this.longitude = 88.44127200000003;

    };
    constructor() {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
