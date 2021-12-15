import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DashboardModule } from "../dashboard";
import { components, providers } from "./declaration";
import { LandingRoutingModule } from "./landing-routing.module";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        LandingRoutingModule,
        DashboardModule,
        HttpClientModule
    ],
    providers: providers,
    exports: components
})
export class LandingModule { }
