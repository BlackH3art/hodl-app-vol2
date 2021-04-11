export const setProfitLossSign = (value, percentValue) => {

  const stringValue = value.toString(); 
  const numberValue = Number(stringValue);

  if(percentValue) {
    if (numberValue > 0) {
      return `+${numberValue}%`;
    } else {
      return `${numberValue}%`;
    };
  } else {
    if (numberValue > 0) {
      return `+${usdFormatter.format(numberValue)}`;
    } else {
      return `${usdFormatter.format(numberValue)}`;
    };
  };
};

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const timeFormatter = (time) => {

  let myTime = String(time);
  
  if(myTime.length === 1) {
    return `0${myTime}`;
  } else {
    return time;
  }
}

export const dateFormatter = (date) => {

  if(date) {
    const myDate = new Date(date);
    const formattedDate = `${myDate.toLocaleDateString()} - ${timeFormatter(myDate.getHours())}:${timeFormatter(myDate.getMinutes())}`;
    return formattedDate;
  } else {
    return "-";
  }
}

export const cryptoAmountFormatter = (amount) => {

  console.log(typeof amount, amount);

  const amountString = amount.toString();
  
  let indexofDot = amountString.indexOf('.');
  let decimals = amountString.slice(indexofDot);
  let integer = amountString.slice(0, indexofDot);


  if (decimals.length > 7) {

    let decimalsNumber = Number(decimals);
    let decimalsString = (decimalsNumber.toFixed(6)).toString();

    decimals = decimalsString.slice(1);
  }

  if (decimals.charAt(6) === "0" && decimals.charAt(5) === "0" && decimals.charAt(4) === "0" && decimals.charAt(3) === "0") {
    let decimalsNumber = Number(decimals);
    decimals = (decimalsNumber.toFixed(2)).toString();

  } else if (decimals.charAt(4) === "0" && decimals.charAt(3) === "0" && decimals.length === 5) {
    let decimalsNumber = Number(decimals);
    decimals = (decimalsNumber.toFixed(2)).toString();

  } else if (decimals.charAt(6) === "0" && decimals.charAt(5) === "0") {
    let decimalsNumber = Number(decimals);
    decimals = (decimalsNumber.toFixed(4)).toString();
  }

  const formattedAmount = Number(integer) + Number(decimals);

  return formattedAmount;
}