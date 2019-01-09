import React from 'react';
import {
  Field, 
  reduxForm
} from 'redux-form';
import myInput from './Field/index';
// import { requiredInput, correctInput, matchInput } from '../Validation';

class SignUpForm extends React.Component {
  submitNewUser(values) {
    console.log(values);
  }

  render() {
    // console.log('SignUpForm this.props:', this.props);
    return (
      <form onSubmit={this.props.handleSubmit((values) => {
        console.log('onSubmit is working');
        console.log(values);
        // this.submitNewUser(values)
      })}>
        <label htmlFor="username">Username</label>
        <Field 
          name="username"
          component={myInput}
          type="text"
          placeholder="Username"
          // validate={[requiredInput, correctInput]}
        />
        <label htmlFor="password">Password</label>
        <Field 
          name="password"
          component={myInput}
          type="password"
          placeholder="Password"
          // validate={[requiredInput]}
        />
        <label htmlFor="confirm-password">Confirm password</label>
        <Field
          name="confirm-password"
          component={myInput}
          type="password"
          placeholder="Confirm password"
          // validate={[requiredInput, matchInput]}
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: 'signup'
})(SignUpForm);

export default SignUpForm;