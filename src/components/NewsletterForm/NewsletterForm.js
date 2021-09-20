import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { NewsLetterFormWrapper } from "./NewsletterForm.style";

export default React.memo(function NewsletterForm(props) {
  return (
    <NewsLetterFormWrapper>
      <h4>Subscribe to our newsletter</h4>
      <p>Get the latest updates on new products and upcoming sales</p>
      <div>
        <Input
          isRequired={true}
          inputType="email"
          placeholder="Your email adress"
          inputId="email-newsletter"
        />
        <Button>SUBSCRIBE</Button>
      </div>
    </NewsLetterFormWrapper>
  );
});
