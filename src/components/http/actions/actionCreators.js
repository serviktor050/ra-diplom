import {
  FETCH_SALES_HITS_REQUEST,
  FETCH_SALES_HITS_FAILURE,
  FETCH_SALES_HITS_SUCCESS,
} from "./actionTypes";

export const fetchSalesHitsRequest = () => ({
  type: FETCH_SALES_HITS_REQUEST,
});

export const fetchSalesHitsFailure = (error) => ({
  type: FETCH_SALES_HITS_FAILURE,
  payload: {
    error,
  },
});

export const fetchSalesHitsSuccess = (items) => ({
  type: FETCH_SALES_HITS_SUCCESS,
  payload: {
    items,
  },
});
