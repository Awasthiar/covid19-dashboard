import { Component, OnInit } from "@angular/core";
import { ApiResponseModel, CountrySummaryDataModel, CountryWiseSummaryModel } from "../../model/response/api-response.model";
import { DashboardService } from "../../service/dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-component.html',
    styleUrls: ['./dashboard-component.css']
})

export class DashboardComponent implements OnInit {

    covidApiData = new ApiResponseModel();
    countryData: CountrySummaryDataModel[] = []

    constructor(
        private _dashboard: DashboardService
    ){
    }

    ngOnInit(){
        let data = this._dashboard.GetCovidSummaryData().subscribe((response: ApiResponseModel) => {
            if(response && response.Global){
                this.covidApiData.Global = response.Global
            }
            
        })           
    }

    getGlobalSummary(){
        if(this.covidApiData && this.covidApiData.Global){
            return this.covidApiData.Global;
        }
    }

    getCountryData(){
        if(this.covidApiData && this.covidApiData.Countries){
            this.countryData = this.covidApiData.Countries.map((country:CountrySummaryDataModel) => {
                return country
            })
            return this.covidApiData.Countries;
        }
    }
}