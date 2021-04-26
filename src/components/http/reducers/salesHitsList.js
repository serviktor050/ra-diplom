import {
  FETCH_SALES_HITS_REQUEST,
  FETCH_SALES_HITS_FAILURE,
  FETCH_SALES_HITS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function salesHitsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SALES_HITS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SALES_HITS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error: error,
      };
    case FETCH_SALES_HITS_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
