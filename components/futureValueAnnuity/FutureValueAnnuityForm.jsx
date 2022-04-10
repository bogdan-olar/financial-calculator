
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { handleValidation } from '../../functions/functions'

function FutureValueAnnuityForm(props) {

    const { values, calculation } = props

    const validate = (values) => {

        const { periodicSum, interestRate, inflationRate, numberOfPeriods } = values
        const fields = Object.keys(values)
        let errors = {}

          handleValidation( periodicSum, fields[0], errors)
          handleValidation( interestRate, fields[1], errors)
          handleValidation( inflationRate, fields[2], errors)
          handleValidation( numberOfPeriods, fields[3], errors)
          
        return errors
    }

    return (
      <div className='form'>

        <div className='meniu-unit'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
              <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
            </svg>
          </div>
          <div>
            <div className='meniu-title'> FV Annuity </div>
            <div className='meniu-text'> Calculate the future value of a string of equal cash flows. </div>
          </div>
        </div>

        <Formik
          initialValues={values}
          validate={validate}
          onSubmit={calculation}
        >
          <Form>
            <div className='field-block'>
              <label htmlFor="periodicSum" className="field-label"> Periodic sum </label>
              <Field type="text" id="periodicSum" name="periodicSum" className='field-element'/>
              <span className='error-msg'>
                <ErrorMessage name="periodicSum" />
              </span>
              <div className="field-exp">
                The periodic value that you want to economsesti and invest.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="interestRate" className="field-label"> Interest rate </label>
              <Field type="text" id="interestRate" name="interestRate" className='field-element'/>
              <span className='error-msg'>
                <ErrorMessage name="interestRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual interest rate</b> that you predict you will gone a win.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="inflationRate" className="field-label"> Inflation rate </label>
              <Field type="text" id="inflationRate" name="inflationRate" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="inflationRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual inflation rate</b> that you predict.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="numberOfPeriods" className="field-label"> Number of periods </label>
              <Field type="text" id="numberOfPeriods" name="numberOfPeriods" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="numberOfPeriods" />
              </span>
              <div className="field-exp">
                The number of years or months that you want to invest.
              </div>
            </div>

            <div className='field-block'>
              <label htmlFor="periodType" className="field-label"> Period type </label>
              <Field as="select" id="periodType" name="periodType" className='field-element-select'>
                <option value="Year"> Year </option>
                <option value="Semester"> Semester </option>
                <option value="Quarter"> Quarter </option>
                <option value="Month"> Month </option>
                <option value="Day"> Day </option>
              </Field>
            </div>

            <div className="field-block">
              <Field>
              {  (props) => {
                    const { value } = props.field
                    const { isValid } = props.form
          
                    return <button type="submit"
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

export default FutureValueAnnuityForm