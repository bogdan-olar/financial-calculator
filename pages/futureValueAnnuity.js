import Head from 'next/head'
import { useState } from 'react'

import FutureValueAnnuityForm from '../components/futureValueAnnuity/FutureValueAnnuityForm'
import FutureValueAnnuityChart from '../components/futureValueAnnuity/FutureValueAnnuityChart'
import FutureValueAnnuityTable from '../components/futureValueAnnuity/FutureValueAnnuityTable'

import { calcFutureValueAnnuity } from '../functions/functions'

function FutureValueAnnuity() {

    const [futureValueAnnuityVar, setFutureValueAnnuityVar] = useState({
        periodicSum: 100,
        interestRate: 8,
        inflationRate: 2,
        numberOfPeriods: 10,
        periodType: 'Year'
    })

    const [ data, setData ] = useState(calcFutureValueAnnuity(futureValueAnnuityVar))

    function handleCalculation(newValues) {

        const newValuesToInt = {}
        newValuesToInt.periodicSum = parseInt(newValues.periodicSum)
        newValuesToInt.interestRate = parseInt(newValues.interestRate)
        newValuesToInt.inflationRate = parseInt(newValues.inflationRate)
        newValuesToInt.numberOfPeriods = parseInt(newValues.numberOfPeriods)
        newValuesToInt.periodType = newValues.periodType 

        setFutureValueAnnuityVar(newValuesToInt)
        setData(calcFutureValueAnnuity(newValuesToInt))
    }

    return(
        <div className='main'>
            <Head>
                <title> Future value annuity </title>
            </Head>
            <FutureValueAnnuityForm values={futureValueAnnuityVar} calculation={handleCalculation} />
            <FutureValueAnnuityChart data={data} period={futureValueAnnuityVar.periodType} />
            <FutureValueAnnuityTable data={data} period={futureValueAnnuityVar.periodType} />
        </div>
    )

}

export default FutureValueAnnuity