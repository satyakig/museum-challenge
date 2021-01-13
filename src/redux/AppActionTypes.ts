import { Action } from 'redux';

export type UpdateSearchActionType = {
  search: string;
} & Action<string>;
