import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { RegisterForm, FormWrapper, RegisterSection } from "./Register.style";
export default React.memo(function Register() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [months, setMonths] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    // const respone = await fetch("http://localhost:4000/api/register", {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // })
    // const content = await respone.json();
    // setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/signIn" />;
  }

  // const getCountries = async () => {
  //   try {
  //     let res = await fetch("https://restcountries.eu/rest/v2/all");
  //     res = await res.json();
  //     setCountryOptions(
  //       res.map((country) => {
  //         return {
  //           key: country.alpha2Code,
  //           value: country.alpha2Code,
  //           text: country.name,
  //         };
  //       })
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(getCountries, []);

  // const getMonths = async () => {
  //   try {
  //     let res = await fetch("./months.json");
  //     res = await res.json();
  //     setMonths(
  //       res.map((month) => {
  //         return {
  //           key: month.abbreviation,
  //           value: country.abbreviation,
  //           text: month.name,
  //         };
  //       })
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(getMonths, []);

  return (
    <RegisterSection>
      <RegisterForm onSubmit={submit}>
        <FormWrapper>
          <Input
            isRequired
            inputType="email"
            inputId="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            Email Adress
          </Input>

          <Input
            isRequired
            inputType="password"
            inputId="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          >
            Password
          </Input>
          {/* <Input isRequired inputType="password" inputId="confirm_password">
            Confirm Password
          </Input>
          <Select
            options={months}
            isRequired
            placeholder="Please Select Your Birth Month"
            selectId="birth-month"
          >
            Birth Month
          </Select>

          <Input isRequired inputType="text" inputId="first-name">
            First Name
          </Input>
          <Input isRequired inputType="text" inputId="last-name">
            Last Name
          </Input>
          <Input isRequired inputType="text" inputId="company-name">
            Company Name
          </Input>
          <Input isRequired inputType="tel" inputId="phone-number">
            Phone Number
          </Input>
          <Input isRequired inputType="text" inputId="adress-line-1">
            Adress Line 1
          </Input>
          <Input isRequired inputType="text" inputId="adress-line-2">
            Adress Line 2
          </Input>
          <Input isRequired inputType="text" inputId="city">
            Suburb/City
          </Input>
          <Select options={countryOptions} isRequired selectId="country">
            Country
          </Select>

          <Input isRequired inputType="text" inputId="state">
            State/Province
          </Input>
          <Input isRequired inputType="text" inputId="zip">
            Zip/Postcode
          </Input> */}
        </FormWrapper>
        <Button type="submit">CREATE ACCOUNT</Button>
      </RegisterForm>
    </RegisterSection>
  );
});
