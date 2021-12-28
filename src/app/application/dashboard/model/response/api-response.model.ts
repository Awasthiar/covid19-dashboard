
export class ApiResponseModel {
    Global?: GlobalSummaryModel;
    Countries?: CountrySummaryDataModel[];
}

export class GlobalSummaryModel{
    NewConfirmed?: string;
    TotalConfirmed?: string;
    NewDeaths?: string;
    TotalDeaths?: string;
    NewRecovered?: string;
    TotalRecovered?: string;
    Date?: string
}

export class CountryWiseSummaryModel{
    CountrySummary: CountrySummaryDataModel;
}

export class CountrySummaryDataModel{
    Country: string;
    CountryCode: string;
    NewConfirmed: string;
    TotalConfirmed: string;
    NewDeaths: string;
    TotalDeaths: string;
    NewRecovered: string;
    TotalRecovered: string;
    Date: string
}