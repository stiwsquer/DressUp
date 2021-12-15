import React from 'react';
import { SelectWrapper } from './Select.style';

export default React.memo(
  ({ isRequired, selectId, handleChange, options, placeholder, children }) => (
    <SelectWrapper>
      <label htmlFor={selectId}>{children}</label>

      <select
        placeholder={placeholder}
        name={selectId}
        id={selectId}
        onChange={handleChange}
        required={isRequired}
      >
        {options.map((item) => (
          <option key={item.key} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </SelectWrapper>
  ),
);
