
import {PolarArea} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function EffectiveAnnualRateChart(props) {

    const graficData = {
        labels: ['nominal anual rate', 'effective annual rate'],
        datasets: [
            {
                label: 'merge',
                data: [props.nominal, props.effective],
                backgroundColor: [ 'lightblue', 'lightgreen'],
                borderColor: ['blue', 'green'],
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
            <PolarArea data={graficData} options={options} />
        </div>
    )

}

export default EffectiveAnnualRateChart