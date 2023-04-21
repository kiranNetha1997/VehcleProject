// vehcle Types Actions
export const getVehclesTypesAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};

// vehcles  ID actions
export const getVehclesIDsAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};

// vehcles Booking action
export const getVehclesBookingsAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading
    }
  };
};
