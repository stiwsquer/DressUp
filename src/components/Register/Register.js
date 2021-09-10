import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import "./style.scss";
export default function Register() {
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
    <section className="register">
      <form>
        <div className="form-wrapper">
          <Input isRequired={true} inputType="email" inputId="email">
            Email Adress
          </Input>

          <Input isRequired={true} inputType="password" inputId="password">
            Password
          </Input>
          <Input
            isRequired={true}
            inputType="password"
            inputId="confirm_password"
          >
            Confirm Password
          </Input>
          <Select
            options={months}
            isRequired={true}
            placeholder="Please Select Your Birth Month"
            selectId="birth-month"
          >
            Birth Month
          </Select>

          <Input isRequired={true} inputType="text" inputId="first-name">
            First Name
          </Input>
          <Input isRequired={true} inputType="text" inputId="last-name">
            Last Name
          </Input>
          <Input isRequired={true} inputType="text" inputId="company-name">
            Company Name
          </Input>
          <Input isRequired={true} inputType="tel" inputId="phone-number">
            Phone Number
          </Input>
          <Input isRequired={true} inputType="text" inputId="adress-line-1">
            Adress Line 1
          </Input>
          <Input isRequired={true} inputType="text" inputId="adress-line-2">
            Adress Line 2
          </Input>
          <Input isRequired={true} inputType="text" inputId="city">
            Suburb/City
          </Input>
          <Select options={countryOptions} isRequired={true} selectId="country">
            Country
          </Select>

          <Input isRequired={true} inputType="text" inputId="state">
            State/Province
          </Input>
          <Input isRequired={true} inputType="text" inputId="zip">
            Zip/Postcode
          </Input>
        </div>
        <Button type="submit">CREATE ACCOUNT</Button>
      </form>
    </section>
  );
}
