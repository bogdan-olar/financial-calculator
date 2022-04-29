
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { handleValidation } from '../../functions/functions'

function LoanForm(props) {

    const { initialValues, calculate } = props

    const validate = (values) => {

        const { loanAmount, loanInterestRate, loanTerm } = values
        const fields = Object.keys(values)
        console.log(fields)

        const errors = {}

        handleValidation(values.loanAmount, fields[0], errors)
        handleValidation(values.loanInterestRate, fields[2], errors)
        handleValidation(values.loanTerm, fields[1], errors)

        return errors
    }

    return (
      <div className='form'>

         <div className='meniu-unit'>
            <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi    bi-cash-coin" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                </svg>
            </div>
            <div>
                <div className='meniu-title'> Loans  </div>
                <div className='meniu-text'> Calculate your loan costs and the amount you pay back. </div>
            </div>
         </div> 

        <Formik initialValues={initialValues} onSubmit={calculate} validate={validate}
        >
          <Form>
            <div className="field-block">
              <label htmlFor="loanAmount" className="field-label"> Loan amount </label>
              <Field type="text" id="loanAmount" name="loanAmount" className="field-element" />
              <span className="error-msg">
                  <ErrorMessage name="loanAmount" />
              </span>
              <div className="field-exp">
                The value of your loan.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="loanInterestRate" className="field-label"> Loan interest rate </label>
              <Field type="text" id="loanInterestRate" name="loanInterestRate" className="field-element"
              />
              <span className="error-msg">
                <ErrorMessage name="loanInterestRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual interest rate</b> that you predict you will pay.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="loanTerm" className="field-label"> Loan term (years) </label>
              <Field type="text" id="loanTerm" name="loanTerm" className="field-element" />
              <span className="error-msg">
                <ErrorMessage name="loanTerm" />
              </span>
              <div className="field-exp">
                The number of years that you want to borrow.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="payBackPeriod" className="field-label"> Pay back period </label>
              <Field as="select" id="payBackPeriod" name="payBackPeriod" className="field-element-select">
                <option value="1"> Year </option>
                <option value="2"> Semester </option>
                <option value="4"> Quarter </option>
                <option value="12"> Month </option>
              </Field>
            </div>

            <div className="field-block">
              <Field>
                {(props) => {
                  const { value } = props.field
                  const { isValid } = props.form
                  return <button type="submit"
                                 className='calc-btn'
                                 onSubmit={() => calculate(value)}
                                 disabled={!isValid}
                            > 
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                              </svg>
                              <span style={{marginLeft: '10px'}}>Calculate</span>
                            </button>
                }}
              </Field>
            </div>
          </Form>
        </Formik>

      </div>
    );

}

export default LoanForm