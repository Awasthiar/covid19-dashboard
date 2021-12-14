import { CountrySummaryComponent, DashboardComponent, GlobalSummaryComponent } from "./component";
import { EndpointService } from "./service";
import { DashboardService } from "./service/dashboard.service";

export const components = [
    DashboardComponent,
    GlobalSummaryComponent,
    CountrySummaryComponent
]

export const providers = [
    DashboardService,
    EndpointService
]

export const exports = []
