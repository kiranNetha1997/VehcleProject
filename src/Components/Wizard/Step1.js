import React from "react";

function Step1({
  handleStep,
  inputs,
  setInputs,
  error,
  setError
  // handleOnChange
}) {
  const nextHandleStep1 = () => {
    if (inputs.firstName === "") {
      setError((prev) => {
        return { ...prev, fisrtnameError: "Please Enter First name" };
      });
    }
    if (inputs.lastName === "") {
      setError((prev) => {
        return { ...prev, lastNameError: "Please Enter Last name" };
      });
    } else {
      handleStep("next");
    }
  };

  const handleOnChange = (e) => {
    if (inputs.firstName === "") {
      setError((prev) => {
        return { ...prev, fisrtnameError: "Please Enter First name" };
      });
    } else {
      setError((prev) => {
        return { ...prev, fisrtnameError: "" };
      });
    }
    if (inputs.lastName === "") {
      setError((prev) => {
        return { ...prev, lastNameError: "Please Enter Last name" };
      });
    } else {
      setError((prev) => {
        return { ...prev, lastNameError: "" };
      });
    }
  };
  return (
    <div>
      <div id="feedback-form">
        <h2 className="header">Personal Details</h2>
        <div>
          <div>
            <input
              type="text"
              name="Firstname"
              placeholder="FirstName"
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  firstName: e.target.value
                });
                handleOnChange(e);
              }}
              value={inputs.firstName}></input>
            {error.fisrtnameError && (
              <p style={{ color: "red" }}>{error.fisrtnameError}</p>
            )}
            <input
              type="text"
              name="Lastname"
              placeholder="LastName"
              value={inputs.lastName}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  lastName: e.target.value
                });
                handleOnChange();
              }}></input>
            {error.lastNameError && (
              <p style={{ color: "red" }}>{error.lastNameError}</p>
            )}
            <button type="submit" onClick={nextHandleStep1}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
