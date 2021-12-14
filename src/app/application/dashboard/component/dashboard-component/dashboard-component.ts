import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../../service/dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-component.html',
    styleUrls: ['./dashboard-component.css']
})

export class DashboardComponent implements OnInit {

    constructor(
        private _dashboard: DashboardService
    ){
        
    }

    ngOnInit(){
        console.log(this._dashboard.GetCovidSummaryData(),"data");
        
    }
}