import { Action } from 'redux';

export type UpdateSearchTermActionType = {
  search: string;
} & Action<string>;

export type UpdateSearchDataStartActionType = {
  search: string;
} & Action<string>;

export type UpdateSearchDataEndActionType = {
  objectIds: number[];
  success: boolean;
} & UpdateSearchDataStartActionType;

export type UpdateObjectDataStartActionType = {
  objectId: number;
} & Action<string>;

export type UpdateObjectDataEndActionType = {
  success: boolean;
  data: Record<string, unknown> | null;
} & UpdateObjectDataStartActionType;
