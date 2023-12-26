export type PriceDataType = {
    [key: string]: [string, number][];
};

export type graphObj = {
  date: string,
  performance: number
}

export type twoLineGraphData = {
  baseline: graphObj[],
  portfolio: graphObj[]
}

  

export type percentagesInput = {
    wine: number,
    stock: number,
    bond: number,
    real_estate: number,
    commodity: number
  }

export type stockIndexPercentages = {
    stock_nasdaq: number,
    stock_sp500: number,
    stock_euro_stoxx: number
}

export type bondIndexPercentages = {
    bond_ishares: number,
    bond_iboxx: number
}


export interface GridProps {
    width: number;
    height: number;
  }

export type periodType = '5y' | '10y' | 'max';

export type GenericIndexPercentage = {
  [key: string]: number
}