import React from "react";
import '../App.css';
const InputComponent = ({
  inputType,
  scenario,
  customChangeFunction,
  value,
  valueischeck,
  onChange,
  inputStyle,
  inputTitle,
  required,
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
    }
    else if(customChangeFunction){
        customChangeFunction(e.target.value)
}
  };

  const renderInput = () => {
    switch (inputType) {
      case 'text':
      case 'number':
      case 'password':
      case 'currency':
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
      case 'select':
        return (
          <select
          className="custom-input"
            style={inputStyle}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} onClick={(e)=>console.log("eee",e)}>
                {opt.value}
                {console.log(opt,"opt")}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div>
            {options.map((opt) => (
                <label key={opt.value} style={labelStyle}>
                  {console.log(opt)}
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
      case 'checkbox':
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
      <label className="custom-label" style={labelStyle}>{inputTitle}</label>
      {renderInput()}
      {error && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
};

export default InputComponent;

// function InputComponent({
//   inputTitle,
//   inputStyle,
//   required,
//   disable,
//   holder,
//   labelStyle,
//   errmsg,
//   error,
//   minLength,
//   maxLength,
//   type,
//   options,
//   value,
//   currency,
//   pattern,
//   customchangeFunction,
// }) {
//     const handleChange=(e)=>{
//         console.log(e,"eeee")
// const newValue=e.target.value
// console.log(newValue)
// if(customchangeFunction){
//     customchangeFunction(newValue)
// }
//     }
//   const renderInput = () => {
//     console.log(type,"type")
//     switch (type) {
//       case "select":
//         return (
//           <select
//             styles={inputStyle}
//             disabled={disable}
//             onChange={handleChange}
//             value={value}
//           >
//             {options.map((option) => {
//               <option key={option.value} value={option.value}>
//                 {console.log(option,"opt")}
//                 {option.label}
//               </option>;
//             })}
//           </select>
//         );
//       case "checkbox":
//         return (
//           <input
//             type="text"
//             style={inputStyle}
//             disabled={disable}
//             onChange={handleChange}
//             checked={value}
//           ></input>
//         );
//         case "currency":
//             return (
//               <input
//                 type="text"
//                 style={inputStyle}
//                 disabled={disable}
//                 onChange={handleChange}
//                 value={value}
//                 placeholder={holder}
//                 curr
//               ></input>
//             );
//             case "default":
//             return(
//                 <input
//                 type={type}
//                 style={inputStyle}
//                 disabled={disable}
//                 onChange={handleChange}
//                 value={value}
//                 placeholder={holder}
//                 pattern={pattern}
//                 minLength={minLength}
//                 maxLength={maxLength}
//                 required={required}
//                 ></input>
//             )
//     }
//   };

//   return (
//     <div>
//       <label>{inputTitle}</label>
//       {renderInput()}
//     </div>
//   );
// }

// export default InputComponent;
