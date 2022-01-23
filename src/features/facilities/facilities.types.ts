import {
  CREATE_FACILITY,
  GET_FACILITIES,
  UPDATE_FACILITY,
  DELETE_FACILITY,
  GET_FACILITY_BY_ID,
  LOAD_MOCK_DATA,
  MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL,
} from './facilities.actionTypes';

export enum FacilityTypes {
  range = 'range',
  indoor = 'indoor',
}
export enum CreateOrUpdateModalStatus {
  close = 'close',
  update = 'update',
  create = 'create',
}
export interface Facility {
  id: string | number;
  createdAt: string;
  name: string;
  type: string;
  address: string;
}
export interface FacilityPayload {
  name: string;
  type: string;
  address: string;
}

export interface FacilitiesList {
  results: Facility[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface DataState {
  facilities: FacilitiesList;
  facility: Facility;
}
export interface LoadingState {
  fetchFacilities: boolean;
  createFacility: boolean;
  updateFacility: boolean;
  getFacilityById: boolean;
  deleteFacilityById: boolean;
}
export interface ErrorsState {
  fetchFacilities: string;
  createFacility: string;
  updateFacility: string;
  getFacilityById: string;
  deleteFacilityById: string;
}
export interface ModalsState {
  openOrUpdateFacility: string;
  deleteFacility: boolean;
}
export interface LocalState {
  loading: LoadingState;
  errors: ErrorsState;
  modals: ModalsState;
  selectedItemId: string | undefined;
}
export interface FacilitiesState {
  data: DataState;
  local: LocalState;
}

export interface ManageDeleteModal {
  type: typeof MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL;
  itemId?: string;
  toggleValue: boolean;
}
export interface OpenCreateOrUpdateModal {
  type: typeof MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL;
  id?: string;
  status: string;
}
export interface LoadMockDataRequest {
  type: typeof LOAD_MOCK_DATA.request;
  data: Facility[];
}
export interface CreateFacilityRequest {
  type: typeof CREATE_FACILITY.request;
  body: FacilityPayload;
}
export interface GetFacilitiesRequest {
  type: typeof GET_FACILITIES.request;
  page: string;
  limit: string;
  search: string;
  facilityType: string;
}

export interface UpdateFacilityRequest {
  type: typeof UPDATE_FACILITY.request;
  id: string;
  body: Facility;
}
export interface DeleteFacilitieRequest {
  type: typeof DELETE_FACILITY.request;
  id: string;
}
export interface GetFacilityByIdRequest {
  type: typeof GET_FACILITY_BY_ID.request;
  id: string;
}
export interface getFacilitiesSuccess {
  type: typeof CREATE_FACILITY.success;
  facilitiesList: FacilitiesList;
}
export interface CreateFacilitySuccess {
  type: typeof CREATE_FACILITY.success;
  data: Facility;
}

export type FacilitiesActions = CreateFacilitySuccess &
  CreateFacilityRequest &
  GetFacilitiesRequest &
  UpdateFacilityRequest &
  DeleteFacilitieRequest &
  GetFacilityByIdRequest &
  LoadMockDataRequest &
  getFacilitiesSuccess &
  OpenCreateOrUpdateModal &
  LoadMockDataRequest &
  ManageDeleteModal;
