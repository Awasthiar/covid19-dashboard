import { Injectable } from "@angular/core";
import { ApiUrl } from "../constant";

@Injectable()
export class EndpointService {

    private _const = ApiUrl;

    getSummary():string{
        return this._const.COVID19_SUMMARY;
    }
    
}