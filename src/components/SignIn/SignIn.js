import React, { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import Button from "../Button/Button";
import Input from "../Input/Input";
import NewCustomerInfo from "../NewCustomerInfo/NewCustomerInfo";
import { SignInForm, SignInSection } from "./SignIn.style";

export default React.memo(function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const setAccessToken = useLoginContext()[1];
  const setRefreshToken = useLoginContext()[3];

  const submit = async (e) => {
    e.preventDefault();
    const respone = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: email,
      }),
    });

    const content = await respone.json();
    setAccessToken(content.accessToken);
    setRefreshToken(content.refreshToken);
    setRedirect(true);
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
