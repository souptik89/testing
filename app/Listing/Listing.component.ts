import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { Input, ChangeDetectionStrategy } from '@angular/core';
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "Listing", loadChildren: "./Listing/Listing.module#ListingModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
class DataItem {
    constructor(public id: number, public name: string) { }
}
@Component({
    selector: "Listing",
    moduleId: module.id,
    templateUrl: "./Listing.component.html",
    styleUrls: ['Listing.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {
    public myItems: Array<DataItem>;
    private counter: number;
    constructor() {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "lorem ipsum" + i));
            this.counter = i;
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
}
