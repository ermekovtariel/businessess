import { ActionType } from '../ActionTypes';

interface GetAction {
  type: ActionType.GET_ALL_DATES;
  payload?: Object;
}

interface GetActionsSuccess {
  type: ActionType.GET_ALL_DATES_SUCCESS;
  payload?: string;
}
interface GetActionsFiltered {
  type: ActionType.GET_FILTERED_DATES;
  payload?: Object;
}

interface GetActionsError {
  type: ActionType.GET_ALL_DATES_ERROR;
  payload?: string;
}

export type Action =
  | GetAction
  | GetActionsSuccess
  | GetActionsError
  | GetActionsFiltered;
