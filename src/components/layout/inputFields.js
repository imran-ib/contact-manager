import React from "react";
import classnames from "classnames";

const InpuFields = ({
  name,
  type,
  label,
  placeholder,
  error,
  value,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InpuFields;
