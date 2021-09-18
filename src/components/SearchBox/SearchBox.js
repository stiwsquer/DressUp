import React, { useContext } from "react";
import Input from "../Input/Input";
import { useSearchContext } from "../../context/SearchContext";
import "./style.scss";
export default React.memo(function SearchBox({ className }) {
  const [input, setSearchInput] = useSearchContext();
  return (
    <div className={className}>
      <Input
        inputValue={input}
        onInputChange={setSearchInput}
        inputId="search"
        inputType="search"
        placeholder="Search"
        autoFocus={true}
      />
    </div>
  );
});
