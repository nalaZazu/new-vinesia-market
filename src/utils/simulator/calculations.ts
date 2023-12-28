import { PriceDataType, graphObj, percentagesInput, bondIndexPercentages, stockIndexPercentages, periodType } from "./types";
import { baselines, risk_free_rate } from "./constants";


/**
 * Calculates the performance of data relative to a base value.
 * @param data - An array of tuples containing a string and a number.
 * @param baseValue - The base value used for comparison.
 * @returns An array of tuples containing the string and the calculated performance.
 */
function calculatePerformance(data: [string, number][], baseValue: number): [string, number][] {
    return data.map((row,index) => {

        return [row[0], (((row[1] - baseValue) / baseValue) * 100) + 100]
    })
}

function formatDate(dateString: string): string {
    return dateString;
}


/**
 * Returns the cutoff date based on the specified period.
 * @param period - The period for which the cutoff date is calculated. Possible values are '5y', '10y', or 'max'.
 * @returns The cutoff date as a Date object, or null if the period is invalid.
 */
function getCutoffDate(period: string): Date {
    const currDate = new Date();
    switch (period) {
        case '5y':
            return new Date(currDate.getFullYear() - 5, 0, 1); // January 1, five years ago
        case '10y':
            return new Date(currDate.getFullYear() - 10, 0, 1); // January 1, ten years ago
        default:
            return new Date(currDate.getFullYear()); // No cutoff for 'max'
    }
}

/**
 * Categorizes the asset class based on the given string.
 * @param asset_class - The asset class to be categorized.
 * @returns The category of the asset class.
 */
const categorize_asset_class = (asset_class: string) : string => {
    if (asset_class.includes('stock')) {
        return 'stock';
    } else if (asset_class.includes('bond')) {
        return 'bond';
    } else if (asset_class.includes('real_estate')) {
        return 'real_estate';
    } else if (asset_class.includes('commodity')) {
        return 'commodity';
    } else if (asset_class.includes('wine')) {
        return 'wine';
    } else {
        return 'other';
    }
}

/**
 * Adds or updates performance data for a given asset in the categorical data.
 * If the asset does not exist in the categorical data, it adds the performance data.
 * If the asset already exists, it updates the performance data by adding the values.
 * @param asset - The asset for which the performance data is being added or updated.
 * @param categoricalData - The performance data to be added or updated.
 * @param performanceData - The categorical data object containing performance data for different assets.
 */
function addOrUpdatePerformanceData(asset: string, performanceData: any[], categoricalData: PriceDataType, key: string, stockIndexPercentages: stockIndexPercentages, bondIndexPercentages: bondIndexPercentages) {
    if (!categoricalData[asset]) {
        if(asset === 'stock'){
            categoricalData[asset] = performanceData.map((item) => [item[0], (item[1] * stockIndexPercentages[key as keyof typeof stockIndexPercentages]/100)])
        } else if(asset === 'bond'){
            categoricalData[asset] = performanceData.map((item) => [item[0], (item[1] * bondIndexPercentages[key as keyof typeof bondIndexPercentages]/100)])
        } else { 
            categoricalData[asset] = performanceData;
        }
    } else {
        categoricalData[asset].forEach((item, index) => {
            if(asset === 'stock'){
                item[1] += performanceData[index][1] * (stockIndexPercentages[key as keyof typeof stockIndexPercentages]/100)
            } else if(asset === 'bond'){
                item[1] += performanceData[index][1] * (bondIndexPercentages[key as keyof typeof bondIndexPercentages]/100)
            } else {
            item[1] += performanceData[index][1];
            }
        });
    }
}

function calculate6040(baselineData: {[key:string]: graphObj[]}){
    const stock = baselineData['stock_sp500']
    const bond = baselineData['bond_ishares']
    const baseline6040: graphObj[] = []
    for(let i = 0; i < stock.length; i++){
        let obj: {date: string, performance: number} = {date: '', performance: 0}
        obj.date = stock[i].date
        obj.performance = (stock[i].performance * 0.6) + (bond[i].performance * 0.4)
        baseline6040.push(obj)
    }
    baselineData['60-40'] = baseline6040
}

function calculateReturns(data: [string, number][]): number[] {
    let returns: number[] = [];
    for (let i = 1; i < data.length; i++) {
        let previousPrice = data[i - 1][1];
        let currentPrice = data[i][1];
        let returnVal = (currentPrice - previousPrice) / previousPrice;
        returns.push(returnVal);
    }
    return returns;
}


function calculateMeanPrice(returns: number[]): number{
    const total = returns.reduce((sum:number, r: number) => sum + r, 0);
    return total / returns.length;
}

function calculateCovariance(returns1: number[], returns2: number[], mean1: number, mean2: number){
    let covariance = 0;
    
    for(let i = 0; i < returns1.length; i++){
        covariance += (returns1[i] - mean1) * (returns2[i] - mean2);
    }
    return covariance / (returns1.length);
}

