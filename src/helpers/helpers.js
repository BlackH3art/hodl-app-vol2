export const setProfitLossSign = (value, percentValue) => {

  const stringValue = value.toString(); 
  const numberValue = Number(stringValue);

  if(percentValue) {
    if (numberValue > 0) {
      return `+${numberValue}%`;
    } else {
      return `${numberValue}%`;
    }
  } else {
    if (numberValue > 0) {
      return `+${usdFormatter.format(numberValue)}`;
    } else {
      return `${usdFormatter.format(numberValue)}`;
    }
  }

}

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const timeFormatter = (time) => {

  let myTime = String(time)
  
  if(myTime.length === 1) {
    return `0${myTime}`
  } else {
    return time
  }

}