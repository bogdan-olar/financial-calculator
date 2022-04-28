
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function EffectiveAnnualRateChart(props) {

    const graficData = {
        labels: ['effective annual rate', 'nominal anual rate', 'difference'],
        datasets: [
            {
                label: 'merge',
                data: [props.effective, props.nominal, props.effective-props.nominal],
                backgroundColor: [ 'rgba(51, 153, 255, 0.5)', 'rgba(51, 204, 51, 0.5)', 'rgba(255, 99, 71, 0.7)'],
                borderColor: ['#fff1e5'],
                borderWidth: 1
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Effective vs nominal annual rate.'
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Values',
                    font: { size: 16 }
                }
            }
        }
    }

    return(
        <div className='grafic' style={{maxWidth: '450px'}}>
            <Doughnut data={graficData} options={options} />
        </div>
    )

}

export default EffectiveAnnualRateChart