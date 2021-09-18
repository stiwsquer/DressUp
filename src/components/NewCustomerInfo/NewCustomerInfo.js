import Button from "../Button/Button";
import React from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";

export default React.memo(function NewCustomerInfo() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/register");
  };
  return (
    <div className="new-customer-info">
      <div className="new-customer-info-wrapper">
        <h3>New Customer?</h3>
        <p>Create an account with us and you&apos;ll be able to:</p>
        <ul>
          <li>Check out faster</li>
          <li>Save multiple shipping addresses</li>
          <li>Access your order history</li>
          <li>Track new orders</li>
          <li>Save items to your Wish List</li>
        </ul>
        <Button onClick={handleClick}>CREATE ACCOUNT</Button>
      </div>
    </div>
  );
});
