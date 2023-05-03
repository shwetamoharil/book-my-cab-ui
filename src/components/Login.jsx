import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/Login.scss';

function Login() {
  const initialValues = {
    username: '',
    password: '',
    keepMeSignedIn: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div className="login-form-container">
      <h2>Hello, Welcome</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Enter your username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter your password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <Field
                type="checkbox"
                id="keepMeSignedIn"
                name="keepMeSignedIn"
              />
              <label htmlFor="keepMeSignedIn">Keep me signed in</label>
            </div>
            <button type="submit" className="form-submit-btn">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