export function calculatePortfolioVariance(period:string, assetPrices: any, assetVariances: any, assetWeights: any): number {
    let variance = 0;
    const means:any = {}
    const returnsData: any = {}
    let cutoffDate = getCutoffDate(period.toLocaleLowerCase());
        

    const keys = Object.keys(assetPrices)
    keys.forEach((key: string) => {
        let filteredRows:[string, number][] = assetPrices[key].filter((row: any) => {
            const rowDate = new Date(row[0])
            return rowDate >= cutoffDate
        })
        
        returnsData[key] = calculateReturns(filteredRows)
        
        means[key] = calculateMeanPrice(returnsData[key])
    })

    for(let i= 0; i<keys.length; i++){
        const assetVarianceSquared = assetVariances[keys[i]] ** 2;
        variance += (assetWeights[keys[i]] / 100) ** 2 * assetVarianceSquared

        for(let j =i+1; j<keys.length; j++){
            const cov = calculateCovariance(returnsData[keys[i]], returnsData[keys[j]], means[keys[i]], means[keys[j]])

            variance += 2 * (assetWeights[keys[i]] / 100) * (assetWeights[keys[j]] / 100) * cov
        }
    }
    return variance ** 0.5;
}

export function calculateSharpeRatio(period: periodType, portfolioPerformanceData: {date: string, performance: number},  baselinePerformanceData: {date: string, performance: number}, portfolioVolatility: number, baselineVolatility: number){
    let periodInYears = 0;
    switch(period){
        case '5y':
            periodInYears = 5;
            break;
        case '10y':
            periodInYears = 10;
            break;
        default:
            periodInYears = 15;
    }
    let decimal_risk_free_rate = risk_free_rate/100
    let total_return_portfolio = (portfolioPerformanceData.performance - 100) / 100
    let total_return_baseline = (baselinePerformanceData.performance - 100) / 100
    let decimal_volatility_portfolio = portfolioVolatility / 100
    let decimal_volatility_baseline = baselineVolatility / 100
    let annualised_return_portfolio = ((1 + total_return_portfolio) ** (1/periodInYears)) - 1 
    let annualised_return_baseline = ((1 + total_return_baseline) ** (1/periodInYears)) - 1
    
    
    let portfolio_sharpe_ratio = (annualised_return_portfolio - decimal_risk_free_rate) / decimal_volatility_portfolio
    let baseline_sharpe_ratio = (annualised_return_baseline - decimal_risk_free_rate) / decimal_volatility_baseline
    return {portfolio_sharpe_ratio, baseline_sharpe_ratio}
}

/**
 * Calculates the selected baseline data and portfolio data based on the given inputs.
 * @param period - The period for which the calculations are performed.
 * @param priceData - The price data for different assets.
 * @param input - The input percentages for different asset categories.
 * @param selectedBaseline - The selected baseline asset.
 * @returns An object containing the selected baseline data and portfolio data.
 */
export default function calculate(period: string, priceData: PriceDataType, input: percentagesInput, stockIndexPercentages: stockIndexPercentages, bondIndexPercentages: bondIndexPercentages,selectedBaseline: string): {selectedBaselineData: graphObj[], portfolioData: {date: string, performance: number}[] }{
    const cutoffDate = getCutoffDate(period.toLocaleLowerCase());
    let categoricalData: PriceDataType = {}
    let baselineData: {[key:string]: graphObj[]} = {}
    /* Counter to count the assets for averaging, will be deprecated on stock and bond percentages are working */
    let assetCounter: { [key: string]: number } = {
        stock: 0,
        bond: 0,
        real_estate: 0,
        commodity: 0,
        wine: 0
    }
    Object.keys(priceData).forEach((key: string) => {
        const asset = categorize_asset_class(key)

        // categorize the asset into stock, bond, real estate, commodity, wine
        // compute average of the asset category, this average should be changed to percentage/weight for stock indices and bond indices 
        // multiply with the percentage of the category
        let filteredRows: typeof priceData[typeof key] = [];
        if (cutoffDate) {
            filteredRows = priceData[key].filter((row) => {
                const rowDate = new Date(row[0])
                return rowDate >= cutoffDate
            })
            /* The basevalue is the first price value for any period, used in calculating the performance of the asset for that period */
            const baseValue = filteredRows[0][1]
            let performanceData = calculatePerformance(filteredRows, baseValue as number);
            /* Getting the baselines from the assets */
            if(baselines.includes(key)){
                baselineData[key] = performanceData.map(([date, performance]) => {
                    return { date, performance }
                })
            }
            /* in case date needs to be formatted */
            performanceData = performanceData.map(([date, performance]) => [formatDate(date), performance]);
            assetCounter[asset] = assetCounter[asset] + 1

            addOrUpdatePerformanceData(asset, performanceData, categoricalData, key, stockIndexPercentages, bondIndexPercentages);
            
        }
    })
    
    /* The 60-40 Portfolio baseline is calculated using the S&P 500 index and 7-10 year bond index */
    calculate6040(baselineData)
    /* Only the selected baseline is being returned */
    const selectedBaselineData = baselineData[selectedBaseline]
    /* The portfolio data is calculated by averaging the performance of all the assets in the same category and multiplying it with the percentage of that category, then all the assets are added up */
    const sumByDate: {[key: string]: number} = {}
    Object.keys(categoricalData).forEach((key) => {
        categoricalData[key].forEach((data) => {
            // data[1] = data[1] / assetCounter[key];
    
            data[1] = data[1] * (input[key as keyof percentagesInput] / 100);
    
            
            const date = data[0];
            const value = data[1];
            sumByDate[date] = (sumByDate[date] || 0) + value;
        });
    });
    /* Returns a {date, performance} object as required by the graph */
    const portfolioData: graphObj[] = Object.entries(sumByDate).map(([date, performance]) => {
        return { date, performance };
      });
    
    return {selectedBaselineData, portfolioData};

}

