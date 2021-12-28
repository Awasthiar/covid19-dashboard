import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
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
    globalSummaryArray: Array<{title:string, value: any, color: any}>
    isLoading = false;

    
    constructor(
        private _dashboard: DashboardService
    ){
    }

    ngOnInit(){
        this.getCovidSummaryData()
    }

    getCovidSummaryData(){
        this.isLoading = true
        let data = this._dashboard.getCovidSummaryData().subscribe((response: ApiResponseModel) => {
            this.isLoading = false
            if(response && response.Global){
                this.covidApiData.Global = response.Global;
            }
            if(response && response.Countries){
                this.covidApiData.Countries = response.Countries;

            }
        }) 
       // return data   
    }

    getGlobalSummary(){
        if(this.covidApiData && this.covidApiData.Global){
            this.globalSummaryArray = [
                {
                  title: "Total Confirmed",
                  value: this.covidApiData.Global.TotalConfirmed,
                  color: "#F9345E"
                },
                {
                  title: "Active Confirmed",
                  value: this.covidApiData.Global.NewConfirmed,
                  color: "#FA6400"
                },
                {
                  title: "Total Recovered",
                  value: this.covidApiData.Global.TotalRecovered,
                  color: "#1CB142"
                },
                {
                  title: "Total Deaths",
                  value: this.covidApiData.Global.TotalDeaths,
                  color: "#6236FF"
                }
              ];
            return this.covidApiData.Global;
        }
    }

    getCountryData(){
        if(this.covidApiData && this.covidApiData.Countries){
            this.countryData = this.covidApiData.Countries.map((item:CountrySummaryDataModel) => {
               let country = new CountrySummaryDataModel();
               country.Country = item.Country;
               country.CountryCode = item.CountryCode;
               country.NewConfirmed = item.NewConfirmed;
               country.NewDeaths = item.NewDeaths;
               country.NewRecovered = item.NewRecovered;
               country.TotalConfirmed = item.TotalConfirmed;
               country.TotalDeaths = item.TotalDeaths;
               country.TotalRecovered = item.TotalRecovered;
               country.Date = item.Date
               return country;
            })
            return this.countryData;
        }
    }
    reload(){
       this.getCovidSummaryData()
    }
}