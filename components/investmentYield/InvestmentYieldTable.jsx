import {useState} from 'react'

function InvestmentYieldTable(props) {

    const { data } = props
    
    const totals = {
          totalBrutProfit: data.reduce( ( total, i) => total = total + i.brutYield, 0),
          totalInflationBrutProfit: data.reduce( (total, i) => total + i.inflationAdjustedBrutYield , 0),
          totalFees: data.reduce( (total, i) => total + i.annualManagementFee , 0), 
          totalTaxes: data.reduce( (total, i) => total + i.profitTax, 0 ),
          totalNetProfit: data.reduce( (total, i) => total + i.netYield , 0),
          totalInflationNetProfit: data.reduce( (total, i) => total + i.inflationAjustedNetYield, 0 )
    }
      
    let x = Math.ceil(data[data.length - 1].period/15)
    let numPages = []
    for (let i = 1; i <= x; i++){
      numPages.push(i)
    }

    const [pageShow, setPageShow] = useState(15)

    function handleChange(event) {
      setPageShow(event.target.value)
    }
 
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th rowSpan={2} className='th-row'> Period </th>
              <th rowSpan={2} className='th-row'> Invested capital </th>
              <th colSpan={2} className='th-row'> Brut profit </th>
              <th rowSpan={2} className='th-row'> Annual fees</th>
              <th rowSpan={2} className='th-row'> Total annual taxes </th>
              <th colSpan={2} className='th-row'> Net profit </th>
            </tr>
            <tr>
              <th className='th-row'> profit </th>
              <th className='th-row'> inflation ajusted </th>
              <th className='th-row'> profit </th>
              <th className='th-row'> inflation ajusted </th>
            </tr>
          </thead>
          <tbody>
              {
                  data.slice(0, pageShow).map( obiect => <tr key={obiect.period}>
                          <td> {obiect.period} </td>
                          <td> {obiect.investmentPrincipal.toFixed(2)} </td>
                          <td> {obiect.brutYield.toFixed(2)} </td>
                          <td> {obiect.inflationAdjustedBrutYield.toFixed(2)} </td>
                          <td> {obiect.annualManagementFee.toFixed(2)} </td>
                          <td> {obiect.profitTax.toFixed(2)} </td>
                          <td> {obiect.netYield.toFixed(2)} </td>
                          <td> {obiect.inflationAjustedNetYield.toFixed(2)} </td>
                      </tr>
                  )
              }
              {
                (pageShow < data[data.length - 1].period) ? <tr>
                  <td> ......... </td>
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
              <th className="tf-row"></th>
              <th className="tf-row"> {totals.totalBrutProfit.toFixed(2)} </th>
              <th className="tf-row"> {totals.totalInflationBrutProfit.toFixed(2)} </th>
              <th className="tf-row"> {totals.totalFees.toFixed(2)} </th>
              <th className="tf-row"> {totals.totalTaxes.toFixed(2)} </th>
              <th className="tf-row"> {totals.totalNetProfit.toFixed(2)} </th>
              <th className="tf-row"> {totals.totalInflationNetProfit.toFixed(2)} </th>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td colSpan={2} style={{borderTop: '1px dotted black', paddingTop: '7px'}}> 
                  show 
                  <select value={pageShow} onChange={handleChange} name='pageShow' className='field-element-select-mic'>
                    {
                      numPages.map( i => <option key={i} value={i*15}> {(i*15)<data[data.length - 1].period ? i*15: data[data.length - 1].period} </option>)
                    }
                  </select> 
                  rows
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );

}

export default InvestmentYieldTable