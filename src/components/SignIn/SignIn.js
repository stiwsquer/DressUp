import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import NewCustomerInfo from "../NewCustomerInfo/NewCustomerInfo";
import { SignInForm, SignInSection } from "./SignIn.style";

export default React.memo(function SignIn() {
  return (
    <SignInSection>
      <SignInForm>
        <Input isRequired inputType="email" inputId="email">
          Email Address:
        </Input>

        <Input isRequired inputType="password" inputId="password">
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
