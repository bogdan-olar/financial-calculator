
/******************************************************************** 
future value calculation function 
*********************************************************************/

  function calcFutureValue(values) {

    let data = [];

    let period = 1
    if (values.periodType === 'Semester') {
      period = 2
    } else if (values.periodType === 'Quarter') {
      period = 4
    } else if (values.periodType === 'Month') {
      period = 12
    } else if (values.periodType === 'Day') {
      period = 365
    }

    for (let i = 0; i <= (values.numberOfPeriods * period); i++) {
      let obiect = {};
      obiect.period = i;
      obiect.initialSum = values.prezentValue;
      obiect.annualInterestRateValue = values.interestRate;
      obiect.periodInterestRateValue = values.interestRate/period
      obiect.annualInflationRateValue = values.inflationRate;
      obiect.periodInflationRateValue = values.inflationRate/period
      obiect.futureValueBrut = values.prezentValue * ( (1 +  (obiect.periodInterestRateValue/100) ) ** i )
      obiect.futureValueNet = values.prezentValue * ( (1 + (obiect.periodInterestRateValue - obiect.periodInflationRateValue)/100) ** i )
      data.push(obiect);
    }

    return data;

  }

/******************************************************************** 
future value of a annuity calculation function 
*********************************************************************/

  function calcFutureValueAnnuity(values) {

    let data = []
  
    let period = 1
    if (values.periodType === 'Semester') {
      period = 2
    } else if (values.periodType === 'Quarter') {
      period = 4
    } else if (values.periodType === 'Month') {
      period = 12
    } else if (values.periodType === 'Day') {
      period = 365
    }

    for (let i = 1; i <= (values.numberOfPeriods * period); i++) {

      let obiect = {}

      obiect.period = i
      obiect.periodicSum = values.periodicSum
      obiect.annualInterestRate = values.interestRate
      obiect.periodInterestRate = values.interestRate/period
      obiect.annualInflationRate = values.inflationRate
      obiect.periodInflationRate = values.inflationRate/period

      obiect.futureValueAnnuityBrut =
        values.periodicSum *
        (((1 + obiect.periodInterestRate / 100) ** i - 1) /
          (obiect.periodInterestRate / 100)); 
      
      obiect.futureValueAnnuityNet =
        values.periodicSum *
        (((1 + (obiect.periodInterestRate - obiect.periodInflationRate) / 100) ** i - 1) /
          ((obiect.periodInterestRate - obiect.periodInflationRate) / 100));

      data.push(obiect)

    }

    return data;

  }

/******************************************************************** 
investment yield calculation function 
*********************************************************************/

function calcInvestmentYeld(values) {

  let data = []

  for ( let i = 1; i <= values.periods; i++) {

      const obiect = {}
      obiect.period = i

      obiect.investmentPrincipal = values.investmentPrincipal
      if( i > 1 ) {
        obiect.investmentPrincipal = data[i-2].netYield + data[i-2].investmentPrincipal
      }

      obiect.brutYield = obiect.investmentPrincipal * ( values.annualGrowthRate/100 )

      obiect.inflationAdjustedBrutYield =
        obiect.investmentPrincipal * ( (values.annualGrowthRate - values.inflationRate)  / 100);

      obiect.annualManagementFee = (obiect.investmentPrincipal + obiect.brutYield)/100 * values.annualInvestmentFee

      obiect.profitTax = obiect.brutYield/100 * values.totalTaxRate

      obiect.netYield = obiect.brutYield - obiect.annualManagementFee - obiect.profitTax

      obiect.inflationAjustedNetYield =
        obiect.inflationAdjustedBrutYield -
        obiect.annualManagementFee -
        obiect.profitTax;

      data.push(obiect)
      
  }

  return data

}
/******************************************************************** 
loan calculation function 
*********************************************************************/

