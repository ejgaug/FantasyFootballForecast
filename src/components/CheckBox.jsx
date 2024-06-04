import React from 'react';
import '../CheckBox.css';

const CheckBox = ({ checked, onChange, variant }) => {
  return (
    <label className={`custom-checkbox ${variant}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden-checkbox"
      />
      <span className="custom-checkbox-mark" />
    </label>
  );
};

export default CheckBox;