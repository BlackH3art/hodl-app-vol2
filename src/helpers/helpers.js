export const setProfitLossPercentageSign = (value) => {

  const stringValue = value.toString(); 
  const numberValue = parseInt(stringValue, 10);

  if (numberValue > 0) {
    return `+${numberValue}`;
  } else {
    return `${numberValue}`;
  }
}

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})