function calcLoan(creditValues) {

  let data = []

  for( let i = 1; i <= (creditValues.loanTerm*creditValues.payBackPeriod); i++){

    const obiect = {}
    obiect.loanAmount = creditValues.loanAmount
    obiect.loanTerm = creditValues.loanTerm
    obiect.loanInterestRate = creditValues.loanInterestRate;

    //pentru calcul
    obiect.finalLoanTerm = creditValues.loanTerm * creditValues.payBackPeriod
    obiect.loanInterestRatePeriod = creditValues.loanInterestRate / creditValues.payBackPeriod

    // unequal rate
    obiect.unequalRateFixAmount = creditValues.loanAmount / obiect.finalLoanTerm
    obiect.unequalRateLoanSold = creditValues.loanAmount - obiect.unequalRateFixAmount * (i - 1)
    obiect.unequalRateRamas = obiect.unequalRateLoanSold - obiect.unequalRateFixAmount
    obiect.unequalRateInterestRate = obiect.unequalRateLoanSold * (obiect.loanInterestRatePeriod / 100)
    obiect.unequalRate = obiect.unequalRateFixAmount + obiect.unequalRateInterestRate
    if( i === 1 ) {
        obiect.unequalRateTotalPaid = obiect.unequalRate
    }
    if ( i > 1) {
        obiect.unequalRateTotalPaid = obiect.unequalRate + data[i-2].unequalRateTotalPaid
    }
    

    //equal rate
    obiect.factor =  ( 1 - 
                          ( 1/ ((1 + obiect.loanInterestRatePeriod/100)**(obiect.finalLoanTerm)) ) 
                     ) / (obiect.loanInterestRatePeriod/100)
   
    obiect.equalRate = creditValues.loanAmount / obiect.factor

    if (i === 1) {
      obiect.equalRateLoanSold = creditValues.loanAmount;
      obiect.equalRateSoldInterestRate = obiect.equalRateLoanSold * (obiect.loanInterestRatePeriod / 100);
      obiect.equalRateCapitalRate = obiect.equalRate - obiect.equalRateSoldInterestRate;
      obiect.equalRateRamas = obiect.equalRateLoanSold - obiect.equalRateCapitalRate
      obiect.equalRateTotalPaid = obiect.equalRate
    }

    if ( i > 1 ) {
      obiect.equalRateLoanSold = data[i-2].equalRateRamas
      obiect.equalRateSoldInterestRate = obiect.equalRateLoanSold * (obiect.loanInterestRatePeriod / 100)
      obiect.equalRateCapitalRate = obiect.equalRate - obiect.equalRateSoldInterestRate
      obiect.equalRateRamas = obiect.equalRateLoanSold -obiect.equalRateCapitalRate
      obiect.equalRateTotalPaid = obiect.equalRate * i
    }

    data.push(obiect)

  }

  return data
}

/******************************************************************** 
effective annula rate calculation function 
*********************************************************************/

  function calcEffectiveAnnualRate(values) {

    const { annualInterestRate, compoundingPeriod } = values

    let period = 2

   if (compoundingPeriod === 4) {
      period = 4
    } else if (compoundingPeriod === 12) {
      period = 12
    } else if (compoundingPeriod === 365) {
      period = 365
    }

    const effectiveRate = ((( 1 + (annualInterestRate/100)/period )**period) - 1)*100

    return effectiveRate

  }

/******************************************************************** 
form validation function 
*********************************************************************/

function handleValidation( fieldValue, fieldName, errors ) {

      if(!fieldValue) {
        errors[fieldName] = "*Field can't be empty."
      } else if (isNaN(fieldValue)) {
        errors[fieldName] = "*Must be a number."
      } else if(fieldValue < 0) {
        errors[fieldName] = "*Must be a pozitive number."
      } 
      if( fieldName === 'interestRate' && fieldValue > 100 ) {
        errors[fieldName] = "*The number must be smaller than 100."
      }
      if( fieldName === 'inflationRate' && fieldValue > 100 ) {
        errors[fieldName] = "*The number must be smaller than 100."
      }
      if( (fieldName === 'numberOfPeriods' || fieldName === 'periods') && fieldValue > 99 ) {
        errors[fieldName] = "*The number must be smaller than 100."
      }
      if( fieldName === 'annualGrowthRate' && fieldValue > 100 ) {
        errors[fieldName] = "*The number must be smaller than 100."
      }
      if( fieldName === 'loanInterestRate' && fieldValue > 100 ) {
        errors[fieldName] = "*The number must be smaller than 100."
      }
      if( fieldName === 'annualInvestmentFee' && fieldValue > 50) {
        errors[fieldName] = "*The number must be smaller than 50."
      }
      if( fieldName === 'annualInterestRate' && fieldValue > 50) {
        errors[fieldName] = "*The number must be smaller than 50."
      }
      if(fieldName === 'totalTaxRate' && fieldValue > 50) {
        errors[fieldName] = "*The number must be smaller than 50."
      }
      if(fieldName === 'loanTerm' && fieldValue > 50) {
        errors[fieldName] = "*The number must be smaller than 50."
      }
      
}


  export {
    calcFutureValue,
    calcFutureValueAnnuity,
    calcInvestmentYeld,
    calcLoan,
    calcEffectiveAnnualRate,
    handleValidation
  }