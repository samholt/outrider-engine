import { Observable } from 'rxjs/Observable'

export interface marketSummary {
    name:      string
    dayHigh:   number;
    dayLow:    number;
    lastPrice: number;
    bidPrice:  number;
    askPrice:  number;
}



export interface configStructure {
    profitThreshold:   number;
    tradePercent:      number;
    useLastTradePrice: boolean;
}




export interface feeStructure {
    [key:string]:     any;
    bitcoinWithdrawl: number;
    etherWithdrawl:   number;
    audWithdrawl:     any;
    makerFee:         any;
    takerFee:         any;
    tradingFee:       any;
}




export interface currencyCodeStructure {
    [key:string]: string;
    bitcoin:      string;
    ether:        string;
    aud:          string;
}




export interface exchangeBalanceSummary {
    buy:  exchangeBalanceStructure;
    sell: exchangeBalanceStructure;
}


export interface exchangeBalanceStructure {
    marketName: string;
    aud:        number;
    bitcoin:    number;
    ether:      number;
}




export interface ExchangeClass {
    baseURL:                          string;
    marketName:                       string;
    currencyCodes:                    currencyCodeStructure;
    apiKey:                           string;
    apiSecret:                        string;
    feeStructure():                   feeStructure;
    getMarketData(
        currencies: currencyStructure
    ): Promise<any>;
    getAccountData(): Observable<any>;
    getMarketSummary(
        currencies: currencyStructure
    ):  Observable<any>;
    marketSummaryFieldMapping(
        data: Array<any>
    ): marketSummary;
    formatBalanceData(
        data: Array<any>
    ): exchangeBalanceStructure;
}



export interface pluginStructure {
    name: string;
    method(
        market: Array<marketSummary>,
        report: reportStructure,
        currencies: currencyStructure
    ): any;
}




export interface currencyStructure {
    base:    string;
    against: string;
}





export interface marketLastPriceStructure {
    lastPrice:    number;
    bidPrice: number;
    askPrice: number;
    market:   string;
}



export interface tradeCalculationStructure {
    exchange:      any; // This should become an exchange class
    basePrice:     number;
    feePercent:    number;
    feeCalculated: number;
    totalPrice:    number;
}



export interface rebaseFeeStructure {
    cryptoFee:        number;
    convertedFiatFee: number;
}



export interface arbitrageCalculationStructure {
    buy:               tradeCalculationStructure;
    sell:              tradeCalculationStructure;
    rebaseFee:         rebaseFeeStructure;
    profitLoss:        number;
    profitLossPercent: number;
    thresholdMet:      boolean;
}


export interface reportStructure {
    _id:                   any;
    rank:                  Array<marketLastPriceStructure>;
    spread:                number;
    currencies:            currencyStructure;
    arbitrageCalculations: arbitrageCalculationStructure;
    timestamp:             number;
}
