import React from "react";
import "./wizard.css";

function Step2({
  vehcleTypeData,
  handleStep,
  inputs,
  setInputs,
  wheelNo,
  setWheelNo,
  error,
  setError
}) {
  const radioData = vehcleTypeData?.data;

  const handleNext = () => {
    if (inputs.wheelID === "") {
      setError({
        ...error,
        step2Radio: "Please Select Option"
      });
    } else {
      setError({
        ...error,
        step2Radio: ""
      });
      handleStep("next");
    }
  };
  const handlePrev = () => {
    handleStep("previous");
  };

  const handleChange = () => {
    if (inputs.wheelID !== "") {
      setError({
        ...error,
        step2Radio: ""
      });
    }
  };
  return (
    <div>
      <div id="feedback-form">
        <h2 className="header">Number of wheels</h2>
        <div>
          <div>
            <div className="step2Radio">
              {radioData?.map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    value={option?.id}
                    name={option?.wheels}
                    checked={option.id === inputs.wheelID}
                    onChange={(e) => {
                      setInputs({
                        ...inputs,
                        wheelID: e.target.value,
                        wheelName: e.target.name
                      });
                      handleChange(e);
                    }}
                  />
                  {option.wheels} wheeler
                </label>
              ))}
              {error.step2Radio && (
                <p style={{ color: "red" }}>{error.step2Radio}</p>
              )}
            </div>
            <button className="prevbtn" onClick={handlePrev}>
              Prev
            </button>
            <button className="nxtbtn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
