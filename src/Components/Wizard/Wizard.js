import React, { useState, useEffect } from "react";
import "./wizard.css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useDispatch, useSelector } from "react-redux";
import { getVehcleTypes, getVehcleID, getVehcleBooking } from "../../Redux/Api";

function Wizard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehcleTypes());
    dispatch(getVehcleBooking("31765c4c-2606-4e1b-a613-7866212a86b6"));
  }, [dispatch]);

  // Vehcle type Data from Redux
  const vehcleTypeData = useSelector((state) => state.vehcleTypeData);
  const vehcleTypeMsg = useSelector((state) => state.vehcleTypeMsg);
  const vehcleTypeLoading = useSelector((state) => state.vehcleTypeLoading);

  // vehcle ID data from Redux

  const vehcleIdData = useSelector((state) => state.vehcleIdData);
  const vehcleIdMsg = useSelector((state) => state.vehcleIdMsg);
  const vehcleIdLoading = useSelector((state) => state.vehcleIdLoading);

  // vehcle BOOKINGS data from Redux

  const vehcleBookingData = useSelector((state) => state.vehcleBookingData);
  const vehcleBookingMsg = useSelector((state) => state.vehcleBookingMsg);
  const vehcleBookingLoading = useSelector(
    (state) => state.vehcleBookingLoading
  );
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    wheelID: "",
    wheelName: "",
    typeId: "",
    wheelTypeId: "",
    bookingId: "",
    startDate: "",
    endDate: ""
  });
  const [step, setStep] = useState(1);

  const [flow, setFlow] = useState("");

  const [error, setError] = useState({
    fisrtnameError: "",
    lastNameError: "",
    step2Radio: "",
    step3Radio: "",
    step4Radio: "",
    startdateErr: "",
    endDateErr: ""
  });
  const [wheelNo, setWheelNo] = useState(0);

  const handleStep = (value) => {
    if (value === "next") {
      setFlow(value);
      setStep(step + 1);
    } else {
      setFlow("previous");
      setStep(step - 1);
    }
  };

  return (
    <div>
      <div>
        {step === 1 && (
          <Step1
            handleStep={handleStep}
            inputs={inputs}
            setInputs={setInputs}
            error={error}
            setError={setError}
          />
        )}
        {step === 2 && (
          <Step2
            //  onSubmit={this.nextPage}
            inputs={inputs}
            setInputs={setInputs}
            handleStep={handleStep}
            vehcleTypeData={vehcleTypeData}
            wheelNo={wheelNo}
            setWheelNo={setWheelNo}
            error={error}
            setError={setError}
          />
        )}
        {step === 3 && (
          <Step3
            inputs={inputs}
            setInputs={setInputs}
            vehcleTypeData={vehcleTypeData}
            handleStep={handleStep}
            wheelNo={wheelNo}
            setWheelNo={setWheelNo}
            error={error}
            setError={setError}
          />
        )}
        {step === 4 && (
          <Step4
            vehcleIdData={vehcleIdData}
            handleStep={handleStep}
            inputs={inputs}
            setInputs={setInputs}
            error={error}
            setError={setError}
          />
        )}
        {step === 5 && (
          <Step5
            vehcleBookingData={vehcleBookingData}
            setInputs={setInputs}
            inputs={inputs}
            handleStep={handleStep}
            error={error}
            setError={setError}
            error={error}
            setError={setError}
          />
        )}
      </div>
    </div>
  );
}

export default Wizard;

// how to access array of array
