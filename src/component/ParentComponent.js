import React, { useState } from "react";
import "../App.css";
import InputComponent from "./InputComponent";
const SampleParentComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [radioEnable, setradioEnable] = useState(false);
  const [radioDisable, setradioDisable] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    setdisabled(!disabled);
  };
  const handledisableChanged = () => {
    setdisabled(!disabled);
  };
  const handleEnable = (e) => {
    if (e.target.value === "enable") {
      setradioEnable(true);
      setradioDisable(false);
    } else if (e.target.value == "disable") {
      setradioEnable(false);
      setradioDisable(true);
    }
  };
  return (
    <div className="parent-container">
      <h2>Create Scenario</h2>
      <InputComponent
        inputType="select"
        scenario="create"
        value={selectedOption}
        onChange={handleSelectChange}
        inputTitle="Select Input"
        handledisableChanged={handledisableChanged}
        labelStyle={{ fontWeight: "bold" }}
        options={[
          { label: "text input", value: "selectInput" },
          { label: "select checkbox", value: "checkbox" },
          { label: "number input", value: "numberInput" },
          { label: "passWord input", value: "passWordInput" },
        ]}
      />
      {selectedOption == "selectInput" ? (
        <InputComponent
          inputType="text"
          scenario="create"
          value={inputValue}
          onChange={handleInputChange}
          inputTitle="Text Input"
          holder="Enter text"
          labelStyle={{ fontWeight: "bold" }}
          errorMessage="This field is required."
          error={!inputValue}
          required
        />
      ) : selectedOption == "checkbox" ? (
        <InputComponent
          inputType="checkbox"
          scenario="create"
          valueischeck={isChecked}
          onChange={handleCheckboxChange}
          inputTitle="Checkbox Input"
          labelStyle={{ fontWeight: "bold" }}
        />
      ) : selectedOption == "numberInput" ? (
        <InputComponent
          inputType="number"
          scenario="create"
          value={inputValue}
          onChange={handleInputChange}
          inputTitle="Text Input"
          holder="Enter text"
          labelStyle={{ fontWeight: "bold" }}
          errorMessage="This field is required."
          error={!inputValue}
          required
        />
      ) : selectedOption == "passWordInput" ? (
        <InputComponent
          inputType="password"
          scenario="create"
          value={inputValue}
          onChange={handleInputChange}
          inputTitle="Text Input"
          holder="Enter text"
          labelStyle={{ fontWeight: "bold" }}
          errorMessage="This field is required."
          error={!inputValue}
          required
        />
      ) : (
        <InputComponent
          inputType="text"
          scenario="create"
          value={inputValue}
          onChange={handleInputChange}
          inputTitle="Text Input"
          holder="Enter text"
          labelStyle={{ fontWeight: "bold" }}
          errorMessage="This field is required."
          error={!inputValue}
          required
        />
      )}
      <div style={{ marginTop: "30px", display: "flex" }}>
        <label style={{ paddingRight: "30px" }}>Edit Enable</label>
        <input
          type="radio"
          onChange={handleEnable}
          value="enable"
          checked={radioEnable}
        />
        <label style={{ paddingRight: "30px", marginLeft: "50px" }}>
          Edit Disable
        </label>
        <input
          type="radio"
          onChange={handleEnable}
          checked={radioDisable}
          value="disable"
        />
      </div>
      {radioEnable && (
        <>
          <h2>Edit Scenario</h2>
          {selectedOption == "selectInput" ? (
            <InputComponent
              inputType="text"
              scenario="create"
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="Edit Text Input"
              holder="Enter text"
              labelStyle={{ fontWeight: "bold" }}
              errorMessage="This field is required."
              error={!inputValue}
              required
            />
          ) : selectedOption == "checkbox" ? (
            <InputComponent
              inputType="checkbox"
              scenario="create"
              valueischeck={isChecked}
              onChange={handleCheckboxChange}
              inputTitle="Edit Checkbox Input"
              labelStyle={{ fontWeight: "bold" }}
            />
          ) : selectedOption == "numberInput" ? (
            <InputComponent
              inputTitle="Edit numberInput Input"
              inputType="number"
              customChangeFunction={handleInputChange}
              value={inputValue}
              holder="enter Text"
            />
          ) : selectedOption == "passWordInput" ? (
            <InputComponent
              inputType="password"
              scenario="create"
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="Text Input"
              holder="Enter text"
              labelStyle={{ fontWeight: "bold" }}
              errorMessage="This field is required."
              error={!inputValue}
              required
            />
          ) : (
            <InputComponent
              inputType="text"
              scenario="create"
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="Text Input"
              holder="Enter text"
              labelStyle={{ fontWeight: "bold" }}
              errorMessage="This field is required."
              error={!inputValue}
              required
            />
          )}
        </>
      )}
      {radioDisable && (
        <>
          <h2>Disable Scenario</h2>
          {selectedOption == "selectInput" ? (
            <InputComponent
              disabled={true}
              inputType="text"
              scenario="create"
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="Edit Text Input"
              holder="Enter text"
              labelStyle={{ fontWeight: "bold" }}
              errorMessage="This field is required."
              error={!inputValue}
              required
            />
          ) : selectedOption == "checkbox" ? (
            <InputComponent
              disabled={true}
              inputType="checkbox"
              scenario="create"
              valueischeck={isChecked}
              onChange={handleCheckboxChange}
              inputTitle="Edit Checkbox Input"
              labelStyle={{ fontWeight: "bold" }}
            />
          ) : selectedOption == "numberInput" ? (
            <InputComponent
              inputTitle="Edit numberInput Input"
              inputType="number"
              customChangeFunction={handleInputChange}
              value={inputValue}
              holder="enter Text"
              disabled={true}
            />
          ) : selectedOption == "passWordInput" ? (
            <InputComponent
              inputType="password"
              scenario="create"
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="Text Input"
              holder="Enter text"
              labelStyle={{ fontWeight: "bold" }}
              errorMessage="This field is required."
              error={!inputValue}
              required
              disabled={true}
            />
          ) : (
            <InputComponent
              inputType="text"
              scenario="create"
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="Text Input"
              holder="Enter text"
              labelStyle={{ fontWeight: "bold" }}
              errorMessage="This field is required."
              error={!inputValue}
              required
              disabled={true}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SampleParentComponent;
