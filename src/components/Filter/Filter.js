import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Фільтр за змістом
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
