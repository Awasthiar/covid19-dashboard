import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialModule } from "../material.module";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { components, providers } from "./declaration";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        MaterialModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule
    ],
    providers: providers,
    exports: components
})

export class DashboardModule { }