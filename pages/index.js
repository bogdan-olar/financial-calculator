
import Head from 'next/head'
import { useState } from 'react'

import FutureValueChart from '../components/futureValue/FutureValueChart'
import FutureValueTable from '../components/futureValue/FutureValueTable'
import FutureValueForm from '../components/futureValue/FutureValueForm'

import { calcFutureValue } from '../functions/functions'

export default function Home() {

  const [futureValueVar, setFutureValueVar] = useState({
    prezentValue: 1000,
    interestRate: 8, 
    inflationRate: 2,
    numberOfPeriods: 10,
    periodType: 'Year'
  })

  const [data, setData] = useState(calcFutureValue(futureValueVar))

  function handleCalculation( newValues ) {

    const newValuesToiInt = {}
    newValuesToiInt.prezentValue = parseFloat(newValues.prezentValue)
    newValuesToiInt.interestRate = parseFloat(newValues.interestRate)
    newValuesToiInt.inflationRate = parseFloat(newValues.inflationRate)
    newValuesToiInt.numberOfPeriods = parseFloat(newValues.numberOfPeriods)
    newValuesToiInt.periodType = newValues.periodType
    setFutureValueVar(newValuesToiInt)
    setData(calcFutureValue(newValuesToiInt))
  }

  return (
      <div className='main'>
        <Head>
          <title> Future value lump sum </title>
        </Head>
        <FutureValueForm data={futureValueVar} calculation={handleCalculation} />
        <FutureValueChart data={data} period={futureValueVar.periodType} />
        <FutureValueTable data={data} period={futureValueVar.periodType} />
      </div>
  )
}
