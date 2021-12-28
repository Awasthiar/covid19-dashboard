import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { DashboardModule } from "../dashboard";
import { MaterialModule } from "../material.module";
import { components, providers } from "./declaration";
import { LandingRoutingModule } from "./landing-routing.module";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        LandingRoutingModule,
        DashboardModule,
        HttpClientModule,
        MaterialModule
       
    ],
    providers: providers,
    exports: components
})
export class LandingModule { }
