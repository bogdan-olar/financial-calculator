
function EffectiveAnnualRateTable(props) {

    return (
      <div className="table" style={{maxWidth: '550px', marginTop: '30px', marginBottom: '30px'}}>
        <table>
          <thead>
            <tr>
              <th rowSpan={2} style={{fontSize: '20px'}}> Effective anual rate </th>
              <th rowSpan={2} style={{fontSize: '27px'}}> = </th>
              <th rowSpan={2} style={{fontSize: '27px'}}> ( 1 + </th>
              <th style={{ borderBottom: "1px solid black", fontSize: '21px' }}>
                {" "}
                interest rate{" "}
              </th>
              <th rowSpan={2} style={{fontSize: '27px', textAlign: 'left'}}> ) x periods </th>
            </tr>
            <tr>
              <th> compounding period </th>
            </tr>
          </thead>
          <tbody> {/* style={{borderTop: '1px dotted black'}}> */}
            <tr>
              <td rowSpan={2} style={{fontSize: '27px'}}> {props.rezult.toFixed(4)} </td>
              <td rowSpan={2} style={{fontSize: '27px'}} > = </td>
              <td rowSpan={2} style={{fontSize: '27px'}}> ( 1 + </td>
              <td style={{ borderBottom: "1px solid black", fontSize: '21px' }}> {props.rates.annualInterestRate} </td>
              <td rowSpan={2} style={{fontSize: '28px', textAlign: 'left'}}> ) x {props.rates.compoundingPeriod} </td>
            </tr>
            <tr>
              <th style={{background: '#fff1e5'}}> {props.rates.compoundingPeriod} </th>
            </tr>
          </tbody>
        </table>
      </div>
    );

}

export default EffectiveAnnualRateTable