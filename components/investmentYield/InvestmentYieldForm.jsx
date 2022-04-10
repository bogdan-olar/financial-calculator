
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { handleValidation } from '../../functions/functions'

function InvestmentYieldForm(props) {

    const { data, calculation } = props

    const validate = (values) => {

      const { investmentPrincipal, annualGrowthRate, inflationRate, annualInvestmentFee, totalTaxRate, periods} = values
      const fields = Object.keys(values)

        const errors = {}

        handleValidation(investmentPrincipal, fields[0], errors)
        handleValidation(annualGrowthRate, fields[1], errors)
        handleValidation(inflationRate, fields[2], errors)
        handleValidation(annualInvestmentFee, fields[3], errors)
        handleValidation(totalTaxRate, fields[4], errors)
        handleValidation(periods, fields[5], errors)

        return errors

    }

    return (
      <div className='form'>

        <div className='meniu-unit'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z"/>
              </svg>
          </div>
          <div>
            <div className='meniu-title'> Investment Yield </div>
            <div className='meniu-text'> Calculate the future wins of your investments. </div>
          </div>
        </div>

        <Formik initialValues={data} onSubmit={calculation} validate={validate}>
          <Form>
            <div className='field-block'>
              <label htmlFor="investmentPrincipal" className='field-label'> Investment principal </label>
              <Field type="text" id="investmentPrincipal" name="investmentPrincipal" className='field-element' />
              <span className='error-msg'>
                  <ErrorMessage name="investmentPrincipal" />
              </span>
              <div className="field-exp">
                The lump sum value that you want to invest.
              </div>
            </div>

            <div className='field-block' >
              <label htmlFor="annualGrowthRate" className='field-label'> Annual growth rate </label>
              <Field type="text" id="annualGrowthRate" name="annualGrowthRate" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="annualGrowthRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual yield rate</b> that you predict you will gone a win.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="inflationRate" className='field-label'> Inflation Rate </label>
              <Field type="text" id="inflationRate" name="inflationRate"  className='field-element'/>
              <span className='error-msg'>
                <ErrorMessage name="inflationRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual inflation rate</b> that you predict.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="annualInvestmentFee" className='field-label'> Annual investment fee </label>
              <Field type="text" id="annualInvestmentFee" name="annualInvestmentFee" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="annualInvestmentFee" />
              </span>
              <div className="field-exp">
                The value of the <b>annual fee rate</b> that you predict.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="totalTaxRate" className='field-label'> Total tax rate </label>
              <Field type="text" id="totalTaxRate" name="totalTaxRate" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="totalTaxRate" />
              </span>
              <div className="field-exp">
                The total value of the <b>annual tax rate</b> that you predict.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="periods" className='field-label'> Invested years </label>
              <Field type="text" id="periods" name="periods" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="periods" />
              </span>
              <div className="field-exp">
                 The number of years or months that you want to invest.
              </div>
            </div>

            <div className='field-block'>
                <Field>
                    {
                        props => {
                            const { value } = props.field
                            const { isValid } = props.form
                            return <button type='submit' 
                                           className='calc-btn' 
                                           onSubmit={() => calculation(value)}
                                           disabled={!isValid}> 
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                                      <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                                    </svg>
                                    <span style={{marginLeft: '10px'}}>Calculate</span>
                                    </button>
                        }
                    }
                </Field>
            </div>
          </Form>
        </Formik>

      </div>
    );

}

export default InvestmentYieldForm