import React from "react";

function Step5({
  vehcleBookingData,
  setInputs,
  inputs,
  handleStep,
  setError,
  error
}) {
  const bookingDetils = vehcleBookingData?.data;

  const DateFormat = (value) => {
    let yyyy = value.split("-")[0];
    let mm = value.split("-")[1];
    let dd = value.split("-")[2];
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = () => {
    if (inputs.startDate === "") {
      setError({
        ...error,
        startdateErr: "Please Select Start Date"
      });
    }
    if (inputs.endDate === "") {
      setError({
        ...error,
        endDateErr: "Please Select End Date"
      });
    } else {
      alert("Form was submitted Thanks You : " + `${inputs.firstName}`);
      window.location.href = "/";
    }
  };

  const handleChange = () => {
    if (inputs.startDate !== "") {
      setError({
        ...error,
        startdateErr: ""
      });
    }
    if (inputs.endDate !== "") {
      setError({
        ...error,
        endDateErr: ""
      });
    }
  };
  return (
    <div id="feedback-form">
      <center>
        <h3>Date Range Picker</h3>
        <div>
          {bookingDetils?.map((each) => (
            <div>
              <h2>StartDate : </h2>
              <input
                type="date"
                min={DateFormat(each?.endDate.slice(0, 10))}
                value={
                  inputs.startDate === ""
                    ? DateFormat(each?.endDate.slice(0, 10))
                    : inputs.startDate
                }
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    startDate: e.target.value
                  });
                  handleChange(e);
                }}
              />
              {error.startdateErr && (
                <p style={{ color: "red" }}>{error.startdateErr}</p>
              )}
              <div>
                <h2>End Date: </h2>
                <input
                  type="date"
                  value={
                    inputs.endDate === "" ? inputs.startDate : inputs.endDate
                  }
                  onChange={(e) => {
                    setInputs({
                      ...inputs,
                      endDate: e.target.value
                    });
                    handleChange(e);
                  }}
                />
                {error.endDateErr && (
                  <p style={{ color: "red" }}>{error.endDateErr}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="prevbtn" onClick={handleStep}>
          Prev
        </button>
        <button className="nxtbtn" onClick={handleSubmit}>
          submit
        </button>
      </center>
    </div>
  );
}

export default Step5;
