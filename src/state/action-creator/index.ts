import axios from 'axios';
import { ActionType } from '../ActionTypes';
import { Dispatch } from 'redux';
import { Action } from '../actions/dateAction';
import { API_BASE_URL } from '../../API/API';

export const getDate = (setstate: Function) => {
  try {
    return axios.get(API_BASE_URL).then((res) => {
      setstate(res.data.dates);
      return get(res);
    });
  } catch (e) {
    console.log(e);
  }
};

export const filter = (setstate: Function, url: string) => {
  try {
    return axios.get(url).then((res) => {
      setstate(res.data);
      return get(res);
    });
  } catch (e) {
    console.log(e);
  }
};

export function handleInitialData(setstate: Function) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const date = await Promise.all([getDate(setstate)]);
      return (dispatch: Dispatch<Action>) => {
        get(date);
      };
    } catch (error) {
      console.error(`Error on Promise.all(): ${error}`);
    }
  };
}
export function filterDate(setstate: Function, url: string) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      // const date = await Promise.all([getDate(setstate)]);
      const filterDateA = await Promise.all([filter(setstate, url)]);
      return (dispatch: Dispatch<Action>) => {
        filtered(filterDateA);
        // dispatch({
        //   type: ActionType.GET_ALL_DATES_SUCCESS,
        //   payload: filterDateA,
        // });
        // get(date);
      };
    } catch (error) {
      console.error(`Error on Promise.all(): ${error}`);
    }
  };
}

export const get = (amount: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_DATES,
      payload: amount,
    });
  };
};

export const success = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_DATES_SUCCESS,
      payload: amount,
    });
  };
};

export const error = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_DATES_ERROR,
      payload: amount,
    });
  };
};

export const filtered = (amount: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_FILTERED_DATES,
      payload: amount,
    });
  };
};
