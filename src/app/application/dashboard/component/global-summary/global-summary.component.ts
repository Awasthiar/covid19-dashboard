import { Component, Input, OnInit } from "@angular/core";
import { GlobalSummaryModel } from "../../model/response/api-response.model";

@Component({
    selector: 'global-summary-dashboard',
    templateUrl: './global-summary.component.html',
    styleUrls: ['./global-summary.component.css']
})

export class GlobalSummaryComponent implements OnInit {

   
    @Input() globalSummary: GlobalSummaryModel;
    showGlobalSummary: boolean = false;

    ngOnInit(){        
    }

    ngOnChanges(){      
      if(this.globalSummary !=undefined){
        this.showGlobalSummary = true;
      }
    }

}