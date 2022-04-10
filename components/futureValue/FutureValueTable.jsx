
import { useState } from 'react'

function FutureValueTable ( props ) {

    const { data, period } = props

    let x = Math.ceil(data[data.length - 1].period/15)
    let numPages = []
    for (let i = 1; i <= x; i++){
      numPages.push(i)
    }

    const [pageShow, setPageShow] = useState(16)

    function handleChange(event) {
      setPageShow(event.target.value)
    }

    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="th-row"> {period} </th>
              <th className="th-row"> Lump sum </th>
              <th className="th-row"> Interest rate </th>
              <th className="th-row"> Inflation rate </th>
              <th className="th-row"> Future value </th>
              <th className="th-row"> Inflation ajusted </th>
              <th className="th-row"> Difference </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(1, pageShow).map((object) => (
              <tr key={object.period}>
                <td> {object.period} </td>
                <td> {object.period === 0 ? object.initialSum : '-'} </td>
                <td> {object.periodInterestRateValue.toFixed(2)} % </td>
                <td> {object.periodInflationRateValue.toFixed(2)} % </td>
                <td> {object.futureValueBrut.toFixed(2)} </td>
                <td> {object.futureValueNet.toFixed(2)} </td>
                <td> {(object.futureValueBrut - object.futureValueNet).toFixed(2)} </td>
              </tr>
            ))}
            {
              (pageShow < data[data.length - 1].period) ? <tr>
                <td> ......... </td>
                <td> ......... </td>
                <td> ......... </td>
                <td> ......... </td>
                <td> ......... </td>
                <td> ......... </td>
                <td> ......... </td>
              </tr> : null
            }
          </tbody>
          <tfoot>
            <tr>
              <th className="tf-row"> Totals </th>
              <th className="tf-row"> {data[data.length -1].initialSum.toFixed(2)} </th>
              <th className="tf-row"> </th>
              <th className="tf-row"> </th>
              <th className="tf-row"> { data[data.length-1].futureValueBrut.toFixed(2)} </th>
              <th className="tf-row"> { data[data.length-1].futureValueNet.toFixed(2) } </th>
              <th className="tf-row"> {(data[data.length-1].futureValueBrut - data[data.length-1].futureValueNet).toFixed(2)} </th>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td colSpan={2} style={{borderTop: '1px dotted black', paddingTop: '7px'}}> 
                  show 
                  <select value={pageShow} onChange={handleChange} name='pageShow' className='field-element-select-mic'>
                    {
                      numPages.map( i => <option key={i} value={i*15+1}> {(i*15)<data[data.length - 1].period ? i*15: data[data.length - 1].period} </option>)
                    }
                  </select> 
                  rows
              </td>
            </tr>
          </tfoot>
        </table>
          {
              period != 'Year' ? <div className="field-exp-tabel"> * Becase your period is smaller than a year, your <b>period interest rate</b> becames <b> {data[data.length-1].periodInterestRateValue.toFixed(2)}% </b> (annual interest rate/{period}), and the <b>period inflation rate</b> becomes <b>{data[data.length-1].periodInflationRateValue.toFixed(2)}%</b> (annual inflation rate/{period}).</div> : null
          }
      </div>
    );

}

export default FutureValueTable