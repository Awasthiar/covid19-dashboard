import { Component, Input, OnInit } from "@angular/core";
import { CountrySummaryDataModel } from "../../model/response/api-response.model";

@Component({
    selector: 'country-summary-dashboard',
    templateUrl: './country-summary.component.html',
    styleUrls: ['./country-summary.component.css']
})

export class CountrySummaryComponent implements OnInit {

    @Input() countryData: CountrySummaryDataModel;
    showCountryData: boolean = false;

    ngOnInit(){
        
    }

    ngOnChanges(){
        if(this.countryData){            
            this.showCountryData = true
        }
    }
}