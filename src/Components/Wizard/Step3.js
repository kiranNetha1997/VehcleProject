import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVehcleID } from "../../Redux/Api";

function Step3({
  vehcleTypeData,
  handleStep,
  inputs,
  setInputs,
  wheelNo,
  setWheelNo,
  setError,
  error
}) {
  const vehcleList = vehcleTypeData?.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputs.wheelName === "6") {
      setWheelNo(0);
    } else if (inputs.wheelName === "4") {
      setWheelNo(1);
    } else if (inputs.wheelName === "2") {
      setWheelNo(2);
    }
  }, [inputs]);

  const vehcleData = vehcleTypeData?.data[wheelNo]?.vehicles;

  const handleNext = () => {
    if (inputs.typeId === "") {
      setError({
        ...error,
        step3Radio: "Please Select Option"
      });
    } else {
      setError({
        ...error,
        step3Radio: ""
      });
      handleStep("next");
      const vehcleId = inputs?.typeId;
      dispatch(getVehcleID(vehcleId));
    }
  };
  const handlePrev = () => {
    handleStep("previous");
  };

  const handlechange = (e) => {
    if (inputs.typeId !== "") {
      setError({
        ...error,
        step3Radio: ""
      });
    }
  };
  return (
    <div>
      <div id="feedback-form">
        <h2 className="header">Type of vehicle</h2>
        <div>
          <div>
            {vehcleData.map((option) => (
              <label key={option.id}>
                <input
                  type="radio"
                  value={option.id}
                  name={option.vehicleTypeId}
                  checked={inputs.typeId === option.id}
                  onChange={(e) => {
                    setInputs({
                      ...inputs,
                      typeId: e.target.value,
                      wheelTypeId: e.target.name
                    });
                    handlechange(e);
                  }}
                />
                {option.name}
              </label>
            ))}
            {error.step3Radio && (
              <p style={{ color: "red" }}>{error.step3Radio}</p>
            )}
          </div>

          <div>
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

export default Step3;
