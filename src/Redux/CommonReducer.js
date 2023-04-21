import INITIAL_STATE from "./IntialState";

import {
  getVehcleTypeReducer,
  getVehcleIdReducer,
  getVehcleBookingReducer
} from "./Reducer";

const reducers = {
  VEHCLETYPE_DATA_START: getVehcleTypeReducer,
  VEHCLETYPE_DATA_SUCCESS: getVehcleTypeReducer,
  VEHCLETYPE_DATA_FAILURE: getVehcleTypeReducer,

  VEHCLE_ID_DATA_START: getVehcleIdReducer,
  VEHCLE_ID_DATA_SUCCESS: getVehcleIdReducer,
  VEHCLE_ID_DATA_FAILURE: getVehcleIdReducer,

  VEHCLE_BOOKING_DATA_START: getVehcleBookingReducer,
  VEHCLE_BOOKING_DATA_SUCCESS: getVehcleBookingReducer,
  VEHCLE_BOOKING_DATA_FAILURE: getVehcleBookingReducer
};
export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
