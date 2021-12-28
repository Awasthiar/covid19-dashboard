import { Injectable } from "@angular/core";
import { EndpointService } from "./endpoint.service";
import {HttpClient} from '@angular/common/http'


@Injectable()
export class DashboardService {
    constructor(private _http: HttpClient,
        private _endpoint: EndpointService){
        }

    getCovidSummaryData(){
        return this._http.get(`https://${this._endpoint.getSummary()}`)
    }

}