import axios from "axios";
import * as Constants from "./Constants";
import {
  getVehclesTypesAction,
  getVehclesIDsAction,
  getVehclesBookingsAction
} from "./Actions";

const headers = {
  "Content-Type": "application/json"
};

// Vehcle Type API
export const getVehcleTypes = () => async (dispatch) => {
  dispatch(
    getVehclesTypesAction(Constants.VEHCLETYPE_DATA_START, {}, "", true)
  );
  var config = {
    method: "get",
    url: "https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes",
    headers: headers
  };
  await axios(config)
    .then((response) => {
      dispatch(
        getVehclesTypesAction(
          Constants.VEHCLETYPE_DATA_SUCCESS,
          response.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getVehclesTypesAction(
              Constants.VEHCLETYPE_DATA_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getVehclesTypesAction(
              Constants.VEHCLETYPE_DATA_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getVehclesTypesAction(
              Constants.VEHCLETYPE_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

/// Vehcle ID API

export const getVehcleID = (vehicleId) => async (dispatch) => {
  dispatch(getVehclesIDsAction(Constants.VEHCLE_ID_DATA_START, {}, "", true));

  var config = {
    method: "get",
    url: `https://octalogic-test-frontend.vercel.app/api/v1/vehicles/{${vehicleId}}`,
    headers: headers,
    body: vehicleId
  };
  console.log("apiID", vehicleId);

  await axios(config)
    .then((response) => {
      dispatch(
        getVehclesIDsAction(
          Constants.VEHCLE_ID_DATA_SUCCESS,
          response.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getVehclesIDsAction(
              Constants.VEHCLE_ID_DATA_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getVehclesIDsAction(
              Constants.VEHCLE_ID_DATA_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getVehclesIDsAction(
              Constants.VEHCLE_ID_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

/// Vehcle Bookings

export const getVehcleBooking = (vehicleId) => async (dispatch) => {
  dispatch(
    getVehclesBookingsAction(Constants.VEHCLE_BOOKING_DATA_START, {}, "", true)
  );
  var config = {
    method: "get",
    url: `https://octalogic-test-frontend.vercel.app/api/v1/bookings/${vehicleId}`,
    headers: headers
  };
  await axios(config)
    .then((response) => {
      dispatch(
        getVehclesBookingsAction(
          Constants.VEHCLE_BOOKING_DATA_SUCCESS,
          response.data,
          "Successful",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getVehclesBookingsAction(
              Constants.VEHCLE_BOOKING_DATA_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getVehclesBookingsAction(
              Constants.VEHCLE_BOOKING_DATA_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getVehclesBookingsAction(
              Constants.VEHCLE_BOOKING_DATA_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
