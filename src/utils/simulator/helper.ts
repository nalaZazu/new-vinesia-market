import { GridProps, graphObj } from "./types"

export function parseDate(dateString: string): Date{
    const [month, year] = dateString.split('/').map(Number)
    return new Date(2000 + year, month - 1)
  }
  

  export const formatDate = (dateString: string, component: string, isMobile: boolean) => {
    // Parse the date
    if (dateString !== undefined) {
      //eslint-disable-next-line
      const [year, month, thendate] = dateString.split('-');
      const date = new Date(+`${year}`, parseInt(month, 10) - 1);
    
      // Format the date
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      if (component === 'axis') {
        return isMobile ? `'${date.getFullYear().toString().slice(2)}` : date.getFullYear().toString();
      } else {
        return `${monthNames[date.getMonth()]} '${date.getFullYear().toString().slice(2)}`;
      }
    } else {
      return '';
    }
};


export const horizontalCoordinatesGenerator = ({ height }: GridProps): number[] => {
    const numberOfHorizontalLines = 5; // Adjust for desired density
    const interval = height / numberOfHorizontalLines;
    const coordinates: number[] = [];
  
    for (let i = 0; i < numberOfHorizontalLines - 1; i++) {
      // if(interval * i < height){
        coordinates.push(interval * i)
      // }
    }
  
    return coordinates;
  };
  
export const verticalCoordinatesGenerator = ({ width }: GridProps): number[] => {
    const numberOfVerticalLines = 5; // Adjust for desired density
    const interval = width / numberOfVerticalLines;
    const coordinates: number[] = [];
  
    for (let i = 2; i < numberOfVerticalLines; i++) {
      coordinates.push(interval * i);
    }
  
    return coordinates;
  };

export function calculateMinMax(baseLine?: graphObj[], indices?: graphObj[]) {
    let minBaseLine = Infinity;
    let maxBaseLine = -Infinity;
    let minIndices = Infinity;
    let maxIndices = -Infinity;

    if(baseLine && baseLine.length > 0){
      const values = baseLine.map((obj: graphObj) => obj.performance)
      minBaseLine = Math.min(...values)
      maxBaseLine = Math.max(...values)
    }
    if(indices && indices.length > 0){
      const values = indices.map((obj: graphObj) => obj.performance)
      minIndices = Math.min(...values)
      maxIndices = Math.max(...values)
    }
    const max = Math.max(maxBaseLine, maxIndices);
    const min = Math.min(minBaseLine, minIndices);

    return {max, min}
  }


export const fetchDataFromUrls = () => {
  const urls: string[] = [
      '/pricedata/Bond iShares 7-10 Year Treasury.json',
      '/pricedata/Stock S&P 500.json',
      '/pricedata/Bond iShares iBoxx $ High Yield.json',
      '/pricedata/Real Estate iShares Core U.S. R.json',
      '/pricedata/Stock EURO STOXX 50 Index.json',
      '/pricedata/Commodity Bloomberg.json',
      '/pricedata/Stock NASDAQ.json',
      '/pricedata/Wine Liv-ex 1000.json'
  ]

  const fetchPromises = urls.map(url =>
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .catch(error => {
              console.error('There has been a problem with your fetch operation:', error);
          })
  );

  return Promise.all(fetchPromises);
};
