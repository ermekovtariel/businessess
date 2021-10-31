import { ActionType } from '../ActionTypes';
// import { Action } from '../actions/dateAction';

const initialState = {
  companies: [],
  filter: [],
  status: '',
};

interface GetAction {
  type: ActionType.GET_ALL_DATES;
  payload?: Object;
}
interface filtered {
  type: ActionType.GET_FILTERED_DATES;
  payload?: Object;
}

interface GetActionsSuccess {
  type: ActionType.GET_ALL_DATES_SUCCESS;
  payload?: string;
}

interface GetActionsError {
  type: ActionType.GET_ALL_DATES_ERROR;
  payload?: string;
}

export type Action = GetAction | GetActionsSuccess | GetActionsError | filtered;

export const reducer = (state: Object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_DATES:
      return {
        ...state,
        compnies: action.payload,
      };
    case ActionType.GET_FILTERED_DATES:
      return {
        ...state,
        filter: action.payload,
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
