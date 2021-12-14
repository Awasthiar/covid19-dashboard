import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { components, providers } from "./declaration";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        MaterialModule,
        DashboardRoutingModule
    ],
    providers: providers,
    exports: components
})

export class DashboardModule { }