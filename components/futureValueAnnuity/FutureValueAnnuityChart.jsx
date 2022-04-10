
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function FutureValueAnnuityChart(props) {
    
    const { data, period } = props

    const graficData = {
        labels: data.map( i => i.period ),
        datasets: [
            {
                label: 'Future value annuity',
                data: data.map( i => i.futureValueAnnuityBrut ),
                backgroundColor: ['rgba(51, 204, 51, 0.5)'],
                borderColor: ['rgb(20, 82, 20)'],
                borderWidth: 1
            },
            {
                label: 'Inflation ajusted',
                data: data.map( i => i.futureValueAnnuityNet ),
                backgroundColor: (data[data.length-1].periodicSum * data[data.length-1].period) <= data[data.length-1].futureValueAnnuityNet ? ["rgba(51, 153, 255, 0.5)"] : ['rgba(255, 0, 0, 0.5)'],
                borderColor: (data[data.length-1].periodicSum * data[data.length-1].period) <= data[data.length-1].futureValueAnnuityNet ? ["rgb(0, 51, 102)"] : ["rgb(0, 51, 102)"],
                borderWidth: 1
            },

        ]
    }

     const options = {
       plugins: {
         title: {
           display: true,
           text: "Future value of a annuity.",
           font: { size: 16 }
         },
       },
       scales: {
         x: {
           title: {
             display: true,
             text: period,
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
            <Bar data={graficData} options={options} />
        </div>
    )

}

export default FutureValueAnnuityChart