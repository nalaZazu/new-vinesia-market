export const wineOptions = [
    { label: 'Wine Liv-ex 1000', value: 'wine_livex' },
  ];

export const stockOptions = [
    { label: 'S&P500', value: 'stock_sp500' },
    { label: 'EURO STOXX 50', value: 'stock_euro_stoxx' },
    { label: 'NASDAQ', value: 'stock_nasdaq' },
  ];

export const bondOptions = [
    { label: '7-10 Year US Bonds', value: 'bond_ishares' },
    { label: 'High Yield US Bonds', value: 'bond_iboxx' },
  ];

export const realEstateOptions = [
    { label: 'Core U.S. REIT', value: 'real_estate' },
  ];

export const commodityOptions = [
    { label: 'Bloomberg', value: 'commodity_bloomberg' },
  ];

export const asset_names = [
    'bond_ishares',
    'stock_sp500',
    'bond_iboxx',
    'real_estate',
    'stock_euro_stoxx',
    'commodity_bloomberg',
    'stock_nasdaq',
    'wine_livex'
  ]

export const baselines = [
  '60-40',
  'stock_sp500',
  'stock_euro_stoxx',
  'bond_ishares'
]

export const baselinePresets = {
  '60-40': {
    'stock': 60,
    'bond': 40,
    'stock_sp500': 100,
    'bond_ishares': 100,
    'bond_iboxx': 0,
    'stock_euro_stoxx': 0,
    'stock_nasdaq': 0,
  },
  'stock_sp500': {
    'stock': 100,
    'bond': 0,
    'stock_sp500': 100,
    'bond_ishares': 0,
    'bond_iboxx': 0,
    'stock_euro_stoxx': 0,
    'stock_nasdaq': 0,
  },
  'stock_euro_stoxx': {
    'stock': 100,
    'bond': 0,
    'stock_euro_stoxx': 0,
    'stock_sp500': 100,
    'bond_ishares': 0,
    'bond_iboxx': 0,
    'stock_nasdaq': 0,
  },
  'bond_ishares': {
    'stock': 0,
    'bond': 100,
    'bond_ishares': 100,
    'stock_sp500': 0,
    'bond_iboxx': 0,
    'stock_euro_stoxx': 0,
    'stock_nasdaq': 0,
  }
}

export const risk_free_rate = 1.5

export const sharpe_ratio_tt = `What is Sharpe Ratio? In simple words, it is a financial metric showing how an investment is performing relative to its risk. The higher an investment’s risk ratio is, the more returns it offers relative to its risks and a portfolio with a higher Sharpe ratio is considered superior relative to its peers. Calculations are based on the United States' Risk-Free Rate.`

export const volatility_tt = `Historical volatility is a statistical measure of the dispersion of returns over a specific period for a given security or market index. It represents how much the price of an asset varies over time. High volatility means that the price of the asset can change dramatically over a short period in either direction, indicating a higher level of risk. Conversely, low volatility implies smaller price swings and, therefore, lower risk. Investors often look at volatility to gauge the risk associated with a particular investment or to compare the risk levels of different assets. In summary, volatility is a key indicator of the risk in an investment and is often analysed with performance to give a complete picture of performance vs volatility (Sharpe Ratio).`