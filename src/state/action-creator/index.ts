import axios from 'axios';
import { ActionType } from '../ActionTypes';
import { Dispatch } from 'redux';
import { Action } from '../actions/dateAction';

export const getDate = () => {
  try {
    return axios.get(`http://localhost:3001//db.json`).then((res) => {
      return get(res);
    });
  } catch (e) {
    console.log(e);
  }
};

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
