import React from 'react';

import SignUpForm from './signUpForm';

import '../css/signUp.css';

class SignUp extends React.Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="sign-up-form-container">
        <h2>Sign Up!</h2>
        <SignUpForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default SignUp;