
import { useState } from 'react'

import EffectiveInterestRateForm from '../components/effectiveInterestRate/EffectiveInterestRateForm';
import EffectiveAnnualRateTable from '../components/effectiveInterestRate/EffectiveAnnualRateTable';
import EffectiveAnnualRateChart from '../components/effectiveInterestRate/EffectiveAnnualRateChart';

import { calcEffectiveAnnualRate } from "../functions/functions";

function EffectiveInterestRate() {

    const [effectiveAnnualRate, setEffectiveAnnualRate] = useState({
      annualInterestRate: 8,
      compoundingPeriod: 2,
    });

    const [data, setData] = useState(
      calcEffectiveAnnualRate(effectiveAnnualRate)
    );

    function handleCalculation(newValues) {

        const object = {}
        object.annualInterestRate = parseInt(newValues.annualInterestRate)
        object.compoundingPeriod = parseInt(newValues.compoundingPeriod);

        setEffectiveAnnualRate(object)
        setData(calcEffectiveAnnualRate(object));
    }

    return (
      <div className='main'>
        <EffectiveInterestRateForm values={effectiveAnnualRate} calculation={handleCalculation} />
        <EffectiveAnnualRateChart nominal={effectiveAnnualRate.annualInterestRate} effective={data} />
        <EffectiveAnnualRateTable rates={effectiveAnnualRate} rezult={data} />

      </div>
    );

}

export default EffectiveInterestRate