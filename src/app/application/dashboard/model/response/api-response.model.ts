
export class ApiResponseModel {
    data: CovidApiResponseSummaryModel[] = [];
}

export class CovidApiResponseSummaryModel{
    global?: GlobalSummaryModel;
    countries?: CountryWiseSummaryModel[];
}

export class GlobalSummaryModel{
    newConfirmed?: string;
    totalConfirmed?: string;
    newDeaths?: string;
    totalDeaths?: string;
    newRecovered?: string;
    totalRecovered?: string;
    date?: string
}

export class CountryWiseSummaryModel{
    countrySummary?: CountrySummaryDataModel;
}

export class CountrySummaryDataModel{
    country?: string;
    newConfirmed?: string;
    totalConfirmed?: string;
    newDeaths?: string;
    totalDeaths?: string;
    newRecovered?: string;
    totalRecovered?: string;
    date?: string
}