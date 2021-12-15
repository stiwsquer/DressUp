import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import {
  NewCustomerInfoInner,
  NewCustomerInfoOuter,
} from './NewCustomerInfo.style';

export default React.memo(() => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/register');
  };
  return (
    <NewCustomerInfoOuter>
      <NewCustomerInfoInner>
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
      </NewCustomerInfoInner>
    </NewCustomerInfoOuter>
  );
});
