
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function LoanChart(props) {

    const { data } = props

    const graficData = {
        labels: data.map( (v, i) => i+1),
        datasets: [
            {
                label: 'Unequal rate',
                data: data.map( i => i.unequalRateLoanSold ),
                backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                borderColor: ['red'],
                borderWidth: 1, 
                fill: { target: 'origin'}
            },
            {
                label: 'Equal rate',
                data: data.map( i => i.equalRateLoanSold ),
                backgroundColor: ['lightgreen'],
                borderColor: ['green'],
                borderWidth: 1,
                fill: { target: '-1'}
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