
function EffectiveAnnualRateTable(props) {

    return (
      <div className="table" style={{maxWidth: '550px', marginTop: '30px', marginBottom: '30px'}}>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}> Effective anual rate </th>
              <th rowSpan={2}> = </th>
              <th rowSpan={2}> ( 1 + </th>
              <th style={{ borderBottom: "1px solid black" }}>
                {" "}
                annual interest rate{" "}
              </th>
              <th rowSpan={2}> ) periods </th>
            </tr>
            <tr>
              <th> compounding periods </th>
            </tr>
          </thead>
          <tbody style={{borderTop: '1px dotted black'}}>
            <tr>
              <td rowSpan={2}> {props.rezult.toFixed(4)} </td>
              <td rowSpan={2}> = </td>
              <td rowSpan={2}> ( 1 + </td>
              <td style={{ borderBottom: "1px solid black" }}> {props.rates.annualInterestRate} </td>
              <td rowSpan={2}> ) {props.rates.compoundingPeriod} </td>
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