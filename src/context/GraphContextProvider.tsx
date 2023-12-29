import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDataFromUrls } from "@/utils/simulator/helper";
import { asset_names } from "@/utils/simulator/constants";
import calculate, { calculatePortfolioVariance, calculateSharpeRatio } from "@/utils/simulator/calculations";
import { PriceDataType, bondIndexPercentages, percentagesInput, periodType, stockIndexPercentages, twoLineGraphData } from "@/utils/simulator/types";

// Define types for your stock data and graph points
type GraphContextProps = {
  children: React.ReactNode;
}


// Context State type
type GraphContextType = {
  graphPoints: twoLineGraphData,
  setGraphPoints: React.Dispatch<React.SetStateAction<twoLineGraphData>>,
  period: string,
  setPeriod: React.Dispatch<React.SetStateAction<periodType>>,
  percentages: percentagesInput,
  setPercentages: React.Dispatch<React.SetStateAction<percentagesInput>>,
  selectedBaseline: string,
  setSelectedBaseline: React.Dispatch<React.SetStateAction<string>>,
  stockIndexPercentage: stockIndexPercentages,
  setStockIndexPercentage: React.Dispatch<React.SetStateAction<stockIndexPercentages>>,
  bondIndexPercentage: bondIndexPercentages,
  setBondIndexPercentage: React.Dispatch<React.SetStateAction<bondIndexPercentages>>,
  volatilityData: any,
  setVolatilityData: React.Dispatch<React.SetStateAction<any>>,
  sharpeRatio: any,
  setSharpeRatio: React.Dispatch<React.SetStateAction<any>>
};


// Create context
const GraphContext = createContext<GraphContextType | null>(null);

// GraphProvider component
export const GraphProvider = ({ children }: GraphContextProps) => {
  const [graphPoints, setGraphPoints] = useState<twoLineGraphData>({
    baseline: [],
    portfolio: []
  });

  const [percentages, setPercentages] = useState({
    wine: 100,
    stock: 0,
    bond: 0,
    real_estate: 0,
    commodity: 0
  })

  const [stockIndexPercentage, setStockIndexPercentage] = useState<stockIndexPercentages>({
    stock_sp500: 100,
    stock_euro_stoxx: 0,
    stock_nasdaq: 0
  });

  const [bondIndexPercentage, setBondIndexPercentage] = useState<bondIndexPercentages>({
    bond_ishares: 100,
    bond_iboxx: 0
  });

  const [period, setPeriod] = useState<periodType>('max')

  const [volatilityData, setVolatilityData] = useState<any>({
    portfolio: 0,
    baseline: 0
  })

  const [sharpeRatio, setSharpeRatio] = useState<any>({
    portfolio: 0,
    baseline: 0
  })

  const [selectedBaseline, setSelectedBaseline] = useState('60-40')
  /* Function that fetches the data from the public folder */
  const getData = async (priceData: PriceDataType) => {
    let vData:any = {}
    fetchDataFromUrls().then((dataArray) => {
      dataArray.forEach((data: any, index) => {
        let pricingData: [string, number][] = data.priceData;
        const keyName = asset_names[index]
        priceData[keyName] = pricingData
        if(period === 'max'){
          vData[keyName] = data.max_volatility
        } else if (period === '5y'){
          vData[keyName] = data['5y_volatility']
        } else if (period === '10y'){
          vData[keyName] = data['10y_volatility']
        }
      })
    }).then(() => {
      
      let selectedAssets:any = {}
      let varianceData:any = {}
      let inputs: any= {}
      Object.keys(percentages).forEach((key) => {
        let value = percentages[key as keyof percentagesInput]
        Object.keys(priceData).forEach((asset) => {
          if(asset.includes(key) && value !== 0){
            if(asset === 'stock_sp500' && key === 'stock'){
              selectedAssets['stock'] = priceData[asset]
              varianceData['stock'] = vData[asset]
              inputs['stock']  = percentages['stock']
            } 
            if (asset === 'bond_ishares' && key === 'bond'){
              selectedAssets['bond'] = priceData[asset]
              varianceData['bond'] = vData[asset]
              inputs['bond'] = percentages['bond']
            } 
            if(key !== 'stock' && key !== 'bond'){
              selectedAssets[key] = priceData[asset]
              varianceData[key] = vData[asset]
              inputs[key] = percentages[key as keyof percentagesInput]
            }
          }
        })
      })
      let graphData = calculate(period, priceData, percentages, stockIndexPercentage, bondIndexPercentage, selectedBaseline)
      let portfolioVariance = calculatePortfolioVariance(period, selectedAssets, varianceData, inputs)
      /* Baseline Portfolio */
      let baseLineWeights: any = {}
      let baseLineData: any = {}
      let baselineVar: any = {}
      if(selectedBaseline === '60-40'){
        baseLineWeights['stock_sp500'] = 60
        baseLineWeights['bond_ishares'] = 40
        baseLineData['stock_sp500'] = priceData['stock_sp500']
        baseLineData['bond_ishares'] = priceData['bond_ishares']
        baselineVar['stock_sp500'] = vData['stock_sp500']
        baselineVar['bond_ishares'] = vData['bond_ishares']
      } else {
        baseLineWeights[selectedBaseline] = 100
        baseLineData[selectedBaseline] = priceData[selectedBaseline]
        baselineVar[selectedBaseline] = vData[selectedBaseline]
      }
      let baselineVariance = calculatePortfolioVariance(period, baseLineData, baselineVar, baseLineWeights)
      
      let {portfolio_sharpe_ratio, baseline_sharpe_ratio} = calculateSharpeRatio(period, graphData.portfolioData[graphData.portfolioData.length - 1], graphData.selectedBaselineData[graphData.selectedBaselineData.length - 1], portfolioVariance, baselineVariance)

      setVolatilityData({
        portfolio: portfolioVariance,
        baseline: baselineVariance
      })

      setSharpeRatio({
        portfolio: portfolio_sharpe_ratio,
        baseline: baseline_sharpe_ratio
      })

      setGraphPoints((oldValue) => {
        return {
          ...oldValue,
          baseline: graphData.selectedBaselineData,
          portfolio: graphData.portfolioData
        }
      })
    })
  }
  /* JSON data is being fetched here and will be replaced with the actual source of data. */
  useEffect(() => {
    let priceData: PriceDataType = {};

    getData(priceData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period, selectedBaseline, percentages, stockIndexPercentage, bondIndexPercentage])

  // Provide the context value
  return (
    <GraphContext.Provider value={{ graphPoints, setGraphPoints, period, setPeriod, 
            percentages, setPercentages, selectedBaseline, setSelectedBaseline,
            stockIndexPercentage, setStockIndexPercentage,
            bondIndexPercentage, setBondIndexPercentage, volatilityData, setVolatilityData, sharpeRatio, setSharpeRatio }}>
      {children}
    </GraphContext.Provider>
  );
};
// useGraphs hook
export const useGraphContext = (): GraphContextType => {
  const context = useContext(GraphContext);
  if (context === null) {
    throw new Error("useGraphContext must be used within a GraphProvider");
  }
  return context;
};
