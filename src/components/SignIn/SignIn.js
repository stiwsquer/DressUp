/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// import { Redirect } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import NewCustomerInfo from '../NewCustomerInfo/NewCustomerInfo';
import { SignInForm, SignInSection } from './SignIn.style';
import { useLoginContext } from '../../context/LoginContext';

export default React.memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [, updateUserStatus] = useLoginContext();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res) {
        updateUserStatus(true);
        setRedirect(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <SignInSection>
      <SignInForm onSubmit={submit}>
        <Input
          isRequired
          inputType="email"
          inputId="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        >
          Email Address:
        </Input>

        <Input
          isRequired
          inputType="password"
          inputId="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        >
          Password:
        </Input>

        <Button>SIGN IN</Button>

        <Link className="remind-password" to="#">
          Forgot your password?
        </Link>
      </SignInForm>
      <NewCustomerInfo />
    </SignInSection>
  );
});
