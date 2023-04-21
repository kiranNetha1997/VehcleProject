import React from "react";
import { useDispatch } from "react-redux";
import { getVehcleBooking } from "../../Redux/Api";

function Step4({
  vehcleIdData,
  handleStep,
  inputs,
  setInputs,
  setError,
  error
}) {
  const dispatch = useDispatch();

  const vehcleModel = vehcleIdData?.data;

  const vehcleName = vehcleModel?.name;
  const vehcleUrl = vehcleModel?.image?.publicURL;
  const vehcleBookId = vehcleModel?.id;
  const handlePrev = () => {
    handleStep("previous");
  };
  const handleNext = () => {
    if (inputs.bookingId === "") {
      setError({
        ...error,
        step4Radio: "Please Select Option"
      });
    } else {
      setError({
        ...error,
        step3Radio: ""
      });
      dispatch(getVehcleBooking(vehcleBookId));
      handleStep("next");
    }
  };
  const handleChange = (e) => {
    if (inputs.bookingId === "") {
      setError({
        ...error,
        step4Radio: "Please Select Option"
      });
    } else {
      setError({
        ...error,
        step3Radio: ""
      });
    }
  };
  return (
    <div>
      <div id="feedback-form">
        <h2 className="header">Vehcle Details</h2>
        <div>
          <input
            type="radio"
            value={vehcleBookId}
            onChange={(e) => {
              setInputs({
                ...inputs,
                bookingId: e.target.value
              });
              handleChange(e);
            }}
          />
          <h3>{vehcleName}</h3>

          <div>
            <div>
              <img
                src={vehcleUrl}
                alt="img"
                style={{ width: "250px", height: "200px" }}
              />
            </div>
            {error.step4Radio && (
              <p style={{ color: "red" }}>{error.step4Radio}</p>
            )}
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

export default Step4;
