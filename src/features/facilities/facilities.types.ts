import {
  CREATE_FACILITIE,
  GET_FACILITIES,
  UPDATE_FACILITIE,
  DELETE_FACILITIE,
  GET_FACILITIE_BY_ID,
} from './facilities.actionTypes';

enum FacilitieType {
  range = 'range',
  indoor = 'indoor',
}

export interface Facilitie {
  id: string;
  createdAt: string;
  name: string;
  type: FacilitieType;
  address: string;
}

export interface FacilitiesList {
  results: Facilitie[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface DataState {
  facilities: FacilitiesList;
  facilitie: Facilitie | {};
}
export interface LoadingState {
  fetchFacilities: boolean;
  createFacilitie: boolean;
  updateFacilitie: boolean;
  getFacilitieById: boolean;
  deleteFacilitieById: boolean;
}
export interface ErrorsState {
  fetchFacilities: string;
  createFacilitie: string;
  updateFacilitie: string;
  getFacilitieById: string;
  deleteFacilitieById: string;
}
export interface LocalState {
  loading: LoadingState;
  errors: ErrorsState;
}
export interface FacilitiesState {
  data: DataState;
  local: LocalState;
}

export interface CreateFacilitieRequest {
  type: typeof CREATE_FACILITIE.request;
  body: Facilitie;
}
export interface GetFacilitiesRequest {
  type: typeof GET_FACILITIES.request;
  page: string;
}

export interface UpdateFacilitieRequest {
  type: typeof UPDATE_FACILITIE.request;
  id: string;
  body: Facilitie;
}
export interface DeleteFacilitieRequest {
  type: typeof DELETE_FACILITIE.request;
  id: string;
}
export interface GetFacilitieByIdRequest {
  type: typeof GET_FACILITIE_BY_ID.request;
  id: string;
}
export interface getFacilitiesSuccess {
  type: typeof CREATE_FACILITIE.success;
  facilitiesList: FacilitiesList;
}
export interface CreateFacilitieSuccess {
  type: typeof CREATE_FACILITIE.success;
  data: Facilitie;
}

export type FacilitiesActions = CreateFacilitieSuccess &
  CreateFacilitieRequest &
  GetFacilitiesRequest &
  UpdateFacilitieRequest &
  DeleteFacilitieRequest &
  GetFacilitieByIdRequest &
  getFacilitiesSuccess;
