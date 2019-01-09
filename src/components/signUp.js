import React from 'react';

import SignUpForm from './signUpForm';

import '../css/signUp.css';

class SignUp extends React.Component {
  render() {
    // console.log('SignUp Component:', this.props);
    return (
      <div className="sign-up-form-container">
        <h2>Sign Up!</h2>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;