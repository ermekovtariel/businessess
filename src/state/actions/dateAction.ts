import { ActionType } from '../ActionTypes';

export const RECEIVE_DATA = 'RECEIVE_DATA';

interface GetAction {
  type: ActionType.GET_ALL_DATES;
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

export type Action = GetAction | GetActionsSuccess | GetActionsError;
