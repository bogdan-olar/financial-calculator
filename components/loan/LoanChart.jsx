
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function LoanChart(props) {

    const { data } = props

    const graficData = {
        labels: data.map( (v, i) => i+1),
        datasets: [
            {
                label: 'Loan amount',
                data: data.map( i => i.loanAmount ),
                backgroundColor: ['rgba(211, 211, 211, 0.4)'], //['rgba(39, 105, 190, 0.7)'],//['rgba(216, 159, 14, 0.6)'],
                borderColor: ['rgba(153, 153, 153, 0.4)'],
                borderWidth: 1, 
                fill: { target: 'origin'},
                pointStyle: 'circle',
                pointRadius: 0
            },
            {
                label: 'Total unequal rate paid',
                data: data.map( value => value.unequalRateTotalPaid ),
                backgroundColor: ['rgba(51, 204, 51, 0.5)'],
                borderColor: ['rgba(153, 153, 153, 0.6)'],
                borderWidth: 1,
                fill: { target: 'origin'},
                pointStyle: 'circle',
                pointRadius: 1
            },
            {
                label: 'Tota equal rate paid',
                data: data.map( (value, index) => value.equalRateTotalPaid ),
                backgroundColor: ['rgba(51, 153, 255, 0.5)'],
                borderColor: ['rgba(153, 153, 153, 0.6)'],
                borderWidth: 1,
                fill: { target: '-1'},
                pointStyle: 'circle',
                pointRadius: 1
            }

        ]
    }

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Loan capital sold.",
          font: { size: 16 }
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
            font: { size: 16 }
          },
        },
        y: {
          title: {
            display: true,
            text: "Value",
            font: { size: 16 }
          },
        },
      },
    };

    return(
        <div className='grafic'>
            <Line data={graficData} options={options} />
        </div>
    )

}

export default LoanChart