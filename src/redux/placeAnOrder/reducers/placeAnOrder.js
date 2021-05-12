import {
  PLACE_AN_ORDER_REQUEST,
  PLACE_AN_ORDER_FAILURE,
  PLACE_AN_ORDER_SUCCESS,
  PLACE_AN_ORDER_INITIAL_STATE,
} from "../actions/actionTypes";

const initialState = {
  response: null,
  loading: false,
  error: null,
};

export default function placeAnOrderReducer(state = initialState, action) {
  switch (action.type) {
    case PLACE_AN_ORDER_REQUEST:
      return {
        ...state,
        response: null,
        loading: true,
        error: null,
      };
    case PLACE_AN_ORDER_FAILURE:
      return {
        ...state,
        response: null,
        loading: false,
        error: action.payload.error,
      };
    case PLACE_AN_ORDER_SUCCESS:
      console.log(action.payload.status);
      return {
        ...state,
        response: action.payload.status,
        loading: false,
        error: null,
      };
    case PLACE_AN_ORDER_INITIAL_STATE:
      return { ...initialState };
    default:
      return state;
  }
}
