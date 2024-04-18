import React from "react";
import "../App.css";
const InputComponent = ({
  inputType,
  customChangeFunction,
  value,
  valueischeck,
  onChange,
  inputStyle,
  inputTitle,
  disabled,
  holder,
  labelStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  options,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    } else if (customChangeFunction) {
      customChangeFunction(e.target.value);
    }
  };

  const renderInput = () => {
    switch (inputType) {
      case "text":
      case "number":
      case "password":
      case "currency":
        return (
          <input
            type={inputType}
            style={inputStyle}
            placeholder={holder}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
          />
        );
      case "select":
        return (
          <select
            className="custom-input"
            style={inputStyle}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.value}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div>
            {options.map((opt) => (
              <label key={opt.value} style={labelStyle}>
                <input
                  type="radio"
                  value={opt.value}
                  checked={valueischeck === opt.value}
                  onChange={handleChange}
                  disabled={disabled}
                />
                {opt.label}
              </label>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <input
            className="custom-input"
            type="checkbox"
            style={inputStyle}
            checked={valueischeck}
            onChange={handleChange}
            disabled={disabled}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <label className="custom-label" style={labelStyle}>
        {inputTitle}
      </label>
      {renderInput()}
      {error && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default InputComponent;
