
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function InvestmentYieldChart(props) {

    const { data } = props

    const totals = {
          totalBrutProfit: data.reduce( ( total, i) => total = total + i.brutYield, 0),
          totalInflationBrutProfit: data.reduce( (total, i) => total + i.inflationAdjustedBrutYield , 0),
          totalFees: data.reduce( (total, i) => total + i.annualManagementFee , 0), 
          totalTaxes: data.reduce( (total, i) => total + i.profitTax, 0 ),
          totalNetProfit: data.reduce( (total, i) => total + i.netYield , 0),
          totalInflationNetProfit: data.reduce( (total, i) => total + i.inflationAjustedNetYield, 0 )
    }

    const chartData = {
      labels: ["Brut profit", "Inflation ajusted profit"],
      datasets: [
        {
          label: "Brut profit",
          data: [
            totals.totalBrutProfit,
            totals.totalInflationBrutProfit,
          ],
          backgroundColor: ["#2a71d0"], //["#4bc0c0"],
          borderColor: ['black'],
          borderWidth: 1
        },
        {
          label: "Total fees",
          data: [
            totals.totalFees,
            totals.totalFees,
          ],
          backgroundColor: ["#f3ba2f"], //["#ecf0f1"],
          borderColor: ['grey'],
          borderWidth: 1
        },
        {
          label: "Total taxes",
          data: [
            totals.totalTaxes,
            totals.totalTaxes,
          ],
          backgroundColor: ["#ecf0f1"], //["#f3ba2f"],
          borderColor: ['grey'],
          borderWidth: 1
        },
        {
          label: "Net profit",
          data: [
            totals.totalNetProfit,
            totals.totalInflationNetProfit,
          ],
          backgroundColor: ["#4bc0c0"], //["#2a71d0"],
          borderColor: ['grey'],
          borderWidth: 1
        }
      ],
    };

         const options = {
           plugins: {
             title: {
               display: true,
               text: "Future value of a annuity.",
               font: { size: 16 }
             },
           },
           indexAxis: 'y',
           scales: {
             x: {
               title: {
                 display: true,
                 text: 'Value',
                 font: { size: 16 }
               },
             },
             y: {
               title: {
                 display: true,
                 text: "Results",
                 font: { size: 16 }
               },
             },
           },
         };

    return(
        <div className='grafic'>
            <Bar data={chartData} options={options} />
        </div>
    )

}

export default InvestmentYieldChart