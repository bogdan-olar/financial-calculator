
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function FutureValueChart( props ) {

    const { data, period } = props

    const graficData = {
      labels: data.map((object) => object.period),
      datasets: [
        {
          label: "LumpSum future value",
          data: data.map((object) => object.futureValueBrut),
          backgroundColor: ["rgba(51, 204, 51, 0.5)"],
          borderColor: ["rgb(20, 82, 20)"],
          borderWidth: 1,
          fill: { target: "1" },
        },
        {
          label: "Inflation ajusted",
          data: data.map((object) => object.futureValueNet),
          backgroundColor: data[data.length-1].futureValueNet >= data[0].futureValueNet ? ["rgba(51, 153, 255, 0.5)"] : ['rgba(255, 0, 0, 0.5)'],
          borderColor: data[data.length-1].futureValueNet >= data[0].futureValueNet ? ["rgb(0, 51, 102)"] : ['red'],
          borderWidth: 1,
          fill: { target: 'origin'}
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Future value of a lumpsum.",
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

    return (
      <div className='grafic' >
        <Line data={graficData} options={options} />
      </div>
    );

}

export default FutureValueChart