
import { useState } from 'react'
import Head from 'next/head'

import LoanForm from '../components/loan/LoanForm'
import LoanChart from "../components/loan/LoanChart";
import LoanTable from '../components/loan/LoanTable'


import { calcLoan } from '../functions/functions'

function Loan() {

    const [creditValues, setCreditValues] = useState({
        loanAmount: 100000,
        loanTerm: 10,
        loanInterestRate: 10,
        payBackPeriod: 12
    })

    const [data, setData] = useState(calcLoan(creditValues))

    function handleCalculate(newValues) {

        const obiect = {}
        obiect.loanAmount = parseFloat(newValues.loanAmount)
        obiect.loanTerm = parseFloat(newValues.loanTerm)
        obiect.loanInterestRate = parseFloat(newValues.loanInterestRate)
        obiect.payBackPeriod = parseFloat(newValues.payBackPeriod)

        setCreditValues(obiect)
        setData(calcLoan(obiect))

    }

    return(
        <div className='main'>
            <Head>
                <title> Loan costs </title>
            </Head>
            <LoanForm initialValues={creditValues} calculate={handleCalculate} />
            <LoanChart data={data} />
            <LoanTable data={data} />
        </div>
    )

}

export default Loan