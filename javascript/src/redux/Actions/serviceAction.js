import {
  SERVICE_GET_REQUEST,
  SERVICE_GET_SUCCESS,
  SERVICE_GET_FAIL,
} from "./Constants/serviceConstant";

import jwtInterceptor from "./jwtInterceptor";

import { SERVER_IP } from "./config.js/.env";
export const getServiceAction = (branchId, salonId) => async (dispatch) => {
  try {
    dispatch({
      type: SERVICE_GET_REQUEST,
    });

    const url = `${SERVER_IP}/api/onlineBookingDetail/&branchId${branchId}&salonId${salonId}`;
    const data = await jwtInterceptor.get(url);

    dispatch({
      type: SERVICE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_GET_FAIL,
      payload: error.response && error.response.data.error,
    });
  }
};
