import React, { useState } from 'react';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import './SignIn.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
