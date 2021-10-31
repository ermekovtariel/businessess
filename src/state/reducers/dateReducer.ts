import { ActionType } from '../ActionTypes';
import { Action } from '../actions/dateAction';

const initialState = {
  compnies: [],
  status: '',
};

export const reducer = (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_DATES:
      return {
        ...state,
        compnies: action.payload,
      };
    case ActionType.GET_ALL_DATES_SUCCESS:
      return {
        ...state,
        status: 'success',
      };
    case ActionType.GET_ALL_DATES_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
};
