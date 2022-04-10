import React, {useState} from "react";

function LoanTable(props) {

    const { data } = props

    const totals = {
          totalUnequalRates: data.reduce( (sum, i) => sum = sum + i.unequalRate, 0),
          totalEqualRates: data.reduce( (sum, i) => sum = sum + i.equalRate, 0),
          totalUnequalInterestPaid: data.reduce( (sum, i) => sum = sum + i.unequalRateInterestRate, 0),
          totalEqualInterestPaid: data.reduce( (sum, i) => sum = sum + i.equalRateSoldInterestRate, 0),
          totalUnequalCapitalPaid: data.reduce( (sum, i) => sum = sum + i.unequalRateFixAmount, 0),
          totalEqualCapitalPaid: data.reduce( (sum, i) => sum = sum + i.equalRateCapitalRate, 0)

    }

    let x = Math.ceil(data[data.length - 1].finalLoanTerm/10)
    let numPages = []
    for (let i = 1; i <= x; i++){
      numPages.push(i)
    }

    const [pageShow, setPageShow] = useState(10)

    function handleChange(event) {
      setPageShow(event.target.value)
    }

    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="th-row"> Rate type </th>
              <th className="th-row"> Period </th>
              <th className="th-row"> Total rate </th>
              <th className="th-row"> Interest paid</th>
              <th className="th-row"> Capital rate </th>
              <th className="th-row"> Capital sold </th>
              <th className="th-row"> Difference </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, pageShow).map((v, i) => (
              <React.Fragment key={i}>
                <tr>
                    <td> unequal </td>
                    <td> {i + 1} </td>
                    <td> {v.unequalRate.toFixed(2)} </td>
                    <td> {v.unequalRateInterestRate.toFixed(2)} </td>
                    <td> {v.unequalRateFixAmount.toFixed(2)} </td>
                    <td> {v.unequalRateRamas.toFixed(2)} </td>
                    <td> </td>
                </tr>
                <tr>
                    <td style={{borderBottom: '1px dotted black'}}> equal </td>
                    <td style={{borderBottom: '1px dotted black'}}> {i + 1} </td>
                    <td style={{borderBottom: '1px dotted black'}}> {v.equalRate.toFixed(2)} </td>
                    <td style={{borderBottom: '1px dotted black'}}> {v.equalRateSoldInterestRate.toFixed(2)}</td>
                    <td style={{borderBottom: '1px dotted black'}}> {v.equalRateCapitalRate.toFixed(2)} </td>
                    <td style={{borderBottom: '1px dotted black'}}> {v.equalRateRamas.toFixed(2)} </td>
                    <td style={{borderBottom: '1px dotted black'}}>
                      {" "}
                      {(v.unequalRate.toFixed(2) - v.equalRate.toFixed(2)).toFixed(
                        2
                      )}{" "}
                    </td>
                </tr>
              </React.Fragment>
            ))}
              {
                (pageShow < data[data.length - 1].finalLoanTerm) ? <tr>
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
              <th className="tf-row" > Unequal </th>
              <th className="tf-row" ></th>
              <th className="tf-row" > {totals.totalUnequalRates.toFixed(2)} </th>
              <th className="tf-row" > {totals.totalUnequalInterestPaid.toFixed(2)} </th>
              <th className="tf-row" > {totals.totalUnequalCapitalPaid.toFixed(2)} </th>
              <th className="tf-row" > </th>
              <th className="tf-row" > </th>
            </tr>
            <tr>
              <th > Equal </th>
              <th > </th>
              <th > {totals.totalEqualRates.toFixed(2)} </th>
              <th > {totals.totalEqualInterestPaid.toFixed(2)} </th>
              <th > {totals.totalEqualCapitalPaid.toFixed(2)} </th>
              <th > </th>
              <th > </th>
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
                      numPages.map( i => <option key={i} value={i*10}> {(i*10)<data[data.length - 1].finalLoanTerm ? i*10: data[data.length - 1].finalLoanTerm} </option>)
                    }
                  </select> 
                  rates
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );

}

export default LoanTable