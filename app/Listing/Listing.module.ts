import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ListingRoutingModule } from "./Listing-routing.module";
import { ListingComponent } from "./Listing.component";

@NgModule({
    imports: [

        NativeScriptCommonModule,
        ListingRoutingModule
    ],
    declarations: [
        ListingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListingModule { }
