import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { Input, ChangeDetectionStrategy } from '@angular/core';


class DataItem {
    constructor(public id: number, public name: string) { }
}
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['home.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    public myItems: Array<DataItem>;
    private counter: number;
    constructor(public routerExtensions: RouterExtensions) {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "lorem ipsum" + i));
            this.counter = i;
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "linear"
            }
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
