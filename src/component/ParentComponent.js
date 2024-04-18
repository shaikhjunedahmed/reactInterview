import React, { useState } from 'react'
import '../App.css';
import InputComponent from './InputComponent'
const SampleParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [disabled, setdisabled] = useState(true);

  const handleInputChange = (value) => {
    console.log("vaklue",value)
    setInputValue(value);
    // setIsChecked(!isChecked)
    // setdisabled(!disabled)
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    setdisabled(!disabled)
  };
const handledisableChanged=()=>{
    setdisabled(!disabled)
}
  return (
    <div className='parent-container'>
      <h2>Create Scenario</h2>
      <InputComponent
        inputType="text"
        scenario="create"
        value={inputValue}
        onChange={handleInputChange}
        inputTitle="Text Input"
        holder="Enter text"
        labelStyle={{ fontWeight: 'bold' }}
        errorMessage="This field is required."
        error={!inputValue}
        required
      />

      <InputComponent
        inputType="select"
        scenario="create"
        value={selectedOption}
        onChange={handleSelectChange}
        inputTitle="Select Input"
        handledisableChanged={handledisableChanged}
        labelStyle={{ fontWeight: 'bold' }}
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
      />

      <InputComponent
        inputType="checkbox"
        scenario="create"
        valueischeck={isChecked}
        onChange={handleCheckboxChange}
        inputTitle="Checkbox Input"
        labelStyle={{ fontWeight: 'bold' }}
      />
      <h2>Edit Scenario</h2>
      <InputComponent
        inputTitle="Checkbox Input"
        inputType="text"
        customChangeFunction={handleInputChange}
        value={inputValue}
        holder="enter Text"
      />
      <h2>Disable Scenario</h2>
       <InputComponent
        inputTitle="text Input"
        inputType="text"
        value="disabled value"
        disabled={disabled}
      />
    </div>
  );
};

export default SampleParentComponent;