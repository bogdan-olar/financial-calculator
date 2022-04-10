
import { Formik, Form, Field, ErrorMessage } from 'formik'

import {handleValidation} from '../../functions/functions'

function EffectiveInterestRateForm(props) {

    const { values, calculation } = props

    const validate = values => {

      const {annualInterestRate} = values
      const fields = Object.keys(values)

      const errors = {}

      handleValidation( annualInterestRate, fields[0], errors)

      return errors
    }

    return (
      <div className='form'>

         <div className='meniu-unit'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-percent" viewBox="0 0 16 16">
                  <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
            </div>
            <div>
                <div className='meniu-title'> Effective Interest Rate </div>
                <div className='meniu-text'> Calculate annual interest rate for different compunding periods. </div>
            </div>
         </div> 

        <Formik initialValues={values} onSubmit={calculation} validate={validate}>
          <Form>

            <div className="field-block">
              <label htmlFor="annualInterestRate" className="field-label" > Annual interest rate </label>
              <Field
                type="text"
                id="annualInterestRate"
                name="annualInterestRate"
                className="field-element"
              />
              <span className="error-msg">
                <ErrorMessage name="annualInterestRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual interest rate</b> that you predict.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="compoundingPeriod" className="field-label"> Compounding Period </label>
              <Field
                as="select"
                id="compoundingPeriod"
                name="compoundingPeriod"
                className="field-element-select"
              >
                <option value="2"> Semester </option>
                <option value="4"> Quarter </option>
                <option value="12"> Month </option>
                <option value="365"> Day </option>
              </Field>
            </div>

            <div className="field-block">
                <Field>
                    {
                        (props) => {
                            const { value } = props.field;
                            const { isValid } = props.form
                            return <button type='submit' 
                                           className='calc-btn' 
                                           onSubmit={ () => calculation(value)} 
                                           disabled={!isValid}
                                           > 
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

export default EffectiveInterestRateForm