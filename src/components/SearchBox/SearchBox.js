import React, { useContext } from "react";
import Input from "../Input/Input";
import { useSearchContext } from "../../context/SearchContext";
import { SearchBoxWrapper } from "./SearchBox.style";
export default React.memo(function SearchBox({ className }) {
  const [input, setSearchInput] = useSearchContext();
  return (
    <SearchBoxWrapper className={className}>
      <Input
        inputValue={input}
        onInputChange={setSearchInput}
        inputId="search"
        inputType="search"
        placeholder="Search"
        autoFocus={true}
      />
    </SearchBoxWrapper>
  );
});
