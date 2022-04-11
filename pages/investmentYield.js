
import { useState } from 'react'

import Head from 'next/head'

import InvestmentYieldForm from '../components/investmentYield/InvestmentYieldForm'
import InvestmentYieldChart from '../components/investmentYield/InvestmentYieldChart'
import InvestmentYieldTable from '../components/investmentYield/InvestmentYieldTable'

import { calcInvestmentYeld } from '../functions/functions'

function InvestmentYield() {

    const [ investmentValues, setInvestmentValues ] = useState({
        investmentPrincipal: 1000,
        annualGrowthRate: 7,
        inflationRate: 2,
        annualInvestmentFee: 1,
        totalTaxRate: 10,
        periods: 10
    })

    const [data, setData] = useState(calcInvestmentYeld(investmentValues))

    function handleCalculation(newValues) {

        const obiect = {}
        obiect.investmentPrincipal = parseFloat(newValues.investmentPrincipal)
        obiect.annualGrowthRate = parseFloat(newValues.annualGrowthRate)
        obiect.inflationRate = parseFloat(newValues.inflationRate)
        obiect.annualInvestmentFee = parseFloat(newValues.inflationRate)
        obiect.totalTaxRate = parseFloat(newValues.totalTaxRate)
        obiect.periods = parseFloat(newValues.periods)

        setInvestmentValues(obiect)
        setData(calcInvestmentYeld(obiect))

    }

    return(
        <div className='main'>
            <Head>
                <title> Investment profits </title>
            </Head>
            <InvestmentYieldForm data={investmentValues} calculation={handleCalculation} />
            <InvestmentYieldChart data={data} />
            <InvestmentYieldTable data={data} />
        </div>
    )

}

export default InvestmentYield