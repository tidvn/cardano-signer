import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { CardanoWallet } from '@meshsdk/react';

interface Values {
  network: string;
  encoded_transaction: string;
}

export default function Home() {
  return (
    <Formik
      initialValues={{
        network: '',
        encoded_transaction: '',
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <div className="mt-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <CardanoWallet />
            <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
              <div className="flex gap-4">
                <Field as="select" name="network" className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                  <option value="preprod">Preprod</option>
                  <option value="preview">Preview</option>
                  <option value="mainNet">MainNet</option>
                </Field>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <Field
              as="textarea"
              name="encoded_transaction"
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="encoded transaction"
              rows={8}
              id="encoded_transaction"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Sign and submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

