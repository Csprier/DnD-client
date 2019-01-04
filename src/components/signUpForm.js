import React from 'react';
// import { connect } from 'react-redux';
// import { nonEmpty, required, isTrimmed, matches } from '../../validators';
// import { Redirect } from 'react-router-dom';
// import { registerUser } from '../actions/authActions';
import {
  Field, 
  reduxForm
} from 'redux-form';

class SignUpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field 
          name="username"
          component="input"
          type="text"
          placeholder="Username"
        />
        <Field 
          name="password"
          component="input"
          type="text"
          placeholder="Password"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

SignUpForm = reduxForm ({
  form: 'signup',
}) (SignUpForm);

export default SignUpForm;