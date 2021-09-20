import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { RegisterForm, FormWrapper, RegisterSection } from "./Register.style";
export default React.memo(function Register() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [months, setMonths] = useState([]);

  const getCountries = async () => {
    try {
      let countriesInfo = await fetch("https://restcountries.eu/rest/v2/all");
      let json = await countriesInfo.json();
      setCountryOptions(
        json.map((country) => {
          return {
            key: country.alpha2Code,
            value: country.alpha2Code,
            text: country.name,
          };
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(getCountries, []);

  const getMonths = async () => {
    try {
      let months = await fetch("./months.json");
      let json = await months.json();
      console.log(json);
      setMonths(
        json.map((month) => {
          return {
            key: month.abbreviation,
            value: country.abbreviation,
            text: month.name,
          };
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(getMonths, []);

  return (
    <RegisterSection>
      <RegisterForm>
        <FormWrapper>
          <Input isRequired inputType="email" inputId="email">
            Email Adress
          </Input>

          <Input isRequired inputType="password" inputId="password">
            Password
          </Input>
          <Input isRequired inputType="password" inputId="confirm_password">
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
          </Input>
        </FormWrapper>
        <Button type="submit">CREATE ACCOUNT</Button>
      </RegisterForm>
    </RegisterSection>
  );
});
