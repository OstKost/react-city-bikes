import { Action } from 'redux';

export interface IAction extends Action {
  payload?: any;
}

export interface Network {
  id: string;
  name: string;
}

export interface Station {
  id: string;
  name: string;
  free_bikes: number;
  empty_slots: number;
}

export interface INetworkSummary {
  networkName: string;
  freeBikes: number;
}
