import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MappageRoutingModule } from "./mappage-routing.module";
import { MappageComponent } from "./mappage.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MappageRoutingModule
    ],
    declarations: [
        MappageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MappageModule { }
