
// vehcle type reducer
export const getVehcleTypeReducer = (state, payload) => {
  return {
    ...state,
    vehcleTypeData: payload && payload.data && payload.data,
    vehcleTypeMsg: payload && payload.message && payload.message,
    vehcleTypeLoading: payload && payload.loading && payload.loading
  };
};

// vehcle ID reducer
export const getVehcleIdReducer = (state, payload) => {
  return {
    ...state,
    vehcleIdData: payload && payload.data && payload.data,
    vehcleIdMsg: payload && payload.message && payload.message,
    vehcleIdLoading: payload && payload.loading && payload.loading
  };
};

// vehcle BookiId Reducer
export const getVehcleBookingReducer = (state, payload) => {
  return {
    ...state,
    vehcleBookingData: payload && payload.data && payload.data,
    vehcleBookingMsg: payload && payload.message && payload.message,
    vehcleBookingLoading: payload && payload.loading && payload.loading
  };
};
