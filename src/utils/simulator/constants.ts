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

export const sharpe_ratio_tt = `The Sharpe Ratio is a financial metric that evaluates investment performance against its risk. A higher Sharpe Ratio indicates better risk-adjusted returns, making a portfolio more desirable compared to others. This calculation uses the United States' Risk-Free Rate.`

export const volatility_tt = `Historical volatility measures the spread of returns for a security or market index, showing how much an asset's price fluctuates over time. High volatility indicates large price changes and higher risk, while low volatility suggests smaller price swings and lower risk. It's a crucial risk indicator used by investors, often alongside performance metrics like the Sharpe Ratio, to assess risk versus return.`