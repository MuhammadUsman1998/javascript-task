import {
  SERVICE_GET_REQUEST,
  SERVICE_GET_SUCCESS,
  SERVICE_GET_FAIL,
} from "../../serviceConstant";

export const getServiceReducers = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_GET_REQUEST:
      return { loading: true };
    case SERVICE_GET_SUCCESS:
      return { loading: false, Service: action.payload };
    case SERVICE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
