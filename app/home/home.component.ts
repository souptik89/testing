import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { isAndroid, isIOS, device, screen } from "platform";
import { RouterExtensions } from "nativescript-angular/router";
import { Input, ChangeDetectionStrategy } from '@angular/core';



@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['home.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    onItemTap(navItemRoute: string): void {
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
