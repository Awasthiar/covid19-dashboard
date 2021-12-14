import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { components, providers } from "./declaration";
import { LandingRoutingModule } from "./landing-routing.module";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        LandingRoutingModule
    ],
    providers: providers,
    exports: components
})
export class LandingModule { }
