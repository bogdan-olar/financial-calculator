
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { handleValidation } from '../../functions/functions'

function FutureValueForm (props) {

    const { data, calculation } = props

    const validate = (values) => {

      const { prezentValue, interestRate, inflationRate, numberOfPeriods} = values
      const fields = Object.keys(values)

      const errors = {}

      handleValidation( values.prezentValue, fields[0], errors)
      handleValidation( values.interestRate, fields[1], errors)
      handleValidation( values.inflationRate, fields[2], errors)
      handleValidation( values.numberOfPeriods, fields[3], errors)

      return errors
    }

    return (
        <div className='form'>

          <div className='meniu-unit'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
                </svg>
            </div>
            <div>
                <div className='meniu-title'> Future Value </div>
                <div className='meniu-text'> Calculate the future value of a prezent lump sum. </div>
            </div>
         </div> 

        <Formik initialValues={data} onSubmit={calculation} validate={validate}>
          <Form>
            <div className="field-block">
              <label htmlFor="prezentValue" className="field-label"> Prezent value </label>
              <Field type="text" id="prezentValue" name="prezentValue" className="field-element" />
              <span className="error-msg">
                <ErrorMessage name="prezentValue" />
              </span>
              <div className="field-exp">
                The value of your lumpsum of money that you have to invest.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="interestRate" className="field-label"> Interest rate </label>
              <Field type="text" id="interestRate" name="interestRate" className='field-element' />
              <span className="error-msg">
                <ErrorMessage name="interestRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual interest rate</b> that you predict you will gone a win.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="inflationRate" className="field-label"> Inflation rate </label>
              <Field type="text" id="inflationRate" name="inflationRate" className='field-element' />
              <span className="error-msg">
                <ErrorMessage name="inflationRate" />
              </span>
              <div className="field-exp">
                The value of the <b>annual inflation rate</b> that you predict.
              </div>
            </div>

            <div className="field-block">
              <label htmlFor="numberOfPeriods" className="field-label"> Number of periods </label>
              <Field type="text" id="numberOfperiods" name="numberOfPeriods" className='field-element' />
              <span className='error-msg'>
                <ErrorMessage name="numberOfPeriods" />
              </span>
              <div className="field-exp">
                The number of years or months that you want to invest.
              </div>
            </div>

            <div className="field-block">
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
                {(props) => {
                  const { value } = props.field;
                  const { isValid } = props.form;
                  return (
                    <button
                      type="submit"
                      className='calc-btn'
                      onSubmit={() => calculation(value)}
                      disabled={!isValid}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                      </svg>
                      <span style={{marginLeft: '10px'}}>Calculate</span>
                    </button>
                  );
                }}
              </Field>
            </div>
          </Form>
        </Formik>
      </div>
    );

}

export default FutureValueForm