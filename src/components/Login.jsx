import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/Login.scss';
import { login } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAPICall } from '../slice/httpReq';
import { environment } from '../environment/environment';
import { setUserData } from '../slice/userData';
const apiKey = environment.firebaseConfig.apiKey;
const loginURL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
function Login() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector(state => state.httpReq);
  const initialValues = {
    username: '',
    password: '',
    keepMeSignedIn: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async values => {
    const apiCall = {
      method: 'post',
      endpoint: `${loginURL}?key=${apiKey}`,
      payload: {
        email: values.username,
        password: values.password,
        returnSecureToken: values.keepMeSignedIn,
      },
    };
    dispatch(asyncAPICall(apiCall));
  };
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (data) {
    dispatch(setUserData(data));
  }
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
